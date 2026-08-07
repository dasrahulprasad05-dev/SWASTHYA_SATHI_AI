/**
 * Swasthya Sathi AI — RAG Knowledge Base Service
 * 
 * Loads chunked medical knowledge from processed JSON files
 * and performs keyword-based semantic search to provide
 * contextually relevant information to the Groq LLM.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface KnowledgeChunk {
  chunk_id: string;
  document_id: string;
  document_title: string;
  category: string;
  language: string;
  chunk_index: number;
  total_chunks: number;
  content: string;
  char_count: number;
}

export interface SearchResult {
  chunk: KnowledgeChunk;
  score: number;
}

// Medical keyword mappings for better search relevance
const MEDICAL_SYNONYMS: Record<string, string[]> = {
  fever: ['temperature', 'bukhar', 'jwara', 'pyrexia', 'high temperature'],
  headache: ['head pain', 'migraine', 'munda bindha', 'sir dard'],
  dengue: ['dengue fever', 'aedes', 'platelet', 'ns1'],
  malaria: ['anopheles', 'chills', 'plasmodium', 'antimalarial'],
  diarrhea: ['loose motion', 'jhada', 'cholera', 'dehydration', 'ors'],
  diabetes: ['sugar', 'blood sugar', 'insulin', 'glucose', 'hba1c'],
  hypertension: ['blood pressure', 'bp', 'high bp', 'high blood pressure'],
  anemia: ['iron deficiency', 'hemoglobin', 'hb', 'pale', 'weakness', 'fatigue'],
  pregnancy: ['maternal', 'antenatal', 'prenatal', 'pregnant', 'delivery', 'anc'],
  child: ['pediatric', 'infant', 'baby', 'newborn', 'vaccination', 'immunization'],
  elderly: ['old age', 'senior', 'geriatric', 'aging'],
  emergency: ['accident', 'snake bite', 'heart attack', 'chest pain', 'stroke', 'burn', 'drowning', 'poisoning'],
  nutrition: ['diet', 'food', 'vitamin', 'protein', 'malnutrition', 'underweight'],
  monsoon: ['rain', 'flood', 'waterlogging', 'rainy season', 'barsha'],
  hygiene: ['sanitation', 'hand wash', 'clean water', 'toilet'],
  bsky: ['biju swasthya', 'health card', 'smart health card', 'cashless'],
  pmjay: ['ayushman bharat', 'ayushman card', 'health insurance'],
  mamata: ['mamata yojana', 'maternity benefit'],
  janani: ['janani suraksha', 'jsy', 'safe delivery'],
  hospital: ['medical college', 'chc', 'phc', 'dhh', 'aiims', 'scb'],
  khordha: ['bhubaneswar', 'bbsr'],
  cuttack: ['scb medical', 'cuttack district'],
  puri: ['puri district', 'jagannath'],
};

class KnowledgeBaseService {
  private chunks: KnowledgeChunk[] = [];
  private isLoaded = false;

  /**
   * Load all processed chunks from the knowledge base JSON file
   */
  async loadKnowledgeBase(): Promise<void> {
    if (this.isLoaded) return;

    const chunksPath = path.resolve(__dirname, '../../../knowledge_base/chunks/all_chunks.json');

    try {
      if (fs.existsSync(chunksPath)) {
        const raw = fs.readFileSync(chunksPath, 'utf-8');
        this.chunks = JSON.parse(raw);
        this.isLoaded = true;
        console.log(`[RAG] Knowledge base loaded: ${this.chunks.length} chunks from ${new Set(this.chunks.map(c => c.document_id)).size} documents`);
      } else {
        console.warn(`[RAG] Knowledge base file not found at: ${chunksPath}`);
      }
    } catch (err) {
      console.error('[RAG] Failed to load knowledge base:', err);
    }
  }

  /**
   * Search the knowledge base for relevant chunks given a user query.
   * Uses TF-IDF-like keyword scoring with medical synonym expansion.
   */
  async search(query: string, topK: number = 5, categoryFilter?: string): Promise<SearchResult[]> {
    await this.loadKnowledgeBase();

    if (this.chunks.length === 0) {
      return [];
    }

    const queryLower = query.toLowerCase();
    const queryTokens = this.tokenize(queryLower);
    const expandedTokens = this.expandWithSynonyms(queryTokens);

    const scored: SearchResult[] = [];

    for (const chunk of this.chunks) {
      // Apply category filter if specified
      if (categoryFilter && chunk.category !== categoryFilter) continue;

      const contentLower = chunk.content.toLowerCase();
      let score = 0;

      // 1. Direct token match scoring
      for (const token of expandedTokens) {
        if (token.length < 3) continue;
        const regex = new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        const matches = contentLower.match(regex);
        if (matches) {
          // Weight longer matches higher
          score += matches.length * (token.length / 5);
        }
      }

      // 2. Exact phrase match bonus
      for (const token of queryTokens) {
        if (token.length >= 4 && contentLower.includes(token)) {
          score += 3;
        }
      }

      // 3. Category relevance bonus
      const detectedCategory = this.detectQueryCategory(queryLower);
      if (detectedCategory && chunk.category === detectedCategory) {
        score += 5;
      }

      if (score > 0) {
        scored.push({ chunk, score });
      }
    }

    // Sort by score descending and return top K
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, topK);
  }

  /**
   * Build a context string from search results to inject into the LLM prompt
   */
  async buildRAGContext(query: string, topK: number = 5): Promise<string> {
    const results = await this.search(query, topK);

    if (results.length === 0) {
      return '';
    }

    const contextParts = results.map((r, i) => {
      return `--- Knowledge Source ${i + 1} [${r.chunk.category}] (${r.chunk.document_title}) ---\n${r.chunk.content}`;
    });

    return `\n\n=== VERIFIED ODISHA HEALTH KNOWLEDGE BASE (RAG) ===\nThe following verified medical knowledge from official Odisha health documents is provided as reference. Use this information to give accurate, evidence-based responses:\n\n${contextParts.join('\n\n')}`;
  }

  /**
   * Get knowledge base statistics
   */
  async getStats(): Promise<{ totalChunks: number; totalDocuments: number; categories: Record<string, number> }> {
    await this.loadKnowledgeBase();

    const categories: Record<string, number> = {};
    const documentIds = new Set<string>();

    for (const chunk of this.chunks) {
      categories[chunk.category] = (categories[chunk.category] || 0) + 1;
      documentIds.add(chunk.document_id);
    }

    return {
      totalChunks: this.chunks.length,
      totalDocuments: documentIds.size,
      categories,
    };
  }

  // --- Private Helpers ---

  private tokenize(text: string): string[] {
    return text
      .replace(/[^\w\s\u0900-\u097F\u0B00-\u0B7F]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length >= 2);
  }

  private expandWithSynonyms(tokens: string[]): string[] {
    const expanded = new Set(tokens);
    for (const token of tokens) {
      for (const [key, synonyms] of Object.entries(MEDICAL_SYNONYMS)) {
        if (token === key || synonyms.includes(token)) {
          expanded.add(key);
          for (const syn of synonyms) {
            expanded.add(syn);
          }
        }
      }
    }
    return Array.from(expanded);
  }

  private detectQueryCategory(query: string): string | null {
    const categoryKeywords: Record<string, string[]> = {
      diseases: ['fever', 'dengue', 'malaria', 'diabetes', 'anemia', 'hypertension', 'bp', 'sugar'],
      emergency_first_aid: ['emergency', 'accident', 'snake', 'heart attack', 'chest pain', 'stroke', 'burn', 'bleeding'],
      child_health: ['child', 'baby', 'vaccine', 'immunization', 'infant', 'pediatric'],
      maternal_health: ['pregnancy', 'pregnant', 'maternal', 'delivery', 'antenatal'],
      elderly_health: ['elderly', 'old age', 'geriatric', 'senior'],
      government_schemes: ['scheme', 'yojana', 'bsky', 'ayushman', 'pmjay', 'mamata', 'janani', 'card', 'insurance'],
      hospitals: ['hospital', 'medical college', 'aiims', 'scb', 'chc', 'phc', 'bed', 'facility'],
      prevention: ['hygiene', 'sanitation', 'nutrition', 'diet', 'monsoon', 'prevention', 'wash'],
    };

    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      for (const kw of keywords) {
        if (query.includes(kw)) return category;
      }
    }
    return null;
  }
}

// Singleton export
export const knowledgeBaseService = new KnowledgeBaseService();
