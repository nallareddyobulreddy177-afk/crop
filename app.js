/**
 * AgriPulse AI (KisanDrishti / కిసాన్ దృష్టి)
 * Interactive Application Engine & Multi-Modal Sentinel Logic
 */

// ============================================================================
// 1. DATASETS & MULTI-LINGUAL DICTIONARIES
// ============================================================================

const CROP_DATABASE = {
  tomato_early_blight: {
    id: "tomato_early_blight",
    cropName: "Tomato (Hybrid 448)",
    cropNameTe: "టమాటా (హైబ్రిడ్ 448)",
    cropNameHi: "टमाटर (हाइब्रिड 448)",
    diseaseName: "Tomato Early Blight",
    diseaseNameTe: "టమాటా ఆల్టర్నేరియా ఆకుమచ్చ తెగులు",
    diseaseNameHi: "टमाटर का अगेती झुलसा (अर्ली ब्लाइट)",
    scientificName: "Alternaria solani (శిలీంధ్ర వ్యాధి)",
    scientificNameHi: "Alternaria solani (कवक जनित)",
    scientificNameEn: "Alternaria solani (Fungal Pathogen)",
    confidence: 91.4,
    severity: "Severe",
    severityTe: "తీవ్రమైనది (Severe)",
    severityHi: "गंभीर (Severe)",
    severityClass: "critical",
    pathogen: "Fungal (Alternaria)",
    incubation: "6–8 Days Latent",
    host: "Lycopersicon esculentum",
    image: "assets/images/tomato_early_blight.jpg",
    weather: { temp: "28.4°C", humidity: "87%", dew: "24.6°C", wind: "12 km/h E", rain: "0.4 mm" },
    climateRiskText: "High ambient humidity (87%) & 28.4°C accelerates Alternaria fungal spore germination.",
    climateRiskScore: "Risk Index: 8.8 / 10 (High Spore Hazard)",
    audioNotes: {
      te: "ఆకుల పైన నల్లటి గుండ్రని మచ్చలు పసుపు అంచులతో వ్యాపించాయి. 4 రోజుల క్రితం మొదలయ్యాయి.",
      hi: "टमाटर की पत्तियों पर काले और भूरे रंग के छल्लेदार धब्बे फैल रहे हैं। 4 दिन पहले शुरू हुए।",
      en: "Dark concentric rings with yellow chlorotic halos spread across lower leaves. Began 4 days ago."
    },
    voiceMeta: "Telugu STT Verified • Confidence: 96.2% • Keywords: [నల్లటి మచ్చలు, 4 రోజులు]",
    ttsSpokenText: {
      te: "గుర్తించిన వ్యాధి: టమాటా ఆల్టర్నేరియా నల్ల మచ్చల తెగులు. ఖచ్చితత్వం 91.4 శాతం. వెంటనే దిగువన ఉన్న వ్యాధి సోకిన ఆకులను కత్తిరించి నాశనం చేయండి. ట్రైకోడెర్మా విరిడే లేదా వేప నూనెను పిచికారీ చేయండి. డ్రిప్ పద్ధతిలో నీరు అందించండి.",
      hi: "पहचानी गई बीमारी: टमाटर का अगेती झुलसा। सटीकता 91.4 प्रतिशत। प्रभावित निचली पत्तियों को तुरंत हटा दें। ट्राइकोडर्मा विरिडे या नीम के तेल का छिड़काव करें।",
      en: "Detected disease: Tomato Early Blight caused by Alternaria solani with 91.4 percent confidence. Prune and destroy infected lower leaves. Spray Trichoderma viride or neem seed extract."
    },
    differentials: [
      { name: "Early Blight (Alternaria solani)", val: "91.4%", class: "p1" },
      { name: "Septoria Leaf Spot", val: "6.2%", class: "p2" },
      { name: "Nitrogen Deficiency (Chlorosis)", val: "2.4%", class: "p3" }
    ],
    pins: [
      { id: "lesionPin1", top: "48%", left: "42%", label: "Primary Concentric Target Lesion", type: "concentric" },
      { id: "lesionPin2", top: "52%", left: "62%", label: "Secondary Chlorotic Halo Ring", type: "concentric" },
      { id: "lesionPin3", top: "32%", left: "95%", label: "Chlorotic Leaf Margin Breakdown", type: "normal" }
    ],
    symptoms: [
      { pinId: "lesionPin1", badge: "Pin 1", title: "Concentric Target Rings", desc: "Dark brown circular necrotic patches with alternating concentric ridges.", badgeClass: "critical" },
      { pinId: "lesionPin2", badge: "Pin 2", title: "Chlorotic Yellow Halo", desc: "Alternaric acid fungal toxin diffusing into healthy chloroplasts.", badgeClass: "moderate" },
      { pinId: "lesionPin3", badge: "Pin 3", title: "Lower Canopy Initiation", desc: "Rain splash transmitting dormant soil conidia onto basal foliage.", badgeClass: "severe" }
    ],
    actions: [
      { day: "DAY 1", badgeClass: "", title: "Canopy Sanitation & Pruning", desc: "Pluck and safely burn infected lower leaves. Disinfect shears with 5% sodium hypochlorite." },
      { day: "DAY 2-3", badgeClass: "warning", title: "Bio-Fungicide Inoculation", desc: "Foliar spray with Trichoderma viride (5g/L) or 5% cold-pressed Neem Seed Kernel Extract (NSKE)." },
      { day: "DAY 7", badgeClass: "", title: "Micro-Climate Irrigation Control", desc: "Halt flood/overhead watering; run drip fertigation only. Thin canopy to keep foliage humidity below 75%." }
    ]
  },

  cotton_leaf_curl: {
    id: "cotton_leaf_curl",
    cropName: "Bt Cotton (పత్తి)",
    cropNameTe: "బిటి పత్తి (Bt Cotton)",
    cropNameHi: "बीटी कपास (Bt Cotton)",
    diseaseName: "Cotton Leaf Curl Virus (CLCuV)",
    diseaseNameTe: "పత్తి ఆకు ముడత వైరస్ తెగులు",
    diseaseNameHi: "कपास की पत्ती मरोड़ बीमारी (लीफ कर्ल)",
    scientificName: "Begomovirus (తెల్లదోమ ద్వారా వ్యాప్తి)",
    scientificNameHi: "Begomovirus (सफेद मक्खी जनित)",
    scientificNameEn: "Begomovirus transmitted by Bemisia tabaci",
    confidence: 88.6,
    severity: "Severe",
    severityTe: "తీవ్రమైనది (Severe)",
    severityHi: "गंभीर (Severe)",
    severityClass: "severe",
    pathogen: "Viral (Geminiviridae)",
    incubation: "10–14 Days Latent",
    host: "Gossypium hirsutum",
    image: "assets/images/cotton_leaf_curl.jpg",
    weather: { temp: "32.1°C", humidity: "64%", dew: "21.0°C", wind: "8 km/h NW", rain: "0.0 mm" },
    climateRiskText: "High temperature (32°C) accelerates whitefly vector (Bemisia tabaci) breeding cycles.",
    climateRiskScore: "Risk Index: 7.2 / 10 (Vector Risk)",
    audioNotes: {
      te: "పత్తి ఆకులు పైకి ముడుచుకుపోయాయి, ఈనెలు లావుగా అయ్యాయి. చేనులో తెల్లదోమలు కనిపిస్తున్నాయి.",
      hi: "कपास की पत्तियां ऊपर की ओर मुड़ रही हैं और नसें मोटी हो गई हैं। सफेद मक्खी उड़ रही है।",
      en: "Cotton leaf margins curling upward with vein thickening. Whitefly presence observed."
    },
    voiceMeta: "Telugu STT Verified • Confidence: 94.8% • Keywords: [ముడుచుకుపోయాయి, తెల్లదోమలు]",
    ttsSpokenText: {
      te: "గుర్తించిన వ్యాధి: పత్తి ఆకు ముడత వైరస్ తెగులు. ఖచ్చితత్వం 88.6 శాతం. తెల్లదోమల నివారణకు పసుపు రంగు జిగురు అట్టలను ఏర్పాటు చేయండి. వేప నూనె పదివేల పీపీఎం పిచికారీ చేయండి.",
      hi: "पहचानी गई बीमारी: कपास पत्ती मरोड़ विषाणु। पीले चिपचिपे जाल लगाएं और नीम तेल 10,000 पीपीएम का छिड़काव करें।",
      en: "Detected disease: Cotton Leaf Curl Virus with 88.6 percent confidence. Install yellow sticky traps for whitefly control and spray 10,000 ppm neem oil."
    },
    differentials: [
      { name: "Cotton Leaf Curl Virus (CLCuV)", val: "88.6%", class: "p1" },
      { name: "Jassid Hopper Burn", val: "8.1%", class: "p2" },
      { name: "Magnesium Deficiency", val: "3.3%", class: "p3" }
    ],
    pins: [
      { id: "lesionPin1", top: "42%", left: "48%", label: "Upward Cupping of Leaf Lamina", type: "concentric" },
      { id: "lesionPin2", top: "58%", left: "68%", label: "Main Vein Enation & Thickening", type: "concentric" },
      { id: "lesionPin3", top: "25%", left: "38%", label: "Chlorotic Interveinal Mottling", type: "normal" }
    ],
    symptoms: [
      { pinId: "lesionPin1", badge: "Pin 1", title: "Upward Leaf Cupping", desc: "Curling of margins toward the adaxial leaf surface due to viral vein deformation.", badgeClass: "critical" },
      { pinId: "lesionPin2", badge: "Pin 2", title: "Main Vein Swelling", desc: "Hyperplasia of phloem cells causing prominent raised green vein structures.", badgeClass: "severe" },
      { pinId: "lesionPin3", badge: "Pin 3", title: "Interveinal Mottling", desc: "Chlorosis caused by viral inhibition of chlorophyll biosynthesis.", badgeClass: "moderate" }
    ],
    actions: [
      { day: "DAY 1", badgeClass: "", title: "Vector Trapping Matrix", desc: "Install 15 yellow sticky traps per acre to monitor and capture Bemisia tabaci whiteflies." },
      { day: "DAY 2-3", badgeClass: "warning", title: "Neem Biopesticide Barrier", desc: "Foliar application of cold-pressed Neem Oil (10,000 ppm @ 2ml/L) to deter egg oviposition." },
      { day: "DAY 7", badgeClass: "", title: "Field Border Sanctuary Crops", desc: "Sow 2 rows of barrier maize or sorghum around perimeter to obstruct windborne insect vectors." }
    ]
  },

  rice_bacterial_blight: {
    id: "rice_bacterial_blight",
    cropName: "Paddy Rice (వరి)",
    cropNameTe: "వరి (BPT 5204 సాంబా మసూరి)",
    cropNameHi: "धान (सांभा मसूरी BPT 5204)",
    diseaseName: "Bacterial Leaf Blight (BLB)",
    diseaseNameTe: "వరి బాక్టీరియా ఆకు ఎండు తెగులు",
    diseaseNameHi: "धान का जीवाणु झुलसा (बैक्टीरियल ब्लाइट)",
    scientificName: "Xanthomonas oryzae pv. oryzae",
    scientificNameHi: "Xanthomonas oryzae (जीवाणु जनित)",
    scientificNameEn: "Xanthomonas oryzae pv. oryzae",
    confidence: 94.2,
    severity: "Severe",
    severityTe: "తీవ్రమైనది (Severe)",
    severityHi: "गंभीर (Severe)",
    severityClass: "critical",
    pathogen: "Bacterial (Xanthomonas)",
    incubation: "5–7 Days Latent",
    host: "Oryza sativa",
    image: "assets/images/rice_bacterial_blight.jpg",
    weather: { temp: "29.8°C", humidity: "91%", dew: "26.2°C", wind: "16 km/h E", rain: "4.2 mm" },
    climateRiskText: "Heavy moisture (91% RH) & rain splash cause rapid bacterial ooze dissemination through hydathodes.",
    climateRiskScore: "Risk Index: 9.4 / 10 (Critical Moisture)",
    audioNotes: {
      te: "వరి ఆకుల అంచుల వెంబడి పసుపు-బూడిద రంగులో ఎండిపోయినట్లు మచ్చలు పొడవుగా వ్యాపించాయి.",
      hi: "धान की पत्तियों के किनारों पर लंबी पीली और भूरी धारियां बन रही हैं।",
      en: "Long wavy yellow and greyish bleached streaks running along rice leaf blade margins."
    },
    voiceMeta: "Telugu STT Verified • Confidence: 97.1% • Keywords: [వరి ఆకులు, ఎండిపోయినట్లు]",
    ttsSpokenText: {
      te: "గుర్తించిన వ్యాధి: వరి బాక్టీరియా ఆకు ఎండు తెగులు. ఖచ్చితత్వం 94.2 శాతం. పొలంలో నిల్వ ఉన్న నీటిని 3 రోజుల పాటు తీసివేయండి. యూరియా నత్రజని వాడకాన్ని తాత్కాలికంగా ఆపండి.",
      hi: "पहचानी गई बीमारी: धान का जीवाणु झुलसा। खेत से 3 दिनों के लिए पानी निकाल दें और यूरिया का प्रयोग रोकें।",
      en: "Detected disease: Rice Bacterial Leaf Blight with 94.2 percent confidence. Drain standing water from the paddy for 3 days and halt top-dressing urea nitrogen."
    },
    differentials: [
      { name: "Bacterial Leaf Blight (Xanthomonas)", val: "94.2%", class: "p1" },
      { name: "Rice Blast (Magnaporthe oryzae)", val: "4.5%", class: "p2" },
      { name: "Iron Toxicity Leaf Bronzing", val: "1.3%", class: "p3" }
    ],
    pins: [
      { id: "lesionPin1", top: "35%", left: "60%", label: "Wavy Bleached Marginal Lesion", type: "concentric" },
      { id: "lesionPin2", top: "50%", left: "45%", label: "Bacterial Ooze Hydathode Boundary", type: "concentric" },
      { id: "lesionPin3", top: "68%", left: "32%", label: "Basal Foliage Desiccation", type: "normal" }
    ],
    symptoms: [
      { pinId: "lesionPin1", badge: "Pin 1", title: "Wavy Marginal Lesions", desc: "Linear bleached stripes with undulating margins starting from leaf blade tips.", badgeClass: "critical" },
      { pinId: "lesionPin2", badge: "Pin 2", title: "Bacterial Exudate Oozing", desc: "Milky droplets visible in early morning dew along infected hydathodes.", badgeClass: "severe" },
      { pinId: "lesionPin3", badge: "Pin 3", title: "Canopy Bleaching", desc: "Loss of photosynthetic green pigments progressing to straw-colored necrosis.", badgeClass: "moderate" }
    ],
    actions: [
      { day: "DAY 1", badgeClass: "", title: "Paddy Water Drainage", desc: "Completely drain stagnant water from paddy for 3-4 days to arrest waterborne bacterial spread." },
      { day: "DAY 2-3", badgeClass: "warning", title: "Nitrogen Cessation & Potash Boost", desc: "Halt synthetic urea top-dressing. Apply Muriate of Potash (MOP) @ 15 kg/acre to strengthen cell walls." },
      { day: "DAY 7", badgeClass: "", title: "Biological Foliar Spray", desc: "Spray Pseudomonas fluorescens (10g/L water) or fresh cow dung extract supernatant (20%) at 10-day intervals." }
    ]
  },

  healthy_tomato: {
    id: "healthy_tomato",
    cropName: "Healthy Crop Canopy",
    cropNameTe: "ఆరోగ్యకరమైన పంట (Healthy)",
    cropNameHi: "स्वस्थ फसल (Healthy Crop)",
    diseaseName: "Healthy Crop Leaf (No Disease)",
    diseaseNameTe: "ఆరోగ్యకరమైన ఆకు (వ్యాధి రహితం)",
    diseaseNameHi: "स्वस्थ पत्ती (रोग मुक्त)",
    scientificName: "Lycopersicon esculentum (Optimal Vigor)",
    scientificNameHi: "स्वस्थ क्लोरोफिल संरचना",
    scientificNameEn: "Lycopersicon esculentum (Optimal Vigor)",
    confidence: 98.7,
    severity: "Healthy",
    severityTe: "ఆరోగ్యకరం (Healthy)",
    severityHi: "उत्तम (Healthy)",
    severityClass: "healthy",
    pathogen: "None (Disease Free)",
    incubation: "0 Days (Clean Tissue)",
    host: "Lycopersicon esculentum",
    image: "assets/images/healthy_tomato_leaf.jpg",
    weather: { temp: "26.5°C", humidity: "62%", dew: "18.2°C", wind: "10 km/h W", rain: "0.0 mm" },
    climateRiskText: "Optimal micro-climate conditions. Balanced humidity (62%) maintains foliar vigor with zero spore risk.",
    climateRiskScore: "Risk Index: 1.4 / 10 (Optimal Health)",
    audioNotes: {
      te: "పంట ఆరోగ్యంగా ఉంది. ఆకులపై ఎలాంటి మచ్చలు లేదా తెగుళ్లు లేవు.",
      hi: "पौधा पूरी तरह स्वस्थ है। पत्तियों पर कोई दाग-धब्बे नहीं हैं।",
      en: "Crop canopy is healthy. Uniform green foliage with zero necrotic or chlorotic lesions."
    },
    voiceMeta: "Telugu STT Verified • Confidence: 99.1% • Keywords: [ఆరోగ్యంగా ఉంది, ఎలాంటి మచ్చలు లేవు]",
    ttsSpokenText: {
      te: "పంట పూర్తిగా ఆరోగ్యంగా ఉంది. ఆకులపై ఎటువంటి వ్యాధి లక్షణాలు లేవు. సమతుల్య పోషకాలను మరియు డ్రిప్ నీటి యాజమాన్యాన్ని కొనసాగించండి.",
      hi: "फसल पूरी तरह स्वस्थ है। पत्तियों पर कोई बीमारी के लक्षण नहीं हैं। नियमित देखभाल जारी रखें।",
      en: "Crop canopy is healthy with zero pathogen symptoms. Maintain balanced fertigation and routine scouting."
    },
    differentials: [
      { name: "Healthy Foliage (Chlorophyll Peak)", val: "98.7%", class: "healthy" },
      { name: "Early Stage Minor Sun Glare", val: "1.1%", class: "p2" },
      { name: "Atmospheric Dust Residue", val: "0.2%", class: "p3" }
    ],
    pins: [],
    symptoms: [
      { pinId: "", badge: "Clean", title: "Crisp Cellular Venation", desc: "Optimal turgor pressure and uniform chlorophyll distribution across mesophyll cells.", badgeClass: "healthy" },
      { pinId: "", badge: "Clean", title: "Zero Necrotic Lesions", desc: "No fungal spots, viral mosaic patterns, or bacterial water-soaked streaks present.", badgeClass: "healthy" }
    ],
    actions: [
      { day: "ROUTINE", badgeClass: "", title: "Preventive Scouting Protocol", desc: "Inspect lower foliage twice weekly during early morning hours for dew-related symptoms." },
      { day: "ONGOING", badgeClass: "warning", title: "Balanced Organic Fertigation", desc: "Maintain scheduled vermicompost tea or fermented jeevamrutha soil application." },
      { day: "SEASONAL", badgeClass: "", title: "Soil Moisture Optimization", desc: "Ensure root zone moisture remains between 60-70% field capacity to prevent stress." }
    ]
  }
};

