import { usePersonalityStore } from '~/stores/personality'

export function useValidation() {
  const store = usePersonalityStore()

  function validate(): string[] {
    const issues: string[] = []

    const coreSum = Object.values(store.core).reduce((a, b) => a + b, 0)
    if (coreSum === 250) {
      issues.push('Core personality traits are all at default values')
    }

    if (store.budgetUsed > store.budgetTotal) {
      issues.push('Personality budget exceeded')
    }

    if (!store.communication.primaryStyle) {
      issues.push('No primary communication style selected')
    }

    if (!store.expertise.level) {
      issues.push('No expertise level selected')
    }

    return issues
  }

  return { validate }
}
