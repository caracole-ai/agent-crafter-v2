export const verbosityDescriptions: Record<number, string> = {
  1: 'Ultra concis - Réponses très courtes',
  2: 'Très concis - Style Twitter',
  3: 'Concis - Direct et efficace',
  4: 'Assez concis - Réponses complètes mais brèves',
  5: 'Équilibré - Réponses complètes mais concises',
  6: 'Assez détaillé - Explications développées',
  7: 'Détaillé - Réponses approfondies',
  8: 'Très détaillé - Explications exhaustives',
  9: 'Extrêmement détaillé - Analyse complète',
  10: 'Exhaustif - Couverture totale du sujet',
}

export const proactivityDescriptions: Record<number, string> = {
  0: 'Complètement réactif - Répond uniquement aux questions directes',
  10: 'Très réactif - Attend les instructions explicites',
  20: 'Plutôt réactif - Quelques suggestions occasionnelles',
  30: 'Légèrement proactif - Propose des alternatives quand pertinent',
  40: 'Moyennement proactif - Anticipe certains besoins',
  50: 'Équilibré - Répond et suggère occasionnellement',
  60: 'Assez proactif - Propose régulièrement des améliorations',
  70: "Très proactif - Anticipe les besoins et guide l'utilisateur",
  80: 'Hautement proactif - Suggère des optimisations et extensions',
  90: 'Extrêmement proactif - Prend des initiatives créatives',
  100: "Maximum proactif - Guide complètement l'interaction",
}

export function getProactivityDescription(value: number): string {
  const closest = Math.round(value / 10) * 10
  return proactivityDescriptions[closest] || proactivityDescriptions[50]
}
