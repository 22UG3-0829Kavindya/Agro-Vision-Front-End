export const DISEASE_ANALYSIS_STORAGE_KEY = "agro-vision:disease-analysis-result";

/** Shape returned by the disease prediction API (fields may be optional). */
export interface DiseaseAnalysisResult {
    status: string;
    message?: string;
    predicted_class: string;
    confidence: number;
    all_probabilities?: Record<string, number>;
    /** Estimated leaf area affected — shown when the API provides it */
    affectedArea?: string;
    timestamp?: string;
}

export function saveDiseaseAnalysisResult(result: DiseaseAnalysisResult): void {
    if (typeof window === "undefined") return;
    const payload: DiseaseAnalysisResult = {
        ...result,
        timestamp: result.timestamp ?? new Date().toLocaleString(),
    };
    try {
        sessionStorage.setItem(DISEASE_ANALYSIS_STORAGE_KEY, JSON.stringify(payload));
    } catch {
        // ignore quota / private mode
    }
}

export function loadDiseaseAnalysisResult(): DiseaseAnalysisResult | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = sessionStorage.getItem(DISEASE_ANALYSIS_STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as DiseaseAnalysisResult;
        if (!parsed || typeof parsed.predicted_class !== "string") return null;
        return parsed;
    } catch {
        return null;
    }
}

/** Maps API class label to keys in `diseasePreventions` (CMD, BLS, CBB, Healthy). */
export function normalizePredictedClass(code: string): string {
    const c = code.trim();
    const upper = c.toUpperCase();
    const aliases: Record<string, string> = {
        CMD: "CMD",
        BLS: "BLS",
        CBB: "CBB",
        HEALTHY: "Healthy",
        HEALTH: "Healthy",
    };
    if (aliases[upper]) return aliases[upper];
    if (aliases[c]) return aliases[c];
    const match = ["CMD", "BLS", "CBB", "Healthy"].find((k) => k.toUpperCase() === upper);
    return match ?? c;
}
