/**
 * SNU BizSathi - AI-Driven Hyper-Local Business Advisory & Financial Structuring Assistant
 * Sister Nivedita University (SNU) | Smart India Hackathon Entry
 * Data store for MoSJE Schemes, Indian Geographic Data, Sector Demand Matrices,
 * Multi-lingual Translations, and AI Advisory Knowledge Base.
 * 
 * Team: Code Catalyst
 * Team Leader: Arnab Gayen | Co-Leader: Ujjawal Dubey
 * Members: Sanjana Kumari Balmiki, Sreeja Maity, Yash Raj, Vinit
 * Ministry of Social Justice and Empowerment (MoSJE)
 */

const APP_DATA = {
  meta: {
    title: "SNU BizSathi - AI-Driven Hyper-Local Business Advisory & Financial Assistant",
    university: "Sister Nivedita University (SNU)",
    problemStatement: "AI-Driven Hyper-Local Business Advisory and Financial Structuring Assistant",
    organization: "Ministry of Social Justice and Empowerment (MoSJE)",
    team: "Code Catalyst",
    leader: "Arnab Gayen",
    coLeader: "Ujjawal Dubey",
    members: ["Arnab Gayen", "Ujjawal Dubey", "Sanjana Kumari Balmiki", "Sreeja Maity", "Yash Raj", "Vinit"]
  },

  // Multi-lingual dictionary
  translations: {
    en: {
      navTitle: "SNU BizSathi",
      teamBadge: "Team Code Catalyst",
      leadBadge: "Leader: Arnab Gayen | Co-Leader: Ujjawal Dubey",
      tagline: "Sister Nivedita University • Empowering Rural Micro-Entrepreneurs",
      navHome: "Advisory Copilot",
      navDemand: "Market Demand Predictor",
      navSchemes: "Scheme Matcher",
      navFinancials: "Financial Structuring",
      navLinkage: "Market Linkage",
      navTeam: "Team & Leadership",
      navImpact: "Project Impact",
      heroTitle: "AI Business & Financial Assistant for Rural Micro-Entrepreneurs",
      heroSubtitle: "SNU BizSathi provides hyper-local business advice, matches with MoSJE schemes (VISVAS, NSFDC, NBCFDC), projects cash flows, and generates bankable project reports in 7 regional languages.",
      btnStartCopilot: "Talk to AI Copilot",
      btnCalculateLoan: "Match Financial Schemes",
      btnDpr: "Generate Bankable DPR",
      selectState: "Select State",
      selectDistrict: "Select District",
      selectSector: "Select Business Sector",
      demandScore: "Local Demand Index",
      competitionScore: "Competitor Density",
      profitMargin: "Avg. Profit Margin",
      rawMaterialScore: "Raw Material Access",
      aiCopilotHeader: "1. AI Business Advisory Copilot",
      aiCopilotSub: "Voice & Text Advisory in 7 Languages tailored for village micro-enterprises.",
      quickPromptsTitle: "Quick Advisory Prompts:",
      schemeMatchHeader: "3. MoSJE & Govt. Scheme Eligibility Matcher",
      calcHeader: "4. Financial Structuring & 12-Month Cash Flow",
      dprHeader: "5. 1-Click Bankable Detailed Project Report (DPR)",
      dprSubtitle: "Official format recognized by Banks, NABARD, and District Industry Centers (DIC)",
      linkageHeader: "6. Hyper-Local Market Linkage & Buyer Connect",
      teamHeader: "7. Team Code Catalyst Members",
      impactHeader: "Project Vision & Impact",
      audioReadout: "Audio Readout",
      speakingNow: "Reading content out loud...",
      stopAudio: "Stop Audio"
    },
    hi: {
      navTitle: "SNU बिजसाथी (SNU BizSathi)",
      teamBadge: "टीम कोड उत्प्रेरक (Code Catalyst)",
      leadBadge: "लीडर: अर्णब गायेन | सह-लीडर: उज्ज्वल दुबे",
      tagline: "सिस्टर निवेदिता यूनिवर्सिटी • ग्रामीण सूक्ष्म-उद्यमियों का सशक्तिकरण",
      navHome: "सलाहकार कोपायलट",
      navDemand: "बाजार मांग अनुमानक",
      navSchemes: "योजना मिलान",
      navFinancials: "वित्तीय संरचना",
      navLinkage: "बाजार जुड़ाव",
      navTeam: "टीम एवं नेतृत्व",
      navImpact: "परियोजना प्रभाव",
      heroTitle: "ग्रामीण सूक्ष्म-उद्यमियों के लिए एआई व्यवसाय और वित्तीय सलाहकार",
      heroSubtitle: "अति-स्थानीय व्यावसायिक सलाह प्राप्त करें, MoSJE योजनाओं (VISVAS, NSFDC, NBCFDC) से मिलान करें, और 7 क्षेत्रीय भाषाओं में बैंक योग्य परियोजना रिपोर्ट तैयार करें।",
      btnStartCopilot: "एआई कोपायलट से बात करें",
      btnCalculateLoan: "वित्तीय योजनाएं खोजें",
      btnDpr: "बैंक योग्य DPR बनाएं",
      selectState: "राज्य चुनें",
      selectDistrict: "जिला चुनें",
      selectSector: "व्यवसाय क्षेत्र चुनें",
      demandScore: "स्थानीय मांग सूचकांक",
      competitionScore: "प्रतिस्पर्धा घनत्व",
      profitMargin: "औसत लाभ मार्जिन",
      rawMaterialScore: "कच्चे माल की उपलब्धता",
      aiCopilotHeader: "1. SNU बिजसाथी एआई कोपायलट",
      aiCopilotSub: "7 भाषाओं में आवाज़ और पाठ सलाह",
      quickPromptsTitle: "त्वरित सलाह प्रश्न:",
      schemeMatchHeader: "3. MoSJE एवं सरकारी योजना योग्यता मिलानकर्ता",
      calcHeader: "4. वित्तीय संरचना एवं 12 महीने का पूर्वानुमान",
      dprHeader: "5. 1-क्लिक बैंक योग्य विस्तृत परियोजना रिपोर्ट (DPR)",
      dprSubtitle: "बैंकों, नाबार्ड और जिला उद्योग केंद्रों द्वारा मान्यता प्राप्त आधिकारिक प्रारूप",
      linkageHeader: "6. अति-स्थानीय बाजार जुड़ाव और खरीदार नेटवर्क",
      teamHeader: "7. टीम कोड कैटलिस्ट सदस्य",
      impactHeader: "परियोजना प्रभाव",
      audioReadout: "ऑडियो वाचन",
      speakingNow: "सामग्री पढ़ी जा रही है...",
      stopAudio: "ऑडियो रोकें"
    },
    bn: {
      navTitle: "SNU BizSathi (বিিজসাথী)",
      teamBadge: "টিম কোড ক্যাটালিস্ট (Code Catalyst)",
      leadBadge: "লিডার: অর্ণব গায়েন | কো-লিডার: উজ্জ্বল দুবে",
      tagline: "সিস্টার নিবেদিতা ইউনিভার্সিটি • গ্রামীণ উদ্যোক্তাদের সহায়তা",
      navHome: "পরামর্শক কো-পাইলট",
      navDemand: "বাজার চাহিদা পূর্বাভাস",
      navSchemes: "প্রকল্প মিলকরণ",
      navFinancials: "আর্থিক কাঠামো",
      navLinkage: "বাজার সংযোগ",
      navTeam: "টিম ও নেতৃত্ব",
      navImpact: "প্রভাব",
      heroTitle: "গ্রামীণ ক্ষুদ্র উদ্যোক্তাদের জন্য AI ব্যবসা ও আর্থিক উপদেষ্টা",
      heroSubtitle: "স্থানীয় ব্যবসা পরামর্শ পান, MoSJE প্রকল্পগুলির সুবিধা নিন এবং ৭টি আঞ্চলিক ভাষায় ব্যাংকযোগ্য প্রকল্প রিপোর্ট তৈরি করুন।",
      btnStartCopilot: "AI কো-পাইলটের সাথে কথা বলুন",
      btnCalculateLoan: "আর্থিক প্রকল্প খুঁজুন",
      btnDpr: "ব্যাংকযোগ্য DPR তৈরি করুন",
      selectState: "রাজ্য নির্বাচন করুন",
      selectDistrict: "জেলা নির্বাচন করুন",
      selectSector: "ব্যবসার ক্ষেত্র নির্বাচন করুন",
      demandScore: "স্থানীয় চাহিদা সূচক",
      competitionScore: "প্রতিযোগিতার ঘনত্ব",
      profitMargin: "গড় লাভ শতাংশ",
      rawMaterialScore: "কাঁচামালের সহজলভ্যতা",
      aiCopilotHeader: "১. SNU বিজসাথী AI কো-পাইলট",
      aiCopilotSub: "৭টি ভাষায় ভয়েস ও টেক্সট পরামর্শ",
      quickPromptsTitle: "দ্রুত পরামর্শ প্রশ্নাবলী:",
      schemeMatchHeader: "৩. MoSJE ও সরকারি প্রকল্প যোগ্যতা যাচাই",
      calcHeader: "৪. আর্থিক পরিকল্পনা ও ১২ মাসের পূর্বাভাস",
      dprHeader: "৫. ১-ক্লিকে ব্যাংকযোগ্য বিস্তারিত প্রকল্প রিপোর্ট (DPR)",
      dprSubtitle: "ব্যাংক, নাবার্ড এবং জেলা শিল্প কেন্দ্র দ্বারা স্বীকৃত ফর্ম্যাট",
      linkageHeader: "৬. স্থানীয় বাজার সংযোগ ও ক্রেতা নেটওয়ার্ক",
      teamHeader: "৭. টিম কোড ক্যাটালিস্ট সদস্যগণ",
      impactHeader: "প্রভাব ও ফলাফল",
      audioReadout: "অডিও পাঠ",
      speakingNow: "লেখা পাঠ করা হচ্ছে...",
      stopAudio: "অডিও বন্ধ করুন"
    },
    ta: {
      navTitle: "SNU BizSathi",
      teamBadge: "டீம் கோட் கேட்டலிஸ்ட்",
      leadBadge: "தலைவர்: அர்னப் காயென் | இணை தலைவர்: உஜ்ஜவல் துபே",
      tagline: "சிஸ்டர் நிவேதிதா பல்கலைக்கழகம் • கிராமப்புற நுண் தொழில்முனைவோர் மேம்பாடு",
      navHome: "ஆலோசகர் கோபைலட்",
      navDemand: "சந்தை தேவை கணிப்பு",
      navSchemes: "திட்ட பொருத்தம்",
      navFinancials: "நிதி வடிவமைப்பு",
      navLinkage: "சந்தை இணைப்பு",
      navTeam: "குழு & தலைமை",
      navImpact: "தாக்கம்",
      heroTitle: "கிராமப்புற தொழிலதிபர்களுக்கான AI வணிக மற்றும் நிதி உதவியாளர்",
      heroSubtitle: "உள்ளூர் வணிக ஆலோசனைகளைப் பெற்று, MoSJE திட்டங்களுடன் பொருந்தி, வங்கி திட்ட அறிக்கைகளை உருவாக்குங்கள்.",
      btnStartCopilot: "AI கோபைலட்டிடம் பேசுங்கள்",
      btnCalculateLoan: "நிதி திட்டங்களை கண்டறிக",
      btnDpr: "வங்கி DPR உருவாக்கு",
      selectState: "மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
      selectDistrict: "மாவட்டத்தைத் தேர்ந்தெடுக்கவும்",
      selectSector: "துறையைத் தேர்ந்தெடுக்கவும்",
      demandScore: "உள்ளூர் தேவை குறியீடு",
      competitionScore: "போட்டி அடர்த்தி",
      profitMargin: "சராசரி லாப வரம்பு",
      rawMaterialScore: "மூலப்பொருள் கிடைக்கும்தன்மை",
      aiCopilotHeader: "1. SNU BizSathi AI கோபைலட்",
      aiCopilotSub: "7 மொழிகளில் குரல் & உரை ஆலோசனை",
      quickPromptsTitle: "விரைவு ஆலோசனைகள்:",
      schemeMatchHeader: "3. MoSJE & அரசு திட்ட தகுதி பொருத்தம்",
      calcHeader: "4. நிதி கட்டமைப்பு & 12 மாத கணிப்பு",
      dprHeader: "5. 1-கிளிக் வங்கி திட்ட அறிக்கை (DPR)",
      dprSubtitle: "வங்கிகள் அங்கீகரித்த அதிகாரப்பூர்வ வடிவம்",
      linkageHeader: "6. சந்தை இணைப்பு மற்றும் வாங்குபவர் நெட்வொர்க்",
      teamHeader: "7. கோட் கேட்டலிஸ்ட் குழு உறுப்பினர்கள்",
      impactHeader: "தாக்கம்",
      audioReadout: "ஆடியோ வாசிப்பு",
      speakingNow: "வாசிக்கப்படுகிறது...",
      stopAudio: "ஆடியோவை நிறுத்து"
    },
    mr: {
      navTitle: "SNU BizSathi",
      teamBadge: "टीम कोड कॅटॅलिस्ट",
      leadBadge: "लीडर: अर्णब गायेन | सह-लीडर: उज्ज्वल दुबे",
      tagline: "सिस्टर निवेदिता युनिव्हर्सिटी • ग्रामीण सूक्ष्म उद्योजकांचे सबलीकरण",
      navHome: "सल्लागार कोपायलट",
      navDemand: "बाजार मागणी अंदाज",
      navSchemes: "योजना जुळवणी",
      navFinancials: "आर्थिक रचना",
      navLinkage: "बाजार जोडणी",
      navTeam: "टीम आणि नेतृत्व",
      navImpact: "प्रभाव",
      heroTitle: "ग्रामीण सूक्ष्म उद्योजकांसाठी AI व्यवसाय आणि आर्थिक सल्लागार",
      heroSubtitle: "स्थानिक व्यवसाय सल्ला मिळवा, MoSJE योजनांशी जुळवून घ्या आणि 7 प्रादेशिक भाषांमध्ये बँकयोग्य प्रकल्प अहवाल तयार करा.",
      btnStartCopilot: "AI शी बोला",
      btnCalculateLoan: "योजना शोधा",
      btnDpr: "बँकयोग्य DPR बनवा",
      selectState: "राज्य निवडा",
      selectDistrict: "जिल्हा निवडा",
      selectSector: "क्षेत्र निवडा",
      demandScore: "स्थानिक मागणी निर्देशांक",
      competitionScore: "स्पर्धा घनता",
      profitMargin: "सरासरी नफा मार्जिन",
      rawMaterialScore: "कच्चा माल उपलब्धता",
      aiCopilotHeader: "1. SNU BizSathi AI कोपायलट",
      aiCopilotSub: "7 भाषांमध्ये आवाज आणि मजकूर सल्ला",
      quickPromptsTitle: "त्वरित प्रश्न:",
      schemeMatchHeader: "3. MoSJE योजना पात्रता जुळवणी",
      calcHeader: "4. आर्थिक रचना आणि 12 महिने अंदाज",
      dprHeader: "5. 1-क्लिक बँकयोग्य DPR अहवाल",
      dprSubtitle: "बँका मान्यताप्राप्त फॉरमॅट",
      linkageHeader: "6. बाजार जोडणी आणि ग्राहक नेटवर्क",
      teamHeader: "7. कोड कॅटॅलिस्ट सदस्य",
      impactHeader: "प्रभाव",
      audioReadout: "ऑडिओ वाचन",
      speakingNow: "वाचत आहे...",
      stopAudio: "ऑडिओ थांबवा"
    },
    gu: {
      navTitle: "SNU BizSathi",
      teamBadge: "ટીમ કોડ કૅટેલિસ્ટ",
      leadBadge: "લીડર: અર્ણબ ગાંગુલી / ગાયન | કો-લીડર: ઉજ્જવલ દુબે",
      tagline: "સિસ્ટર નિવેદિતા યુનિવર્સિટી • ગ્રામીણ સૂક્ષ્મ સાહસિકોનું સશક્તિકરણ",
      navHome: "સલાહકાર કોપાયલટ",
      navDemand: "બજાર માંગ અનુમાન",
      navSchemes: "યોજના મેચ",
      navFinancials: "નાણાકીય માળખું",
      navLinkage: "બજાર જોડાણ",
      navTeam: "ટીમ અને નેતૃત્વ",
      navImpact: "પ્રભાવ",
      heroTitle: "ગ્રામીણ સૂક્ષ્મ સાહસિકો માટે AI બિઝનેસ અને ફાઇનાન્શિયલ આસિસ્ટન્ટ",
      heroSubtitle: "સ્થાનિક બિઝનેસ સલાહ મેળવો, MoSJE યોજનાઓ સાથે મેચ કરો અને 7 પ્રાદેશિક ભાષાઓમાં બેંક યોગ્ય પ્રોજેક્ટ રિપોર્ટ બનાવો.",
      btnStartCopilot: "AI કોપાયલટ સાથે વાત કરો",
      btnCalculateLoan: "નાણાકીય યોજનાઓ શોધો",
      btnDpr: "બેંક યોગ્ય DPR બનાવો",
      selectState: "રાજ્ય પસંદ કરો",
      selectDistrict: "જિલ્લો પસંદ કરો",
      selectSector: "સેક્ટર પસંદ કરો",
      demandScore: "સ્થાનિક માંગ ઇન્ડેક્સ",
      competitionScore: "સ્પર્ધા ઘનતા",
      profitMargin: "સરેરાશ નફાનું માર્જિન",
      rawMaterialScore: "કાચા માલની સરળતા",
      aiCopilotHeader: "1. SNU BizSathi AI કોપાયલટ",
      aiCopilotSub: "7 ભાષાઓમાં વૉઇસ અને ટેક્સ્ટ સલાહ",
      quickPromptsTitle: "ઝડપી પ્રશ્નો:",
      schemeMatchHeader: "3. MoSJE અને સરકારી યોજના પાત્રતા",
      calcHeader: "4. નાણાકીય માળખું અને 12 મહિનાનું અનુમાન",
      dprHeader: "5. 1-ક્લિક બેંક યોગ્ય DPR રિપોર્ટ",
      dprSubtitle: "બેંકો અને નાબાર્ડ દ્વારા માન્ય અધિકૃત ફોર્મેટ",
      linkageHeader: "6. સ્થાનિક બજાર જોડાણ અને ગ્રાહક નેટવર્ક",
      teamHeader: "7. કોડ કૅટેલિસ્ટ ટીમ સભ્યો",
      impactHeader: "પ્રભાવ",
      audioReadout: "ઑડિઓ વાચન",
      speakingNow: "વાંચી રહ્યા છીએ...",
      stopAudio: "ઑડિઓ બંધ કરો"
    },
    te: {
      navTitle: "SNU BizSathi",
      teamBadge: "టీమ్ కోడ్ క్యాటలిస్ట్",
      leadBadge: "లీడర్: అర్నబ్ గాయేన్ | కో-లీడర్: ఉజ్జవల్ దూబే",
      tagline: "సిస్టర్ నివేదిత యూనివర్సిటీ • గ్రామీణ సూక్ష్మ పారిశ్రామికవేత్తల సాధికారత",
      navHome: "సలహాదారు కోపైలట్",
      navDemand: "మార్కెట్ డిమాండ్ అంచనా",
      navSchemes: "పథకం సరిపోలిక",
      navFinancials: "ఆర్థిక నిర్మాణం",
      navLinkage: "మార్కెట్ అనుసంధానం",
      navTeam: "టీమ్ & నాయకత్వం",
      navImpact: "ప్రభావం",
      heroTitle: "గ్రామీణ సూక్ష్మ పారిశ్రామికవేత్తల కోసం AI బిజినెస్ మరియు ఫైనాన్షియల్ అసిస్టెంట్",
      heroSubtitle: "స్థానిక వ్యాపార సలహాలను పొందండి, MoSJE పథకాలతో పోల్చండి మరియు 7 ప్రాంతీయ భాషల్లో బ్యాంక్ ప్రాజెక్ట్ నివేదికలను సృష్టించండి.",
      btnStartCopilot: "AI తో మాట్లాడండి",
      btnCalculateLoan: "ఆర్థిక పథకాలను కనుగొనండి",
      btnDpr: "బ్యాంక్ DPR రూపొందించండి",
      selectState: "రాష్ట్రాన్ని ఎంచుకోండి",
      selectDistrict: "జిల్లాను ఎంచుకోండి",
      selectSector: "రంగాన్ని ఎంచుకోండి",
      demandScore: "స్థానిక డిమాండ్ సూచిక",
      competitionScore: "పోటీ సాంద్రత",
      profitMargin: "సగటు లాభ పరిమితి",
      rawMaterialScore: "ముడి సరుకుల లభ్యత",
      aiCopilotHeader: "1. SNU BizSathi AI కోపైలట్",
      aiCopilotSub: "7 భాషల్లో వాయిస్ & టెక్స్ట్ సలహా",
      quickPromptsTitle: "త్వరిత సలహా ప్రశ్నలు:",
      schemeMatchHeader: "3. MoSJE మరియు ప్రభుత్వ పథకాల అర్హత",
      calcHeader: "4. ఆర్థిక నిర్మాణం & 12 నెలల అంచనా",
      dprHeader: "5. 1-క్లిక్ బ్యాంక్ ప్రాజెక్ట్ నివేదిక (DPR)",
      dprSubtitle: "బ్యాంకులు ఆమోదించిన అధికారిక ఫార్మాట్",
      linkageHeader: "6. స్థానిక మార్కెట్ మరియు కొనుగోలుదారుల నెట్‌వర్క్",
      teamHeader: "7. కోడ్ క్యాటలిస్ట్ సభ్యులు",
      impactHeader: "ప్రభావం",
      audioReadout: "ఆడియో చదవడం",
      speakingNow: "చదువుతోంది...",
      stopAudio: "ఆడియో ఆపు"
    }
  },

  // All 6 Team Members Data (Arnab = Leader, Ujjawal = Co-Leader)
  teamMembers: [
    {
      name: "Arnab Gayen",
      role: "Team Leader & Full Stack Architect",
      avatarSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-emerald-600 fill-current"><circle cx="50" cy="35" r="22"/><path d="M20 90 C20 65 35 55 50 55 C65 55 80 65 80 90 Z"/></svg>`,
      bio: "Team Leader. Leads product architecture, AI advisory logic integration, and financial projection engineering for rural micro-entrepreneurship.",
      tag: "Team Leader",
      roleType: "leader"
    },
    {
      name: "Ujjawal Dubey",
      role: "Co-Leader & AI Financial Engineer",
      avatarSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-amber-600 fill-current"><circle cx="50" cy="35" r="22"/><path d="M20 90 C20 65 35 55 50 55 C65 55 80 65 80 90 Z"/></svg>`,
      bio: "Co-Leader. Leads MoSJE scheme rule engines, credit risk subvention algorithms, and hyper-local market intelligence mapping.",
      tag: "Co-Leader",
      roleType: "co-leader"
    },
    {
      name: "Sanjana Kumari Balmiki",
      role: "Data & Social Inclusion Specialist",
      avatarSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-purple-600 fill-current"><circle cx="50" cy="35" r="22"/><path d="M20 90 C20 65 35 55 50 55 C65 55 80 65 80 90 Z"/></svg>`,
      bio: "Specializes in MoSJE demographic targeting (SC/OBC/Safai Karamchari), field data research, and social impact metrics.",
      tag: "Team Member",
      roleType: "member"
    },
    {
      name: "Sreeja Maity",
      role: "UI/UX & Frontend Designer",
      avatarSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-blue-600 fill-current"><circle cx="50" cy="35" r="22"/><path d="M20 90 C20 65 35 55 50 55 C65 55 80 65 80 90 Z"/></svg>`,
      bio: "Designs accessible multi-lingual interfaces, glassmorphism layouts, and voice/audio readout user experience for rural users.",
      tag: "Team Member",
      roleType: "member"
    },
    {
      name: "Yash Raj",
      role: "Backend & Scheme Logic Engineer",
      avatarSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-teal-600 fill-current"><circle cx="50" cy="35" r="22"/><path d="M20 90 C20 65 35 55 50 55 C65 55 80 65 80 90 Z"/></svg>`,
      bio: "Engineers scheme eligibility matching logic, loan interest subvention calculators, and Detailed Project Report (DPR) data pipelines.",
      tag: "Team Member",
      roleType: "member"
    },
    {
      name: "Vinit",
      role: "Quality Assurance & Market Analyst",
      avatarSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-indigo-600 fill-current"><circle cx="50" cy="35" r="22"/><path d="M20 90 C20 65 35 55 50 55 C65 55 80 65 80 90 Z"/></svg>`,
      bio: "Conducts hyper-local sector demand validation, market buyer linkage verification, and system end-to-end testing.",
      tag: "Team Member",
      roleType: "member"
    }
  ],

  // Indian States & Districts mapping
  locations: [
    {
      state: "West Bengal",
      districts: ["Bankura", "Birbhum", "Purulia", "Murshidabad", "Nadia", "South 24 Parganas", "Hooghly"]
    },
    {
      state: "Uttar Pradesh",
      districts: ["Varanasi", "Gorakhpur", "Moradabad", "Bhadohi", "Mirzapur", "Barabanki", "Sitapur"]
    },
    {
      state: "Bihar",
      districts: ["Madhubani", "Nalanda", "Bhagalpur", "Gaya", "Muzaffarpur", "Darbhanga"]
    },
    {
      state: "Maharashtra",
      districts: ["Gadchiroli", "Solapur", "Nanded", "Kolhapur", "Ratnagiri", "Amravati"]
    },
    {
      state: "Tamil Nadu",
      districts: ["Kanchipuram", "Thanjavur", "Madurai", "Salem", "Dharmapuri", "Cuddalore"]
    },
    {
      state: "Rajasthan",
      districts: ["Barmer", "Jaisalmer", "Bhilwara", "Churu", "Nagaur", "Tonk"]
    },
    {
      state: "Odisha",
      districts: ["Mayurbhanj", "Kalahandi", "Koraput", "Sambalpur", "Bargarh", "Ganjam"]
    }
  ],

  // Micro-business sectors & hyper-local parameters
  sectors: [
    {
      id: "terracotta_pottery",
      name: "Clay & Terracotta Handicrafts",
      icon: "fa-mortar-pestle",
      demandScore: 88,
      competition: "Medium",
      rawMaterial: 95,
      avgMargin: "42%",
      investmentRange: "₹25,000 - ₹1,50,000",
      description: "Traditional earthenware, clay cookware, and eco-friendly home decor items with high urban and festival demand.",
      keyMachinery: "Electric potter wheel, eco-kiln, clay mixing pug mill",
      targetBuyers: "Urban home decor stores, Craft Fairs, Export Houses, Amazon Saheli, GeM Portal"
    },
    {
      id: "handloom_weaving",
      name: "Handloom & Textile Weaving",
      icon: "fa-scroll",
      demandScore: 92,
      competition: "High",
      rawMaterial: 85,
      avgMargin: "38%",
      investmentRange: "₹40,000 - ₹3,000,000",
      description: "Cotton sarees, silk scarves, organic linen yardage, and traditional heritage weaves.",
      keyMachinery: "Frame looms, jacquard boxes, yarn dyeing vats",
      targetBuyers: "Boutiques, Weaver Cooperatives, Cottage Industries Outlets, ONDC Network"
    },
    {
      id: "organic_fertilizer",
      name: "Vermicompost & Bio-Fertilizers",
      icon: "fa-seedling",
      demandScore: 94,
      competition: "Low",
      rawMaterial: 98,
      avgMargin: "50%",
      investmentRange: "₹15,000 - ₹80,000",
      description: "Converting agricultural residue and cattle manure into nutrient-rich vermicompost for organic farming.",
      keyMachinery: "HDPE vermi beds, sieving machine, moisture meter, packaging sealers",
      targetBuyers: "Local Farmers, Agri-inputs Retailers, KVK Centers, Organic Tea Gardens"
    },
    {
      id: "bamboo_crafts",
      name: "Bamboo & Cane Furniture",
      icon: "fa-tree",
      demandScore: 86,
      competition: "Medium",
      rawMaterial: 90,
      avgMargin: "45%",
      investmentRange: "₹30,000 - ₹2,00,000",
      description: "Eco-friendly bamboo basketry, lampshades, modular furniture, and bamboo cutlery.",
      keyMachinery: "Bamboo splitting machine, round stick cutter, treatment tank",
      targetBuyers: "Eco-resorts, Restaurants, Export Trade Fairs, Flipkart Samarth"
    },
    {
      id: "dairy_poultry",
      name: "Micro Dairy & Desi Poultry Farm",
      icon: "fa-cow",
      demandScore: 96,
      competition: "High",
      rawMaterial: 92,
      avgMargin: "35%",
      investmentRange: "₹50,000 - ₹5,00,000",
      description: "A2 Gir cow milk production, ghee processing, and free-range Kadaknath/desi egg farming.",
      keyMachinery: "Milking machine, cream separator, deep freezer, solar egg incubator",
      targetBuyers: "Local Milk Cooperatives (Amul/Mother Dairy), Sweet Shops, Daily Subscriptions"
    },
    {
      id: "food_processing",
      name: "Pickles, Spices & Millet Processing",
      icon: "fa-pepper-hot",
      demandScore: 90,
      competition: "Medium",
      rawMaterial: 88,
      avgMargin: "40%",
      investmentRange: "₹20,000 - ₹1,20,000",
      description: "Solar-dried spice powders, traditional mango/lemon pickles, and healthy millet snacks (ragi/jowar).",
      keyMachinery: "Pulverizer, solar tunnel dryer, nitrogen vacuum sealer, FSSAI lab kit",
      targetBuyers: "Local Kirana Stores, SHG Supermarts, Amazon Karigar, Direct Consumers"
    }
  ],

  // MoSJE & Government Schemes Database
  schemes: [
    {
      id: "visvas",
      name: "VISVAS Scheme (MoSJE)",
      fullname: "Vikas Sheel Anusuchit Jaati Evam Pichhda Varg Vikas Yojana",
      corporation: "MoSJE - NSFDC & NBCFDC",
      targetCategory: ["SC", "OBC", "SHG"],
      interestSubvention: "5% Direct Subvention per annum",
      maxLoan: "₹4,00,000 for SHG / ₹2,00,000 for Individual",
      tenure: "Up to 5 Years",
      eligibility: "SC/OBC Self Help Groups or individuals registered under bank loans with clean repayment track record.",
      subsidyDetails: "5% interest subvention directly credited into bank account by MoSJE.",
      documents: ["Aadhaar Card", "Caste Certificate (SC/OBC)", "SHG Bank Passbook", "Business Activity Plan"]
    },
    {
      id: "nsfdc_micro",
      name: "NSFDC Micro-Credit Scheme",
      fullname: "National Scheduled Castes Finance and Development Corporation Micro Credit",
      corporation: "NSFDC (MoSJE)",
      targetCategory: ["SC", "Safai Karamchari"],
      interestSubvention: "5% concessional interest rate",
      maxLoan: "₹1,40,000 per unit",
      tenure: "3 Years",
      eligibility: "Persons belonging to Scheduled Castes living below double the poverty line threshold.",
      subsidyDetails: "Concessional rate of interest (5% p.a. for male, 4.5% p.a. for female entrepreneurs).",
      documents: ["SC Certificate", "Income Certificate", "Ration Card / Voter ID", "Micro-project proposal"]
    },
    {
      id: "nbcfdc_swarnima",
      name: "New Swarnima Scheme for Women (NBCFDC)",
      fullname: "NBCFDC Concessional Loan Scheme for Backward Classes Female Entrepreneurs",
      corporation: "NBCFDC (MoSJE)",
      targetCategory: ["OBC", "Women"],
      interestSubvention: "5% p.a. fixed interest rate",
      maxLoan: "₹2,00,000 per female entrepreneur",
      tenure: "5 Years (including moratorium of 6 months)",
      eligibility: "OBC women entrepreneurs aged 18 to 55 with annual family income below ₹3.00 Lakhs.",
      subsidyDetails: "95% project cost funded by NBCFDC at low 5% interest rate.",
      documents: ["OBC Certificate", "Aadhaar Card", "Income proof", "Bank account details"]
    },
    {
      id: "pm_daksh",
      name: "PM-DAKSH Entrepreneurship Support",
      fullname: "Pradhan Mantri Dakshta Aur Kushalta Sampann Hitgrahi Yojana",
      corporation: "MoSJE",
      targetCategory: ["SC", "ST", "OBC", "Safai Karamchari", "De-notified Tribes"],
      interestSubvention: "Free Skill Training + ₹1,000/month stipend + Loan Linkage",
      maxLoan: "Up to ₹5,00,000 with MoSJE financial linkage",
      tenure: "1 to 5 Years",
      eligibility: "Youth and artisans seeking upskilling, technology adoption, and enterprise setup.",
      subsidyDetails: "100% free technical skill training, stipend during course, and guaranteed credit facility.",
      documents: ["Aadhaar", "Category Certificate", "Bank Passbook", "Educational Marksheet"]
    },
    {
      id: "mudra_kishor",
      name: "PMMY MUDRA - Kishor Category",
      fullname: "Pradhan Mantri MUDRA Yojana (Kishor Micro Enterprise)",
      corporation: "Ministry of Finance & Small Business Banks",
      targetCategory: ["SC", "ST", "OBC", "General", "Women"],
      interestSubvention: "Base Rate + 1% (Collateral Free)",
      maxLoan: "₹50,000 to ₹5,00,000",
      tenure: "5 Years",
      eligibility: "Micro-enterprises establishing initial operations or purchasing capital machinery.",
      subsidyDetails: "Zero collateral requirement, covered under Credit Guarantee Fund for Micro Units (CGFMU).",
      documents: ["MUDRA Application Form", "Identity & Address Proof", "Quotation for Machinery", "Bank Statement"]
    }
  ],

  // AI Knowledge Base & Presets
  aiKnowledge: {
    terracotta_pottery: `For Clay & Terracotta Handicrafts:
1. Equipment needed: Electric Pottery Wheel (₹12,000), Clay Blending Pug Mill (₹25,000), Eco Charcoal/Electric Kiln (₹35,000).
2. MoSJE Scheme Advantage: NSFDC Micro-Credit provides ₹1.4 Lakh loan at 4.5% interest for female SC artisans.
3. Pricing Strategy: Raw clay cost = ₹8/kg. Finished glazed vase sells for ₹250-₹450. Profit margin is ~55%.
4. Buyer Linkage: Register on GeM Portal (TribeIndia / Cottage Emporium) and Amazon Karigar. Demand spikes by 300% during Diwali/Dussehra season.`,

    handloom_weaving: `For Handloom & Textile Weaving:
1. Setup: Frame Loom with Jacquard setup (₹35,000), Organic Cotton/Silk Yarn (₹20,000 initial stock).
2. MoSJE Scheme Advantage: NBCFDC New Swarnima Scheme offers ₹2 Lakhs at 5% interest with 6-month moratorium.
3. Pricing Strategy: Raw yarn per saree = ₹600. Labor = 3 days. Wholesale sale price = ₹2,400. Retail boutique price = ₹4,200.
4. Digital Channel: Onboard onto ONDC (Open Network for Digital Commerce) via Craftsvilla or SHG seller portal.`,

    organic_fertilizer: `For Vermicompost & Bio-Fertilizers:
1. Setup: 10 HDPE Beds (12x4x2 ft) = ₹18,000, Eisenia Fetida Earthworms = ₹12,000, Cow Dung & Farm Waste = ₹5,000.
2. MoSJE Scheme Advantage: VISVAS scheme gives 5% interest rebate on SHG loans.
3. Financial Projection: 1 Bed produces 800kg vermicompost every 60 days. Selling at ₹8/kg = ₹6,400 per bed per cycle. Total annual revenue for 10 beds = ₹3,84,000. Net profit ~ 65%.`,

    bamboo_crafts: `For Bamboo & Cane Furniture:
1. Tools: Bamboo Splitter & Rounding Tool (₹22,000), Treatment Tank for Borax treatment (₹15,000).
2. MoSJE Scheme Advantage: PM-DAKSH free master craftsman training + ₹1,000 monthly stipend + NSFDC loan.
3. Market Opportunity: Eco-resorts and cafes buy bamboo lampshades at ₹800/unit (production cost ₹220).`,

    dairy_poultry: `For Micro Dairy & Desi Poultry Farm:
1. Unit: 2 High-yield Gir Cows or 200 Kadaknath Chicks.
2. Cost: Cows (₹1,20,000), Shed & Solar Chiller (₹80,000).
3. MoSJE Scheme Advantage: Combined MUDRA Kishor + VISVAS 5% interest subvention.
4. Daily Revenue: 24 Liters A2 Milk @ ₹70/L = ₹1,680/day. Monthly net income after feed = ₹32,000.`,

    food_processing: `For Pickles, Spices & Millet Processing:
1. Machinery: Solar Tunnel Dryer (₹25,000), Spice Grinder (₹18,000), Vacuum Sealer (₹12,000). FSSAI License = ₹100.
2. MoSJE Scheme Advantage: NBCFDC Mahila Samriddhi Yojana (₹1.4L loan at low interest).
3. Value Addition: Raw Turmeric ₹60/kg converted to packaged Organic Powder @ ₹280/kg.`
  },

  // Sample Products for Hyper-Local Market Linkage
  marketProducts: [
    {
      id: 1,
      name: "Handcrafted Glazed Clay Water Jug & Cups",
      artisan: "Sunita Devi (Saraswati SHG)",
      location: "Bankura, West Bengal",
      price: "₹450",
      originalPrice: "₹650",
      rating: 4.9,
      category: "Clay & Terracotta",
      badge: "MoSJE Beneficiary",
      stock: 45,
      imageSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-amber-700 fill-current"><path d="M50 15 C35 15 25 30 25 50 C25 75 35 85 50 85 C65 85 75 75 75 50 C75 30 65 15 50 15 Z M50 25 C58 25 65 35 65 50 C65 65 58 75 50 75 C42 75 35 65 35 50 C35 35 42 25 50 25 Z"/></svg>`
    },
    {
      id: 2,
      name: "Organic Pure Vermicompost Fertilizer (50kg)",
      artisan: "Rajesh Kumar (Kisan Vikas Kendra)",
      location: "Varanasi, Uttar Pradesh",
      price: "₹400",
      originalPrice: "₹550",
      rating: 4.8,
      category: "Bio-Fertilizer",
      badge: "VISVAS Scheme Verified",
      stock: 120,
      imageSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-emerald-600 fill-current"><path d="M50 10 L70 35 L55 35 L55 90 L45 90 L45 35 L30 35 Z M50 35 C65 20 85 30 70 50 C55 60 50 35 50 35 Z"/></svg>`
    },
    {
      id: 3,
      name: "Handwoven Pure Cotton Jamdani Saree",
      artisan: "Arati Biswas",
      location: "Nadia, West Bengal",
      price: "₹2,850",
      originalPrice: "₹4,200",
      rating: 5.0,
      category: "Handloom",
      badge: "NBCFDC Beneficiary",
      stock: 12,
      imageSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-purple-600 fill-current"><rect x="20" y="20" width="60" height="60" rx="8" stroke="currentColor" stroke-width="4" fill="none"/><path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" stroke-width="3"/></svg>`
    },
    {
      id: 4,
      name: "Eco-Friendly Bamboo Table Lamp & Stand",
      artisan: "Ganesh Tudu",
      location: "Purulia, West Bengal",
      price: "₹780",
      originalPrice: "₹1,200",
      rating: 4.7,
      category: "Bamboo Craft",
      badge: "PM-DAKSH Trained",
      stock: 28,
      imageSvg: `<svg viewBox="0 0 100 100" class="w-full h-full text-amber-600 fill-current"><rect x="42" y="50" width="16" height="40" rx="4"/><path d="M25 50 L75 50 L60 15 L40 15 Z"/></svg>`
    }
  ]
};
