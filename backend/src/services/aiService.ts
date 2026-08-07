import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import { knowledgeBaseService } from './knowledgeBaseService.js';

dotenv.config();

const groqApiKey = process.env.GROQ_API_KEY || '';
const groqModel = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

let groq: Groq | null = null;
if (groqApiKey && groqApiKey !== 'your_groq_api_key_here') {
  try {
    groq = new Groq({ apiKey: groqApiKey });
  } catch (err) {
    console.warn('Groq client initialization warning:', err);
  }
}

export interface ClinicalTriageResponse {
  content: string;
  confidence: number;
  recommendations: string[];
  warnings: string[];
  sources: string[];
  followUp: string;
}

const SYSTEM_HEALTH_PROMPT = `
You are "Swasthya Sathi AI" (ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ AI), a trusted, empathetic, and evidence-based clinical health assistant for Odisha, India.

Your core mission is to provide accurate preliminary health guidance, symptom analysis, and direct users to verified Odisha health facilities (AIIMS BBSR, SCB Cuttack, Capital Hospital, CHCs/DHHs) or emergency services (108 Ambulance, 104 Health Helpline).

Clinical Rules & Safety Guardrails:
1. Always maintain an empathetic, reassuring tone.
2. Emphasize that your guidance does NOT replace in-person doctor diagnosis.
3. For acute danger signs (chest pain, stroke signs, extreme bleeding, convulsion, snake bite, severe breathlessness), instruct IMMEDIATE 108 ambulance dispatch.
4. Provide structured guidance:
   - Clinical Assessment summary
   - Immediate Home Recommendations (hydration, ORS, Paracetamol for fever; strictly advise against NSAIDs like Ibuprofen if dengue is suspected)
   - Red Flag Symptoms / Warning Signs requiring hospital visit
   - Official sources (Odisha Public Health Directorate, NVBDCP, WHO, ICMR)
5. Support response in the requested language (Odia, Hindi, or English).

Always format your response as valid JSON with the following schema:
{
  "content": "Detailed empathetic answer in the user's language explaining symptoms, care, and guidance",
  "confidence": 0.95,
  "recommendations": ["Recommendation 1", "Recommendation 2", "Recommendation 3"],
  "warnings": ["Red flag symptom 1", "Red flag symptom 2"],
  "sources": ["Odisha Health Department", "WHO Guidelines", "ICMR Protocol"],
  "followUp": "Helpful next question or suggestion"
}
`;

export class AIService {
  static async generateHealthTriage(
    userMessage: string,
    language: 'en' | 'hi' | 'or' = 'en',
    chatHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []
  ): Promise<ClinicalTriageResponse> {
    try {
      const { langGraphApp } = await import('./langGraphService.js');
      const { HumanMessage, AIMessage } = await import('@langchain/core/messages');

      // Convert history to LangChain messages
      const lcMessages = chatHistory.slice(-4).map(m => 
        m.role === 'user' ? new HumanMessage(m.content) : new AIMessage(m.content)
      );

      const result = await langGraphApp.invoke({
        userMessage,
        language,
        messages: lcMessages
      });

      if (result.finalResponse) {
        return result.finalResponse;
      }

      return this.generateFallbackResponse(userMessage, language);
    } catch (error) {
      console.error('LangGraph pipeline error:', error);
      return this.generateFallbackResponse(userMessage, language);
    }
  }

  private static generateFallbackResponse(
    userMessage: string,
    language: 'en' | 'hi' | 'or'
  ): ClinicalTriageResponse {
    if (language === 'or') {
      return {
        content: `ମୁଁ ବର୍ତ୍ତମାନ ଯାନ୍ତ୍ରିକ ତ୍ରୁଟିର ସମ୍ମୁଖୀନ ହେଉଛି ଏବଂ ଆପଣଙ୍କ ଲକ୍ଷଣଗୁଡ଼ିକର ବିଶ୍ଳେଷଣ କରିପାରୁନାହିଁ। ଦୟାକରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ ବା ୧୦୪ କୁ କଲ୍ କରନ୍ତୁ।`,
        confidence: 0.1,
        recommendations: ['ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ', 'ଅଧିକ ସହାୟତା ପାଇଁ ୧୦୪ କୁ କଲ୍ କରନ୍ତୁ'],
        warnings: ['ଏହା କେବଳ ଏକ ସାଧାରଣ ସୂଚନା'],
        sources: [],
        followUp: 'ଆପଣ ନିକଟସ୍ଥ ଡାକ୍ତରଖାନା ଏବଂ ବେଡ୍ ସ୍ଥିତି ଜାଣିବାକୁ ଚାହାଁନ୍ତି କି?',
      };
    }

    if (language === 'hi') {
      return {
        content: `मैं वर्तमान में तकनीकी समस्याओं का सामना कर रहा हूँ और आपके लक्षणों का विश्लेषण करने में असमर्थ हूँ। कृपया डॉक्टर से परामर्श लें या 104 पर कॉल करें।`,
        confidence: 0.1,
        recommendations: ['डॉक्टर से परामर्श लें', 'अधिक सहायता के लिए 104 पर कॉल करें'],
        warnings: ['यह केवल एक सामान्य जानकारी है'],
        sources: [],
        followUp: 'क्या आप निकटतम अस्पताल में बिस्तर की उपलब्धता देखना चाहते हैं?',
      };
    }

    return {
      content: `I am currently experiencing technical difficulties and cannot analyze your symptoms. Please consult a healthcare professional or call the 104 health helpline.`,
      confidence: 0.1,
      recommendations: ['Consult a doctor', 'Call 104 for health assistance'],
      warnings: ['This is a generic error message'],
      sources: [],
      followUp: 'Would you like to find the nearest government hospital in your district?',
    };
  }
}
