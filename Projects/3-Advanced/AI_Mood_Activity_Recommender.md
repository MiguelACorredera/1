# AI Mood-Based Activity Recommender

**Tier:** 3-Advanced

## Description

The AI Mood-Based Activity Recommender is a web application that interprets a user's current emotional state and intelligently suggests personalized activities to support well-being, productivity, and emotional regulation. Users can express their mood through text input, emoji-based selection, or a slider scale, and the app responds with tailored recommendations — ranging from breathing exercises and journaling prompts to music playlists, games, or social activities.

The application is especially valuable for students managing academic stress, individuals navigating mental health challenges, or anyone seeking a healthier way to engage with their emotions on a daily basis.

**Resources required:**
- A free API key from [OpenAI](https://platform.openai.com/) or [Google Gemini](https://ai.google.dev/) to power the mood analysis and activity recommendation engine.
- (Optional) A [Firebase](https://firebase.google.com/) or [Supabase](https://supabase.com/) account for storing user mood history if persistence is needed.

---

## User Stories

- [ ] User can express their current mood by typing a free-form description (e.g., "I feel restless and can't focus") or by selecting from a visual mood board with emoji/icons.
- [ ] User can receive a curated list of 3–5 AI-generated activity recommendations tailored to their expressed mood, each with a brief explanation of why it might help.
- [ ] User can view detailed information about a recommended activity, including estimated duration, required materials, and a step-by-step guide to get started.
- [ ] User can mark an activity as "completed" or "not helpful" to provide feedback that refines future suggestions.
- [ ] User can view a mood history log that shows their past mood entries alongside the activities they tried, displayed in a timeline or calendar view.
- [ ] User can request a fresh set of alternative recommendations for the same mood without re-entering their input.
- [ ] User can filter recommendations by category (e.g., physical, creative, social, mindfulness) to match their current energy level or preference.
- [ ] User can save favourite activities to a personal collection for quick access later.

---

## Bonus Features

- [ ] User can receive mood insights based on weekly or monthly patterns, such as "You tend to feel anxious on Sunday evenings — here are proactive activities to try."
- [ ] User can interact with an AI-powered chatbot that asks gentle follow-up questions to better understand their mood before generating recommendations.
- [ ] User can optionally enable webcam-based facial expression analysis (using face-api.js or MediaPipe) to auto-detect mood without typing.
- [ ] User can set daily mood check-in reminders via browser notifications or email.
- [ ] User can view a progress dashboard showing mood trends over time, streaks of completed activities, and most-used categories — visualised with charts.
- [ ] User can share a specific activity recommendation as a card on social media or via a shareable link.
- [ ] User can switch between a "Quick Mode" (instant single recommendation) and a "Deep Dive Mode" (multi-step guided session with reflection prompts).

---

## Useful Links and Resources

### AI & NLP
- [OpenAI API Docs](https://platform.openai.com/docs) — For GPT-powered mood analysis and recommendation generation
- [Google Gemini API](https://ai.google.dev/docs) — Alternative LLM for mood understanding
- [Hugging Face — Emotion Detection Models](https://huggingface.co/models?pipeline_tag=text-classification&search=emotion) — Pre-trained sentiment/emotion classifiers

### Facial Expression (Bonus)
- [face-api.js](https://github.com/justadudewhohacks/face-api.js) — In-browser face and emotion detection
- [MediaPipe Face Landmarker](https://developers.google.com/mediapipe/solutions/vision/face_landmarker) — Google's real-time facial landmark solution

### Frontend & UI
- [React Documentation](https://react.dev/) — Component-based UI framework
- [Framer Motion](https://www.framer.com/motion/) — Animations for mood transitions and activity cards
- [Chart.js](https://www.chartjs.org/) — For mood trend visualisations in the dashboard

### Backend & Storage
- [Firebase Firestore](https://firebase.google.com/docs/firestore) — Real-time NoSQL database for mood history
- [Supabase](https://supabase.com/docs) — Open-source Firebase alternative with PostgreSQL

### Mental Health & Activity Research
- [NHS — 5 Steps to Mental Wellbeing](https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/) — Evidence-based activity categories
- [Greater Good Science Center](https://greatergood.berkeley.edu/topic/emotions) — Research-backed emotional regulation strategies

---

## Example Projects

- **Wysa** (https://www.wysa.com) — An AI-powered mental health chatbot that recommends evidence-based exercises (CBT, mindfulness) based on user-reported emotions. Great reference for conversational mood input and structured activity flows.
- **Reflectly** (https://reflectly.app) — A journaling app that uses AI to personalise daily reflections and mood tracking. Strong reference for mood history UI and calendar-based visualisation.
- **Moodfit** (https://www.getmoodfit.com) — A mood tracking and mental fitness app with activity suggestions linked to emotional states. Good reference for the feedback loop between mood input and activity outcomes.
- **Daylio** (https://daylio.net) — A micro-diary app that tracks activities and moods together. Useful reference for minimalist mood logging UX and activity correlation analytics.
