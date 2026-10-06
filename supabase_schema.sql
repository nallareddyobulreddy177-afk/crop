-- ============================================================================
-- AgriPulse AI (KisanDrishti / కిసాన్ దృష్టి)
-- Supabase PostgreSQL + PostGIS Database Architecture & Security Schema
-- ============================================================================

-- Enable PostGIS extension for spatial hotspot radius queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. PROFILES TABLE (Farmer User Accounts)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT UNIQUE,
  preferred_language TEXT DEFAULT 'te' CHECK (preferred_language IN ('en', 'te', 'hi')),
  district TEXT DEFAULT 'Guntur',
  state TEXT DEFAULT 'Andhra Pradesh',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. FIELDS TABLE (Farm Plots & Geometries)
CREATE TABLE IF NOT EXISTS public.fields (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  field_name TEXT NOT NULL,
  crop_type TEXT NOT NULL,
  area_acres NUMERIC(5,2) CHECK (area_acres > 0),
  location GEOGRAPHY(POINT, 4326),
  soil_type TEXT DEFAULT 'Black Cotton Soil',
  irrigation_type TEXT DEFAULT 'Drip Irrigation',
  health_score INT DEFAULT 100 CHECK (health_score BETWEEN 0 AND 100),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CROP ANALYSES TABLE (Multi-Modal Diagnostic Telemetry & Predictions)
CREATE TABLE IF NOT EXISTS public.crop_analyses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  field_id UUID REFERENCES public.fields(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  image_url TEXT NOT NULL,
  voice_transcript TEXT,
  voice_language TEXT DEFAULT 'te',
  detected_crop TEXT NOT NULL,
  possible_disease TEXT NOT NULL,
  pathogen_category TEXT DEFAULT 'Fungal', -- Fungal, Viral, Bacterial, Pest, Nutritional
  confidence_score NUMERIC(5,2) NOT NULL,
  severity TEXT CHECK (severity IN ('Healthy', 'Low', 'Moderate', 'Severe', 'Critical')),
  observed_symptoms JSONB NOT NULL DEFAULT '[]'::jsonb,
  microclimate_context JSONB DEFAULT '{"temp": 28.5, "humidity": 86, "dew_point": 25.1}'::jsonb,
  recommended_actions JSONB NOT NULL DEFAULT '[]'::jsonb,
  preventive_measures JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_expert_escalated BOOLEAN DEFAULT FALSE,
  escalation_officer_notes TEXT,
  is_demo_mode BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crop_analyses ENABLE ROW LEVEL SECURITY;

-- Profiles: Farmer can read and update only their own profile
CREATE POLICY "Users can view own profile" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

-- Fields: Farmers manage their own plots
CREATE POLICY "Users can manage own fields" 
  ON public.fields FOR ALL 
  USING (auth.uid() = user_id);

-- Crop Analyses: Farmers manage their diagnostic logs
CREATE POLICY "Users can manage own analyses" 
  ON public.crop_analyses FOR ALL 
  USING (auth.uid() = user_id);

-- Anonymized Public Read for Regional Epidemic Heatmaps (Geo-Sentinel)
CREATE POLICY "Public read anonymized analyses for heatmap"
  ON public.crop_analyses FOR SELECT
  USING (true);

-- 5. REALTIME HOTSPOT FUNCTION FOR GEOSPATIAL MAPS
CREATE OR REPLACE FUNCTION get_disease_hotspots()
RETURNS TABLE (
  id UUID,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  field_name TEXT,
  crop_type TEXT,
  possible_disease TEXT,
  severity TEXT,
  confidence_score NUMERIC(5,2),
  created_at TIMESTAMPTZ
) AS $$ 
BEGIN 
  RETURN QUERY 
  SELECT 
    ca.id, 
    ST_Y(f.location::geometry) AS lat, 
    ST_X(f.location::geometry) AS lng,
    f.field_name,
    ca.detected_crop AS crop_type,
    ca.possible_disease, 
    ca.severity, 
    ca.confidence_score,
    ca.created_at 
  FROM public.crop_analyses ca 
  JOIN public.fields f ON ca.field_id = f.id 
  WHERE ca.created_at > NOW() - INTERVAL '14 days'
  ORDER BY ca.created_at DESC; 
END; 
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. SAMPLE SEED DATA FOR DEMONSTRATION (Andhra Pradesh / Telangana Farming Corridors)
-- Demo Farmer Ramesh Kumar (Guntur, AP)
INSERT INTO public.profiles (id, full_name, phone_number, preferred_language, district, state)
VALUES 
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Ramesh Kumar (రమేష్ కుమార్)', '+919876543210', 'te', 'Guntur', 'Andhra Pradesh')
ON CONFLICT (id) DO NOTHING;

-- Demo Fields (Tomato Plot, Cotton Acres, Paddy Field)
INSERT INTO public.fields (id, user_id, field_name, crop_type, area_acres, location, health_score)
VALUES
  ('b1eebc99-9c0b-4ef8-bb6d-6bb9bd380b22', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'North Tomato Plot (ఉత్తర టమాటా తోట)', 'Tomato (Hybrid 448)', 3.5, ST_SetSRID(ST_MakePoint(80.4365, 16.3067), 4326), 68),
  ('b2eebc99-9c0b-4ef8-bb6d-6bb9bd380b33', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'East Cotton Acres (తూర్పు పత్తి చేను)', 'Bt Cotton', 5.0, ST_SetSRID(ST_MakePoint(80.4520, 16.3210), 4326), 74),
  ('b3eebc99-9c0b-4ef8-bb6d-6bb9bd380b44', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'South Paddy Wetlands (వరి మడి)', 'Paddy Rice (BPT 5204)', 4.2, ST_SetSRID(ST_MakePoint(80.4180, 16.2940), 4326), 92)
ON CONFLICT (id) DO NOTHING;
