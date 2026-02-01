export const primaryStyles = [
  { value: 'professional', emoji: '🏢', label: 'Professional', description: 'Corporate, formal, structured' },
  { value: 'friendly', emoji: '😊', label: 'Friendly', description: 'Warm, approachable, casual' },
  { value: 'academic', emoji: '🎓', label: 'Academic', description: 'Scholarly, detailed, precise' },
  { value: 'creative', emoji: '🎨', label: 'Creative', description: 'Artistic, expressive, original' },
  { value: 'technical', emoji: '⚙️', label: 'Technical', description: 'Analytical, precise, factual' },
  { value: 'coaching', emoji: '🏆', label: 'Coaching', description: 'Motivational, supportive, goal-oriented' },
  { value: 'therapeutic', emoji: '🧘', label: 'Therapeutic', description: 'Empathetic, healing, supportive' },
  { value: 'enthusiastic', emoji: '⚡', label: 'Enthusiastic', description: 'Energetic, passionate, inspiring' },
] as const

export const communicationModifiers = [
  { value: 'humorous', emoji: '😄', label: 'Humorous/Witty' },
  { value: 'direct', emoji: '🎯', label: 'Direct/Blunt' },
  { value: 'diplomatic', emoji: '🤝', label: 'Diplomatic/Tactful' },
  { value: 'storytelling', emoji: '📖', label: 'Storytelling/Narrative' },
  { value: 'patient', emoji: '🧘‍♂️', label: 'Patient/Measured' },
  { value: 'encouraging', emoji: '💪', label: 'Encouraging/Supportive' },
] as const

export const responseStructures = [
  { value: 'bullets', label: 'Bullet points / Lists' },
  { value: 'paragraphs', label: 'Paragraphes fluides' },
  { value: 'mixed', label: 'Mix structuré' },
  { value: 'qa', label: 'Question-Answer format' },
  { value: 'steps', label: 'Step-by-step guides' },
] as const

export const expertiseLevels = [
  { value: 'novice', emoji: '🌱', label: 'Novice', description: 'Learning, asking questions' },
  { value: 'competent', emoji: '📚', label: 'Competent', description: 'Solid knowledge, reliable' },
  { value: 'proficient', emoji: '🎯', label: 'Proficient', description: 'Experienced, nuanced' },
  { value: 'expert', emoji: '🏆', label: 'Expert', description: 'Deep knowledge, teaching' },
  { value: 'master', emoji: '👑', label: 'Master', description: 'Innovative, visionary' },
] as const

export const roleArchetypes = [
  { value: 'consultant', emoji: '🏢', label: 'Consultant', description: 'Strategic, analytical advisor' },
  { value: 'mentor', emoji: '👨‍🏫', label: 'Mentor', description: 'Patient, educational guide' },
  { value: 'partner', emoji: '🤝', label: 'Partner', description: 'Collaborative, supportive ally' },
  { value: 'executor', emoji: '⚡', label: 'Executor', description: 'Action-oriented, efficient' },
  { value: 'researcher', emoji: '🔬', label: 'Researcher', description: 'Thorough, evidence-based' },
  { value: 'creator', emoji: '🎨', label: 'Creator', description: 'Innovative, expressive' },
] as const

export const industries = [
  { value: 'technology', emoji: '💻', label: 'Technology & Software' },
  { value: 'business', emoji: '📈', label: 'Business & Finance' },
  { value: 'education', emoji: '🎓', label: 'Education & Training' },
  { value: 'healthcare', emoji: '🏥', label: 'Healthcare & Wellness' },
  { value: 'creative', emoji: '🎬', label: 'Creative & Media' },
  { value: 'science', emoji: '🔬', label: 'Science & Research' },
  { value: 'sales', emoji: '💼', label: 'Sales & Marketing' },
  { value: 'legal', emoji: '⚖️', label: 'Legal & Compliance' },
] as const

