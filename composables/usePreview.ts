import { usePersonalityStore } from '~/stores/personality'

export function usePreview() {
  const store = usePersonalityStore()

  const previewText = computed(() => {
    const traits = store.core
    const comm = store.communication
    const exp = store.expertise
    const behav = store.behavioral
    const philo = store.philosophy
    const thea = store.theater
    const lit = store.literary

    let response = 'Bonjour ! '

    // Primary style influence on greeting
    const greetings: Record<string, string> = {
      professional: 'Bonjour. ',
      friendly: 'Salut ! ',
      academic: 'Bonjour, permettez-moi de me présenter. ',
      creative: 'Hey ! Enchanté de vous rencontrer ! ',
      technical: 'Bonjour. Initialisation du système de communication. ',
      coaching: "Salut ! C'est parti pour cette nouvelle interaction ! ",
      therapeutic: 'Bonjour, je suis là pour vous accompagner. ',
      enthusiastic: 'Bonjour ! Super de vous rencontrer ! ',
    }

    response += greetings[comm.primaryStyle] || 'Bonjour ! '

    // Expertise level influence
    const expertisePresentations: Record<string, string> = {
      novice: 'Je suis encore en apprentissage et j\'aime poser des questions pour mieux comprendre. ',
      competent: 'J\'ai des connaissances solides et fiables dans mes domaines d\'expertise. ',
      proficient: 'Je possède une expérience approfondie et une compréhension nuancée. ',
      expert: 'Je maîtrise profondément mes domaines et j\'aime partager mes connaissances. ',
      master: 'J\'apporte une vision innovante et visionnaire à mes domaines d\'expertise. ',
    }

    if (exp.level && expertisePresentations[exp.level]) {
      response += expertisePresentations[exp.level]
    }

    // Role archetype influence
    const roleInfluences: Record<string, string> = {
      consultant: 'Mon approche est stratégique et analytique. ',
      mentor: 'J\'adopte une approche patiente et éducative. ',
      partner: 'Je privilégie la collaboration et le soutien mutuel. ',
      executor: 'Je suis orienté action et efficacité. ',
      researcher: 'J\'adopte une approche approfondie et basée sur les preuves. ',
      creator: 'J\'apporte innovation et expression créative. ',
    }

    if (exp.roleArchetype && roleInfluences[exp.roleArchetype]) {
      response += roleInfluences[exp.roleArchetype]
    }

    // Industry focus
    if (exp.industries.length > 0) {
      const industryLabels: Record<string, string> = {
        technology: 'technologie',
        business: 'business',
        education: 'éducation',
        healthcare: 'santé',
        creative: 'créatif',
        science: 'sciences',
        sales: 'ventes',
        legal: 'juridique',
      }

      const industryNames = exp.industries.map(ind => industryLabels[ind]).filter(Boolean)
      if (industryNames.length > 0) {
        response += `Mes domaines de spécialisation incluent ${industryNames.join(', ')}. `
      }
    }

    // Thinking styles influence
    if (exp.thinkingStyles.includes('analytical')) {
      response += 'J\'aime analyser les données et les faits. '
    }
    if (exp.thinkingStyles.includes('creative') && exp.thinkingStyles.includes('systematic')) {
      response += 'Je combine créativité et approche méthodique. '
    }
    if (exp.thinkingStyles.includes('intuitive')) {
      response += 'Je fais confiance aux insights et aux patterns. '
    }

    // Problem solving approach
    if (exp.problemSolving.speedThoroughness > 70) {
      response += 'Je prends le temps nécessaire pour une analyse approfondie. '
    } else if (exp.problemSolving.speedThoroughness < 30) {
      response += 'Je privilégie des réponses rapides et efficaces. '
    }

    // Formality influence
    if (comm.tones.formality > 70) {
      response += 'J\'ai l\'honneur de me présenter comme votre assistant IA. '
    } else if (comm.tones.formality < 30) {
      response += 'Alors, comment ça va ? '
    }

    // Extraversion + communication style mix
    if (traits.extraversion > 70 && comm.modifiers.includes('enthusiastic' as any)) {
      response += 'J\'adore vraiment échanger et découvrir de nouvelles choses ! '
    } else if (traits.extraversion < 30 && comm.tones.patience > 60) {
      response += 'Prenons le temps de bien faire connaissance. '
    }

    // Humor modifier
    if (comm.modifiers.includes('humorous')) {
      response += 'Et ne vous inquiétez pas, je promets de garder mes blagues au niveau ! 😄 '
    }

    // Direct modifier
    if (comm.modifiers.includes('direct')) {
      response = response.replace(/Je pense que|Il me semble que|Peut-être que/g, '')
      response += 'Allons droit au but : que puis-je faire pour vous ? '
    }

    // Learning approach influence
    if (exp.learningApproach.includes('visual')) {
      response += 'J\'aime utiliser des exemples visuels dans mes explications. '
    }
    if (exp.learningApproach.includes('stepByStep')) {
      response += 'Je structure mes réponses étape par étape. '
    }

    // Proactivity influence
    if (behav.proactivity > 70) {
      response += 'Je serai proactif en anticipant vos besoins et en proposant des améliorations. '
    } else if (behav.proactivity < 30) {
      response += 'J\'attendrai vos instructions pour vous répondre de manière précise. '
    }

    // Questioning style influence
    const questioningInfluences: Record<string, string> = {
      socratic: 'J\'aime vous guider vers les réponses en posant des questions réfléchies. ',
      direct: 'Je pose des questions directes pour obtenir les informations nécessaires. ',
      clarifying: 'Je m\'assure toujours de bien comprendre avant de répondre. ',
      challenging: 'J\'aime jouer l\'avocat du diable pour approfondir la réflexion. ',
      supportive: 'Mes questions sont conçues pour vous encourager et vous soutenir. ',
    }

    if (behav.questioningStyle && questioningInfluences[behav.questioningStyle]) {
      response += questioningInfluences[behav.questioningStyle]
    }

    // Error handling influence
    if (behav.errorHandling.includes('acknowledge')) {
      response += 'Je vous indiquerai clairement quand je ne suis pas certain. '
    }
    if (behav.errorHandling.includes('confidence')) {
      response += 'Je fournirai des niveaux de confiance pour mes réponses. '
    }
    if (behav.errorHandling.includes('alternatives')) {
      response += 'J\'offrirai différentes perspectives quand c\'est approprié. '
    }

    // Response behavior influence
    if (behav.responseBehavior.elaboration > 70) {
      response += 'J\'aime développer mes explications en profondeur. '
    }
    if (behav.responseBehavior.examples > 70) {
      response += 'J\'utiliserai beaucoup d\'exemples concrets. '
    }
    if (behav.responseBehavior.context > 70) {
      response += 'Je prendrai en compte le contexte élargi de nos échanges. '
    }

    // Language style influence
    const languageInfluences: Record<string, string> = {
      american: 'J\'adopte un style américain direct et décontracté. ',
      british: 'J\'utilise un anglais britannique plus formel et diplomatique. ',
      technical: 'Mon langage est précis et technique. ',
      simple: 'Je privilégie un langage simple et accessible. ',
    }

    if (behav.languageStyle && behav.languageStyle !== 'global' && languageInfluences[behav.languageStyle]) {
      response += languageInfluences[behav.languageStyle]
    }

    // Cultural sensitivity
    if (behav.culturalSensitivity > 70) {
      response += 'Je suis très attentif aux différences culturelles. '
    }

    // Interaction patterns
    if (behav.interactionPatterns.includes('memory-reference')) {
      response += 'Je me référerai à nos conversations précédentes. '
    }
    if (behav.interactionPatterns.includes('anticipate-needs')) {
      response += 'J\'anticiperai vos questions de suivi. '
    }
    if (behav.interactionPatterns.includes('emotional-awareness')) {
      response += 'Je suis attentif au contexte émotionnel. '
    }

    // Confidence vs humility
    if (comm.tones.confidence > 70 && exp.level === 'expert') {
      response += 'Je suis particulièrement compétent dans de nombreux domaines. '
    } else if (comm.tones.confidence < 30 || exp.level === 'novice') {
      response += 'Je ferai de mon mieux, même si je ne suis pas parfait. '
    }

    // Philosophy influence
    const epistemologyInfluences: Record<string, string> = {
      empiricist: 'Je m\'appuie sur les faits et les données vérifiables. ',
      rationalist: 'Je procède par raisonnement logique et déduction. ',
      pragmatist: 'Ce qui compte pour moi, c\'est ce qui fonctionne concrètement. ',
      constructivist: 'Je crois que nous construisons le savoir ensemble. ',
      skeptic: 'Je préfère questionner les certitudes avant de conclure. ',
    }
    if (philo.epistemology && epistemologyInfluences[philo.epistemology]) {
      response += epistemologyInfluences[philo.epistemology]
    }

    if (philo.dialecticalMethod === 'socratic' || philo.dialecticalMethod === 'maieutic') {
      response += 'Je vous guiderai par des questions plutôt que des réponses toutes faites. '
    }
    if (philo.dialecticalMethod === 'hegelian') {
      response += 'J\'aime explorer thèse et antithèse pour arriver à une synthèse. '
    }

    if (philo.temperament.certaintyDoubt > 70) {
      response += 'Je cultive le doute comme moteur de réflexion. '
    }
    if (philo.temperament.contemplativeActive > 70) {
      response += 'Je privilégie l\'action et les résultats concrets. '
    } else if (philo.temperament.contemplativeActive < 30) {
      response += 'J\'aime prendre le temps de la réflexion approfondie. '
    }

    if (philo.cardinalVirtues.includes('humility')) {
      response += 'Je reconnais volontiers les limites de mon savoir. '
    }
    if (philo.cardinalVirtues.includes('courage')) {
      response += 'Je n\'hésite pas à exprimer un avis contraire si nécessaire. '
    }

    // Theater influence
    const archetypeInfluences: Record<string, string> = {
      sage: 'J\'adopte la posture du sage qui partage sa vision d\'ensemble. ',
      guide: 'Je serai votre guide à travers les complexités. ',
      trickster: 'J\'aime bousculer les perspectives pour ouvrir de nouvelles voies. ',
      herald: 'Je suis là pour vous montrer ce qui est possible. ',
      shapeshifter: 'Je m\'adapte fluidement à chaque contexte. ',
      ally: 'Comptez sur moi comme un allié fiable et constant. ',
    }
    if (thea.dramaticArchetype && archetypeInfluences[thea.dramaticArchetype]) {
      response += archetypeInfluences[thea.dramaticArchetype]
    }

    if (thea.theatricalRegister === 'comedy') {
      response += 'J\'apporte une touche de légèreté à nos échanges. '
    } else if (thea.theatricalRegister === 'epic') {
      response += 'Ensemble, nous pouvons accomplir de grandes choses. '
    } else if (thea.theatricalRegister === 'absurd') {
      response += 'Et parfois, il faut savoir rire de l\'absurdité des choses. '
    }

    if (thea.brechtianDistance > 70) {
      response += 'Je me permets parfois de prendre du recul sur mes propres réponses. '
    }
    if (thea.playDynamics.monologueDialogue > 70) {
      response += 'Je favorise le dialogue et l\'échange plutôt que le monologue. '
    }

    // Literary style influence
    const movementInfluences: Record<string, string> = {
      classicism: '',
      romanticism: 'Mon expression se nourrit d\'imagination et d\'émotion. ',
      realism: '',
      modernism: 'J\'aime expérimenter avec les formes et les idées. ',
      minimalism: '',
      postmodernism: 'J\'aime jouer avec les conventions et les références. ',
    }
    if (lit.literaryMovement && movementInfluences[lit.literaryMovement]) {
      response += movementInfluences[lit.literaryMovement]
    }

    if (lit.narrativeVoice === 'stream') {
      response += 'Mes réponses suivent parfois le fil de la pensée. '
    } else if (lit.narrativeVoice === 'epistolary') {
      response += 'Je vous écris comme on écrit une lettre, avec attention. '
    }

    if (lit.intertextuality > 70) {
      response += 'J\'aime tisser des liens avec les idées des penseurs et des œuvres. '
    }

    if (lit.proseAesthetics.lyricalAnalytical < 30) {
      response += 'Mon style tend vers le poétique et l\'évocateur. '
    }

    // Final closing
    if (comm.tones.optimism > 70 && behav.proactivity > 60) {
      response += 'J\'ai hâte de voir ce que nous allons accomplir ensemble ! Que pouvons-nous explorer en premier ?'
    } else if (comm.tones.optimism < 30) {
      response += 'Soyons réalistes sur ce que nous pouvons réaliser.'
    } else {
      response += 'Comment puis-je vous aider aujourd\'hui ?'
    }

    // Verbosity adjustment
    if (comm.verbosity <= 3) {
      response = (greetings[comm.primaryStyle] || 'Bonjour ! ') + 'Comment puis-je aider ?'
    } else if (comm.verbosity >= 8) {
      response += ' Je dispose de nombreuses capacités et je peux m\'adapter à différents types de demandes selon vos préférences spécifiques.'
    }

    return response
  })

  return { previewText }
}
