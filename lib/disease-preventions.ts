export type Language = "en" | "si" | "ta";

export interface DiseasePrevention {
    name: {
        en: string;
        si: string;
        ta: string;
    };
    description: {
        en: string;
        si: string;
        ta: string;
    };
    prevention: {
        en: string[];
        si: string[];
        ta: string[];
    };
    treatment: {
        en: string[];
        si: string[];
        ta: string[];
    };
    severity: {
        en: string;
        si: string;
        ta: string;
    };
}

export const diseasePreventions: Record<string, DiseasePrevention> = {
    CMD: {
        name: {
            en: "Cassava Mosaic Disease",
            si: "මඤ්ඤොක්කා මොසෙයික් රෝගය",
            ta: "கசாவா மொசைக் நோய்"
        },
        description: {
            en: "Cassava Mosaic Disease (CMD) is a viral disease that causes mosaic patterns, leaf distortion, and reduced yield in cassava plants.",
            si: "මඤ්ඤොක්කා මොසෙයික් රෝගය (CMD) යනු මොසෙයික් රටා, කොළ විකෘතිකරණය සහ මඤ්ඤොක්කා ශාකවල අස්වැන්න අඩු වීමට හේතු වන වෛරස් රෝගයකි.",
            ta: "கசாவா மொசைக் நோய் (CMD) என்பது மொசைக் வடிவங்கள், இலை சிதைவு மற்றும் கசாவா தாவரங்களில் மகசூல் குறைவதை ஏற்படுத்தும் வைரஸ் நோயாகும்."
        },
        prevention: {
            en: [
                "Use disease-free planting materials from certified sources",
                "Remove and destroy infected plants immediately to prevent spread",
                "Control whitefly populations using appropriate insecticides",
                "Practice crop rotation with non-host crops",
                "Maintain proper spacing between plants (at least 1 meter)",
                "Remove weeds that can host the virus",
                "Use resistant cassava varieties when available",
                "Avoid planting during peak whitefly season"
            ],
            si: [
                "සහතික කරන ලද මූලාශ්‍රවලින් රෝග-නිදහස් රෝපණ ද්‍රව්‍ය භාවිතා කරන්න",
                "ව්‍යාප්තිය වළක්වා ගැනීම සඳහා ආසාදිත ශාක ක්ෂණිකව ඉවත් කර විනාශ කරන්න",
                "සුදුසු කෘමිනාශක භාවිතා කරමින් සුදු මැස්සන්ගේ ජනගහණය පාලනය කරන්න",
                "අසත්‍ය ශාක සමඟ ශාක භ්‍රමණය කරන්න",
                "ශාක අතර සුදුසු දුරක් පවත්වා ගන්න (අවම වශයෙන් මීටර් 1ක්)",
                "වෛරසයට අසත්‍ය විය හැකි වල් පැළෑටි ඉවත් කරන්න",
                "ලබා ගත හැකි විට ප්‍රතිරෝධී මඤ්ඤොක්කා ප්‍රභේද භාවිතා කරන්න",
                "සුදු මැස්සන්ගේ උච්ච කාලය අතරතුර රෝපණය වළක්වන්න"
            ],
            ta: [
                "சான்றளிக்கப்பட்ட மூலங்களிலிருந்து நோய் இல்லாத நடவு பொருட்களை பயன்படுத்தவும்",
                "பரவலைத் தடுக்க உடனடியாக பாதிக்கப்பட்ட தாவரங்களை அகற்றி அழிக்கவும்",
                "பொருத்தமான பூச்சிக்கொல்லிகளைப் பயன்படுத்தி வெள்ளை ஈக்களின் எண்ணிக்கையை கட்டுப்படுத்தவும்",
                "ஹோஸ்ட் அல்லாத பயிர்களுடன் பயிர் சுழற்சி செய்யவும்",
                "தாவரங்களுக்கு இடையே சரியான இடைவெளியை பராமரிக்கவும் (குறைந்தது 1 மீட்டர்)",
                "வைரஸுக்கு ஹோஸ்ட் செய்யக்கூடிய களைகளை அகற்றவும்",
                "கிடைக்கும்போது எதிர்ப்பு கசாவா வகைகளை பயன்படுத்தவும்",
                "வெள்ளை ஈக்களின் உச்ச காலத்தில் நடவு செய்வதை தவிர்க்கவும்"
            ]
        },
        treatment: {
            en: [
                "Remove and burn all infected plants immediately",
                "Apply systemic insecticides to control whitefly vectors",
                "Use neem-based products as organic control measures",
                "Rogue out infected plants every 2 weeks during early growth",
                "Apply balanced fertilizers to improve plant health",
                "Consider using virus-free tissue culture plants"
            ],
            si: [
                "සියලුම ආසාදිත ශාක ක්ෂණිකව ඉවත් කර දැව්වන්න",
                "සුදු මැස්සන්ගේ දෛශික පාලනය සඳහා පද්ධතිගත කෘමිනාශක යොදන්න",
                "කාබනික පාලන ක්‍රම ලෙස නීම්-පාදක නිෂ්පාදන භාවිතා කරන්න",
                "මුල් වර්ධනය අතරතුර සෑම සති 2 කට වරක් ආසාදිත ශාක ඉවත් කරන්න",
                "ශාක සෞඛ්‍යය වැඩි දියුණු කිරීම සඳහා සමතුලිත පොහොර යොදන්න",
                "වෛරස්-නිදහස් සෛල සංස්කෘති ශාක භාවිතා කිරීම සලකා බලන්න"
            ],
            ta: [
                "உடனடியாக அனைத்து பாதிக்கப்பட்ட தாவரங்களையும் அகற்றி எரிக்கவும்",
                "வெள்ளை ஈ வெக்டர்களை கட்டுப்படுத்த முறைமை பூச்சிக்கொல்லிகளை பயன்படுத்தவும்",
                "கரிம கட்டுப்பாட்டு நடவடிக்கைகளாக வேப்ப எண்ணெய் அடிப்படையிலான தயாரிப்புகளை பயன்படுத்தவும்",
                "ஆரம்ப வளர்ச்சியின் போது ஒவ்வொரு 2 வாரங்களுக்கும் பாதிக்கப்பட்ட தாவரங்களை அகற்றவும்",
                "தாவர ஆரோக்கியத்தை மேம்படுத்த சமநிலை உரங்களை பயன்படுத்தவும்",
                "வைரஸ் இல்லாத திசு கலாச்சார தாவரங்களை பயன்படுத்த கருத்தில் கொள்ளவும்"
            ]
        },
        severity: {
            en: "Moderate to Severe",
            si: "මධ්‍යම සිට රඳවා ගැනීමට අපහසු",
            ta: "மிதமானது முதல் கடுமையானது"
        }
    },
    BLS: {
        name: {
            en: "Cassava Bacterial Blight",
            si: "මඤ්ඤොක්කා බැක්ටීරියානු බ්ලයිට්",
            ta: "கசாவா பாக்டீரியா பிளைட்"
        },
        description: {
            en: "Cassava Bacterial Blight (BLS) is caused by bacteria that lead to leaf spots, wilting, and stem cankers in cassava plants.",
            si: "මඤ්ඤොක්කා බැක්ටීරියානු බ්ලයිට් (BLS) යනු මඤ්ඤොක්කා ශාකවල කොළ කැලෑ, පැලීම සහ කඳ කැන්සර් වලට හේතු වන බැක්ටීරියාවකි.",
            ta: "கசாவா பாக்டீரியா பிளைட் (BLS) என்பது இலை புள்ளிகள், வாடுதல் மற்றும் கசாவா தாவரங்களில் தண்டு புற்றுநோயை ஏற்படுத்தும் பாக்டீரியாவால் ஏற்படுகிறது."
        },
        prevention: {
            en: [
                "Use certified disease-free planting materials",
                "Take stakes only from vigorous, symptom-free plants; prefer hardened middle stem sections over basal cuttings when blight is nearby",
                "Disinfect cutting tools between plants (e.g. diluted bleach or flame) to stop bacteria spreading on tools",
                "Avoid overhead irrigation to reduce leaf wetness",
                "Practice proper field sanitation and remove crop debris",
                "Maintain adequate plant spacing for good air circulation",
                "Avoid working in fields when plants are wet — rain splash spreads bacteria",
                "Use resistant varieties if available",
                "Rotate with non-host crops and consider fallow where outbreaks are severe",
                "Intercropping (e.g. with maize) can lower cassava bacterial blight pressure in some environments",
                "Control weeds that can harbor the bacteria"
            ],
            si: [
                "සහතික කරන ලද රෝග-නිදහස් රෝපණ ද්‍රව්‍ය භාවිතා කරන්න",
                "බලගතු, රෝග ලක්ෂණ නොමැති ශාකවලින් පමණක් කොටස් ගන්න; බ්ලයිට් අසලදී පාද මදල කොටස් වලට වඩා දැරිය හැකි මැද කඳ කොටස් යොදා ගන්න",
                "කොටස් සකස් කරන මැද පැදුරු පිරිසිදු කරන්න (උදා. දිය කරන ලද බීල්ච් හෝ ගින්නෙන්) — මෙවලම් මගින් බැක්ටීරියා පැතිරීම වළක්වන්න",
                "කොළ තෙත්කම අඩු කිරීම සඳහා ඉහළ ජලය ලබා දීම වළක්වන්න",
                "සුදුසු ක්ෂේත්‍ර සනීපාරක්ෂාව කරන්න සහ අස්වැන්නේ කුණු ඉවත් කරන්න",
                "හොඳ වායු සංසරණය සඳහා ප්‍රමාණවත් ශාක අවකාශය පවත්වා ගන්න",
                "ශාක තෙත් වූ විට ක්ෂේත්‍රවල වැඩ නොකරන්න — වැස්සෙන් පැන නගින බිංදු මගින් බැක්ටීරියා පැතිරේ",
                "ලබා ගත හැකි විට ප්‍රතිරෝධී ප්‍රභේද භාවිතා කරන්න",
                "බෝ පැතිරීම් දැඩි විට අසත්‍ය ශාක සමඟ භ්‍රමණය කර නිශ්චල කාලයක් සලකා බලන්න",
                "සමහර පරිසරවල බෝ මෙන් අන්තර් බෝ කිරීම බැක්ටීරියානු බ්ලයිට් පීඩනය අඩු කරයි",
                "බැක්ටීරියාවට අසත්‍ය විය හැකි වල් පැළෑටි පාලනය කරන්න"
            ],
            ta: [
                "சான்றளிக்கப்பட்ட நோய் இல்லாத நடவு பொருட்களை பயன்படுத்தவும்",
                "வலுவான, அறிகுறியற்ற தாவரங்களிலிருந்து மட்டும் கம்புகளை எடுக்கவும்; பிளைட் அருகில் உள்ளபோது அடித் துண்டுகளுக்கு பதிலாக கடினமான நடுத் தண்டுப் பகுதியை முன்னிலைப்படுத்தவும்",
                "தாவரங்களுக்கிடையே வெட்டும் கருவிகளை சுத்தம் செய்யவும் (எ.கா. நீர்த்த வெள்ளைப்பூச்சு அல்லது தீ) — கருவிகளால் பாக்டீரியா பரவுவதைத் தடுக்கவும்",
                "இலை ஈரப்பதத்தை குறைக்க மேலே நீர்ப்பாசனம் செய்வதை தவிர்க்கவும்",
                "சரியான வயல் சுகாதாரத்தை பயிற்சி செய்து பயிர் குப்பைகளை அகற்றவும்",
                "நல்ல காற்று சுழற்சிக்கு போதுமான தாவர இடைவெளியை பராமரிக்கவும்",
                "தாவரங்கள் ஈரமாக இருக்கும்போது வயலில் வேலை செய்வதை தவிர்க்கவும் — மழை தெளிப்ப்தில் பாக்டீரியா பரவும்",
                "கிடைக்கும்போது எதிர்ப்பு வகைகளை பயன்படுத்தவும்",
                "தாக்குதல் கடுமையான பகுதிகளில் ஹோஸ்ட் அல்லாத பயிர்களுடன் சுழற்சி செய்து விடுப்புக் காலத்தை பயன்படுத்திக் கொள்ளவும்",
                "சில சூழல்களில் சோளத்துடன் இடைப்பயிரிடுதல் பாக்டீரியா பிளைட் அழுத்தத்தை குறைக்கும்",
                "பாக்டீரியாவை வைத்திருக்கக்கூடிய களைகளை கட்டுப்படுத்தவும்"
            ]
        },
        treatment: {
            en: [
                "Remove and destroy all infected plant parts",
                "Before planting, inspect stakes by splitting stems — reject material with brown vascular streaking",
                "Apply copper-based bactericides early in the disease cycle when extension services recommend them",
                "Prune affected branches and stems during dry weather only",
                "Improve drainage to reduce soil moisture and bacterial splash",
                "Apply organic matter to improve soil health",
                "Use biological control agents if available locally"
            ],
            si: [
                "සියලුම ආසාදිත ශාක කොටස් ඉවත් කර විනාශ කරන්න",
                "රෝපණයට පෙර කඳ කොටස් බෙදා නහරයේ දුඹුරු වර්ණය පරීක්ෂා කරන්න — එවැනි ද්‍රව්‍ය ප්‍රතික්ෂේප කරන්න",
                "දිගු සේවා නිර්දේශ කරන විට පමණක් රෝග චක්‍රයේ මුල් අවධියේදී තඹ-පාදක බැක්ටීරියානාශක යොදන්න",
                "බලපෑමට ලක් වූ අතු සහ කඳ වියළි කාලගුණයේදී පමණක් කපන්න",
                "බැක්ටීරියා පැන නැගීම අඩු කිරීමට ජලාපවහනය සහ පස් තෙත්කම වැඩි දියුණු කරන්න",
                "පස් සෞඛ්‍යය වැඩි දියුණු කිරීම සඳහා කාබනික ද්‍රව්‍ය යොදන්න",
                "දේශීයව ලබා ගත හැකි විට ජීව විද්‍යාත්මක පාලන කාරක භාවිතා කරන්න"
            ],
            ta: [
                "அனைத்து பாதிக்கப்பட்ட தாவர பாகங்களையும் அகற்றி அழிக்கவும்",
                "நடவுக்கு முன் தண்டுகளை பிளந்து நாள வடிசிவுகளை சரிபார்க்கவும் — பழுப்பு நாள வண்ண கம்புகளை நிராகரிக்கவும்",
                "நீட்டிப்பு சேவைகள் பரிந்துரைக்கும் போது மட்டுமே நோய் சுழற்சியின் ஆரம்பத்தில் தாமிர அடிப்படையிலான பாக்டீரியா கொல்லிகளை பயன்படுத்தவும்",
                "பாதிக்கப்பட்ட கிளைகளையும் தண்டுகளையும் வெட்ட வெயில் வானிலையில் மட்டும்",
                "பாக்டீரியா தெளிப்பை குறைக்க வடிகாலையும் மண் ஈரத்தையும் மேம்படுத்தவும்",
                "மண் ஆரோக்கியத்தை மேம்படுத்த கரிம பொருட்களை பயன்படுத்தவும்",
                "உள்ளூரில் கிடைக்கும்போது உயிரியல் கட்டுப்பாட்டு முகவர்களை பயன்படுத்தவும்"
            ]
        },
        severity: {
            en: "Moderate",
            si: "මධ්‍යම",
            ta: "மிதமானது"
        }
    },
    CBB: {
        name: {
            en: "Cassava Brown Streak Disease",
            si: "මඤ්ඤොක්කා දුඹුරු ඉරිතැල්ල රෝගය",
            ta: "கசாவா பிரவுன் ஸ்ட்ரீக் நோய்"
        },
        description: {
            en: "Cassava Brown Streak Disease (CBB) causes brown streaks on stems and roots, leading to significant yield loss.",
            si: "මඤ්ඤොක්කා දුඹුරු ඉරිතැල්ල රෝගය (CBB) කඳ සහ මූලයන් මත දුඹුරු ඉරිතැලි ඇති කරයි, එය සැලකිය යුතු අස්වැන්න අඩු වීමට හේතු වේ.",
            ta: "கசாவா பிரவுன் ஸ்ட்ரீக் நோய் (CBB) தண்டுகள் மற்றும் வேர்களில் பழுப்பு கோடுகளை ஏற்படுத்துகிறது, இது குறிப்பிடத்தக்க மகசூல் இழப்புக்கு வழிவகுக்கிறது."
        },
        prevention: {
            en: [
                "Use only certified virus-free planting materials — long-distance spread is mainly through infected stakes",
                "Do not share or sell stakes from plots where brown streak symptoms appeared",
                "Control whitefly populations where they are abundant (short-distance spread in the field)",
                "Remove and destroy infected plants immediately",
                "Practice strict field hygiene and sanitation",
                "Avoid planting in areas with known disease history",
                "Prefer CBSD-tolerant or resistant varieties from national breeding or extension programs where available",
                "Implement proper crop rotation and avoid consecutive cassava without clean planting stock",
                "Monitor fields and roots regularly for stem lesions and root necrosis"
            ],
            si: [
                "සහතික කරන ලද වෛරස්-නිදහස් රෝපණ ද්‍රව්‍ය පමණක් භාවිතා කරන්න — දුරස්ථ පැතිරීම මූලික වශයෙන් ආසාදිත කොටස් මගින් සිදු වේ",
                "දුඹුරු ඉරි රෝග ලක්ෂණ දැක්වූ කොටස් සහිත කොටස් බෙදා ගැනීම හෝ විකිණීම නොකරන්න",
                "සුදු මැස්සන් බහුල වූ විට පමණක් ඒවායේ ජනගහණය පාලනය කරන්න (ක්ෂේත්‍රයේ කෙටි දුර පැතිරීම)",
                "ආසාදිත ශාක ක්ෂණිකව ඉවත් කර විනාශ කරන්න",
                "දැඩි ක්ෂේත්‍ර සනීපාරක්ෂාව සහ පිරිසිදු කම පවත්වා ගන්න",
                "දන්නා රෝග ඉතිහාසයක් ඇති ප්‍රදේශවල රෝපණය වළක්වන්න",
                "ලබා ගත හැකි විට ජාතික පරීක්ෂණ හෝ දිගු සේවා වැඩසටහන් වලින් CBSD ඔරොත්තු හෝ ප්‍රතිරෝධී ප්‍රභේද ප්‍රිය කරන්න",
                "සුදුසු අස්වැන්න භ්‍රමණය කරන්න; පිරිසිදු රෝපණ ද්‍රව්‍ය නොමැතිව නැවත නැවත මඤ්ඤොක්කා නොබෝ කරන්න",
                "කඳ තුවාල සහ මූල නෙක්රෝසිස් සඳහා ක්ෂේත්‍ර සහ මූල නිතිපතා නිරීක්ෂණය කරන්න"
            ],
            ta: [
                "சான்றளிக்கப்பட்ட வைரஸ் இல்லாத நடவு பொருட்களை மட்டும் பயன்படுத்தவும் — நீண்ட தூர பரவல் முக்கியமாக நோயுற்ற கம்புகளால்",
                "பழுப்பு இழை அறிகுறிகள் தோன்றிய துண்டுகளிலிருந்து கம்புகளை பகிரவோ விற்கவோ வேண்டாம்",
                "வெள்ளை ஈக்கள் அதிகமாக உள்ள இடங்களில் மட்டும் அவற்றை கட்டுப்படுத்தவும் (வயலில் குறுகிய தூர பரவல்)",
                "பாதிக்கப்பட்ட தாவரங்களை உடனடியாக அகற்றி அழிக்கவும்",
                "கடுமையான வயல் சுகாதாரம் மற்றும் சுத்தத்தை பயிற்சி செய்யவும்",
                "அறியப்பட்ட நோய் வரலாற்றுடன் பகுதிகளில் நடவு செய்வதை தவிர்க்கவும்",
                "கிடைக்கும்போது தேசிய இனப்பெருக்க அல்லது நீட்டிப்பு திட்டங்களின் CBSD சகிப்புத்தன்மை அல்லது எதிர்ப்பு வகைகளை முன்னிலைப்படுத்தவும்",
                "சரியான பயிர் சுழற்சி செய்யவும்; சுத்தமான நடவு இல்லாமல் தொடர்ந்து கசாவா வைக்க வேண்டாம்",
                "தண்டு புண்கள் மற்றும் வேர் அழுகலுக்காக வயல்களையும் வேர்களையும் தவறாமல் கண்காணிக்கவும்"
            ]
        },
        treatment: {
            en: [
                "Immediately remove and bury or burn severely infected plants to reduce virus sources",
                "Apply systemic insecticides for whitefly control only as part of an integrated plan advised locally",
                "Rogue out infected plants weekly during early crop stages",
                "Use virus-free tissue culture or indexed plants for replanting — do not recycle stakes from symptomatic blocks",
                "Apply balanced nutrition to strengthen plants against secondary stress",
                "Report unusual root symptoms to agricultural extension for confirmation and area-wide management"
            ],
            si: [
                "වෛරස් මූලාශ්‍ර අඩු කිරීමට දැඩි ලෙස ආසාදිත ශාක ක්ෂණිකව ඉවත් කර වල දමන්න හෝ දැව්වන්න",
                "දේශීයව ඒකාබද්ධ සැලැස්මක් තුළ පමණක් සුදු මැස්සන් පාලනයට පද්ධතිගත කෘමිනාශක යොදන්න",
                "මුල් අස්වැන්න අවධි අතරතුර සෑම සතියකට වරක් ආසාදිත ශාක ඉවත් කරන්න",
                "නැවත රෝපණයට වෛරස්-නිදහස් සෛල සංස්කෘති හෝ දර්ශකශීලී පැල සමඟ අදාළ බ්ලොක් වලින් කොටස් නැවත භාවිතා නොකරන්න",
                "ද්විතීයික ආතතියට එරෙහිව ශාක ශක්තිමත් කිරීමට සමතුලිත පෝෂණය යොදන්න",
                "ප්‍රදේශ පුරා කළමනාකරණය සඳහා අසාමාන්‍ය මූල ලක්ෂණ දිගු සේවා වෙත වාර්තා කරන්න"
            ],
            ta: [
                "வைரஸ் மூலங்களை குறைக்க கடுமையாக நோயுற்ற தாவரங்களை உடனடியாக அகற்றி புதைக்கவும் அல்லது எரிக்கவும்",
                "உள்ளூர் ஆலோசனையுடன் ஒருங்கிணைந்த திட்டத்தின் பகுதியாக மட்டுமே வெள்ளை ஈ கட்டுப்பாட்டிற்கு முறைமை பூச்சிக்கொல்லிகளை பயன்படுத்தவும்",
                "ஆரம்ப பயிர் கட்டங்களில் பாதிக்கப்பட்ட தாவரங்களை வாரந்தோறும் அகற்றவும்",
                "மீண்டும் நடவுக்கு வைரஸ் இல்லாத திசு கலாச்சாரம் அல்லது குறியிடப்பட்ட பயிர்கள் — அறிகுறியுள்ள பகுதிகளிலிருந்து கம்புகளை மீண்டும் பயன்படுத்த வேண்டாம்",
                "இரண்டாம் நிலை அழுத்தத்திற்கு எதிராக தாவரங்களை வலுப்படுத்த சமநிலை ஊட்டச்சத்தை பயன்படுத்தவும்",
                "உறுதிப்படுத்தலுக்கும் பகுதி முழுவதுமான மேலாண்மைக்கும் வளர்ப்பு சேவைகளுக்கு அசாதாரண வேர் அறிகுறிகளை புகார் செய்யவும்"
            ]
        },
        severity: {
            en: "Severe",
            si: "රඳවා ගැනීමට අපහසු",
            ta: "கடுமையானது"
        }
    },
    Healthy: {
        name: {
            en: "Healthy Plant",
            si: "සෞඛ්‍ය සම්පන්න ශාකය",
            ta: "ஆரோக்கியமான தாவரம்"
        },
        description: {
            en: "Your cassava plant appears to be healthy with no signs of disease.",
            si: "ඔබේ මඤ්ඤොක්කා ශාකය රෝග ලක්ෂණ නොමැතිව සෞඛ්‍ය සම්පන්න බව පෙනේ.",
            ta: "உங்கள் கசாவா தாவரம் நோய் அறிகுறிகள் இல்லாமல் ஆரோக்கியமாக தோன்றுகிறது."
        },
        prevention: {
            en: [
                "Continue regular monitoring of your plants",
                "Maintain proper spacing between plants",
                "Apply balanced fertilizers regularly",
                "Ensure adequate water supply",
                "Control weeds regularly",
                "Practice good field hygiene",
                "Monitor for pests and diseases weekly",
                "Use disease-free planting materials for future crops"
            ],
            si: [
                "ඔබේ ශාක නිතිපතා නිරීක්ෂණය කිරීම දිගටම කරගෙන යන්න",
                "ශාක අතර සුදුසු අවකාශය පවත්වා ගන්න",
                "නිතිපතා සමතුලිත පොහොර යොදන්න",
                "ප්‍රමාණවත් ජල සැපයුම සහතික කරන්න",
                "නිතිපතා වල් පැළෑටි පාලනය කරන්න",
                "හොඳ ක්ෂේත්‍ර සනීපාරක්ෂාව කරන්න",
                "සෑම සතියකම කෘමි සහ රෝග නිරීක්ෂණය කරන්න",
                "අනාගත අස්වැන්න සඳහා රෝග-නිදහස් රෝපණ ද්‍රව්‍ය භාවිතා කරන්න"
            ],
            ta: [
                "உங்கள் தாவரங்களை தவறாமல் கண்காணிக்கவும்",
                "தாவரங்களுக்கு இடையே சரியான இடைவெளியை பராமரிக்கவும்",
                "தவறாமல் சமநிலை உரங்களை பயன்படுத்தவும்",
                "போதுமான நீர் வழங்கலை உறுதி செய்யவும்",
                "தவறாமல் களைகளை கட்டுப்படுத்தவும்",
                "நல்ல வயல் சுகாதாரத்தை பயிற்சி செய்யவும்",
                "வாரந்தோறும் பூச்சிகள் மற்றும் நோய்களை கண்காணிக்கவும்",
                "எதிர்கால பயிர்களுக்கு நோய் இல்லாத நடவு பொருட்களை பயன்படுத்தவும்"
            ]
        },
        treatment: {
            en: [
                "No treatment needed - plant is healthy",
                "Continue with regular maintenance practices",
                "Monitor for any changes in plant health",
                "Maintain optimal growing conditions"
            ],
            si: [
                "වෙද්‍ය ප්‍රතිකාරයක් අවශ්‍ය නොවේ - ශාකය සෞඛ්‍ය සම්පන්නයි",
                "නිතිපතා නඩත්තු ක්‍රියාකාරකම් දිගටම කරගෙන යන්න",
                "ශාක සෞඛ්‍යයේ ඕනෑම වෙනස්කම් සඳහා නිරීක්ෂණය කරන්න",
                "ප්‍රශස්ත වර්ධන තත්ත්වයන් පවත්වා ගන්න"
            ],
            ta: [
                "சிகிச்சை தேவையில்லை - தாவரம் ஆரோக்கியமானது",
                "தவறாமல் பராமரிப்பு நடைமுறைகளை தொடரவும்",
                "தாவர ஆரோக்கியத்தில் ஏதேனும் மாற்றங்களை கண்காணிக்கவும்",
                "உகந்த வளர்ச்சி நிலைமைகளை பராமரிக்கவும்"
            ]
        },
        severity: {
            en: "None",
            si: "කිසිවක් නැත",
            ta: "இல்லை"
        }
    }
};