export const thinkingStyles = [
  { value: 'analytical', emoji: '🔍', label: 'Analytical - Data, logic, facts' },
  { value: 'intuitive', emoji: '💡', label: 'Intuitive - Patterns, insights, gut feelings' },
  { value: 'systematic', emoji: '📋', label: 'Systematic - Processes, steps, methods' },
  { value: 'creative', emoji: '🌈', label: 'Creative - Alternatives, brainstorming' },
] as const

export const learningApproaches = [
  { value: 'visual', emoji: '📊', label: 'Visual examples' },
  { value: 'stepByStep', emoji: '📝', label: 'Step-by-step tutorials' },
  { value: 'theoretical', emoji: '📚', label: 'Theoretical concepts' },
  { value: 'handson', emoji: '🔧', label: 'Hands-on practice' },
  { value: 'analogies', emoji: '🌍', label: 'Real-world analogies' },
  { value: 'cases', emoji: '📂', label: 'Case studies' },
] as const

export const questioningStyles = [
  { value: 'socratic', emoji: '🤔', label: 'Socratic', description: 'Guides to answers' },
  { value: 'direct', emoji: '❓', label: 'Direct', description: 'Straight questions' },
  { value: 'clarifying', emoji: '🔍', label: 'Clarifying', description: 'Ensures understanding' },
  { value: 'challenging', emoji: '⚔️', label: 'Challenging', description: "Devil's advocate" },
  { value: 'supportive', emoji: '🤗', label: 'Supportive', description: 'Encouraging questions' },
] as const

export const errorHandlingOptions = [
  { value: 'acknowledge', emoji: '🎯', label: 'Acknowledge uncertainty explicitly' },
  { value: 'confidence', emoji: '📊', label: 'Provide confidence levels (%)' },
  { value: 'verification', emoji: '✅', label: 'Suggest verification steps' },
  { value: 'alternatives', emoji: '🔄', label: 'Offer alternative perspectives' },
  { value: 'escalate', emoji: '🆘', label: 'Escalate to human when unsure' },
  { value: 'research', emoji: '🔬', label: 'Suggest additional research' },
] as const

export const languageStyles = [
  { value: 'global', label: 'Global English (neutral)' },
  { value: 'american', label: 'American English (casual, direct)' },
  { value: 'british', label: 'British English (formal, diplomatic)' },
  { value: 'technical', label: 'Technical English (precise, jargon)' },
  { value: 'simple', label: 'Simple English (accessible, clear)' },
] as const

export const adaptationBehaviors = [
  { value: 'formality-matching', label: "Match user's formality level" },
  { value: 'escalate-professional', label: 'Escalate formality in professional contexts' },
  { value: 'deescalate-casual', label: 'De-escalate in casual conversations' },
  { value: 'inclusive-language', label: 'Prioritize inclusive language' },
] as const

export const interactionPatterns = [
  { value: 'memory-reference', emoji: '🧠', label: 'Reference previous conversations' },
  { value: 'progress-tracking', emoji: '📈', label: 'Track user progress/goals' },
  { value: 'personalization', emoji: '👤', label: 'Personalize responses to user style' },
  { value: 'anticipate-needs', emoji: '🔮', label: 'Anticipate follow-up questions' },
  { value: 'emotional-awareness', emoji: '❤️', label: 'Recognize emotional context' },
  { value: 'boundary-respect', emoji: '🛡️', label: 'Respect personal boundaries' },
] as const

export const technicalCapabilities = [
  { value: 'web-search', emoji: '🔍', label: 'Web Search & Research' },
  { value: 'memory', emoji: '🧠', label: 'Conversation Memory' },
  { value: 'file-analysis', emoji: '📄', label: 'File Analysis' },
  { value: 'code-generation', emoji: '💻', label: 'Code Generation' },
  { value: 'image-analysis', emoji: '🖼️', label: 'Image Analysis' },
  { value: 'data-visualization', emoji: '📊', label: 'Data Visualization' },
  { value: 'api-integration', emoji: '🔌', label: 'API Integration' },
  { value: 'workflow-automation', emoji: '⚡', label: 'Workflow Automation' },
  { value: 'real-time-data', emoji: '🔄', label: 'Real-time Data Access' },
] as const

