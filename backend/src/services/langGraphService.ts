import { Annotation, StateGraph, START, END } from "@langchain/langgraph";
import { BaseMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatGroq } from "@langchain/groq";
import dotenv from 'dotenv';
import { knowledgeBaseService } from './knowledgeBaseService.js';
import { ClinicalTriageResponse } from './aiService.js';

dotenv.config();

const groqApiKey = process.env.GROQ_API_KEY || '';
const groqModel = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

const LANGUAGE_MAP: Record<string, string> = {
  en: 'English',
  hi: 'Hindi',
  or: 'Odia (ଓଡ଼ିଆ)'
};

let model: ChatGroq | null = null;
if (groqApiKey && groqApiKey !== 'your_groq_api_key_here') {
  model = new ChatGroq({
    apiKey: groqApiKey,
    model: groqModel,
    temperature: 0.1,
  });
}

// 1. Define State
export const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
    default: () => [],
  }),
  userMessage: Annotation<string>({
    reducer: (x, y) => y,
    default: () => "",
  }),
  language: Annotation<"en" | "hi" | "or">({
    reducer: (x, y) => y,
    default: () => "en",
  }),
  ragContext: Annotation<string>({
    reducer: (x, y) => y,
    default: () => "",
  }),
  retrievalConfidence: Annotation<number>({
    reducer: (x, y) => y,
    default: () => 0,
  }),
  safetyStatus: Annotation<string>({
    reducer: (x, y) => y,
    default: () => "safe",
  }),
  fallbackRequired: Annotation<boolean>({
    reducer: (x, y) => y,
    default: () => false,
  }),
  finalResponse: Annotation<ClinicalTriageResponse | null>({
    reducer: (x, y) => y,
    default: () => null,
  })
});

// 2. Nodes

async function retrievalNode(state: typeof GraphState.State) {
  const query = state.userMessage;
  try {
    // We assume knowledgeBaseService returns context string.
    // In a real system, you'd calculate a confidence score based on similarity.
    // We will simulate a confidence score based on whether context is empty.
    const ragContext = await knowledgeBaseService.buildRAGContext(query, 5);
    
    let confidence = 0;
    if (ragContext && ragContext.trim().length > 50) {
      confidence = 0.85; // High confidence if we found substantial text
    } else if (ragContext && ragContext.trim().length > 0) {
      confidence = 0.5; // Medium confidence
    }
    
    return {
      ragContext,
      retrievalConfidence: confidence
    };
  } catch (error) {
    console.error("Retrieval error:", error);
    return { ragContext: "", retrievalConfidence: 0 };
  }
}

async function triageNode(state: typeof GraphState.State) {
  // Optional: Add logic to classify the intent (e.g., symptom, general health, scheme).
  // For now, we pass the state along as the intent is implicitly handled by the LLM in Response.
  return {};
}

