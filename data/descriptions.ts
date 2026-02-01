export const verbosityDescriptionKeys: Record<number, string> = {
  1: 'descriptions.verbosity.1',
  2: 'descriptions.verbosity.2',
  3: 'descriptions.verbosity.3',
  4: 'descriptions.verbosity.4',
  5: 'descriptions.verbosity.5',
  6: 'descriptions.verbosity.6',
  7: 'descriptions.verbosity.7',
  8: 'descriptions.verbosity.8',
  9: 'descriptions.verbosity.9',
  10: 'descriptions.verbosity.10',
}

export const proactivityDescriptionKeys: Record<number, string> = {
  0: 'descriptions.proactivity.0',
  10: 'descriptions.proactivity.10',
  20: 'descriptions.proactivity.20',
  30: 'descriptions.proactivity.30',
  40: 'descriptions.proactivity.40',
  50: 'descriptions.proactivity.50',
  60: 'descriptions.proactivity.60',
  70: 'descriptions.proactivity.70',
  80: 'descriptions.proactivity.80',
  90: 'descriptions.proactivity.90',
  100: 'descriptions.proactivity.100',
}

export function getProactivityDescriptionKey(value: number): string {
  const closest = Math.round(value / 10) * 10
  return proactivityDescriptionKeys[closest] || proactivityDescriptionKeys[50]
}