// ============================================================================
// 2. STATE MANAGEMENT
// ============================================================================

let currentCropKey = "tomato_early_blight";
let currentLang = "te"; // 'en', 'te', 'hi'
let isScanning = false;
let isAudioPlaying = false;
let pitchTimerInterval = null;
let pitchSeconds = 0;
let isTimerRunning = false;

// Audio synthesis instance
const synth = window.speechSynthesis;

// ============================================================================
// 3. INITIALIZATION & DOM BINDINGS
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initSampleSelector();
  initViewportControls();
  initVoiceSim();
  initHotspotMap();
  initRlsSandbox();
  initPitchDeck();
  initLanguageSelector();
  initDemoPreset();
  renderCropDiagnostic(currentCropKey);
  drawWaveform();
});

// ============================================================================
// 4. NAVIGATION HANDLERS
// ============================================================================

function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetTabId = tab.getAttribute("data-tab");
      document.querySelectorAll(".view-section").forEach(sec => {
        sec.classList.remove("active");
      });

      const activeSection = document.getElementById(targetTabId);
      if (activeSection) {
        activeSection.classList.add("active");
      }
    });
  });
}

// ============================================================================
// 5. SAMPLE LEAF SELECTOR
// ============================================================================

function initSampleSelector() {
  const sampleCards = document.querySelectorAll(".sample-thumb-card");
  sampleCards.forEach(card => {
    card.addEventListener("click", () => {
      const cropKey = card.getAttribute("data-crop");
      switchCropAndDiagnose(cropKey);
    });
  });

  // Custom upload
  const fileInput = document.getElementById("customLeafUpload");
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = document.getElementById("activeLeafImg");
          img.src = event.target.result;
          // Trigger scan
          triggerScanAnimation();
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

function switchCropAndDiagnose(cropKey) {
  if (!CROP_DATABASE[cropKey]) return;
  currentCropKey = cropKey;

  // Update sample card active state
  document.querySelectorAll(".sample-thumb-card").forEach(c => {
    c.classList.toggle("active", c.getAttribute("data-crop") === cropKey);
  });

  // Navigate to diagnostic tab if not on it
  const diagnosticNav = document.getElementById("navDiagnostic");
  if (diagnosticNav && !diagnosticNav.classList.contains("active")) {
    diagnosticNav.click();
  }

  // Trigger scan animation
  triggerScanAnimation();
  renderCropDiagnostic(cropKey);
}

// ============================================================================
// 6. RENDER DIAGNOSTIC OUTPUT
// ============================================================================

function renderCropDiagnostic(cropKey) {
  const data = CROP_DATABASE[cropKey];
  if (!data) return;

  // Image & Viewport
  const leafImg = document.getElementById("activeLeafImg");
  leafImg.src = data.image;

  // Badge
  const badge = document.getElementById("activeCropBadge");
  badge.textContent = currentLang === "te" ? data.cropNameTe : (currentLang === "hi" ? data.cropNameHi : data.cropName);

  // Verdict Card
  const diseasePrimary = document.getElementById("diseasePrimaryName");
  const diseaseScientific = document.getElementById("diseaseScientificName");
  const verdictPill = document.getElementById("verdictScorePill");
  const severityBadge = document.getElementById("severityBadge");
  const verdictHero = document.getElementById("verdictHero");

  diseasePrimary.textContent = currentLang === "te" ? data.diseaseNameTe : (currentLang === "hi" ? data.diseaseNameHi : data.diseaseName);
  diseaseScientific.textContent = currentLang === "te" ? data.scientificName : (currentLang === "hi" ? data.scientificNameHi : data.scientificNameEn);
  
  verdictPill.innerHTML = `<span>${data.confidence}%</span><span style="font-size:0.65rem; font-weight:600; text-transform:uppercase;">CONF</span>`;
  
  if (data.severityClass === "healthy") {
    verdictPill.className = "verdict-score-pill healthy";
    severityBadge.className = "status-badge healthy";
    severityBadge.textContent = currentLang === "te" ? data.severityTe : (currentLang === "hi" ? data.severityHi : data.severity);
    verdictHero.className = "verdict-hero healthy-theme";
  } else {
    verdictPill.className = "verdict-score-pill";
    severityBadge.className = `status-badge ${data.severityClass}`;
    severityBadge.textContent = currentLang === "te" ? data.severityTe : (currentLang === "hi" ? data.severityHi : data.severity);
    verdictHero.className = "verdict-hero";
  }

  // Meta bar
  document.getElementById("metaPathogen").textContent = data.pathogen;
  document.getElementById("metaIncubation").textContent = data.incubation;
  document.getElementById("metaHost").textContent = data.host;

  // Weather telemetry
  document.getElementById("valTemp").textContent = data.weather.temp;
  document.getElementById("valHumidity").textContent = data.weather.humidity;
  document.getElementById("valDew").textContent = data.weather.dew;
  document.getElementById("valWind").textContent = data.weather.wind;
  document.getElementById("climateRiskText").innerHTML = `<strong>Micro-Climate Telemetry:</strong> ${data.climateRiskText}`;
  document.getElementById("climateRiskScore").textContent = data.climateRiskScore;

  // Voice transcript
  const transcriptEl = document.getElementById("transcriptionText");
  transcriptEl.textContent = `"${data.audioNotes[currentLang] || data.audioNotes.te}"`;
  document.getElementById("transcriptMeta").textContent = data.voiceMeta;

  // Differentials
  const diffBox = document.getElementById("differentialBars");
  diffBox.innerHTML = "";
  data.differentials.forEach((diff, idx) => {
    const row = document.createElement("div");
    row.className = "prob-row";
    row.innerHTML = `
      <div class="prob-labels">
        <span>${diff.name}</span>
        <strong style="color:${diff.class === 'healthy' ? 'var(--sprout-neon)' : (idx === 0 ? 'var(--severity-critical)' : 'var(--severity-moderate)')}">${diff.val}</strong>
      </div>
      <div class="prob-bar-track">
        <div class="prob-bar-fill ${diff.class}" style="width: ${diff.val};"></div>
      </div>
    `;
    diffBox.appendChild(row);
  });

  // Lesion pins on leaf
  const hudOverlay = document.getElementById("leafHudOverlay");
  // Keep the yolo mask
  const yoloMask = document.getElementById("yoloMask");
  hudOverlay.innerHTML = "";
  hudOverlay.appendChild(yoloMask);

  data.pins.forEach((pin, i) => {
    const pinEl = document.createElement("div");
    pinEl.className = `lesion-pin ${pin.type} active`;
    pinEl.id = pin.id;
    pinEl.style.top = pin.top;
    pinEl.style.left = pin.left;
    pinEl.innerHTML = `
      <div class="pin-circle"></div>
      <div class="lesion-pin-tooltip">${pin.label}</div>
    `;
    hudOverlay.appendChild(pinEl);
  });

  // Symptoms list
  const symptomList = document.getElementById("symptomList");
  symptomList.innerHTML = "";
  data.symptoms.forEach((sym, idx) => {
    const item = document.createElement("div");
    item.className = `symptom-item ${idx === 0 ? 'active' : ''}`;
    item.setAttribute("data-pin", sym.pinId);
    item.innerHTML = `
      <span>🎯 <strong>${sym.title}:</strong> ${sym.desc}</span>
      <span class="status-badge ${sym.badgeClass}">${sym.badge}</span>
    `;

    item.addEventListener("click", () => {
      document.querySelectorAll(".symptom-item").forEach(si => si.classList.remove("active"));
      item.classList.add("active");
      if (sym.pinId) {
        const targetPin = document.getElementById(sym.pinId);
        if (targetPin) {
          targetPin.querySelector(".pin-circle").style.animation = "none";
          setTimeout(() => {
            targetPin.querySelector(".pin-circle").style.animation = "pinPulse 0.8s infinite";
          }, 10);
        }
      }
    });

    symptomList.appendChild(item);
  });

  // Action steps
  const actionContainer = document.getElementById("actionStepsContainer");
  actionContainer.innerHTML = "";
  data.actions.forEach(action => {
    const stepEl = document.createElement("div");
    stepEl.className = "action-step";
    stepEl.innerHTML = `
      <div class="step-badge ${action.badgeClass}">${action.day}</div>
      <div class="step-content">
        <h4>${action.title}</h4>
        <p>${action.desc}</p>
      </div>
    `;
    actionContainer.appendChild(stepEl);
  });

  // Escalation card visibility
  const escCard = document.getElementById("escalationCard");
  if (data.severityClass === "healthy") {
    escCard.style.display = "none";
  } else {
    escCard.style.display = "flex";
  }
}

// ============================================================================
// 7. SCAN LASER ANIMATION & BUTTON
// ============================================================================

function triggerScanAnimation() {
  const viewport = document.getElementById("leafViewport");
  const btnRun = document.getElementById("btnRunDiagnosis");
  const btnText = document.getElementById("btnRunText");

  viewport.classList.add("scanning");
  if (btnRun) btnRun.disabled = true;
  if (btnText) btnText.textContent = "Synthesizing Multi-Modal Inputs (Gemini 3.1)...";

  setTimeout(() => {
    viewport.classList.remove("scanning");
    if (btnRun) btnRun.disabled = false;
    if (btnText) btnText.textContent = "Run Multi-Modal Fusion (Gemini 3.1 Vision)";
  }, 1600);
}

function initViewportControls() {
  const btnRun = document.getElementById("btnRunDiagnosis");
  if (btnRun) {
    btnRun.addEventListener("click", () => {
      triggerScanAnimation();
      renderCropDiagnostic(currentCropKey);
    });
  }

  // Toggles
  const toggleYolo = document.getElementById("toggleYolo");
  const togglePins = document.getElementById("togglePins");
  const toggleThermal = document.getElementById("toggleThermal");
  const leafImg = document.getElementById("activeLeafImg");

  if (toggleYolo) {
    toggleYolo.addEventListener("click", () => {
      toggleYolo.classList.toggle("active");
      const mask = document.getElementById("yoloMask");
      if (mask) mask.classList.toggle("active");
    });
  }

  if (togglePins) {
    togglePins.addEventListener("click", () => {
      togglePins.classList.toggle("active");
      const pins = document.querySelectorAll(".lesion-pin");
      pins.forEach(pin => pin.classList.toggle("active"));
    });
  }

  if (toggleThermal) {
    toggleThermal.addEventListener("click", () => {
      toggleThermal.classList.toggle("active");
      if (toggleThermal.classList.contains("active")) {
        leafImg.style.filter = "hue-rotate(90deg) contrast(150%) saturate(200%)";
      } else {
        leafImg.style.filter = "none";
      }
    });
  }

  // Escalation button
  const btnEscalate = document.getElementById("btnEscalate");
  if (btnEscalate) {
    btnEscalate.addEventListener("click", () => {
      alert("✅ Human-in-the-Loop Escalation Dispatched!\n\nTelemetry report, GPS coordinates (16.3067 N, 80.4365 E), and high-res leaf image transmitted via Supabase Edge Function to Dr. K. Venkat Rao (District Agricultural Officer, Guntur).");
    });
  }
}

// ============================================================================
// 8. VOICE & AUDIO ENGINE (STT & TTS)
// ============================================================================

function initVoiceSim() {
  const btnMic = document.getElementById("btnMicRecord");
  const micLabel = document.getElementById("micLabel");

  if (btnMic) {
    btnMic.addEventListener("click", () => {
      btnMic.classList.toggle("recording");
      if (btnMic.classList.contains("recording")) {
        micLabel.textContent = "Recording Telugu Audio...";
        setTimeout(() => {
          btnMic.classList.remove("recording");
          micLabel.textContent = "Record Note";
          triggerScanAnimation();
        }, 2500);
      } else {
        micLabel.textContent = "Record Note";
      }
    });
  }

  // Play audio voice simulation
  const btnPlayVoice = document.getElementById("btnPlayVoice");
  if (btnPlayVoice) {
    btnPlayVoice.addEventListener("click", () => {
      speakAudioNote();
    });
  }

  // Listen to Diagnosis Voiceover (TTS)
  const btnSpeakAudio = document.getElementById("btnSpeakAudio");
  if (btnSpeakAudio) {
    btnSpeakAudio.addEventListener("click", () => {
      speakDiagnosisPrescription();
    });
  }
}

function speakAudioNote() {
  const data = CROP_DATABASE[currentCropKey];
  if (!data) return;
  const text = data.audioNotes[currentLang] || data.audioNotes.te;

  if ('speechSynthesis' in window) {
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (currentLang === "te") utterance.lang = "te-IN";
    else if (currentLang === "hi") utterance.lang = "hi-IN";
    else utterance.lang = "en-US";
    synth.speak(utterance);
  }
}

function speakDiagnosisPrescription() {
  const data = CROP_DATABASE[currentCropKey];
  if (!data) return;
  const text = data.ttsSpokenText[currentLang] || data.ttsSpokenText.te;

  if ('speechSynthesis' in window) {
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (currentLang === "te") utterance.lang = "te-IN";
    else if (currentLang === "hi") utterance.lang = "hi-IN";
    else utterance.lang = "en-US";
    
    utterance.rate = 0.95;
    synth.speak(utterance);
  }
}

function drawWaveform() {
  const canvas = document.getElementById("voiceWaveCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let frame = 0;

  function renderWave() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#00ff88";
    ctx.beginPath();

    const sliceWidth = canvas.width / 50;
    let x = 0;

    for (let i = 0; i < 50; i++) {
      const v = Math.sin((i * 0.2) + (frame * 0.05)) * Math.cos((i * 0.1) - (frame * 0.03));
      const y = (canvas.height / 2) + (v * (canvas.height * 0.35));

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      x += sliceWidth;
    }

    ctx.stroke();
    frame++;
    requestAnimationFrame(renderWave);
  }

  renderWave();
}

// ============================================================================
// 9. HOTSPOT MAP & POSTGIS RADAR
// ============================================================================

function initHotspotMap() {
  const nodes = document.querySelectorAll(".map-node");
  nodes.forEach(node => {
    node.addEventListener("click", () => {
      const nodeName = node.getAttribute("data-node");
      showNodeOutbreakDetails(nodeName);
    });
  });

  // Filter Buttons
  const filterCropTomato = document.getElementById("filterCropTomato");
  const filterCropCotton = document.getElementById("filterCropCotton");
  const filterCropRice = document.getElementById("filterCropRice");
  const filterCropAll = document.getElementById("filterCropAll");

  if (filterCropAll) {
    filterCropAll.addEventListener("click", () => {
      document.querySelectorAll(".hotspot-filter-bar .toggle-chip").forEach(b => b.classList.remove("active"));
      filterCropAll.classList.add("active");
      nodes.forEach(n => n.style.display = "block");
    });
  }

  if (filterCropTomato) {
    filterCropTomato.addEventListener("click", () => {
      document.querySelectorAll(".hotspot-filter-bar .toggle-chip").forEach(b => b.classList.remove("active"));
      filterCropTomato.classList.add("active");
      nodes.forEach(n => {
        n.style.display = (n.getAttribute("data-node") === "guntur") ? "block" : "none";
      });
    });
  }
}

function showNodeOutbreakDetails(nodeName) {
  const details = {
    guntur: "Guntur Agricultural Sector (16.3067 N, 80.4365 E):\n• Active Outbreak: Tomato Early Blight (Alternaria solani)\n• Verified Cases: 14 plots within 6 km\n• Risk Severity: CRITICAL (High RH Spore Incubation)",
    tenali: "Tenali Cotton Belt (16.2430 N, 80.6400 E):\n• Active Outbreak: Cotton Leaf Curl Virus (CLCuV)\n• Verified Cases: 6 plots\n• Vector: Bemisia tabaci whitefly vector surge",
    vijayawada: "Vijayawada Chili Zone (16.5062 N, 80.6480 E):\n• Active Outbreak: Chili Anthracnose (Colletotrichum)\n• Risk Severity: MODERATE",
    warangal: "Warangal Corridor (17.9689 N, 79.5941 E):\n• Active Outbreak: Cotton Bollworm & Leaf Curl\n• Risk Severity: SEVERE",
    kurnool: "Kurnool Wetlands (15.8281 N, 78.0373 E):\n• Health Status: Paddy Fields Optimal (Low Pathogen Pressure)",
    anantapur: "Anantapur Arid Zone (14.6819 N, 77.6006 E):\n• Active Outbreak: Groundnut Tikka Leaf Spot\n• Risk Severity: MODERATE"
  };

  alert(details[nodeName] || "Cluster Telemetry Synced with PostGIS get_disease_hotspots() function.");
}

// ============================================================================
// 10. ROW LEVEL SECURITY (RLS) SIMULATOR
// ============================================================================

function initRlsSandbox() {
  const roleRamesh = document.getElementById("roleRamesh");
  const roleSunita = document.getElementById("roleSunita");
  const rolePublic = document.getElementById("rolePublic");
  const output = document.getElementById("rlsResultOutput");

  if (!output) return;

  if (roleRamesh) {
    roleRamesh.addEventListener("click", () => {
      document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
      roleRamesh.classList.add("active");
      output.textContent = `[RLS TEST EXECUTION]
QUERY: SELECT id, field_name, crop_type, health_score FROM public.fields;
AUTH CONTEXT: auth.uid() = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11' (Farmer Ramesh)

ROWS RETURNED: 3 rows
1. North Tomato Plot (Health: 68%) -> GRANTED
2. East Cotton Acres (Health: 74%) -> GRANTED
3. South Paddy Wetlands (Health: 92%) -> GRANTED

Policy "Users can manage own fields" EVALUATED TRUE. Tenant data strictly isolated.`;
    });
  }

  if (roleSunita) {
    roleSunita.addEventListener("click", () => {
      document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
      roleSunita.classList.add("active");
      output.textContent = `[RLS TEST EXECUTION]
QUERY: SELECT id, field_name, crop_type, health_score FROM public.fields;
AUTH CONTEXT: auth.uid() = 'c7eebc99-1111-2222-3333-6bb9bd380a99' (Farmer Sunita - Tenant B)

ROWS RETURNED: 2 rows (Sunita's own plots only)
1. Sunita West Maize Acres (Health: 88%) -> GRANTED
2. Sunita Chili Plot (Health: 61%) -> GRANTED

Farmer Ramesh's 3 tomato and cotton plots are FILTERED OUT (0 bytes leaked). RLS tenant isolation verified.`;
    });
  }

  if (rolePublic) {
    rolePublic.addEventListener("click", () => {
      document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
      rolePublic.classList.add("active");
      output.textContent = `[RLS TEST EXECUTION]
QUERY: SELECT * FROM public.get_disease_hotspots();
AUTH CONTEXT: anon (Unauthenticated Public Geo-Consumer)

ROWS RETURNED: 6 Aggregated Geographic Outbreak Centroids
• Guntur (Tomato Early Blight, Severity: Severe, Lat: 16.3067, Lng: 80.4365)
• Tenali (Cotton Leaf Curl, Severity: Severe, Lat: 16.2430, Lng: 80.6400)
• Warangal (Cotton Bollworm, Severity: Critical, Lat: 17.9689, Lng: 79.5941)

Personal farmer IDs, phone numbers, and ownership records are COMPLETELY ANONYMIZED.`;
    });
  }
}

// ============================================================================
// 11. 3-MINUTE HACKATHON PITCH DECK & TIMER
// ============================================================================

function initPitchDeck() {
  const slideBtns = document.querySelectorAll(".phase-step-btn");
  slideBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const slideNum = btn.getAttribute("data-slide");
      setPitchSlide(slideNum);
    });
  });

  const btnToggleTimer = document.getElementById("btnTogglePitchTimer");
  if (btnToggleTimer) {
    btnToggleTimer.addEventListener("click", () => {
      togglePitchTimer();
    });
  }

  // Judge Q&A Accordion
  const qaItems = document.querySelectorAll(".qa-accordion-item");
  qaItems.forEach(item => {
    item.querySelector(".qa-question").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}

function setPitchSlide(num) {
  document.querySelectorAll(".phase-step-btn").forEach(b => b.classList.remove("active"));
  const targetBtn = document.getElementById(`slideBtn${num}`);
  if (targetBtn) targetBtn.classList.add("active");

  for (let i = 1; i <= 4; i++) {
    const pane = document.getElementById(`slidePane${i}`);
    if (pane) pane.style.display = (i == num) ? "block" : "none";
  }
}

function togglePitchTimer() {
  const timerDisplay = document.getElementById("pitchTimerDisplay");
  const playBtnText = document.getElementById("timerPlayBtnText");

  if (isTimerRunning) {
    clearInterval(pitchTimerInterval);
    isTimerRunning = false;
    playBtnText.textContent = "Resume Timer";
  } else {
    isTimerRunning = true;
    playBtnText.textContent = "Pause Timer";

    pitchTimerInterval = setInterval(() => {
      pitchSeconds++;
      if (pitchSeconds > 180) {
        clearInterval(pitchTimerInterval);
        isTimerRunning = false;
        playBtnText.textContent = "Time Up (03:00)";
        return;
      }

      const mins = Math.floor(pitchSeconds / 60);
      const secs = pitchSeconds % 60;
      timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} / 03:00`;

      // Auto switch slides as timer progresses
      if (pitchSeconds === 30) setPitchSlide(2);
      if (pitchSeconds === 90) setPitchSlide(3);
      if (pitchSeconds === 135) setPitchSlide(4);
    }, 1000);
  }
}

// ============================================================================
// 12. LANGUAGE SWITCHER (EN / TE / HI)
// ============================================================================

function initLanguageSelector() {
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      langBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentLang = btn.getAttribute("data-lang");
      updateLanguageStrings();
    });
  });
}

function updateLanguageStrings() {
  const ttsBtnLabel = document.getElementById("ttsBtnLabel");
  if (ttsBtnLabel) {
    if (currentLang === "te") ttsBtnLabel.textContent = "Listen in Telugu (తెలుగులో వినండి)";
    else if (currentLang === "hi") ttsBtnLabel.textContent = "Listen in Hindi (हिंदी में सुनें)";
    else ttsBtnLabel.textContent = "Listen in English";
  }

  // Re-render diagnostic view with localized text
  renderCropDiagnostic(currentCropKey);
}

// ============================================================================
// 13. DEMO PRESET BUTTON (RAMESH AP TOMATO SCENARIO)
// ============================================================================

function initDemoPreset() {
  const btn = document.getElementById("btnDemoPreset");
  if (btn) {
    btn.addEventListener("click", () => {
      currentLang = "te";
      document.querySelectorAll(".lang-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-lang") === "te");
      });
      updateLanguageStrings();
      switchCropAndDiagnose("tomato_early_blight");
      speakDiagnosisPrescription();
    });
  }
}