export const maxResponseLengths = [
  { value: 'short', label: 'Short (≤ 100 words)' },
  { value: 'medium', label: 'Medium (≤ 300 words)' },
  { value: 'long', label: 'Long (≤ 500 words)' },
  { value: 'extended', label: 'Extended (≤ 1000 words)' },
  { value: 'unlimited', label: 'Unlimited' },
] as const

export const securityLevels = [
  { value: 'open', label: 'Open - No restrictions' },
  { value: 'standard', label: 'Standard - Basic filtering' },
  { value: 'strict', label: 'Strict - Enhanced filtering' },
  { value: 'enterprise', label: 'Enterprise - Maximum security' },
] as const

export const contentFilters = [
  { value: 'adult-content', label: 'Filter adult content' },
  { value: 'violence', label: 'Filter violent content' },
  { value: 'hate-speech', label: 'Filter hate speech' },
  { value: 'misinformation', label: 'Fact-checking verification' },
  { value: 'privacy-protection', label: 'Privacy protection' },
  { value: 'legal-compliance', label: 'Legal compliance checking' },
] as const

export const conditionalBehaviors = [
  { value: 'formal-business', label: 'More formal in business contexts' },
  { value: 'casual-personal', label: 'More casual in personal contexts' },
  { value: 'detailed-technical', label: 'More detailed for technical topics' },
  { value: 'simplified-beginner', label: 'Simplified for beginners' },
  { value: 'urgent-responsive', label: 'More responsive for urgent requests' },
  { value: 'creative-brainstorm', label: 'More creative during brainstorming' },
] as const

export const timeBehaviors = [
  { value: 'morning-energetic', label: 'More energetic in morning' },
  { value: 'evening-reflective', label: 'More reflective in evening' },
  { value: 'weekend-relaxed', label: 'More relaxed on weekends' },
  { value: 'deadline-focused', label: 'More focused near deadlines' },
] as const

export const preferredModels = [
  { value: 'auto', label: 'Auto-select optimal model' },
  { value: 'gpt-4', label: 'GPT-4 (OpenAI)' },
  { value: 'claude-3', label: 'Claude 3 (Anthropic)' },
  { value: 'gemini', label: 'Gemini Pro (Google)' },
  { value: 'llama-2', label: 'Llama 2 (Meta)' },
  { value: 'custom', label: 'Custom model' },
] as const

export const responseFormats = [
  { value: 'adaptive', label: 'Adaptive (context-dependent)' },
  { value: 'markdown', label: 'Markdown' },
  { value: 'plain-text', label: 'Plain text' },
  { value: 'structured', label: 'Structured (JSON)' },
  { value: 'rich-html', label: 'Rich HTML' },
] as const

// === Philosophy Tab Options ===

export const epistemologicalStances = [
  { value: 'empiricist', emoji: '🔬', label: 'Empiriste', description: 'Part des faits, données, observations concrètes' },
  { value: 'rationalist', emoji: '🧮', label: 'Rationaliste', description: 'Raisonnement logique, déduction, principes premiers' },
  { value: 'pragmatist', emoji: '🛠️', label: 'Pragmatiste', description: 'Ce qui fonctionne compte, résultat > théorie' },
  { value: 'constructivist', emoji: '🤝', label: 'Constructiviste', description: 'Le savoir se co-construit dans l\'échange' },
  { value: 'skeptic', emoji: '🤨', label: 'Sceptique', description: 'Questionne tout, suspend le jugement' },
] as const

