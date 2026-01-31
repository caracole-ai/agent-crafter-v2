import { usePersonalityStore } from '~/stores/personality'
import { presets } from '~/data/presets'
import type { CoreTraitKey } from '~/types/personality'

export function usePresets() {
  const store = usePersonalityStore()

  function loadPreset(presetKey: string) {
    const preset = presets.find(p => p.key === presetKey)
    if (preset) {
      ;(Object.keys(preset.core) as CoreTraitKey[]).forEach((trait) => {
        store.setCoreTrait(trait, preset.core[trait])
      })
    }
  }

  return { presets, loadPreset }
}
