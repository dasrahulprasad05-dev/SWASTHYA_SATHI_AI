# 🏥 Swasthya Sathi AI

> AI-powered multilingual health assistant for Odisha & India | SIH Hackathon Project

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-in%20development-yellow)

## 🎯 Overview

**Swasthya Sathi AI** is a comprehensive AI-driven healthcare chatbot designed to bridge the healthcare accessibility gap in Odisha and across India. It provides multilingual health guidance, symptom checking, hospital finding, government scheme information, and emergency assistance — all powered by advanced RAG (Retrieval-Augmented Generation) and voice-first design.

## 🌟 Key Features

| Feature | Description |
|---------|-------------|
| 🤖 AI Health Chat | RAG-powered health conversations with explainable AI |
| 🎙️ Voice Assistant | Odia/Hindi/English voice input & output via Bhashini |
| 🩺 Symptom Checker | AI-driven symptom analysis with safety guards |
| 📚 Disease Library | Comprehensive disease information database |
| 💊 Medicine Guide | Medicine details, interactions & reminders |
| 🏥 Hospital Finder | Map-based nearby hospital search with filters |
| 🏛️ Government Schemes | Odisha & Central health scheme navigator |
| 🚨 Emergency Help | One-tap emergency contacts & first aid guides |
| 📊 Health Dashboard | Personal health analytics & history |
| 🌐 Multilingual | Odia, Hindi, English support (i18next) |

## 🏗️ Tech Stack

### Frontend
React 19 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Framer Motion · React Router · TanStack Query · React Hook Form · Zod · Recharts · Leaflet · i18next

### Backend
Python · FastAPI · MongoDB Atlas · Mongoose · JWT · LangGraph

### AI Engine
Groq API · ChromaDB · LangChain · Bhashini STT/TTS · RAG Pipeline

## 📁 Project Structure

```
swasthya-sathi-ai/
├── frontend/          # React 19 + TypeScript + Vite
├── admin-panel/       # Admin dashboard (separate app)
├── backend/           # Python FastAPI server
├── knowledge_base/    # RAG documents & embeddings
├── database/          # MongoDB schemas & seeds
├── scripts/           # Utility scripts
├── docs/              # Documentation & diagrams
├── tests/             # E2E and unit tests
└── docker-compose.yml
```

## 🚀 Quick Start

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && pip install -r requirements.txt && uvicorn app.main:app --reload

# Admin Panel
cd admin-panel && npm install && npm run dev
```

## 👥 Team

Built with ❤️ for SIH Hackathon

## 📄 License

MIT License