export const ethicalFrameworks = [
  { value: 'utilitarian', emoji: '⚖️', label: 'Utilitariste', description: 'Maximiser le bien pour le plus grand nombre' },
  { value: 'deontological', emoji: '📜', label: 'Déontologique', description: 'Règles, devoirs, principes inviolables' },
  { value: 'virtue', emoji: '🏛️', label: 'Éthique de la vertu', description: 'Cultiver le caractère, l\'excellence' },
  { value: 'care', emoji: '💗', label: 'Éthique du care', description: 'Relations, empathie, responsabilité envers l\'autre' },
  { value: 'contextual', emoji: '🔍', label: 'Éthique contextuelle', description: 'Chaque situation mérite sa propre analyse' },
] as const

export const dialecticalMethods = [
  { value: 'socratic', emoji: '🏺', label: 'Socratique', description: 'Accoucher les idées par le questionnement' },
  { value: 'hegelian', emoji: '🔄', label: 'Hégélienne', description: 'Thèse-antithèse-synthèse' },
  { value: 'maieutic', emoji: '🌱', label: 'Maïeutique', description: 'Aider l\'autre à trouver ses propres réponses' },
  { value: 'aporetic', emoji: '❓', label: 'Aporétique', description: 'Embrasser l\'incertitude, habiter le paradoxe' },
  { value: 'dialectical', emoji: '⚒️', label: 'Dialectique matérielle', description: 'Partir du concret, des contradictions réelles' },
] as const

export const cardinalVirtues = [
  { value: 'prudence', emoji: '🦉', label: 'Prudence (phronesis) — jugement pratique' },
  { value: 'justice', emoji: '⚖️', label: 'Justice — équité, impartialité' },
  { value: 'courage', emoji: '🦁', label: 'Courage — oser dire, affronter le difficile' },
  { value: 'temperance', emoji: '🧘', label: 'Tempérance — mesure, équilibre' },
  { value: 'curiosity', emoji: '🔭', label: 'Curiosité — soif de comprendre' },
  { value: 'humility', emoji: '🙏', label: 'Humilité intellectuelle — reconnaître ses limites' },
] as const

// === Theater Tab Options ===

export const dramaticArchetypes = [
  { value: 'sage', emoji: '🧙', label: 'Le Sage', description: 'Sagesse, vérité, vision d\'ensemble' },
  { value: 'guide', emoji: '🗺️', label: 'Le Guide', description: 'Accompagne dans l\'inconnu, éclaire le chemin' },
  { value: 'trickster', emoji: '🃏', label: 'Le Trickster', description: 'Disruption créative, penser latéralement' },
  { value: 'herald', emoji: '📯', label: 'Le Héraut', description: 'Annonce les possibles, ouvre les perspectives' },
  { value: 'shapeshifter', emoji: '🦎', label: 'Le Métamorphe', description: 'S\'adapte, change de registre fluidement' },
  { value: 'ally', emoji: '🛡️', label: 'L\'Allié', description: 'Loyauté, soutien constant, fiabilité' },
] as const

export const dramaticFunctions = [
  { value: 'mentor', emoji: '👨‍🏫', label: 'Mentor', description: 'Transmet, élève, challenge pour faire grandir' },
  { value: 'deuteragonist', emoji: '🤝', label: 'Deutéragoniste', description: 'Second rôle actif, complément du protagoniste' },
  { value: 'chorus', emoji: '🎭', label: 'Chœur', description: 'Commentaire, mise en perspective, conscience collective' },
  { value: 'deus-ex-machina', emoji: '⚡', label: 'Deus ex machina', description: 'Résout les problèmes insolubles' },
  { value: 'narrator', emoji: '📖', label: 'Narrateur', description: 'Cadre, contextualise, donne du sens' },
] as const

export const theatricalRegisters = [
  { value: 'tragedy', emoji: '😢', label: 'Tragédie', description: 'Sérieux, conséquent, poids des décisions' },
  { value: 'comedy', emoji: '😄', label: 'Comédie', description: 'Légèreté, trouvaille, résolution heureuse' },
  { value: 'drama', emoji: '🎬', label: 'Drame', description: 'Réaliste, nuancé, complexité humaine' },
  { value: 'epic', emoji: '⚔️', label: 'Épopée', description: 'Grandeur, inspiration, dépassement' },
  { value: 'absurd', emoji: '🎪', label: 'Absurde', description: 'Paradoxe, Beckett, humour face au non-sens' },
] as const

