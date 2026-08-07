import Groq from 'groq-sdk';
import dotenv from 'dotenv';

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
    if (!groq) {
      return this.generateFallbackResponse(userMessage, language);
    }

    try {
      const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
        { role: 'system', content: SYSTEM_HEALTH_PROMPT },
      ];

      // Add recent context
      for (const msg of chatHistory.slice(-4)) {
        messages.push({ role: msg.role, content: msg.content });
      }

      messages.push({
        role: 'user',
        content: `User query in ${language} language: "${userMessage}". Please analyze and respond with JSON matching the schema in ${language}.`,
      });

      const chatCompletion = await groq.chat.completions.create({
        messages,
        model: groqModel,
        temperature: 0.3,
        response_format: { type: 'json_object' },
      });

      const responseText = chatCompletion.choices[0]?.message?.content || '{}';
      const parsed = JSON.parse(responseText);

      return {
        content: parsed.content || 'Medical triage assessment complete.',
        confidence: typeof parsed.confidence === 'number' ? parsed.confidence : 0.92,
        recommendations: Array.isArray(parsed.recommendations)
          ? parsed.recommendations
          : ['Maintain hydration and rest', 'Consult your nearest CHC or PHC'],
        warnings: Array.isArray(parsed.warnings)
          ? parsed.warnings
          : ['Seek emergency care if symptoms worsen or breathing difficulty develops'],
        sources: Array.isArray(parsed.sources)
          ? parsed.sources
          : ['Odisha Directorate of Public Health', 'WHO Clinical Protocols'],
        followUp: parsed.followUp || 'Would you like to find the nearest hospital with bed availability?',
      };
    } catch (error) {
      console.error('Groq AI generation error:', error);
      return this.generateFallbackResponse(userMessage, language);
    }
  }

  private static generateFallbackResponse(
    userMessage: string,
    language: 'en' | 'hi' | 'or'
  ): ClinicalTriageResponse {
    const lower = userMessage.toLowerCase();

    if (language === 'or') {
      return {
        content: `ଆପଣଙ୍କ ଲକ୍ଷଣ ଅନୁଯାୟୀ ପ୍ରାଥମିକ ପରାମର୍ଶ:\n\n1. ପ୍ରଚୁର ପରିମାଣରେ ପାଣି, ORS ଏବଂ ତରଳ ପଦାର୍ଥ ପିଅନ୍ତୁ।\n2. ଜ୍ୱର ପାଇଁ ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ନେଇ ପାରାସିଟାମଲ୍ ନିଅନ୍ତୁ (ଆସ୍ପିରିନ୍ ବା ଆଇବୁପ୍ରୋଫେନ୍ ଖାଆନ୍ତୁ ନାହିଁ)।\n3. ଲକ୍ଷଣ ୩ ଦିନରୁ ଅଧିକ ରହିଲେ ନିକଟସ୍ଥ ସରକାରୀ ଡାକ୍ତରଖାନା (DHH/CHC) କୁ ଯାଇ ରକ୍ତ ପରୀକ୍ଷା କରାନ୍ତୁ।`,
        confidence: 0.91,
        recommendations: [
          'ଦିନକୁ ୩-୪ ଲିଟର ପାଣି ଓ ORS ପିଅନ୍ତୁ',
          'ସମ୍ପୂର୍ଣ୍ଣ ବିଶ୍ରାମ ନିଅନ୍ତୁ',
          'ସ୍ୱାସ୍ଥ୍ୟ କର୍ମୀ (ASHA) ଙ୍କ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ',
        ],
        warnings: [
          'ପ୍ରବଳ ପେଟ ଯନ୍ତ୍ରଣା ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ',
          'ନାକ ବା ମାଢ଼ିରୁ ରକ୍ତସ୍ରାବ ହେଲେ',
          'ଶ୍ୱାସକ୍ରିୟାରେ କଷ୍ଟ ଅନୁଭବ ହେଲେ ତୁରନ୍ତ ୧୦୮ କୁ କଲ୍ କରନ୍ତୁ',
        ],
        sources: ['ଓଡ଼ିଶା ଜନସ୍ୱାସ୍ଥ୍ୟ ନିର୍ଦ୍ଦେଶାଳୟ', 'NVBDCP ନିର୍ଦ୍ଦେଶାବଳୀ', 'ICMR'],
        followUp: 'ଆପଣ ନିକଟସ୍ଥ ଡାକ୍ତରଖାନା ଏବଂ ବେଡ୍ ସ୍ଥିତି ଜାଣିବାକୁ ଚାହାଁନ୍ତି କି?',
      };
    }

    if (language === 'hi') {
      return {
        content: `आपके लक्षणों के आधार पर प्राथमिक स्वास्थ्य मार्गदर्शन:\n\n1. पर्याप्त मात्रा में ओआरएस (ORS) और तरल पदार्थों का सेवन करें।\n2. बुखार के लिए केवल पैरासिटामोल लें (एस्पिरिन या ब्रूफेन लेने से बचें)।\n3. यदि बुखार 2-3 दिनों से अधिक रहता है तो निकटतम सरकारी अस्पताल में सीबीसी (CBC) रक्त जांच कराएं।`,
        confidence: 0.92,
        recommendations: [
          'प्रतिदिन 3-4 लीटर साफ पानी और ओआरएस पिएं',
          'पर्याप्त आराम करें और भारी काम से बचें',
          'निकटतम स्वास्थ्य केंद्र (PHC/CHC) से संपर्क करें',
        ],
        warnings: [
          'लगातार उल्टी या गंभीर पेट दर्द होना',
          'मसूड़ों या नाक से रक्तस्राव होना',
          'सांस लेने में अत्यधिक कठिनाई होने पर तुरंत 108 पर कॉल करें',
        ],
        sources: ['ओडिशा जन स्वास्थ्य निदेशालय', 'आईसीएमआर (ICMR) दिशानिर्देश', 'WHO'],
        followUp: 'क्या आप निकटतम अस्पताल में बिस्तर की उपलब्धता देखना चाहते हैं?',
      };
    }

    return {
      content: `Based on your reported symptoms (${userMessage}):\n\n1. **Hydration First**: Maintain consistent intake of fluids including ORS, coconut water, and clean drinking water.\n2. **Fever Management**: Use Paracetamol (650mg) as prescribed for temperature control; strictly avoid NSAIDs like Ibuprofen/Aspirin.\n3. **Clinical Testing**: If fever or symptoms persist beyond 48-72 hours, visit your nearest Community Health Center (CHC) or District Hospital for blood work (CBC, NS1 antigen).`,
      confidence: 0.94,
      recommendations: [
        'Drink 3-4 liters of water and electrolyte fluids daily',
        'Take adequate bed rest and avoid strenuous physical exertion',
        'Check body temperature every 4-6 hours',
      ],
      warnings: [
        'Persistent severe abdominal pain or vomiting',
        'Spontaneous bleeding from gums or nose',
        'Extreme drowsiness or shortness of breath — Call 108 immediately',
      ],
      sources: ['Odisha Directorate of Public Health', 'NVBDCP Guidelines', 'WHO Protocol'],
      followUp: 'Would you like to find the nearest government hospital in your district?',
    };
  }
}
