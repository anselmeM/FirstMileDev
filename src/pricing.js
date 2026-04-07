// ─── Rates ────────────────────────────────────────────────────────────────────
export const HOURLY_RATE = 150 // CAD
export const PM_CONTINGENCY = 1.18

// ─── Base Hours ───────────────────────────────────────────────────────────────
export const COMPLEXITY_HOURS = {
  low: 160,
  medium: 320,
  high: 640,
  extreme: 1000,
}

export const PLATFORM_MULT = {
  single: 1,
  dual: 1.5,
}

export const BACKEND_HOURS = {
  none: 0,
  baas: 60,
  api: 80,
  custom: 200,
}

export const DESIGN_HOURS = {
  basic: 40,
  custom: 120,
  system: 240,
}

export const COMPLIANCE_HOURS = {
  none: 0,
  basic: 16,
  pii: 80,
  soc2: 160,
}

// ─── Feature Hours ────────────────────────────────────────────────────────────
export const FEATURE_HOURS = {
  essential: {
    email: 16,
    onboarding: 24,
    push: 20,
    analytics: 8,
  },
  advanced: {
    sso: 24,
    chat: 80,
    maps: 40,
    payments: 60,
    media: 40,
    offline: 100,
    iap: 60,
  },
}

// ─── Third-Party APIs ──────────────────────────────────────────────────────────
export const THIRD_PARTY_API_HOURS = 16

// ─── QA Hours ─────────────────────────────────────────────────────────────────
export const QA_HOURS = 40

// ─── Calculation ──────────────────────────────────────────────────────────────
export function calculatePricing(selections) {
  const {
    complexity = 'medium',
    platform = 'single',
    backend = 'none',
    design = 'basic',
    compliance = 'none',
    features = [],
    thirdPartyApis = 0,
  } = selections

  const complexityHours = COMPLEXITY_HOURS[complexity] ?? 320
  const platformMult = PLATFORM_MULT[platform] ?? 1
  const backendHours = BACKEND_HOURS[backend] ?? 0
  const designHours = DESIGN_HOURS[design] ?? 40
  const complianceHours = COMPLIANCE_HOURS[compliance] ?? 0

  // Sum up feature hours
  let featureHours = 0
  for (const f of features) {
    if (FEATURE_HOURS.essential[f] !== undefined) {
      featureHours += FEATURE_HOURS.essential[f]
    }
    if (FEATURE_HOURS.advanced[f] !== undefined) {
      featureHours += FEATURE_HOURS.advanced[f]
    }
  }

  const totalHours =
    (complexityHours * platformMult +
      featureHours +
      backendHours +
      designHours +
      complianceHours +
      thirdPartyApis * THIRD_PARTY_API_HOURS +
      QA_HOURS) *
    PM_CONTINGENCY

  const minCost = Math.round(totalHours * HOURLY_RATE * 0.85)
  const maxCost = Math.round(totalHours * HOURLY_RATE * 1.15)
  const weeks = Math.max(4, Math.round(totalHours / 35))

  return {
    totalHours: Math.round(totalHours),
    minCost,
    maxCost,
    weeks,
  }
}
