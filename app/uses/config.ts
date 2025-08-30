export interface UseCaseSection {
  id: string
  heading: string
  paragraphs: string[]
  image?: string
  imageAlt?: string
  layout?: 'imageLeft' | 'imageRight' | 'full' | 'imageBelow' | 'twoUp'
  imageCaption?: string
  imageCaptionMode?: 'below' | 'overlay'
  columns?: { left: string[]; right: string[] }
}

export interface UseCaseFeatureGroup {
  title: string
  items: string[]
  icon?: string // optional icon path for bullets
}

export interface UseCaseFAQ {
  q: string
  a: string
}

export interface UseCaseConfig {
  slug: string
  name: string
  title: string
  subtitle: string
  tags?: string[]
  heroHighlights?: string[]
  stats?: { label: string; value: string }[]
  heroImage?: string
  heroBackdrop?: string
  sections: UseCaseSection[]
  features?: UseCaseFeatureGroup[]
  faq?: UseCaseFAQ[]
  gallery?: {
    title: string
    items: { image: string; title?: string; description?: string }[]
  }
  updatedAt?: string
}

// Seed with one example; add more entries to scale this SEO strategy quickly
export const useCases: Record<string, UseCaseConfig> = {
  'lead-enrichment': {
    slug: 'lead-enrichment',
    name: 'Lead Enrichment',
    title: 'Lead Enrichment Automation — turn raw leads into revenue-ready profiles',
    subtitle:
      "Auto-enrich every inbound lead with company data, titles, emails, LinkedIn, tech stack and buying intent — then route instantly to CRM with zero manual work.",
  tags: ['lead gen', 'sales ops', 'CRM', 'enrichment'],
  // Test visuals for preview; replace per use-case as needed
  heroImage: '/assets/uses/placeholder-illustration.svg',
  heroBackdrop: '/assets/uses/gradient-blob.svg',
    heroHighlights: [
      'Real-time data enrichment',
      'CRM-ready in seconds',
      'Zero manual input',
    ],
    stats: [
      { label: 'Manual work reduced', value: '67%' },
      { label: 'Avg. monthly savings', value: '€3,000+' },
      { label: 'Time-to-contact', value: '< 2 min' },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The problem with manual lead handling',
        paragraphs: [
          'Leads arrive across multiple channels — forms, email, ads, LinkedIn. Your team copies data into spreadsheets, searches for missing fields, and updates the CRM by hand.',
          'It’s slow, inconsistent, and kills response times. High-intent leads get cold while your team plays data detective.',
        ],
  image: '/assets/uses/placeholder-illustration.svg',
  imageAlt: 'Problem overview',
  layout: 'imageRight',
  imageCaption: 'Manual copy-paste across tools creates delays and errors.'
      },
      {
        id: 'solution',
        heading: 'A system that enriches and routes leads automatically',
        paragraphs: [
          'We build an automation that captures each lead, enriches it using best-in-class APIs, validates contact details, scores buying intent, and routes it to the right person — instantly.',
          'All data is pushed to your CRM and neatly organized. No more spreadsheets. No more dropped leads.',
        ],
  image: '/assets/uses/flow-diagram.svg',
  imageAlt: 'Automation flow',
  layout: 'imageLeft',
  imageCaption: 'Automated capture → enrichment → validation → routing.',
  imageCaptionMode: 'overlay'
      },
      {
        id: 'stack',
        heading: 'Works with your stack',
        paragraphs: [
          'We integrate with your existing tools: HubSpot, Pipedrive, Salesforce, Airtable, Google Sheets, Notion, Slack, Gmail, Make.com, n8n and custom APIs.',
          'You keep your workflow. We remove the manual parts.',
        ],
  image: '/assets/uses/stats-cards.svg',
  imageAlt: 'Integrations',
        layout: 'imageBelow',
  imageCaption: 'Connect your CRM, sheets, inbox, and ad platforms.'
      },
      {
        id: 'implementation',
        heading: 'Implementation and handoff that sticks',
        paragraphs: [
          'We document routing rules, API keys, and failure handling clearly.',
          'Your team gets a plain-language runbook plus an optional sandbox.',
          'We can monitor and iterate post-launch for 2–4 weeks to ensure stability.'
        ],
        layout: 'twoUp',
        columns: {
          left: [
            'Documentation: playbooks, diagrams, and fallback paths.',
            'Security: scoped credentials and audit logs.'
          ],
          right: [
            'Ownership: simple admin toggles and alerts.',
            'Monitoring: metrics and notifications to Slack/Email.'
          ]
        },
        image: '/assets/uses/placeholder-illustration.svg',
        imageAlt: 'Handoff materials',
        imageCaption: 'Configuration + handoff kit',
        imageCaptionMode: 'below'
      },
    ],
    features: [
      {
        title: 'What this includes',
  icon: '/assets/uses/icons/check.svg',
        items: [
          'Multi-source capture (forms, ads, chat, LinkedIn)',
          'Company & role enrichment (industry, size, tech, HQ)',
          'Email & phone validation (bounce-safe outreach)',
          'Intent scoring & routing rules',
          'Automatic CRM sync + deduplication',
          'Slack/Email alerts with smart summaries',
        ],
      },
      {
        title: 'Outcomes you can expect',
  icon: '/assets/uses/icons/spark.svg',
        items: [
          '2–5x faster first response time',
          'Cleaner CRM, less manual admin',
          'More booked calls from the same traffic',
          'Reliable reporting with complete lead data',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you enrich leads from LinkedIn or ads? ',
        a: 'Yes. We can capture and enrich from LinkedIn, paid forms, website chat, Typeform, HubSpot forms, and more — then sync all fields into your CRM.',
      },
      {
        q: 'Do we need to change our CRM?',
        a: 'No. We integrate with your current CRM and only change the manual steps. Your team keeps the tools they know.',
      },
      {
        q: 'How long does it take to implement?',
        a: 'Simple versions: 3–5 days. Advanced scoring/routing with multiple data providers: 1–2 weeks.',
      },
    ],
    gallery: {
      title: 'Snapshots of the system in action',
      items: [
        { image: '/assets/uses/placeholder-illustration.svg', title: 'Lead profile', description: 'Unified view with enriched fields.' },
        { image: '/assets/uses/flow-diagram.svg', title: 'Routing logic', description: 'Smart branching by territory and intent.' },
        { image: '/assets/uses/stats-cards.svg', title: 'Ops metrics', description: 'Monitor throughput and response time.' }
      ]
    },
    updatedAt: new Date().toISOString(),
  },
}

export function listUseCases(): UseCaseConfig[] {
  return Object.values(useCases)
}
