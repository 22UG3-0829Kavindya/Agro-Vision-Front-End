"use client";

import { useAppContext } from "@/app/providers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
    ArrowLeft,
    Globe,
    CheckCircle,
    AlertTriangle,
    Shield,
    Heart,
    Info,
    TrendingUp,
    Sprout,
} from "lucide-react";
import Link from "next/link";
import { Language, languageNames } from "@/lib/constants";
import { diseasePreventions, DiseasePrevention } from "@/lib/disease-preventions";
import {
    loadDiseaseAnalysisResult,
    normalizePredictedClass,
    type DiseaseAnalysisResult,
} from "@/lib/disease-analysis-result";
import { useEffect, useMemo, useState } from "react";

export default function AnalyzingResultsPage() {
    const { language, setLanguage } = useAppContext();
    const lang = language as Language;

    const [analysisResult, setAnalysisResult] = useState<DiseaseAnalysisResult | null | undefined>(
        undefined,
    );

    useEffect(() => {
        setAnalysisResult(loadDiseaseAnalysisResult());
    }, []);

    const predictedKey = useMemo(() => {
        if (!analysisResult?.predicted_class) return "";
        return normalizePredictedClass(analysisResult.predicted_class);
    }, [analysisResult]);

    const diseaseData: DiseasePrevention | undefined = predictedKey
        ? diseasePreventions[predictedKey]
        : undefined;

    const isHealthy = predictedKey === "Healthy";

    const probabilityEntries = useMemo(() => {
        if (!analysisResult) return [];
        const raw = analysisResult.all_probabilities;
        if (raw && typeof raw === "object" && Object.keys(raw).length > 0) {
            return Object.entries(raw).sort(([, a], [, b]) => Number(b) - Number(a));
        }
        return [[predictedKey, analysisResult.confidence]] as [string, number][];
    }, [analysisResult, predictedKey]);

    if (analysisResult === undefined) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100 flex items-center justify-center p-8">
                <div className="flex items-center gap-3 text-green-800">
                    <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                    <span className="font-medium">
                        {lang === "en" && "Loading results…"}
                        {lang === "si" && "ප්‍රතිඵල පූරණය වෙමින්…"}
                        {lang === "ta" && "முடிவுகள் ஏற்றுகிறது…"}
                    </span>
                </div>
            </div>
        );
    }

    if (!analysisResult) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100 p-8">
                <div className="container mx-auto max-w-4xl">
                    <Card className="bg-amber-50 border-amber-200">
                        <CardContent className="p-6 space-y-4">
                            <p className="text-amber-900 font-medium">
                                {lang === "en" &&
                                    "No analysis data found. Run disease detection first, then open the detailed guide from the results."}
                                {lang === "si" &&
                                    "විශ්ලේෂණ දත්ත හමු නොවීය. පළමුව රෝග හඳුනාගැනීම කර ඉන්පසු විස්තරාත්මක මාර්ගෝපදේශය විවෘත කරන්න."}
                                {lang === "ta" &&
                                    "பகுப்பாய்வு தரவு இல்லை. முதலில் நோய் கண்டறிதலை இயக்கி, பின்னர் முடிவுகளிலிருந்து விரிவான வழிகாட்டியைத் திறக்கவும்."}
                            </p>
                            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                                <Link href="/disease-detection">
                                    {lang === "en" && "Go to Disease Detection"}
                                    {lang === "si" && "රෝග හඳුනාගැනීමට යන්න"}
                                    {lang === "ta" && "நோய் கண்டறிதலுக்குச் செல்லவும்"}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    if (!diseaseData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100 p-8">
                <div className="container mx-auto max-w-4xl">
                    <Card className="bg-amber-50 border-amber-200">
                        <CardContent className="p-6 space-y-4">
                            <p className="text-amber-900 font-medium">
                                {lang === "en" &&
                                    `No prevention guide is available for the label “${analysisResult.predicted_class}”. Expected one of: CMD, BLS, CBB, Healthy.`}
                                {lang === "si" &&
                                    `“${analysisResult.predicted_class}" ලේබලය සඳහා මාර්ගෝපදේශයක් නොමැත. අපේක්ෂිත: CMD, BLS, CBB, Healthy.`}
                                {lang === "ta" &&
                                    `“${analysisResult.predicted_class}" என்ற குறிச்சொல்லுக்கு வழிகாட்டி இல்லை. எதிர்பார்க்கப்படுவன: CMD, BLS, CBB, Healthy.`}
                            </p>
                            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                                <Link href="/disease-detection">
                                    {lang === "en" && "Back to Disease Detection"}
                                    {lang === "si" && "රෝග හඳුනාගැනීමට ආපසු"}
                                    {lang === "ta" && "நோய் கண்டறிதலுக்குத் திரும்ப"}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    const infoBannerClass = isHealthy
        ? "bg-emerald-50 border-emerald-200"
        : "bg-amber-50 border-amber-200";
    const infoTextTitle = isHealthy ? "text-emerald-900" : "text-amber-900";
    const infoTextBody = isHealthy ? "text-emerald-800" : "text-amber-800";
    const infoAccent = isHealthy ? "text-emerald-700" : "text-amber-700";
    const InfoIcon = isHealthy ? Sprout : AlertTriangle;
    const infoIconColor = isHealthy ? "text-emerald-600" : "text-amber-600";

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
            <header className="sticky top-0 z-50 bg-green-50/80 backdrop-blur-md border-b border-green-200">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/disease-detection"
                            className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="font-medium">
                                {lang === "en" && "Back to Detection"}
                                {lang === "si" && "හඳුනාගැනීමට ආපසු"}
                                {lang === "ta" && "கண்டறிதலுக்கு திரும்ப"}
                            </span>
                        </Link>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="hover:bg-green-100 text-green-700">
                                <Globe className="h-4 w-4 mr-1" />
                                {languageNames[language]}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white border-green-200">
                            {Object.entries(languageNames).map(([code, name]) => (
                                <DropdownMenuItem
                                    key={code}
                                    onClick={() => setLanguage(code as Language)}
                                    className="hover:bg-green-50 text-green-700"
                                >
                                    {name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                        {lang === "en" && "Analysis Results"}
                        {lang === "si" && "විශ්ලේෂණ ප්‍රතිඵල"}
                        {lang === "ta" && "பகுப்பாய்வு முடிவுகள்"}
                    </h1>
                    <p className="text-lg text-green-700">
                        {lang === "en" &&
                            (isHealthy
                                ? "Your plant status and best-practice guidance"
                                : "Detailed disease analysis and prevention guide")}
                        {lang === "si" &&
                            (isHealthy
                                ? "ඔබේ ශාක තත්ත්වය සහ හොඳම පුරුදු මාර්ගෝපදේශය"
                                : "විස්තරාත්මක රෝග විශ්ලේෂණය සහ ප්‍රතිරෝධක මාර්ගෝපදේශය")}
                        {lang === "ta" &&
                            (isHealthy
                                ? "உங்கள் தாவர நிலை மற்றும் சிறந்த நடைமுறை வழிகாட்டுதல்"
                                : "விரிவான நோய் பகுப்பாய்வு மற்றும் தடுப்பு வழிகாட்டி")}
                    </p>
                </div>

                <Card className="bg-white/80 border-green-200 mb-6">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                                {lang === "en" && "Analysis Complete"}
                                {lang === "si" && "විශ්ලේෂණය සම්පූර්ණ"}
                                {lang === "ta" && "பகுப்பாய்வு முடிந்தது"}
                            </CardTitle>
                            <span className="text-sm text-green-600">
                                {analysisResult.timestamp ?? new Date().toLocaleString()}
                            </span>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className={`${infoBannerClass} p-6 rounded-lg border`}>
                            <div className="flex items-start gap-4">
                                <InfoIcon className={`h-8 w-8 flex-shrink-0 mt-1 ${infoIconColor}`} />
                                <div className="flex-1">
                                    <h3 className={`text-xl font-semibold mb-2 ${infoTextTitle}`}>
                                        {diseaseData.name[lang]}
                                    </h3>
                                    <p className={`${infoTextBody} mb-4`}>{diseaseData.description[lang]}</p>

                                    <div
                                        className={`grid grid-cols-1 gap-4 mt-4 ${analysisResult.affectedArea ? "md:grid-cols-3" : "md:grid-cols-2"}`}
                                    >
                                        <div className="bg-white p-4 rounded-lg border border-white/60 shadow-sm">
                                            <p className={`text-sm ${infoAccent} mb-1`}>
                                                {lang === "en" && "Confidence Level"}
                                                {lang === "si" && "විශ්වාසදායකත්ව මට්ටම"}
                                                {lang === "ta" && "நம்பகத்தன்மை நிலை"}
                                            </p>
                                            <p className={`text-2xl font-bold ${infoTextTitle}`}>
                                                {(analysisResult.confidence * 100).toFixed(1)}%
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-white/60 shadow-sm">
                                            <p className={`text-sm ${infoAccent} mb-1`}>
                                                {lang === "en" && "Severity"}
                                                {lang === "si" && "දරුණු බව"}
                                                {lang === "ta" && "கடுமை"}
                                            </p>
                                            <p className={`text-2xl font-bold ${infoTextTitle}`}>
                                                {diseaseData.severity[lang]}
                                            </p>
                                        </div>
                                        {analysisResult.affectedArea ? (
                                            <div className="bg-white p-4 rounded-lg border border-white/60 shadow-sm">
                                                <p className={`text-sm ${infoAccent} mb-1`}>
                                                    {lang === "en" && "Affected Area"}
                                                    {lang === "si" && "බලපෑමට ලක් වූ ප්‍රදේශය"}
                                                    {lang === "ta" && "பாதிக்கப்பட்ட பகுதி"}
                                                </p>
                                                <p className={`text-lg font-bold ${infoTextTitle}`}>
                                                    {analysisResult.affectedArea}
                                                </p>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                                <Shield className="h-5 w-5" />
                                {lang === "en" && (isHealthy ? "Best practices" : "Prevention Measures")}
                                {lang === "si" && (isHealthy ? "හොඳම පුරුදු" : "ප්‍රතිරෝධක පියවර")}
                                {lang === "ta" && (isHealthy ? "சிறந்த நடைமுறைகள்" : "தடுப்பு நடவடிக்கைகள்")}
                            </h3>
                            <p className="text-blue-800 mb-4 text-sm">
                                {lang === "en" &&
                                    (isHealthy
                                        ? "Keep your crop productive and resilient with these habits:"
                                        : "Follow these steps to reduce the spread and risk of this disease:")}
                                {lang === "si" &&
                                    (isHealthy
                                        ? "මෙම පුරුදු සමඟ ඔබේ අස්වැන්න ඵලදායී හා ඔරොත්තු වීමක් පවත්වා ගන්න:"
                                        : "මෙම රෝගයේ ව්‍යාප්තිය සහ අවදානම අඩු කිරීමට මෙම පියවර අනුගමනය කරන්න:")}
                                {lang === "ta" &&
                                    (isHealthy
                                        ? "இந்த பழக்கங்களுடன் உங்கள் பயிரை உற்பத்தித்திறனும் நிலைத்தன்மையும் கொண்டதாக வைத்திருக்கவும்:"
                                        : "இந்த நோயின் பரவலையும் அபாயத்தையும் குறைக்க இந்த படிகளைப் பின்பற்றவும்:")}
                            </p>
                            <ul className="space-y-3">
                                {diseaseData.prevention[lang].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-blue-800">
                                        <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                                            {index + 1}
                                        </span>
                                        <span className="flex-1">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                                <Heart className="h-5 w-5" />
                                {lang === "en" &&
                                    (isHealthy ? "Care recommendations" : "Treatment Recommendations")}
                                {lang === "si" && (isHealthy ? "සත්කාර නිර්දේශ" : "වෙද්‍ය ප්‍රතිකාර නිර්දේශ")}
                                {lang === "ta" &&
                                    (isHealthy ? "பராமரிப்பு பரிந்துரைகள்" : "சிகிச்சை பரிந்துரைகள்")}
                            </h3>
                            <p className="text-green-800 mb-4 text-sm">
                                {lang === "en" &&
                                    (isHealthy
                                        ? "Suggested next steps for maintaining plant health:"
                                        : "If plants already show symptoms, consider these actions together with local extension advice:")}
                                {lang === "si" &&
                                    (isHealthy
                                        ? "ශාක සෞඛ්‍යය පවත්වා ගැනීමට යෝජිත පියවර:"
                                        : "ශාකවල දැනටමත් ලක්ෂණ දැක්වේ නම්, දේශීය දිගු සේවා උපදෙස් සමඟ මෙම ක්‍රියා සලකා බලන්න:")}
                                {lang === "ta" &&
                                    (isHealthy
                                        ? "தாவர ஆரோக்கியத்தை பராமரிக்க பரிந்துரைக்கப்படும் அடுத்த படிகள்:"
                                        : "தாவரங்களில் ஏற்கனவே அறிகுறிகள் தென்பட்டால், உள்ளூர் நீட்டிப்பு ஆலோசனையுடன் இந்த நடவடிக்கைகளை கருத்தில் கொள்ளவும்:")}
                            </p>
                            <ul className="space-y-3">
                                {diseaseData.treatment[lang].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-green-800">
                                        <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-900 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                                            {index + 1}
                                        </span>
                                        <span className="flex-1">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-green-200">
                            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                                <TrendingUp className="h-5 w-5" />
                                {lang === "en" &&
                                    (isHealthy ? "Model probability distribution" : "Disease Probability Distribution")}
                                {lang === "si" &&
                                    (isHealthy ? "ආකෘති සම්භාවිතා ව්‍යාප්තිය" : "රෝග සම්භාවිතා ව්‍යාප්තිය")}
                                {lang === "ta" &&
                                    (isHealthy
                                        ? "மாதிரி நிகழ்தகவு விநியோகம்"
                                        : "நோய் நிகழ்தகவு விநியோகம்")}
                            </h3>
                            <div className="space-y-3">
                                {probabilityEntries.map(([disease, probability]) => {
                                    const normalized = normalizePredictedClass(disease);
                                    const diseaseInfo = diseasePreventions[normalized];
                                    return (
                                        <div key={disease} className="space-y-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-green-900">
                                                    {diseaseInfo ? diseaseInfo.name[lang] : disease}
                                                </span>
                                                <span className="text-sm font-semibold text-green-700">
                                                    {(Number(probability) * 100).toFixed(2)}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-green-100 rounded-full h-3">
                                                <div
                                                    className={`h-3 rounded-full transition-all ${
                                                        normalized === predictedKey ? "bg-amber-500" : "bg-green-400"
                                                    }`}
                                                    style={{ width: `${Number(probability) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
                                <Info className="h-5 w-5" />
                                {lang === "en" && "Important Notes"}
                                {lang === "si" && "වැදගත් සටහන්"}
                                {lang === "ta" && "முக்கிய குறிப்புகள்"}
                            </h3>
                            <ul className="space-y-2 text-purple-800 text-sm">
                                {isHealthy ? (
                                    <>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>
                                                {lang === "en" &&
                                                    "Continue scouting weekly; early spots or pests are easier to manage."}
                                                {lang === "si" &&
                                                    "සතියෙන් සතිය නිරීක්ෂණය දිගටම කරන්න — මුල් කැලෑ හෝ කෘමි පහසුවෙන් කළමනාකරණය කළ හැක."}
                                                {lang === "ta" &&
                                                    "வாரந்தோறும் கண்காணிப்பைத் தொடரவும்; ஆரம்பக் கறைகள் அல்லது பூச்சிகளை எளிதாக கையாளலாம்."}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>
                                                {lang === "en" &&
                                                    "Use certified planting material for the next season when possible."}
                                                {lang === "si" &&
                                                    "හැකි විට ඊළඟ සීසන් සඳහා සහතික කරන ලද රෝපණ ද්‍රව්‍ය භාවිතා කරන්න."}
                                                {lang === "ta" &&
                                                    "முடிந்தால் அடுத்த சீசனுக்கு சான்றளிக்கப்பட்ட நடவு பொருட்களை பயன்படுத்தவும்."}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>
                                                {lang === "en" &&
                                                    "If symptoms appear later, run detection again and follow the updated guide."}
                                                {lang === "si" &&
                                                    "පසුව ලක්ෂණ දිස් වුවහොත් නැවත හඳුනාගැනීම කර යාවත්කාලීන මාර්ගෝපදේශය අනුගමනය කරන්න."}
                                                {lang === "ta" &&
                                                    "பின்னர் அறிகுறிகள் தோன்றினால் மீண்டும் கண்டறிந்து புதுப்பிக்கப்பட்ட வழிகாட்டியைப் பின்பற்றவும்."}
                                            </span>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>
                                                {lang === "en" &&
                                                    "Early detection and immediate action are crucial for disease management"}
                                                {lang === "si" &&
                                                    "රෝග කළමනාකරණය සඳහා මුල් හඳුනාගැනීම සහ ක්ෂණික ක්‍රියාමාර්ග අත්‍යවශ්‍ය වේ"}
                                                {lang === "ta" &&
                                                    "நோய் மேலாண்மைக்கு ஆரம்ப கண்டறிதல் மற்றும் உடனடி நடவடிக்கை முக்கியமானது"}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>
                                                {lang === "en" &&
                                                    "Consult with local agricultural extension services for specific recommendations"}
                                                {lang === "si" &&
                                                    "නිශ්චිත නිර්දේශ සඳහා දේශීය කෘෂිකාර්මික දිගු සේවා සමඟ සාකච්ඡා කරන්න"}
                                                {lang === "ta" &&
                                                    "குறிப்பிட்ட பரிந்துரைகளுக்கு உள்ளூர் விவசாய நீட்டிப்பு சேவைகளுடன் கலந்தாலோசிக்கவும்"}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>
                                                {lang === "en" &&
                                                    "Monitor your field regularly for early signs of disease"}
                                                {lang === "si" &&
                                                    "රෝගයේ මුල් ලක්ෂණ සඳහා ඔබේ ක්ෂේත්‍රය නිතිපතා නිරීක්ෂණය කරන්න"}
                                                {lang === "ta" &&
                                                    "நோயின் ஆரம்ப அறிகுறிகளுக்காக உங்கள் வயலை தவறாமல் கண்காணிக்கவும்"}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>
                                                {lang === "en" &&
                                                    "Keep records of disease occurrences for future reference"}
                                                {lang === "si" &&
                                                    "අනාගත යොමුව සඳහා රෝග සිදුවීම්වල වාර්තා තබා ගන්න"}
                                                {lang === "ta" &&
                                                    "எதிர்கால குறிப்புக்காக நோய் நிகழ்வுகளின் பதிவுகளை வைத்திருங்கள்"}
                                            </span>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                                <Link href="/disease-detection">
                                    {lang === "en" && "Analyze Another Leaf"}
                                    {lang === "si" && "තවත් කොළයක් විශ්ලේෂණය කරන්න"}
                                    {lang === "ta" && "மற்றொரு இலையை பகுப்பாய்வு செய்யவும்"}
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                            >
                                <Link href="/yield-prediction">
                                    {lang === "en" && "Check Yield Prediction"}
                                    {lang === "si" && "අස්වැන්න පුරෝකථනය පරීක්ෂා කරන්න"}
                                    {lang === "ta" && "மகசூல் கணிப்பை சரிபார்க்கவும்"}
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
