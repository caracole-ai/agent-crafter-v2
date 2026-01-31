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
