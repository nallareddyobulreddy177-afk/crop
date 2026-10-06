# AgriPulse AI (KisanDrishti / కిసాన్ దృష్టి)
### *From Leaf Scan to Lasting Yield — Explainable AI Micro-Climate Crop Sentinel*

[![Supabase](https://img.shields.io/badge/Database-Supabase%20Postgres-3ecf8e?logo=supabase)](https://supabase.com)
[![PostGIS](https://img.shields.io/badge/Geospatial-PostGIS-2496ED)](https://postgis.net)
[![Gemini Vision](https://img.shields.io/badge/Inference-Gemini%203.1%20Vision-4285F4?logo=google)](https://deepmind.google/technologies/gemini/)
[![RLS](https://img.shields.io/badge/Security-PostgreSQL%20RLS-blue)](https://supabase.com/docs/guides/auth/row-level-security)

---

## 🌾 Overview & Real-World Agricultural Problem

Crop pathogens and pests cause over **$220 billion in annual agricultural losses** globally. Smallholder farmers face major diagnostic and systemic hurdles:
1. **Sub-surface & Latent Incubation:** Fungal pathogens multiply 5–10 days before visible necrotic lesions form on the leaf epidermis.
2. **Visual Overlap:** Early Nitrogen deficiency, Spider Mite webbing, and Downy Mildew present near-identical chlorotic yellowing.
3. **Extension Officer Gap:** In rural India, the ratio is 1 officer per ~2,400 farmers, forcing dependence on pesticide vendors.
4. **Chemical Over-prescription:** Fear of crop failure drives broad-spectrum pesticide over-spraying, ruining soil health and driving pathogen resistance.
5. **Language & Connectivity:** Remote fields lack high-speed connectivity, and English-only interfaces exclude non-literate farmers.

**AgriPulse AI** addresses these bottlenecks with an explainable multi-modal crop health operating system that fuses **high-resolution leaf screening**, **regional voice notes (Telugu / Hindi / English)**, and **ambient micro-climate telemetry** on top of a **Supabase PostgreSQL + PostGIS** backend.

---

## 🚀 Key Features

* **Multi-Modal Diagnostic Engine:** Combines YOLOv8 leaf cropping, Web Audio STT (Telugu/Hindi), and Google Gemini 3.1 Vision to deliver high-confidence, explainable diagnoses with lesion pinpointing.
* **Ambient Micro-Climate Risk Modeling:** Calculates spore incubation risk using temperature, relative humidity, and dew point metrics.
* **Regional Voice Synthesis (TTS):** Farmers can tap *"Listen in Telugu (తెలుగులో వినండి)"* to hear diagnoses and organic treatment steps read aloud.
* **PostGIS Geospatial Hotspot Sentinel:** Interactive epidemic clustering map calculating 14-day outbreak radii and pushing proximity warnings.
* **Supabase PostgreSQL & Row Level Security (RLS):** Strict multi-tenant isolation protecting farmer plot data while serving anonymized epidemiologic heatmaps.
* **Human-in-the-Loop Escalation:** Automatically alerts local extension officers when diagnostic confidence drops or critical outbreaks occur.
* **Built-in 3-Minute Hackathon Pitch Deck & Judge Defense:** Interactive pitch presenter mode with live timer, slide steps, and full Q&A defense.

---

## 🗄️ Database Architecture (`supabase_schema.sql`)

The repository includes a ready-to-deploy Supabase schema with:
* `public.profiles`: Farmer identity, phone number, and preferred language (`te`, `hi`, `en`).
* `public.fields`: Farm plot records with PostGIS `GEOGRAPHY(POINT, 4326)` geometries and health scores.
* `public.crop_analyses`: Diagnostic records with JSONB symptom tags and micro-climate context.
* **PostgreSQL RLS Policies:** Granular security ensuring farmers only access their own records.
* `public.get_disease_hotspots()`: Stored procedure returning anonymized 14-day outbreak centroids.

---

## 💻 Running the Interactive Prototype Locally

The project runs natively using pure HTML5, CSS3, and JavaScript, with a lightweight background PowerShell HTTP server:

```powershell
# In PowerShell:
powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 8080
```

Then open your browser at:
```
http://localhost:8080/
```

### Direct File Access
Alternatively, open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🏆 3-Minute Hackathon Pitch Summary

* **0:00 – 0:30 (The Problem & Hook):** A single fungal outbreak can wipe out an entire annual income in 72 hours.
* **0:30 – 1:30 (Live Demonstration):** Ramesh captures a tomato leaf, speaks in Telugu, and receives an explainable Early Blight diagnosis in under 2 seconds.
* **1:30 – 2:15 (Technical Depth):** Supabase PostgreSQL, RLS, PostGIS disease mapping, and offline PWA IndexedDB caching.
* **2:15 – 3:00 (Impact & Scalability):** Reduces pesticide spend by up to 35% and scales seamlessly from one field to nationwide agricultural monitoring.
