import pandas as pd

# Path to crop data
CROP_DATA_PATH = './training/crop_data.csv'
crop_df = pd.read_csv(CROP_DATA_PATH)

# 🌾 Multilingual Fertilizer suggestions and descriptions
FERTILIZER_MAP = {
    "en": {
        "N": "Urea — Provides fast-release nitrogen for vegetative growth.",
        "P": "Single Super Phosphate — Boosts root development and flowering.",
        "K": "Muriate of Potash — Improves fruit quality and disease resistance.",
        "pH_low": "Apply Lime — Raises acidic soil pH to optimal levels.",
        "pH_high": "Apply Sulfur — Lowers alkaline soil pH for better nutrient uptake.",
        "optimal": "✅ Your soil values are optimal — no fertilizer needed!"
    },
    "hi": {
        "N": "यूरिया — तेज़ी से नाइट्रोजन प्रदान करता है जिससे पौधों की वृद्धि होती है।",
        "P": "सिंगल सुपर फॉस्फेट — जड़ों के विकास और फूल आने को बढ़ावा देता है।",
        "K": "म्यूरिएट ऑफ पोटाश — फलों की गुणवत्ता और रोग प्रतिरोधक क्षमता बढ़ाता है।",
        "pH_low": "चूना डालें — अम्लीय मिट्टी के pH को उचित स्तर पर लाता है।",
        "pH_high": "गंधक डालें — क्षारीय मिट्टी के pH को कम करता है ताकि पोषक तत्वों का अवशोषण बेहतर हो।",
        "optimal": "✅ आपकी मिट्टी के मान सही हैं — किसी अतिरिक्त खाद की आवश्यकता नहीं है!"
    },
    "te": {
        "N": "యూరియా — మొక్కల వేగవంతమైన వృద్ధికి నైట్రోజన్‌ను అందిస్తుంది.",
        "P": "సింగిల్ సూపర్ ఫాస్ఫేట్ — వేర్ల పెరుగుదల మరియు పువ్వుల ఏర్పాటుకు సహాయపడుతుంది.",
        "K": "మ్యూరియేట్ ఆఫ్ పొటాష్ — పండ్ల నాణ్యతను మరియు వ్యాధి నిరోధకతను మెరుగుపరుస్తుంది.",
        "pH_low": "లైమ్ వేయండి — ఆమ్లత్వం ఉన్న నేల యొక్క pH ని సరైన స్థాయికి పెంచుతుంది.",
        "pH_high": "సల్ఫర్ వేయండి — క్షార నేల యొక్క pH ని తగ్గించి పోషక పదార్థాల శోషణను మెరుగుపరుస్తుంది.",
        "optimal": "✅ మీ నేల విలువలు అనుకూలంగా ఉన్నాయి — అదనపు ఎరువులు అవసరం లేదు!"
    }
}

# 🌿 Fertilizer recommendation function
def recommend_fertilizer(crop, N, P, K, pH, lang='en'):
    # Validate language
    if lang not in FERTILIZER_MAP:
        lang = 'en'  # fallback to English

    # Validate crop
    crop_row = crop_df[crop_df['crop'].str.lower() == crop.lower()]
    if crop_row.empty:
        return {"error": f"No ideal values found for crop '{crop}'."}

    ideal = crop_row.iloc[0]
    recs = []

    try:
        # Compare NPK and pH values
        if float(N) < ideal['N']:
            recs.append(FERTILIZER_MAP[lang]['N'])
        if float(P) < ideal['P']:
            recs.append(FERTILIZER_MAP[lang]['P'])
        if float(K) < ideal['K']:
            recs.append(FERTILIZER_MAP[lang]['K'])

        if float(pH) < ideal['pH'] - 0.3:
            recs.append(FERTILIZER_MAP[lang]['pH_low'])
        elif float(pH) > ideal['pH'] + 0.3:
            recs.append(FERTILIZER_MAP[lang]['pH_high'])
    except Exception as e:
        return {"error": f"Invalid input values. {str(e)}"}

    # Default optimal message if no recommendations
    if not recs:
        recs.append(FERTILIZER_MAP[lang]['optimal'])

    # Return result
    return {
        "crop": crop.title(),
        "recommendations": recs,
        "ideal": {
            "N": int(ideal["N"]),
            "P": int(ideal["P"]),
            "K": int(ideal["K"]),
            "pH": float(ideal["pH"])
        }
    }

# 🌾 Example usage
if __name__ == "__main__":
    print(recommend_fertilizer("Rice", 40, 30, 25, 5.5, lang="en"))
    print(recommend_fertilizer("Wheat", 120, 60, 50, 7.2, lang="hi"))
    print(recommend_fertilizer("Maize", 90, 40, 40, 6.8, lang="te"))