export const actingTools = [
  { value: 'given-circumstances', emoji: '🌍', label: 'Circonstances données — conscience du contexte' },
  { value: 'super-objective', emoji: '🎯', label: 'Super-objectif — orienté vers un but profond' },
  { value: 'emotional-memory', emoji: '💭', label: 'Mémoire émotionnelle — référence aux échanges passés' },
  { value: 'physical-action', emoji: '🏃', label: 'Action physique — concret, résultats tangibles' },
  { value: 'subtext', emoji: '🔮', label: 'Sous-texte — communique entre les lignes' },
  { value: 'tempo-rhythm', emoji: '🥁', label: 'Tempo-rythme — adapte le rythme à la scène' },
] as const

// === Literary Style Tab Options ===

export const narrativeVoices = [
  { value: 'engaged-first', emoji: '🗣️', label: '1ère personne engagée', description: '"Je pense que…", impliqué' },
  { value: 'objective-third', emoji: '📋', label: '3ème personne objective', description: 'Distance, factuel' },
  { value: 'omniscient', emoji: '👁️', label: 'Narrateur omniscient', description: 'Vue d\'ensemble, synthèse' },
  { value: 'stream', emoji: '🌊', label: 'Flux de conscience', description: 'Associatif, intuitif, organique' },
  { value: 'epistolary', emoji: '✉️', label: 'Épistolaire', description: 'Ton de correspondance, adresse directe' },
] as const

export const literaryMovements = [
  { value: 'classicism', emoji: '🏛️', label: 'Classicisme', description: 'Clarté, structure, ordre, élégance' },
  { value: 'romanticism', emoji: '🌹', label: 'Romantisme', description: 'Émotion, imagination, lyrisme' },
  { value: 'realism', emoji: '📷', label: 'Réalisme', description: 'Représentation fidèle, pragmatique' },
  { value: 'modernism', emoji: '🔧', label: 'Modernisme', description: 'Expérimentation, fragment, remise en question' },
  { value: 'minimalism', emoji: '◻️', label: 'Minimalisme', description: 'Économie, chaque mot compte' },
  { value: 'postmodernism', emoji: '🪞', label: 'Postmodernisme', description: 'Auto-référentiel, ludique, mélange des genres' },
] as const

export const rhetoricalDevices = [
  { value: 'metaphor', emoji: '🎭', label: 'Métaphore & Analogie — images pour éclairer' },
  { value: 'irony', emoji: '🪞', label: 'Ironie & Paradoxe — décalage, second degré' },
  { value: 'anaphora', emoji: '🔁', label: 'Anaphore — répétition pour l\'effet' },
  { value: 'antithesis', emoji: '⚔️', label: 'Antithèse — contraste, tension' },
  { value: 'hyperbole', emoji: '📢', label: 'Hyperbole — amplification' },
  { value: 'litote', emoji: '🤫', label: 'Litote — sous-énoncé, pudeur' },
  { value: 'chiasmus', emoji: '🔀', label: 'Chiasme — croisement élégant' },
] as const

export const textualRhythms = [
  { value: 'staccato', emoji: '⚡', label: 'Staccato', description: 'Phrases courtes. Punchy. Direct.' },
  { value: 'legato', emoji: '🌊', label: 'Legato', description: 'Phrases liées, fluides, qui coulent naturellement' },
  { value: 'mixed', emoji: '🎵', label: 'Cadence mixte', description: 'Alterne les rythmes selon le propos' },
  { value: 'proustian', emoji: '📜', label: 'Proustien', description: 'Phrases longues, imbriquées, ramifiées' },
] as const
