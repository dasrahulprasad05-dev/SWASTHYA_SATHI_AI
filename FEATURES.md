# Feature → Code Mapping

> Maps each major feature to its frontend pages, backend APIs, services, repositories, and AI nodes.

---

## 🤖 AI Chat
```
├── Frontend:    pages/Chat.tsx
├── Components:  components/chat/ChatWindow.tsx, ChatBubble.tsx, TypingAnimation.tsx
├── Backend:     api/chat.py
├── Service:     services/chat_service.py
├── Repository:  repositories/chat_repository.py
├── AI Nodes:    intent_node.py → rag_retrieval_node.py → safety_guard_node.py → narration_node.py
└── DB:          conversations, messages
```

## 🎙️ Voice Assistant
```
├── Frontend:    pages/VoiceAssistant.tsx
├── Components:  components/voice/VoiceRecorder.tsx, WaveAnimation.tsx
├── Backend:     api/chat.py (voice endpoint)
├── Service:     services/voice_service.py
├── AI Nodes:    stt_node.py → intent_node.py → ... → tts_node.py
├── Integration: bhashini_client.py
└── DB:          voice_logs
```

## 🏥 Hospital Finder
```
├── Frontend:    pages/FindHospitals.tsx
├── Components:  components/hospital/HospitalCard.tsx, HospitalMap.tsx
├── Backend:     api/hospitals.py
├── Service:     services/hospital_service.py
├── Repository:  repositories/hospital_repository.py
└── DB:          hospitals
```

## 📚 Health Hub (Disease Library + Health Tips + Medicine Guide)
```
├── Frontend:    pages/HealthHub.tsx
├── Components:  components/health-hub/DiseaseCard.tsx, MedicineCard.tsx
├── Backend:     api/health.py (diseases, medicines, tips)
├── Service:     services/health_service.py
├── Repository:  repositories/knowledge_repository.py
├── KB:          knowledge_base/diseases/, symptoms/, prevention/
└── DB:          diseases, medicines, health_articles
```

## 🏛️ Government Schemes
```
├── Frontend:    pages/GovtSchemes.tsx
├── Components:  components/health-hub/SchemeCard.tsx
├── Backend:     api/schemes.py
├── Service:     services/scheme_service.py
├── KB:          knowledge_base/government_schemes/
└── DB:          government_schemes
```

## 🚨 Emergency Help
```
├── Frontend:    pages/EmergencyHelp.tsx
├── Components:  components/common/EmergencyBanner.tsx
├── Backend:     api/emergency.py
├── AI Node:     emergency_check_node.py
├── KB:          knowledge_base/emergency_first_aid/
└── DB:          emergency_guides
```

## 📊 Dashboard
```
├── Frontend:    pages/dashboard/Home.tsx, Profile.tsx, Analytics.tsx, History.tsx, Settings.tsx
├── Components:  components/dashboard/*, components/charts/*
├── Backend:     api/users.py, api/analytics.py
├── Service:     services/analytics_service.py
└── DB:          users, analytics, reports
```

## 🔐 Auth
```
├── Frontend:    pages/Auth.tsx (Login/Register)
├── Backend:     api/auth.py
├── Auth:        auth/jwt.py, password.py, roles.py
└── DB:          users
```

## 🔔 Notifications
```
├── Frontend:    pages/dashboard/Notifications.tsx
├── Backend:     api/notifications.py
├── Service:     services/notification_service.py
└── DB:          notifications
```

## 💬 Feedback
```
├── Frontend:    components/common/FeedbackModal.tsx
├── Backend:     api/feedback.py
├── Service:     services/feedback_service.py
├── Repository:  repositories/feedback_repository.py
└── DB:          feedback
```

## 🛡️ Admin Panel (Separate App)
```
├── Frontend:    admin-panel/src/pages/Users, Knowledge, Hospitals, Schemes, Feedback, Analytics, Settings
├── Backend:     api/admin.py
└── DB:          all collections (read/write)
```