async function safetyNode(state: typeof GraphState.State) {
  const query = state.userMessage.toLowerCase();
  let safetyStatus = "safe";
  let emergencyResponse: ClinicalTriageResponse | null = null;

  const emergencyKeywords = [
    'chest pain', 'heart attack', 'breath', 'breathing', 'stroke',
    'bleeding', 'unconscious', 'snake', 'poison', 'suicide', 'die', 'kill myself'
  ];

  for (const keyword of emergencyKeywords) {
    if (query.includes(keyword)) {
      safetyStatus = "emergency";
      break;
    }
  }

  if (safetyStatus === "emergency") {
    emergencyResponse = {
      content: "🚨 MEDICAL EMERGENCY DETECTED. Please seek immediate professional help.",
      confidence: 1.0,
      recommendations: ["Call 108 Ambulance immediately", "Go to the nearest hospital emergency room"],
      warnings: ["Do not wait. This could be a life-threatening condition."],
      sources: ["Emergency Protocols"],
      followUp: "Are you able to call 108 right now?"
    };
    
    if (state.language === "hi") {
      emergencyResponse.content = "🚨 मेडिकल आपातकाल का पता चला। कृपया तुरंत पेशेवर मदद लें।";
      emergencyResponse.recommendations = ["तुरंत 108 एम्बुलेंस को कॉल करें", "निकटतम अस्पताल के आपातकालीन कक्ष में जाएं"];
      emergencyResponse.warnings = ["इंतजार न करें। यह जानलेवा स्थिति हो सकती है।"];
      emergencyResponse.followUp = "क्या आप अभी 108 पर कॉल कर सकते हैं?";
    } else if (state.language === "or") {
      emergencyResponse.content = "🚨 ଡାକ୍ତରୀ ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ଚିହ୍ନଟ ହୋଇଛି। ଦୟାକରି ତୁରନ୍ତ ଡାକ୍ତରୀ ସାହାଯ୍ୟ ନିଅନ୍ତୁ।";
      emergencyResponse.recommendations = ["ତୁରନ୍ତ 108 ଆମ୍ବୁଲାନ୍ସକୁ କଲ୍ କରନ୍ତୁ", "ନିକଟସ୍ଥ ଡାକ୍ତରଖାନାକୁ ଯାଆନ୍ତୁ"];
      emergencyResponse.warnings = ["ଅପେକ୍ଷା କରନ୍ତୁ ନାହିଁ। ଏହା ଜୀବନ ପ୍ରତି ବିପଦ ହୋଇପାରେ।"];
      emergencyResponse.followUp = "ଆପଣ ବର୍ତ୍ତମାନ 108 କୁ କଲ୍ କରିପାରିବେ କି?";
    }
  }

  // Define if fallback is required
  // If confidence is < 0.3 and it's not an emergency, we need fallback.
  const fallbackRequired = state.retrievalConfidence < 0.3 && safetyStatus !== "emergency";

  return {
    safetyStatus,
    fallbackRequired,
    finalResponse: emergencyResponse
  };
}

// Edge routing function
function decideNextStep(state: typeof GraphState.State) {
  if (state.safetyStatus === "emergency") {
    return "END";
  }
  if (state.fallbackRequired) {
    return "fallbackNode";
  }
  return "responseNode";
}

async function fallbackNode(state: typeof GraphState.State) {
  if (!model) {
    return { finalResponse: generateHardFallback(state.userMessage, state.language) };
  }

  const prompt = `
You are a health assistant. The user asked: "${state.userMessage}".
We do NOT have specific reliable medical information in our knowledge base to answer this securely.
Therefore, you must provide a cautious general explanation.
IMPORTANT: State clearly that you do not have enough reliable information in the knowledge base and recommend consulting a healthcare professional for specific medical decisions. Do NOT give definitive medical diagnoses or dosages.
Respond in JSON format matching this schema:
{
  "content": "Explanation and disclaimer entirely in ${LANGUAGE_MAP[state.language] || 'English'}",
  "confidence": 0.5,
  "recommendations": ["Consult doctor"],
  "warnings": ["General information only"],
  "sources": ["General Knowledge"],
  "followUp": "Would you like to search for a hospital?"
}
`;

  try {
    const chatModel = model.withConfig({ tags: ["fallback"] });
    const response = await chatModel.invoke([new SystemMessage(prompt)], {
        response_format: { type: "json_object" }
    });
    
    const parsed = JSON.parse(response.content as string);
    return {
      finalResponse: {
        content: parsed.content,
        confidence: parsed.confidence || 0.5,
        recommendations: parsed.recommendations || ["Consult a healthcare professional"],
        warnings: parsed.warnings || ["This is general information only, not medical advice."],
        sources: parsed.sources || ["General Knowledge"],
        followUp: parsed.followUp || "Would you like help finding a doctor?"
      }
    };
  } catch (error) {
    console.error("Fallback generation error:", error);
    return { finalResponse: generateHardFallback(state.userMessage, state.language) };
  }
}

