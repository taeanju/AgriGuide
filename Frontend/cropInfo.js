// cropData.js
const cropInfo = {
  "Rice": {
    en: {
      description: "Rice thrives in water-rich areas and fulfills staple food demand. Ideal for monsoon or irrigated fields.",
      marketRate: "₹20–₹30/kg",
      videoLink: "https://www.youtube.com/watch?v=-eBrAm64fpg",
      fertilizer: "High NPK with balanced pH ensures good tillering and grain filling."
    },
    hi: {
      description: "चावल जलयुक्त क्षेत्रों में अच्छी तरह उगता है और यह भोजन में मुख्य है। मोनसून या सिंचाई क्षेत्रों के लिए उपयुक्त।",
      marketRate: "₹20–₹30/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=-eBrAm64fpg",
      fertilizer: "उच्च NPK और संतुलित pH अच्छे तने और दाने के विकास में मदद करता है।"
    },
    te: {
      description: "నీరు సమృద్ధిగా లభించే ప్రాంతాల్లో బియ్యం బాగా పెరుగుతుంది మరియు ఇది ఆహారంలో మౌలికంగా ఉంటుంది. వర్షకాలంలో లేదా నీరు ఉన్న భూమి కోసం అనుకూలం.",
      marketRate: "₹20–₹30/కిలో",
      videoLink: "https://www.youtube.com/watch?v=-eBrAm64fpg",
      fertilizer: "ఉన్నత NPK – pH సంతులనం మంచి దిగుబడికి అనుకూలం."
    }
  },
  "Wheat": {
    en: {
      description: "Wheat prefers cooler climates and delivers strong grain yields in rabi season.",
      marketRate: "₹18–₹25/kg",
      videoLink: "https://www.youtube.com/watch?v=JN0ICendQns",
      fertilizer: "Balanced NPK promotes tillering and grain size in wheat."
    },
    hi: {
      description: "गेहूं ठंडे मौसम को पसंद करता है और रबी मौसम में अच्छी उपज देता है।",
      marketRate: "₹18–₹25/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=JN0ICendQns",
      fertilizer: "संतुलित NPK गेहूं में तने और दाने के आकार में वृद्धि करता है।"
    },
    te: {
      description: "గోధుమ శీతల వాతావరణంలో బాగా పెరుగుతుంది మరియు రబీ సీజన్లో మంచి దిగుబడి ఇస్తుంది.",
      marketRate: "₹18–₹25/కిలో",
      videoLink: "https://www.youtube.com/watch?v=JN0ICendQns",
      fertilizer: "సమతుల NPK గోధుమ తునకలు మరియు ధాన్యం ఆకారానికి ఉపకరిస్తుంది."
    }
  },
  "Maize": {
    en: {
      description: "Maize (corn) adapts well to diverse climates and matures quickly, making it lucrative for both grain and fodder.",
      marketRate: "₹15–₹22/kg",
      videoLink: "https://www.youtube.com/watch?v=uhVUKK3h0L4",
      fertilizer: "Higher phosphorus promotes strong root development and potassium ensures good cob filling."
    },
    hi: {
      description: "मक्का विभिन्न जलवायु में अच्छी तरह उगता है और जल्दी पक जाता है—अनाज और चारे दोनों के लिए लाभदायक।",
      marketRate: "₹15–₹22/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=uhVUKK3h0L4",
      fertilizer: "उच्च फॉस्फोरस मजबूत जड़ और पोटेशियम अच्छी मोईरी भरने में मदद करता है।"
    },
    te: {
      description: "మొక్క వివిధ వాతావరణంలో బాగా పెరిగి త్వరగా పక్వ చెందుతూ ధాన్యానికి మరియు పశువు పాలికాపై లాభదాయకంగా ఉంటుంది.",
      marketRate: "₹15–₹22/కిలో",
      videoLink: "https://www.youtube.com/watch?v=uhVUKK3h0L4",
      fertilizer: "పెద్ద ఫాస్ఫరస్ బలమైన ముల్లిస్తమును మరియు పొటాషియం బలమైన ధాన్యాభరణకు సహాయం చేస్తుంది."
    }
  },
  "Bajra": {
    en: {
      description: "Bajra (pearl millet) grows in arid, low-fertility soils and is drought-tolerant—excellent for semi-arid regions.",
      marketRate: "₹14–₹20/kg",
      videoLink: "https://www.youtube.com/watch?v=w-9ZzD75_A0",
      fertilizer: "Moderate nitrogen encourages leafy growth; phosphorous supports deeper rooting in challenging soils."
    },
    hi: {
      description: "बाजरा (मोती बाजरा) शुष्क और कम उपजाऊ मिट्टी में उगता है और सूखा सहिष्णु होता है—अर्ध-शुष्क क्षेत्रों के लिए उत्कृष्ट।",
      marketRate: "₹14–₹20/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=w-9ZzD75_A0",
      fertilizer: "मध्यम नाइट्रोजन पत्तोवर्धन को बढ़ावा देता है; फॉस्फोरस गहरी जड़ें विकसित करता है।"
    },
    te: {
      description: "బజ్రా (పెర్ల్ మిల్లెట్) ఏరోబిక్, తక్కువ తీసుకోగల ఉన్న మట్టిలో పెద్దగా పెరిగి, దుర్భల ముస్తాఫులకు తట్టుకొంటుంది.",
      marketRate: "₹14–₹20/కిలో",
      videoLink: "https://www.youtube.com/watch?v=w-9ZzD75_A0",
      fertilizer: "మధ్యస్థ నైట్రోజన్ ఆకుల వృద్ధిని ప్రోత్సహిస్తుంది; ఫాస్ఫరస్ బలమైన వేరు జాడమును పెంపొందిస్తుంది."
    }
  },
  "Sugarcane": {
    en: {
      description: "Sugarcane is a high‑value cash crop requiring plenty of sunshine and water; excellent returns when managed well.",
      marketRate: "₹30–₹40/quintal",
      videoLink: "https://www.youtube.com/watch?v=ZfTIyrGQ8Fc",
      fertilizer: "High nitrogen boosts vegetative growth; potassium is essential for sucrose accumulation."
    },
    hi: {
      description: "गन्ना एक उच्च-मूल्य नकदी फसल है जिसे पर्याप्त धूप और पानी चाहिए; अच्छी देखभाल पर उत्कृष्ट लाभ देती है।",
      marketRate: "₹30–₹40/क्विंटल",
      videoLink: "https://www.youtube.com/watch?v=ZfTIyrGQ8Fc",
      fertilizer: "उच्च नाइट्रोजन पौधों की वृद्धि बढ़ाता है; पोटेशियम गन्ने में चीनी संचयन के लिए आवश्यक है।"
    },
    te: {
      description: "ఉప్పు గింజల మొక్క ఒక అధిక‑విలువ నగదు పంట, ఇది చాల సమయం సూర్యరశ్మి మరియు నీటిని అవసరం; మంచి నిర్వహణతో అధిక లాభాలు ఇస్తుంది.",
      marketRate: "₹30–₹40/క్వింటాల్",
      videoLink: "https://www.youtube.com/watch?v=ZfTIyrGQ8Fc",
      fertilizer: "హయ్ నైట్రోజన్ మొక్కల వృద్ధిని పెంపొందిస్తుంది; పొటాషియం చక్కెర సంశ్లేషణకు అవసరం."
    }
  },
  "Soybean": {
    en: {
      description: "Soybean enriches soil with nitrogen and fits well in crop rotations; it's in rising demand for oil and feed.",
      marketRate: "₹45–₹60/kg",
      videoLink: "https://www.youtube.com/watch?v=f1XEJv8F7_w",
      fertilizer: "Lower nitrogen needs; phosphorus supports early flowering and pod set."
    },
    hi: {
      description: "सोयाबीन मिट्टी में नाइट्रोजन बढ़ाती है और फसल परिवर्तन में अच्छी जाती है; इसका तेल और चारे के लिए अधिक मांग है।",
      marketRate: "₹45–₹60/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=f1XEJv8F7_w",
      fertilizer: "कम नाइट्रोजन की आवश्यकता; फॉस्फोरस प्रारंभिक फूल और फली निर्माण में मदद करता है।"
    },
    te: {
      description: "సోయాబీన్ నేలలో నైట్రోజన్‌ని పెంచి, పంట మార్పులలో బాగా సరిపోతుంది; ఇది నూనె మరియు ఫ feed ప్రయోజనానికి అధిక డిమాండ్ ఉంది.",
      marketRate: "₹45–₹60/కిలో",
      videoLink: "https://www.youtube.com/watch?v=f1XEJv8F7_w",
      fertilizer: "తక్కువ నైట్రోజన్ అవసరం; ఫాస్ఫరస్ ప్రారంభ పువ్వులు మరియు గడ్డ లగడ్లో సహాయం చేస్తుంది."
    }},
  "Groundnut": {
    en: {
      description: "Groundnut (peanut) is a high-protein oilseed crop that enriches soil nitrogen due to its legume nature and fetches good prices in both food and oil markets.",
      marketRate: "₹50–₹70/kg",
      videoLink: "https://www.youtube.com/watch?v=vxWb3eGv6Zo",
      fertilizer: "Apply moderate nitrogen; phosphorous during sowing and potassium for pod filling."
    },
    hi: {
      description: "मूंगफली उच्च-प्रोटीन वाली तेलयुक्त फसल है, जो लेग्यूम होने के कारण मिट्टी में नाइट्रोजन बढ़ाती है और तेल और खाद्य बाजारों में अच्छी कीमत देती है।",
      marketRate: "₹50–₹70/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=vxWb3eGv6Zo",
      fertilizer: "बीज बोने के समय फॉस्फोरस, और फली भरने के लिए पोटेशियम दें।"
    },
    te: {
      description: "గ్రౌండ్నట్ (మూగ్ం ఫల్స్) అతి‑ప్రొటీన్లతో కూడిన నూనె ఉత్పన్నం, ఇది లెగ్యూమ్‌గా నేలలో నైట్రోజన్‌ను పెంచుతుంది మరియు దిగ్గజ మార్కెట్లలో మంచి ధర పొందుతుంది.",
      marketRate: "₹50–₹70/కిలో",
      videoLink: "https://www.youtube.com/watch?v=vxWb3eGv6Zo",
      fertilizer: "విత్తనం సమయంలో ఫాస్ఫరస్, ఫాడ్ నింపే సమయంలో పొటాషియం ఉపయోగించండి."
    }
  },

  // Cotton
  "Cotton": {
    en: {
      description: "Cotton is India’s leading fiber crop; with improved varieties and proper nutrient management, it offers high returns in short to mid-season.",
      marketRate: "₹4,500–₹5,500/quintal",
      videoLink: "https://www.youtube.com/watch?v=eN-TqqBQOAk",
      fertilizer: "Balanced NPK encourages healthy fiber development and boll formation."
    },
    hi: {
      description: "कपास भारत की प्रमुख तंतु फसल है; उन्नत किस्मों और पोषण प्रबंधन से यह कम‑से-कम मौसम में उच्च लाभ देती है।",
      marketRate: "₹4,500–₹5,500/क्विंटल",
      videoLink: "https://www.youtube.com/watch?v=eN-TqqBQOAk",
      fertilizer: "संतुलित NPK स्वस्थ फाइबर विकास और फली निर्माण को बढ़ावा देता है।"
    },
    te: {
      description: "కాటన్ భారతీయ ప్రధాన రబ్బరు పంట; మెరుగైన జాతులు మరియు పోషక నిర్వహణతో ఇది குறైన కాలంలో ఎక్కువ లాభాలు ఇస్తుంది.",
      marketRate: "₹4,500–₹5,500/క్వింటాల్",
      videoLink: "https://www.youtube.com/watch?v=eN-TqqBQOAk",
      fertilizer: "సమతుల NPK శక్తివంతమైన ఫైబర్ అభివృద్ధి మరియు బల్ ఫార్మేషన్ కు సహాయపడుతుంది."
    }
  },

  // Barley
  "Barley": {
    en: {
      description: "Barley is a hardy cereal that tolerates cool, well-drained soils; widely used for fodder, brewing and food, with stable market demand.",
      marketRate: "₹20–₹28/kg",
      videoLink: "https://www.youtube.com/watch?v=kbMO892nI7E",
      fertilizer: "Moderate nitrogen for tillering, phosphorus for root growth, and potassium for grain quality."
    },
    hi: {
      description: "बार्ली एक कठोर अनाज है जो ठंडी, अच्छी जल निकासी वाली मिट्टी सहन कर सकता है; चारा, शराब और खाद्य में उपयोग होता है, जिसकी बाजार मांग स्थिर है।",
      marketRate: "₹20–₹28/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=kbMO892nI7E",
      fertilizer: "तने होने के लिए मध्यम नाइट्रोजन, जड़ वृद्धि के लिए फॉस्फोरस, और दाने की गुणवत्ता के लिए पोटेशियम।"
    },
    te: {
      description: "బార్లీ ఒక బలమైన అనాజం, ఇది చల్లని, బాగా డ్రైన్ అయ్యే నేలను తట్టుకోగలదు; ఇది చెడు, పానీయం మరియు ఆహారానికొక అతింక్ మార్కెట్ డిమాండ్‌తో ఉపయోగిస్తారు.",
      marketRate: "₹20–₹28/కిలో",
      videoLink: "https://www.youtube.com/watch?v=kbMO892nI7E",
      fertilizer: "తునకాల కోసం మధ్యస్థ నైట్రోజన్, వేరు పెరుగుదలకు ఫాస్ఫరస్, ధాన్య నాణ్యాతకు పొటాషియం."
    }
  },

  // Sorghum
  "Sorghum": {
    en: {
      description: "Sorghum (jowar) is drought-tolerant, nitrogen-efficient and thrives in semi-arid soils, used for food, fodder and biofuel.",
      marketRate: "₹18–₹25/kg",
      videoLink: "https://www.youtube.com/watch?v=U4odgvVCblc",
      fertilizer: "Low nitrogen, moderate phosphorus – optimal for root and grain formation in drylands."
    },
    hi: {
      description: "ज्वार (सोरघम) सूखा‑सहिष्णु, नाइट्रोजन कुशल है और अर्ध‑शुष्क मिट्टी में अच्छी तरह उगता है, भोजन, चारा और बायोफ्यूल में उपयोग होता है।",
      marketRate: "₹18–₹25/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=U4odgvVCblc",
      fertilizer: "कम नाइट्रोजन, मध्यम फॉस्फोरस – सूखी मिट्टी में जड़ और दाने के विकास के लिए उपयुक्त।"
    },
    te: {
      description: "సొర్గం (జ్వార్) పొడి‑తట్టుదల కలిగి, నైట్రోజన్‑పరంగా సమర్థవంతంగా ఉంటుంది మరియు అర్ధ‑శుష్క మట్టిలో బాగా పెరుగుతుంది; ఇది ఆహారం, పశువుల ఆహారం మరియు బయోఫ్యుల్ కోసం ఉపయోగిస్తారు.",
      marketRate: "₹18–₹25/కిలో",
      videoLink: "https://www.youtube.com/watch?v=U4odgvVCblc",
      fertilizer: "తక్కువ నైట్రోజన్, మధ్య ఫాస్ఫరస్ – పొడి నేలలో వేరు మరియు ధాన్యం ఏర్పాటుకు ఉత్తమం."
    }
  },
  // Mustard
  "Mustard": {
    en: {
      description: "Mustard is a fast‑growing oilseed crop suited to cooler climates and replenishes soil nutrients.",
      marketRate: "₹45–₹55/kg",
      videoLink: "https://www.youtube.com/watch?v=5rKVzPwCP-k",
      fertilizer: "Balanced NPK promotes good branching and oil content."
    },
    hi: {
      description: "सरसों एक जल्दी बढ़ने वाली तेलबीज फसल है जो ठंडे मौसम में अच्छी होती है और मिट्टी को पोषक तत्वों से भर देती है।",
      marketRate: "₹45–₹55/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=5rKVzPwCP-k",
      fertilizer: "संतुलित NPK शाखा और तेल सामग्री के लिए मदद करता है।"
    },
    te: {
      description: "మస్టర్డ్ ఒక వేగంగా పెరుగే నూనె‑బీజ పంట, ఇది చల్లని వాతావరణానికి సరిపోతుంది మరియు నేలను పోషకాలతో పూరిస్తుంది.",
      marketRate: "₹45–₹55/కిలో",
      videoLink: "https://www.youtube.com/watch?v=5rKVzPwCP-k",
      fertilizer: "సమతుల NPK మంచి శాఖ మరియు నూనె సమాగ్రికి ఉపకారం."
    }
  },

  // Sunflower
  "Sunflower": {
    en: {
      description: "Sunflower is drought‑resistant and thrives in full sun; its seeds fetch high prices for oil and snacks.",
      marketRate: "₹60–₹75/kg",
      videoLink: "https://www.youtube.com/watch?v=XrfWOlcnIcY",
      fertilizer: "Adequate phosphorus and potassium support flowering and oil yield."
    },
    hi: {
      description: "सूरजमुखी सूखा‑सहिष्णु है और खुली धूप में अच्छी होती है; इसके बीज तेल और स्नैक के लिए मूल्यवान होते हैं।",
      marketRate: "₹60–₹75/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=XrfWOlcnIcY",
      fertilizer: "पर्याप्त फॉस्फोरस और पोटेशियम फूल और तेल उपज में मदद करते हैं।"
    },
    te: {
      description: "సన్‌ఫ్లవర్ పొడి‑తట్టుకుంటుంది మరియు పూర్తిసూర్యరశ్మిలో పెరగడం బాగుంటుంది; దాని గింజలు నూనె మరియు స్నాక్స్‌కు అధిక ధరలుంటాయి.",
      marketRate: "₹60–₹75/కిలో",
      videoLink: "https://www.youtube.com/watch?v=XrfWOlcnIcY",
      fertilizer: "పుష్ఠమైన ఫాస్ఫరస్ మరియు పొటాషియం పువ్వులు మరియు నూనె దిగుబడిని మద్దతు చేస్తాయి."
    }
  },

  // Lentil
  "Lentil": {
    en: {
      description: "Lentil is a cool‑season pulse that fixes nitrogen in the soil and has strong demand in domestic and export markets.",
      marketRate: "₹80–₹100/kg",
      videoLink: "https://www.youtube.com/watch?v=Gm88vGDHUfE",
      fertilizer: "Low nitrogen; phosphorus ensures pod development and root growth."
    },
    hi: {
      description: "दाल (मसूर) एक ठंडी मौसम की फसल होने के साथ मिट्टी में नाइट्रोजन जोड़ती है और घरेलू व निर्यात बाजारों में मांग में रहती है।",
      marketRate: "₹80–₹100/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=Gm88vGDHUfE",
      fertilizer: "कम नाइट्रोजन; फॉस्फोरस फली व जड़ विकास में मदद करता है।"
    },
    te: {
      description: "పెసరపప్పు చల్లని సీజన్ విత్తనం, ఇది నేలలో నైట్రోజన్‌ని స్థిరపరుస్తుంది మరియు దేశీయ/రఫ్తార్‌ మార్కెట్లలో అధిక డిమాండ్ ఉంది.",
      marketRate: "₹80–₹100/కిలో",
      videoLink: "https://www.youtube.com/watch?v=Gm88vGDHUfE",
      fertilizer: "తక్కువ నైట్రోజన్; ఫాస్ఫరస్ పాలులు & వేరు అభివృద్ధికి సహాయపడుతుంది."
    }
  },

  // Chickpea
  "Chickpea": {
    en: {
      description: "Chickpea (gram) is a protein‑rich pulse ideal for semi‑arid regions and crop rotations.",
      marketRate: "₹70–₹90/kg",
      videoLink: "https://www.youtube.com/watch?v=UknoptCWr20",
      fertilizer: "Minimal nitrogen; phosphorus/potassium aid in nodulation and pod set."
    },
    hi: {
      description: "काबुली चना/चना एक प्रोटीन-युक्त दाल है जो अर्ध-शुष्क क्षेत्रों और फसल चक्रण के लिए आदर्श है।",
      marketRate: "₹70–₹90/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=UknoptCWr20",
      fertilizer: "न्यूनतम नाइट्रोजन; फॉस्फोरस/पोटेशियम नोड्यूलेशन और फली निर्माण में मदद करते हैं।"
    },
    te: {
      description: "కాబులీచన యాక ప్రోటీన్‌, అధిక ఆహార రసాయనాలతో కూడిన పప్పు; ఇది సెమీఅర్డ్ ప్రాంతాలకు మరియు పంట మార్పులకు అనుకూలం.",
      marketRate: "₹70–₹90/కిలో",
      videoLink: "https://www.youtube.com/watch?v=UknoptCWr20",
      fertilizer: "సర్వనిమ్న నైట్రోజన్; ఫాస్ఫరస్/పోటాషియం నోడ్యులేషన్ మరియు ఫాడ్ ఏర్పాటును మెరుగుపరుస్తాయి."
    }
  },

  // Tur (Arhar)
  "Tur (Arhar)": {
    en: {
      description: "Tur (pigeon pea) is a perennial pulse crop tolerant to drought; high protein makes it valuable in rotations.",
      marketRate: "₹90–₹110/kg",
      videoLink: "https://www.youtube.com/watch?v=Zk6M1wzXSGA",
      fertilizer: "Low nitrogen; phosphorus supports flowering and pod retention."
    },
    hi: {
      description: "अरहर (तुअर) एक बारहमासी दाल फसल है जो सूखा‑सहिष्णु है; उच्च प्रोटीन के कारण यह फसल चक्र में मूल्यवान होती है।",
      marketRate: "₹90–₹110/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=Zk6M1wzXSGA",
      fertilizer: "कम नाइट्रोजन; फॉस्फोरस फूल और फली बनाए रखता है।"
    },
    te: {
      description: "తూర్ (పియాజన్ పప్పు) ఒక సంతరమైన పప్పు పంట, ఇది పొడి‑తట్టుకుంటుంది; అధిక ప్రోటీన్ దాన్ని సాక્ષి మార్పుల్లో విలువైనది చేస్తుంది.",
      marketRate: "₹90–₹110/కిలో",
      videoLink: "https://www.youtube.com/watch?v=Zk6M1wzXSGA",
      fertilizer: "తక్కువ నైట్రోజన్; ఫాస్ఫరస్ పువ్వు మరియు పాలు నిలిపివేయడాన్ని సహాయపడుతుంది."
    }
  },
  // Moong
  "Moong": {
    en: {
      description: "Moong (green gram) is a short-duration pulse, excellent for intercropping and enriches the soil with nitrogen.",
      marketRate: "₹70–₹90/kg",
      videoLink: "https://www.youtube.com/watch?v=V3kGFBzOgSY",
      fertilizer: "Minimal nitrogen; phosphorus supports flowering and pod development."
    },
    hi: {
      description: "मूँग (हरा चना) एक छोटी अवधि की दाल है, अंतरवर्ती फसलों के लिए उत्कृष्ट और मिट्टी में नाइट्रोजन बढ़ाती है।",
      marketRate: "₹70–₹90/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=V3kGFBzOgSY",
      fertilizer: "बहुत कम नाइट्रोजन; फॉस्फोरस फूल और फली विकास में मदद करता है।"
    },
    te: {
      description: "మూం(పచ్చి పప్పు) తక్కువ కాలంలో వస్తుంది, ఇంటర్‌క్రాప్పింగ్‌కు ఉత్తమం, నేలలో నైట్రోజన్‌ను శాస్త్రీయంగా పెంపొందిస్తుంది.",
      marketRate: "₹70–₹90/కిలో",
      videoLink: "https://www.youtube.com/watch?v=V3kGFBzOgSY",
      fertilizer: "అత్యల్ప నైట్రోజన్; ఫాస్ఫరస్ పువ్వులు & పాలు ఏర్పాటుకు సహకరిస్తుంది."
    }
  },

  // Urad
  "Urad": {
    en: {
      description: "Urad (black gram) improves soil health, suits warm climates, and is vital in pulse rotations.",
      marketRate: "₹80–₹100/kg",
      videoLink: "https://www.youtube.com/watch?v=7UOTXEZdY2E",
      fertilizer: "Low nitrogen; phosphorus enhances nodulation and pod set."
    },
    hi: {
      description: "उड़द (काला चना) मिट्टी की सेहत सुधारता है, गर्म मौसम में उपयुक्त और दाल चक्र में महत्वपूर्ण है।",
      marketRate: "₹80–₹100/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=7UOTXEZdY2E",
      fertilizer: "कम नाइट्रोजन; फॉस्फोरस नोड्यूलेशन और फली निर्माण में सुधार करता है।"
    },
    te: {
      description: "ఉరద్ (బ్లాక్ పప్పు) నేల ఆరోగ్యాన్ని మెరుగుపరుస్తుంది, వేడి వాతావరణానికి సరిపోతుంది మరియు పప్పు మార్పులో కీలకం.",
      marketRate: "₹80–₹100/కిలో",
      videoLink: "https://www.youtube.com/watch?v=7UOTXEZdY2E",
      fertilizer: "తక్కువ నైట్రోజన్; ఫాస్ఫరస్ నోడ్యులేషన్ & పాలు ఏర్పాటును మెరుగుపరుస్తుంది."
    }
  },

  // Jute
  "Jute": {
    en: {
      description: "Jute is a fiber crop thriving in humid regions; it's biodegradable and fetches stable market value for packaging.",
      marketRate: "₹35–₹50/kg",
      videoLink: "https://www.youtube.com/watch?v=7w5blg7Q_aY",
      fertilizer: "Higher nitrogen for vegetative growth; moderate phosphorous supports fiber quality."
    },
    hi: {
      description: "जूट एक फाइबर फसल है जो आर्द्र क्षेत्रों में अच्छी होती है; यह जैविक रूप से विघटित होती है और पैकेजिंग में स्थिर बाजार मूल्य प्राप्त करती है।",
      marketRate: "₹35–₹50/किग्रा",
      videoLink: "https://www.youtube.com/watch?v=7w5blg7Q_aY",
      fertilizer: "वनस्पति वृद्धि के लिए अधिक नाइट्रोजन; फाइबर गुणवत्ता के लिए मध्यम फॉस्फोरस।"
    },
    te: {
      description: "జుట్ ఒక ఫైబర్ పంట, ఇది తేమల వాతావరణంలో బాగా పెరుగుతుంది; ఇది బయోడీగ్రేడబుల్ మరియు ప్యాకేజింగ్‌కు స్థిరమైన మార్కెట్ విలువనిస్తుంది.",
      marketRate: "₹35–₹50/కిలో",
      videoLink: "https://www.youtube.com/watch?v=7w5blg7Q_aY",
      fertilizer: "వెజిటేటివ్ వృద్ధికి అధిక నైట్రోజన్; ఫైబర్ నాణ్యతకు తగిన ఫాస్ఫరస్."
    }
  },

  // Tea
  "Tea": {
    en: {
      description: "Tea is a high‑value perennial crop requiring acidic soil and frequent rainfall; yields premium returns for quality management.",
      marketRate: "₹200–₹300/kg (leaf)",
      videoLink: "https://www.youtube.com/watch?v=TL3LQYZZsso",
      fertilizer: "Acidic balanced NPK with micronutrients boosts shoot proliferation and leaf yield."
    },
    hi: {
      description: "चाय एक उच्च-मूल्य वाली बारहमासी फसल है जिसमें अम्लीय मिट्टी और नियमित वर्षा की आवश्यकता होती है; गुणवत्ता प्रबंधन पर अच्छा मुनाफा देती है।",
      marketRate: "₹200–₹300/किग्रा (पत्ती)",
      videoLink: "https://www.youtube.com/watch?v=TL3LQYZZsso",
      fertilizer: "अम्ली संतुलित NPK और सूक्ष्मपोषक शूट वृद्धि और पत्ती उपज को बढ़ाते हैं।"
    },
    te: {
      description: "టీ ఒక అధిక‑విలువ గల చరిత ఒక పంట, ఇది అమ్లీయమైన నేల మరియు తరచూ వర్షాల అవసరం; నాణ్యత నిర్వహణతో మంచి లాభాలు ఇస్తుంది.",
      marketRate: "₹200–₹300/కిలో (తెన్నీ)",
      videoLink: "https://www.youtube.com/watch?v=TL3LQYZZsso",
      fertilizer: "అమ్లీయ సమతుల NPK మరియు సూక్ష్మపుషాళకాలు షూట్ వృద్ధికి మరియు ళీఫ్ దిగుబడికి సహకరిస్తాయి."
    }
  },

  // Coffee
  "Coffee": {
    en: {
      description: "Coffee is a specialty crop requiring shaded, well‑drained soil and consistent care; offers premium prices for Arabica/Robusta beans.",
      marketRate: "₹300–₹400/kg (green bean)",
      videoLink: "https://www.youtube.com/watch?v=fCP7Iq7OGRM",
      fertilizer: "Moderate nitrogen and potassium with micronutrients support flowering and berry development."
    },
    hi: {
      description: "कॉफी एक विशेष फसल है जिसे छायादार, अच्छी जल निकासी वाली मिट्टी और सतत देखभाल की आवश्यकता होती है; अरेबिका/रोबस्टा बीन के लिए प्रीमियम कीमत मिलती है।",
      marketRate: "₹300–₹400/किग्रा (हरा बीज)",
      videoLink: "https://www.youtube.com/watch?v=fCP7Iq7OGRM",
      fertilizer: "मध्यम नाइट्रोजन और पोटेशियम साथ सूक्ष्मपोषक फूल और बेरी विकास में मदद करते हैं।"
    },
    te: {
      description: "కాఫీ ఒక ప్రత్యేక పంట, ఇది చాయా, బాగా డ్రెయిన్ అయ్యే నేల మరియు నిరంతరం శ్రద్ధ అవసరం; అరబికా/రోబస్టా బీన్స్ కు మంచి ధర ఉంటుంది.",
      marketRate: "₹300–₹400/కిలో (క్రీన్ బీన్)",
      videoLink: "https://www.youtube.com/watch?v=fCP7Iq7OGRM",
      fertilizer: "మధ్యస్థ నైట్రోజన్, పొటాషియం మరియు సూక్ష్మపుషాళకాలు పువ్వు మరియు బెర్రీ అభివృద్ధికి సహకరిస్తాయి."
    }
  }
};
