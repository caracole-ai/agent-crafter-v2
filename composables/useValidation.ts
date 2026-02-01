import { usePersonalityStore } from '~/stores/personality'

export function useValidation() {
  const store = usePersonalityStore()
  const { t } = useI18n()

  function validate(): string[] {
    const issues: string[] = []

    const coreSum = Object.values(store.core).reduce((a, b) => a + b, 0)
    if (coreSum === 250) {
      issues.push(t('validation.defaultValues'))
    }

    if (store.budgetUsed > store.budgetTotal) {
      issues.push(t('validation.budgetExceeded'))
    }

    if (!store.communication.primaryStyle) {
      issues.push(t('validation.noPrimaryStyle'))
    }

    if (!store.expertise.level) {
      issues.push(t('validation.noExpertiseLevel'))
    }

    return issues
  }

  return { validate }
}