async function responseNode(state: typeof GraphState.State) {
  if (!model) {
    return { finalResponse: generateHardFallback(state.userMessage, state.language) };
  }

  const systemPrompt = `
You are "Swasthya Sathi AI" (ସ୍ୱାସ୍ଥ୍ୟ ସାଥୀ AI), a trusted, empathetic, and evidence-based clinical health assistant for Odisha, India.

Clinical Rules & Safety Guardrails:
1. Always maintain an empathetic, reassuring tone.
2. Emphasize that your guidance does NOT replace in-person doctor diagnosis.
3. Use the provided Knowledge Base context to answer accurately.
4. Write the entire response strictly in the requested language: ${LANGUAGE_MAP[state.language] || 'English'}. Do NOT mix languages.

Context from Knowledge Base:
${state.ragContext}

Always format your response as valid JSON with the following schema:
{
  "content": "Detailed empathetic answer in ${LANGUAGE_MAP[state.language] || 'English'} explaining symptoms, care, and guidance",
  "confidence": ${state.retrievalConfidence},
  "recommendations": ["Recommendation 1", "Recommendation 2", "Recommendation 3"],
  "warnings": ["Red flag symptom 1", "Red flag symptom 2"],
  "sources": ["Source 1", "Source 2"],
  "followUp": "Helpful next question or suggestion"
}
`;

  const msgs = [new SystemMessage(systemPrompt), ...state.messages, new HumanMessage(state.userMessage)];

  try {
    const chatModel = model.withConfig({ tags: ["rag_response"] });
    const response = await chatModel.invoke(msgs, {
        response_format: { type: "json_object" }
    });
    const parsed = JSON.parse(response.content as string);
    
    return {
      finalResponse: {
        content: parsed.content || 'Medical triage assessment complete.',
        confidence: typeof parsed.confidence === 'number' ? parsed.confidence : state.retrievalConfidence,
        recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
        warnings: Array.isArray(parsed.warnings) ? parsed.warnings : [],
        sources: Array.isArray(parsed.sources) ? parsed.sources : [],
        followUp: parsed.followUp || 'Would you like to find the nearest hospital?'
      }
    };
  } catch (error) {
    console.error("Response generation error:", error);
    return { finalResponse: generateHardFallback(state.userMessage, state.language) };
  }
}

async function finalSafetyCheckNode(state: typeof GraphState.State) {
  // A final validation node to ensure the LLM didn't invent dangerous prescriptions
  const response = state.finalResponse;
  if (!response) return {};

  const contentLower = response.content.toLowerCase();
  
  // Basic guard against definitive diagnosis
  if (contentLower.includes("i diagnose you with") || contentLower.includes("you definitely have")) {
    response.content += "\\n\\n*Disclaimer: I am an AI, not a doctor. This is not a definitive diagnosis.*";
  }

  // Guard against specific strong prescriptions not typically given by AI
  const riskyDrugs = ["antibiotic", "amoxicillin", "azithromycin", "steroid", "prednisone"];
  for (const drug of riskyDrugs) {
    if (contentLower.includes(drug)) {
      if (!response.warnings.includes("Do not take antibiotics or steroids without a doctor's prescription.")) {
        response.warnings.push("Do not take antibiotics or steroids without a doctor's prescription.");
      }
    }
  }

  return { finalResponse: response };
}

// Build Graph
const builder = new StateGraph(GraphState)
  .addNode("retrievalNode", retrievalNode)
  .addNode("triageNode", triageNode)
  .addNode("safetyNode", safetyNode)
  .addNode("fallbackNode", fallbackNode)
  .addNode("responseNode", responseNode)
  .addNode("finalSafetyCheckNode", finalSafetyCheckNode)

  .addEdge(START, "retrievalNode")
  .addEdge("retrievalNode", "triageNode")
  .addEdge("triageNode", "safetyNode")
  .addConditionalEdges("safetyNode", decideNextStep, {
    END: END,
    fallbackNode: "fallbackNode",
    responseNode: "responseNode"
  })
  .addEdge("fallbackNode", "finalSafetyCheckNode")
  .addEdge("responseNode", "finalSafetyCheckNode")
  .addEdge("finalSafetyCheckNode", END);

export const langGraphApp = builder.compile();

function generateHardFallback(userMessage: string, language: string): ClinicalTriageResponse {
  return {
    content: language === 'hi' 
      ? "मैं अभी आपके प्रश्न का उत्तर देने में असमर्थ हूँ। कृपया डॉक्टर से संपर्क करें।" 
      : language === 'or' 
        ? "ମୁଁ ବର୍ତ୍ତମାନ ଆପଣଙ୍କ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବାକୁ ଅସମର୍ଥ। ଦୟାକରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ନିଅନ୍ତୁ।"
        : "I am unable to process your request at this moment. Please consult a healthcare professional.",
    confidence: 0.1,
    recommendations: ["Consult a doctor"],
    warnings: ["System error or unavailable AI"],
    sources: [],
    followUp: ""
  };
}
