interface Translations {
  routes: {
    home: string;
    contact: string;
    automation: string;
    customer_service_automation: string;
    blog: string;
    services: string;
  };
  metaData:{
    homeTitle: string;
    homeDesc: string;
    automationTitle: string;
    automationDesc: string;
    blogTitle: string;
    blogDesc: string;
    contactTitle: string;
    contactDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    customerServiceAutomationTitle?: string;
    customerServiceAutomationDesc?: string;
  },
  content: {
    aboutUsTitle: string;
    aboutUsDescription: string;
    homeTitle: string;
    navigation: {
      home: string;
      about: string;
      contact: string;
      services: string;
      automation: string;
      customer_service_automation: string;
      blog: string;
    };
    whatWeDo: {
      title: string;
      description: string;
      businessSystems: {
        title: string;
        items: string[];
        moreText: string;
        buttonText: string;
      };
      businessProcesses: {
        title: string;
        items: string[];
        moreText: string;
        buttonText: string;
        automateProcessText: string;
        analyzeText: string;
      };
    };
    toolsOverview: {
      tools: {
        title: string;
        description: string;
      }[];
    };
    tools: {
      automation: string;
      webDevelopment: string;
      seo: string;
    };
    reviews: {
      title: string;
      items: {
        image: string;
        name: string;
        text: string;
      }[];
    };
    ourClients: {
      title: string;
      description: string;
      buttonText: string;
      clients: {
        name: string;
        website: string;
        description: string;
      }[];
    };
    howItWorks: {
      title: string;
      features: string[];
      steps: {
        number: string;
        title: string;
        description: string;
      }[];
    };
    homeHero: {
      title: string;
      subtitle: string;
      savings: string;
      reduction: string;
      automateButton: string;
      howItWorksButton: string;
    };
    hero: {
      badge: string;
      title: string;
      description: string;
      freeAnalysisButton: string;
      howItWorksButton: string;
    };
    customerServiceAutomation?: {
      landing: {
        title: string;
        subtitle: string;
        highlights: string[];
        stats: { label: string; value: string }[];
        sections: { id: string; heading: string; paragraphs: string[] }[];
        features: { title: string; items: string[] }[];
        faq: { q: string; a: string }[];
      };
      // Page-specific overrides
      faqSubtitle?: string;
      heroChat: {
        chatHeader: string;
        chatItems: { side: 'user' | 'ai'; text: string }[];
        typingText: string;
        voiceHeader: string;
        voiceStatus: string;
        callDuration: string;
        mute: string;
        end: string;
      };
      heroGraphic: {
        title?: string;
        subtitle?: string;
        channelsHeading: string;
        channels: string[];
        aiHeading: string;
        aiBullets: string[];
        outcomesHeading: string;
        outcomes: string[];
      };
      flow: {
        labels: {
          captureTitle: string;
          captureDesc1: string;
          captureDesc2: string;
          understandTitle: string;
          understandDesc1: string;
          understandDesc2: string;
          actTitle: string;
          actDesc1: string;
          actDesc2: string;
          measureTitle: string;
          measureDesc1: string;
          measureDesc2: string;
          channels: string[];
          kpiHeading: string;
          kpiLine: string;
        };
      };
      statsChart: {
        title: string;
        description: string;
        notes: string;
        kpis: { label: string; before: number; after: number; unit?: string; betterIsLower?: boolean }[];
      };
    };
    footer: {
      ctaSection: {
        title: string;
        description: string;
        buttonText: string;
      };
      categories: {
        title: string;
        links: {
          name: string;
          route: string;
        }[];      }[];
      copyright: string;
    };
    faq: {
      title: string;
      subtitle: string;
      items: {
        question: string;
        answer: string;
      }[];
    };
    contactHero: {
      title: string;
      subtitle: string;
    };
    contactForm: {
      form: {
        firstName: {
          label: string;
          placeholder: string;
        };
        lastName: {
          label: string;
          placeholder: string;
        };
        workEmail: {
          label: string;
          placeholder: string;
        };
        service: {
          label: string;
          placeholder: string;
          options: {
            webDevelopment: string;
            aiAutomation: string;
            consulting: string;
            customSolutions: string;
          };
        };
        message: {
          label: string;
          placeholder: string;
        };
      };
      discoveryCall: {
        title: string;
        description: {
          part1: string;
          highlight1: string;
          part2: string;
          highlight2: string;
          part3: string;
        };
      };
      submitButton: string;
      agreement: {
        text: string;
        terms: string;
        and: string;
        privacy: string;
      };
      contactInfo: {
        title: string;
        phone: {
          label: string;
          value: string;
        };
        email: {
          label: string;
          value: string;
        };
        linkedin: {
          label: string;
          value: string;
        };
      };
      // Added localized validation errors
      errors: {
        firstNameRequired: string;
        lastNameRequired: string;
        emailRequired: string;
        messageRequired: string;
        serviceRequired: string;
      };
      // Added success texts
      success: {
        title: string;
        description: string;
        anotherMessageButton: string;
      };
      // Added booking labels
      booking: {
        openInNewTab: string;
        notConfigured: string;
      };
      // Added transient UI states
      states: {
        sending: string;
      };
    };
    blogArticles: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      categories: {
        all: string;
        automation: string;
        seo: string;
        webDevelopment: string;
        news: string;
      };
      sampleArticle: {
        date: string;
        title: string;
        excerpt: string;
      };
      learnMore: string;
    };
    bottomBanner: {
      title: string;
      description: string;
      buttonText: string;
      problems: {
        heading: string;
        subtitle: string;
        description: string;
        cards: {
          scaling: {
            title: string;
            description: string;
            issues: string[];
            solution: string;
          };
          support: {
            title: string;
            description: string;
            issues: string[];
            solution: string;
          };
          efficiency: {
            title: string;
            description: string;
            issues: string[];
            solution: string;
          };
        };
      };
      solution: {
        subtitle: string;
        title: string;
        description: string;
        learnMore: string;
        toolsLabel: string;
      };
      finalSection: {
        subtitle: string;
        title: string;
        description: string;
        learnMore: string;
        toolsLabel: string;
      };
    };
    blogHero: {
      title: string;
      subtitle: string;
    };
    banner: {
      title: string;
      description: string;
      buttonText: string;
    };
    bannerSection: {
      cards: {
        slack: {
          title: string;
          description: string;
        };
        aiAgent: {
          title: string;
          description: string;
        };
        gmail: {
          title: string;
          description: string;
        };
      };
      modules: {
        chatgpt: {
          title: string;
          subtitle: string;
        };
        airtable: {
          title: string;
          subtitle: string;
        };
        calendar: {
          title: string;
          subtitle: string;
        };
        hubspot: {
          title: string;
          subtitle: string;
        };
      };
      steps: {
        messageAnalyzed: string;
        answerReceived: string;
        appointmentAdded: string;
        appointmentAddedAgain: string;
      };
      testimonial: {
        author: string;
        quote: string;
      };
      trustText: string;
    };
    bannerInfo: {
      title: string;
      description: string;
      subtitle: string;
      animatedWords: {
        word1: string;
        word2: string;
        word3: string;
      };
      ticker1: string;
      ticker2: string;
      mobileUnit: string;
      desktopUnit: {
        letter1: string;
        letter2: string;
        letter3: string;
      };
    };
    processFlow: {
      recommendation: {
        text1: string;
        text2: string;
      };
      steps: {
        roleIdentification: {
          title: string;
          description: {
            line1: string;
            line2: string;
            line3: string;
          };
        };
        initialAnalysis: {
          title: string;
          description: {
            line1: string;
            line2: string;
            line3: string;
          };
        };
        workflowMapping: {
          title: string;
          description: {
            line1: string;
            line2: string;
            line3: string;
          };
        };
        bottlenecksHurdles: {
          title: string;
          description: {
            line1: string;
            line2: string;
            line3: string;
          };
        };
        analysisReport: {
          title: string;
          description: {
            line1: string;
            line2: string;
            line3: string;
          };
        };
      };
    };
    aiTools: {
      title: string;
      description: string;
      tools: {
        name: string;
        description: string;
      }[];
    };
  };
}

const translations: Record<string, Translations> = {
  en: {
    routes: {
      home: '/',
      contact: '/contact',
      automation: '/automation',
      customer_service_automation: '/customer-service-automation',
      services: '/services',
      blog: '/blog'
    },
    metaData: {
      homeTitle: 'Automate workflows for your business | No-Code AI Automation',
      homeDesc: "We turn your biz into a system that runs itself. Custom AI workflows that slash overhead, kill manual tasks and scale hard. Built to win. Built by NETLINTECH.",
      automationTitle: 'Automate your business with AI | Print Cash | NETLINTECH',
      automationDesc: 'We build scalable automations that kill busywork and print ROI. No BS. No code. Just scalable systems that run while you sleep. Built by NETLINTECH.',
      blogTitle: 'Proven systems. Real ROI. | Learn no-code AI Automation | NETLINTECH',
      blogDesc: 'Get real strategies that grow businesses. No theory. Just tested AI automations, scalable systems and results you can copy. Use what works. Skip the BS.',
      contactTitle: 'Talk to Builders, not Salespeople | No-code AI Automation | NETLINTECH',
      contactDesc: "Have a problem worth solving? Let's fix it. No sales scripts. Just straight answers, proven systems and ROI-focused execution.",
      aboutTitle: 'Who Builds the Systems that Print ROI? | About Us | NETLINTECH',
      aboutDesc: "We're builders who solve real problems with real automation. This is the crew that solves the chaos. Built different. Built by NETLINTECH.",
      customerServiceAutomationTitle: 'Customer Service Automation with AI — AI Customer Service | NETLINTECH',
      customerServiceAutomationDesc:
        'Customer service automation and AI customer service that answers instantly, routes tickets, and scales support without hiring.',
    },
    content: {
      aboutUsTitle: 'About Us',
      aboutUsDescription: 'Learn more about our company',
      homeTitle: 'Welcome',
      navigation: {
        home: 'Home',
        about: 'About Us',
        contact: 'Contact',
        services: 'Services',
        customer_service_automation: 'Customer Service Automation',
        automation: 'Automation',
        blog: 'Blog'
      },
      whatWeDo: {
        title: 'What we automate',
        description: 'No, this isn\'t robotics. No smart self-learning robots are used. Today, robotics is a misnomer for business process optimization that has become commonplace. Instead, we prefer to speak of intelligent automation. This gives us the opportunity to improve existing business processes and systems using technology.',
        businessSystems: {
          title: 'Business systems',
          items: [
            'Automate your procurement',
            'Complete order workflows',
            'Process monitoring and analytics',
            'Automate your warehouse',
            'Complete your logistics processes',
            'Process performance analysis'
          ],
          moreText: '... and more',
          buttonText: 'Automate now'
        },
        businessProcesses: {
          title: 'Business processes',
          items: [
            'Optimize your sales processes',
            'Complete customer workflows',
            'Marketing automation',
            'Automate your accounting',
            'Complete HR processes',
            'Process quality analysis'
          ],
          moreText: '... and more',
          buttonText: 'Automate now',
          automateProcessText: 'AUTOMATE PROCESS',
          analyzeText: 'ANALYZE'
        }
      },
      toolsOverview: {
        tools: [
          {
            title: 'Automation with n8n',
            description: 'We use n8n to build robust automations for your most critical business processes - fully customizable and with maximum control. Ideal for companies that value flexibility.'
          },
          {
            title: 'Automation with Make.com',
            description: 'With Make.com, we create powerful automations visually - ideal for simple, fast, and scalable workflows. Perfect for teams that want to get started without writing code.'
          },
          {
            title: 'Custom dev. Automation',
            description: 'For complex requirements, we develop custom solutions using AI, APIs, and custom code. When standard tools aren\'t enough, we build the system you truly need.'
          }
        ]
      },
      tools: {
        automation: 'Automation',
        webDevelopment: 'Web Development',
        seo: 'SEO'
      },
      reviews: {
        title: '...and what they say about us',
        items: [
          {
            image: '/sarah-kim.png',
            name: 'Sarah Kim',
            text: 'Netlin Technologies built an AI automation that pulls orders from Shopify, syncs them with our fulfillment provider, and sends proactive delivery updates via WhatsApp. It reduced our manual workload by over 10 hours/week and drastically improved customer satisfaction.'
          },
          {
            image: '/daniel-jansen.png',
            name: 'Daniel Jansen',
            text: 'We used to manually process client intake forms. Netlin created an automation that connects Jotform, Google Sheets, and ClickUp - it’s completely hands-free now. What used to take 2 hours per client now takes 2 minutes.'
          },
          {
            image: '/alina-petrova.png',
            name: 'Alina Petrova',
            text: 'Our entire CRM onboarding flow was chaotic until Netlin set up an AI assistant that reads client replies, assigns follow-up tasks in ClickUp, and tags sentiment. We’re seeing 30% faster onboarding times and zero leads slipping through the cracks.'
          },
          {
            image: '/marcus-reed.png',
            name: 'Marcus Reed',
            text: 'Netlin built us a LinkedIn outreach automation that identifies leads, personalizes messages using GPT-4, and logs responses into Airtable. We\'ve booked 3x more discovery calls in the past month, without lifting a finger.'
          },
          {
            image: '/emily-tran.png',
            name: 'Emily Tran',
            text: 'I had no idea automation could transform my business like this. The Netlin team is insanely fast, knows exactly what to build, and explains everything clearly - even to non-tech people like me.'
          },
          {
            image: '/leo-martinez.png',
            name: 'Leo Martinez',
            text: 'Working with Netlin felt like unlocking superpowers. Every task I hated doing got automated. My stress levels dropped and revenue went up.'
          },
          {
            image: '/hannah-wolfe.png',
            name: 'Hannah Wolfe',
            text: 'As a VA, my job is to make things efficient - and Netlin helped me take that to the next level. Their automations saved me so much time I was able to take on more clients without burning out.'
          },
          {
            image: '/tomasz-nowak.png',
            name: 'Tomasz Nowak',
            text: 'Netlin Technologies is the secret weapon behind most of my client wins this year. Their custom-built workflows are clean, powerful, and tailored perfectly.'
          },
          {
            image: '/priya-desai.png',
            name: 'Priya Desai',
            text: 'I’ve worked with agencies before, but none as proactive and responsive as Netlin. They just *get it*. Every automation was delivered fast and worked flawlessly.'
          }
        ]
      },
      ourClients: {
        title: 'We\'ve already automated their processes',
        description: 'Take a look at our most recently automated processes.',
        buttonText: 'More References',
        clients: [
          {
            name: 'Example Company GmbH',
            website: 'www.example.com',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
          },
          {
            name: 'Example Company AG',
            website: 'www.example.ch',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
          },
          {
            name: 'Example Company GmbH',
            website: 'www.example.com',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
          },
          {
            name: 'Example Company GmbH',
            website: 'www.example.com',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
          }
        ]
      },
      howItWorks: {
        title: 'Here\'s how it works...',
        features: ['100% custom-made', 'No learning curve', 'Designed for non-technical founders'],
        steps: [
          {
            number: '1',
            title: 'Analysis',
            description: 'Tell us what you\'re doing manually - we\'ll identify automation opportunities. Together, we\'ll uncover the most time-consuming tasks and the biggest levers for your daily operations.'
          },
          {
            number: '2',
            title: 'Development',
            description: 'We create a custom workflow using the best tools. No templates. No chaos. Just a system that fits your business – no technical knowledge required.'
          },
          {
            number: '3',
            title: 'Launch',
            description: 'You get a plug-and-play system that runs quietly in the background. No technical headaches. You continue working as usual – just faster, more automated, and with less manual stress.'
          }
        ]
      },
      homeHero: {
        title: 'Stop wasting time. Stop wasting Payroll.',
        subtitle: 'We build AI automations that put repetitive work on autopilot, saving you over €3,000 a month and cutting busywork by more than 67%.',
        savings: '€3,000',
        reduction: '67%',
        automateButton: 'Automate now',
        howItWorksButton: 'How it works'
      },
      hero: {
        badge: 'Automation',
        title: 'Automate your business, not your life.',
        description: 'We develop custom AI-powered systems that eliminate manual work, save time, and keep your business running... even when you\'re offline.',
        freeAnalysisButton: 'Free analysis',
        howItWorksButton: 'How it works'
      },
      customerServiceAutomation: {
        faqSubtitle: "Didn't find an answer to your question regarding customer service automation?",
        landing: {
          title: 'Customer Service Automation',
          subtitle:
            'Customer service automation powered by AI customer service that resolves repetitive inquiries, cuts response times, and scales your support without hiring.',
          highlights: ['24/7 AI customer service', 'Reduce response times by up to 67%', 'Deflect 50–70% of tickets'],
          stats: [
            { label: 'Avg. response time', value: '-67%' },
            { label: 'First-contact resolution', value: '+35%' },
            { label: 'Support cost / ticket', value: '-40%' },
          ],
          sections: [
            {
              id: 'what-is',
              heading: 'What is customer service automation?',
              paragraphs: [
                'Customer service automation uses AI customer service agents, workflows, and integrations to answer common questions, qualify requests, and route or resolve tickets instantly.',
                'Instead of long queues and manual triage, AI understands intent, references your knowledge base and policies, then drafts or sends accurate responses, handing edge cases to humans with full context.',
                'Modern AI customer service can handle 60–80% of repetitive tasks: FAQs, order status, cancellations, returns, simple billing, appointment scheduling, onboarding steps, and account updates. With Guardrails, tone controls, and escalation logic, your brand remains consistent and safe.',
              ],
            },
            {
              id: 'hero-graphic',
              heading: 'From chaos to clarity',
              paragraphs: [
                'Customer service today is chaotic: emails, live chat, WhatsApp, forms, and CRM events all land in different inboxes. Agents copy data between tools, macros are outdated, and answers vary by person. Queues pile up, after-hours backlogs grow, and customers ask the same questions again and again.',
                'Tickets get routed manually (or not at all), SLAs slip, and context is lost across threads. Knowledge lives in scattered docs, wikis, and spreadsheets — so even experienced agents search instead of solving. Duplicates, wrong priorities, and hidden dependencies make operations slow and expensive.',
                'Customer service automation fixes this by unifying all channels into one intake, classifying intent and priority, deduplicating threads, and enriching each case with customer and order data. It pulls the right answer from your knowledge base and policies, then drafts on‑brand replies instantly.',
                'With customer service automation, routine tickets are resolved automatically, complex cases are escalated with full context, and workflows in your stack (CRM, helpdesk, billing, logistics) are triggered reliably. Guardrails keep tone and policy compliant, while humans approve where needed.',
                'You gain measurable outcomes: faster responses, higher first‑contact resolution, lower cost per ticket, and 24/7 coverage — all while the system learns from every interaction and improves weekly.',
                'In short: customer service automation turns scattered tools and constant firefighting into a clear, measurable system that protects SLAs, scales support, and keeps answers consistent.',
              ],
            },
            {
              id: 'why-now',
              heading: 'Why invest now',
              paragraphs: [
                'Service teams are under pressure: rising volume, shrinking budgets, and higher customer expectations. Customer service automation is the fastest lever to protect margins and improve CSAT.',
                'Launch an AI customer service layer that handles routine work and lets your experts focus on relationship-building and complex issues.',
                'Companies that adopt customer service automation outpace competitors by responding faster, resolving more issues on first contact, and operating around the clock without burning out their team.',
              ],
            },
            {
              id: 'how-it-works',
              heading: 'How AI customer service works',
              paragraphs: [
                'AI customer service operates in two primary forms: in chat and on phone calls. In chat, AI customer service receives messages across email, live chat, WhatsApp, forms and CRM events. It classifies intent and priority, pulls accurate answers from your knowledge base and policies, and drafts on‑brand replies—resolving the vast majority of repetitive cases instantly.',
                'On phone calls, AI customer service greets the caller, captures their request in natural language, verifies details, and follows compliant scripts. It can update records, trigger workflows, and provide real‑time answers. If the situation is nuanced or sensitive, AI customer service escalates to a human agent with full context (summary, detected intent, priority, and proposed next steps).',
                'This dual‑channel AI customer service model ensures customers get immediate help whether they type or call, while your team only handles the minority of complex exceptions. Result: lower wait times, higher first‑contact resolution, and consistent, policy‑aligned answers across every channel.',
                '1) Capture: Email, chat, phone, WhatsApp, forms, webhooks, and CRM events are ingested in real time.',
                '2) Understand: Classify intent, detect sentiment and priority, enrich with customer/order data, and retrieve relevant knowledge.',
                '3) Act: Draft/send the response, update systems, trigger workflows, or hand off to an agent with complete context.',
              ],
            },
            {
              id: 'process-flow',
              heading: 'Automation flow snapshot',
              paragraphs: ['A high-level view of the customer service automation pipeline from capture to measurement.'],
            },
            {
              id: 'use-cases',
              heading: 'High-ROI automations',
              paragraphs: [
                'Start with the top 10 intents: order status, appointment scheduling, billing questions, onboarding logistics, and password/account issues.',
                'Customer service automation tackles the repetitive 60–80% while your team owns the nuanced 20–40%.',
              ],
            },
            {
              id: 'proof',
              heading: 'Proven impact from real deployments',
              paragraphs: [
                'Shopify DTC brand (apparel): 72% ticket deflection in 8 weeks, 58% faster responses, and +12 NPS after deploying AI customer service grounded in product/return policies.',
                'B2B SaaS (developer tools): 41% less backlog, 34% improvement in first-contact resolution, and full 24/7 coverage with automated routing, on-call schedules, and clean handoffs.',
                'Healthcare provider group: 65% reduction in scheduling calls and 99.4% accuracy on eligibility checks using secure EHR retrieval, redaction, and policy guardrails.',
                'Marketplace operator: 44% fewer "where is my order" contacts after automated tracking updates and proactive status notifications across email and WhatsApp.',
              ],
            },
            {
              id: 'implementation',
              heading: 'Implementation plan',
              paragraphs: [
                'Week 1: Discovery and data collection (intents, macros, KB, policies).',
                'Week 2: Build flows, integrate systems, and configure escalation.',
                'Week 3: Soft launch with human-in-the-loop, measure, and iterate.',
                'Ongoing: Optimization, new intents, and training data improvements, plus quarterly reviews and performance tuning.',
              ],
            },
            {
              id: 'outcomes',
              heading: 'What you get',
              paragraphs: [
                'A production-ready customer service automation layer tailored to your brand and systems.',
                'Dashboards for SLAs, deflection, CSAT proxies, and agent assist usage.',
                'Clear governance: escalation rules, change management, and audit logs.',
              ],
            },
            {
              id: 'visual-impact',
              heading: 'Before vs After',
              paragraphs: ['See how customer service automation compresses queues and accelerates resolution time while preserving quality and brand voice.'],
            },
            {
              id: 'security',
              heading: 'Security, compliance, and controls',
              paragraphs: [
                'Your customer data stays protected. Our customer service automation follows least-privilege access, encrypts data in transit, and supports regional hosting. We can mask or exclude sensitive fields and apply redaction at capture.',
                'We implement role-based approvals, content guardrails, and audit logging. For regulated environments, we align with your DPA, data retention, and incident response procedures.',
              ],
            },
            {
              id: 'ongoing',
              heading: 'Maintenance and roadmap',
              paragraphs: [
                'We maintain your AI customer service with monthly performance reviews, intent expansion, and knowledge updates. As your products and policies evolve, the system evolves with you.',
                'We can add agent assist, multilingual support, and proactive outreach to further increase automation and conversions.',
              ],
            },
            {
              id: 'cta',
              heading: 'Ready to deploy customer service automation?',
              paragraphs: [
                'Book a free analysis. We will review your current customer service setup, identify the top intents, and design a rollout plan that delivers quick wins within weeks.',
              ],
            },
          ],
          features: [
            {
              title: 'Core capabilities',
              items: [
                'AI customer service assistant grounded in your KB',
                'Auto-tagging, prioritization, and classification',
                'Human-in-the-loop review and approvals',
              ],
            },
            {
              title: 'Integrations',
              items: [
                'Zendesk, Freshdesk, Intercom, HubSpot, Salesforce',
                'Gmail/Outlook, Slack, WhatsApp (Twilio), webhooks',
                'Make.com, n8n, custom APIs',
              ],
            },
            {
              title: 'Compliance & control',
              items: [
                'GDPR-ready data handling',
                'Role-based approvals and guardrails',
                'Audit logs and analytics dashboard',
              ],
            },
            {
              title: 'Our guarantee',
              items: [
                'Clear, measurable targets (deflection, response time, FCR)',
                'If the MVP misses targets, we iterate at no extra cost until it does',
                'No lock‑in: you own the stack, workflows, and knowledge base',
              ],
            },
          ],
          faq: [
            {
              q: 'Will AI customer service replace my agents?',
              a: 'No. AI customer service is designed to automate repetitive, high‑volume requests and assist agents—not replace them. With customer service automation we resolve FAQs, order status, returns and simple billing instantly, while nuanced or policy‑sensitive cases are escalated to a human with full context (intent, priority, history and a suggested reply). The result is a hybrid model where AI customer service handles the 60–80% routine work and your team focuses on complex conversations and relationship building.'
            },
            {
              q: 'Which channels are supported?',
              a: 'AI customer service listens across email, live chat, WhatsApp, web forms and CRM/webhooks. Customer service automation keeps every interaction synchronized with your help desk and CRM (Zendesk, Freshdesk, Intercom, HubSpot, Salesforce), including tags, status, assignments and audit trails. You get one unified queue with SLAs, regardless of the channel the customer chooses.'
            },
            {
              q: 'How do you ensure on-brand answers?',
              a: 'Responses are retrieval‑grounded in your knowledge base and policies, with tone and formatting rules. We add guardrails (allowed topics, wording, escalation thresholds) and human‑in‑the‑loop review where needed. Customer service automation continuously learns from approved answers and outcomes, so AI customer service becomes more consistent and on‑brand over time.'
            },
            {
              q: 'How fast can we launch?',
              a: 'Most teams ship an MVP in 2–3 weeks. We start with the top intents and wire up the critical systems, then track hard metrics for customer service automation: deflection rate, average response time and first‑contact resolution. As results stabilize, we expand coverage and add phone workflows to your AI customer service.'
            },
            {
              q: 'Is it secure and compliant?',
              a: 'We follow least‑privilege access, encrypt data in transit and at rest where supported, and offer regional hosting. PII can be masked or redacted at capture. Customer service automation respects your retention policies and DPA; we integrate with SSO/SCIM and maintain audit logs. AI customer service operates behind policy guardrails and can be configured to require human approvals in regulated steps.'
            },
            {
              q: 'What ROI can we expect?',
              a: 'Typical outcomes: 40–70% ticket deflection, 30–60% faster replies and 24/7 coverage within the first months. Customer service automation reduces cost per ticket and backlog while improving CSAT. AI customer service also increases agent throughput by drafting accurate replies and keeping records up to date automatically.'
            },
          ],
        },
        heroChat: {
          chatHeader: 'Chat with AI Customer Service',
          chatItems: [
            { side: 'user', text: 'I’d like to cancel my order.' },
            { side: 'ai', text: 'Sure. Let me check the status. Could you share your order number?' },
            { side: 'user', text: '#A10293' },
            { side: 'ai', text: 'Cancellation is possible. I’ve initiated the refund, confirmation is on the way.' },
          ],
          typingText: 'AI is typing…',
          voiceHeader: 'Call with AI Customer Service',
          voiceStatus: 'Speech recognition on · Routing by intent',
          callDuration: '00:42',
          mute: 'Mute',
          end: 'End',
        },
        heroGraphic: {
          title: 'Unify, understand, and act',
          subtitle: 'Channels funnel into an AI core that understands intent and delivers outcomes.',
          channelsHeading: 'Channels',
          channels: ['Email', 'Live Chat', 'WhatsApp', 'Forms/API', 'CRM Events'],
          aiHeading: 'AI Customer Service Core',
          aiBullets: ['Intent, priority, sentiment detection', 'Knowledge-grounded responses', 'Policy & tone guardrails', 'Smart routing & escalations'],
          outcomesHeading: 'Outcomes',
          outcomes: ['Faster responses', 'Higher FCR', 'Lower cost/ticket', '24/7 coverage'],
        },
        flow: {
          labels: {
            captureTitle: 'Capture',
            captureDesc1: 'Email / Chat / WhatsApp / Forms / Webhooks',
            captureDesc2: 'From CRM, helpdesk, website',
            understandTitle: 'Understand',
            understandDesc1: 'Intent / Priority / Sentiment / KB',
            understandDesc2: 'Grounded in policies & knowledge',
            actTitle: 'Act',
            actDesc1: 'Reply / Route / Update / Schedule',
            actDesc2: 'Create tasks, update CRM, escalate',
            measureTitle: 'Measure',
            measureDesc1: 'SLA / FCR / Deflection / CSAT',
            measureDesc2: 'Iterate weekly',
            channels: ['Gmail / Outlook', 'Live Chat', 'WhatsApp', 'Forms / API'],
            kpiHeading: 'Typical impact after 6–8 weeks',
            kpiLine: '-67% response time / +35% FCR / 50–70% deflection',
          },
        },
        statsChart: {
          title: 'Operational impact',
          description: 'Normalized bars per KPI show relative improvement after automation.',
          notes: 'Illustrative values across deployments; actuals vary by volume mix and policy complexity.',
          kpis: [
            { label: 'Avg. response time', before: 30, after: 10, unit: ' min', betterIsLower: true },
            { label: 'First-contact resolution', before: 45, after: 60, unit: '%', betterIsLower: false },
            { label: 'Support cost / ticket', before: 10, after: 6, unit: ' €', betterIsLower: true },
          ],
        },
      },
      footer: {
        ctaSection: {
            title: 'Ready To Stop Doing And Start Scaling?',
            description: 'Netlin is not for everyone. Netlin is for the most SERIOUS business owners when efficiency & scale matters. Netlin is for operations-heavy businesses ready to eliminate manual work forever.',
            buttonText: 'Request A Free Automation Audit',
        },
        categories: [
          {
            title: 'SERVICES',
            links: [
              {name: 'Automation', route: "automation"}
            ]
          },
          {
            title: 'COMPANY',
            links: [
             // {name: 'ABOUT US', route: "about"},
             // {name: 'SUCCESS STORIES', route: "success"},
              {name: 'Contact', route: "contact"},
              {name: "Blog", route: "blog"}
            //  {name: 'PRIVACY POLICY', route: "privacy"}
            ]
          },
          /*
          {
            title: 'RESOURCES',
            links: ['BLOG', 'DOWNLOADS', 'DOCUMENTATION']
          },
          {
            title: 'SOLUTIONS',
            links: ['SERVICES', 'SERVICES', 'SERVICES']
          },
          {
            title: 'WHO WE SERVE',
            links: ['CONSULTANTS', 'CONTENT CREATORS', 'SEO']
          }*/
        ],
        copyright: '© 2024 Your Company. All rights reserved.'
      },
      faq: {
        title: 'Frequently Asked Questions (F.A.Q.)',
        subtitle: 'Didn\'t find an answer to your question?',
        items: [
          {
            question: 'How quickly can AI automation be implemented in my company?',
            answer: 'The implementation time varies depending on the complexity of the processes: simple workflows can be up and running in 1–3 days, while comprehensive integrations may take 2–6 weeks. Our no-code solutions using tools like n8n enable initial automations within just one week.'
          },
          {
            question: 'Which business processes are best suited for AI automation?',
            answer: 'Repetitive tasks like data entry, email management, customer support, invoice processing, and lead qualification are ideal for automation. We focus on processes that consume significant time and have clear, rule-based steps.'
          },
          {
            question: 'Do I need technical knowledge to use no-code automation tools?',
            answer: 'No technical knowledge is required. We design and implement everything for you, then provide simple training on how to use and monitor your automated systems. Our solutions are built to be user-friendly for non-technical users.'
          },
          {
            question: 'What are the costs for custom AI automation?',
            answer: 'Costs vary based on complexity and scope. Simple automations start from €500, while comprehensive business process automation ranges from €2,000-€10,000. Most clients see ROI within 2-3 months through time savings and efficiency gains.'
          },
          {
            question: 'What ROI can I expect from business process automation?',
            answer: 'Our clients typically see 300-500% ROI within the first year. Time savings of 15-30 hours per week are common, plus improved accuracy, faster processing times, and the ability to scale operations without additional staff.'
          }
        ]
      },
      contactHero: {
        title: 'Get in touch',
        subtitle: 'Ready to automate your business? Let\'s discuss your needs.'
      },
      contactForm: {
        form: {
          firstName: {
            label: 'First name',
            placeholder: 'Enter your first name'
          },
          lastName: {
            label: 'Last name',
            placeholder: 'Enter your last name'
          },
          workEmail: {
            label: 'Work email',
            placeholder: 'Enter your email address'
          },
          service: {
            label: 'Service',
            placeholder: 'Select one of our services',
            options: {
              webDevelopment: 'Web Development',
              aiAutomation: 'AI Automation',
              consulting: 'Consulting',
              customSolutions: 'Custom Solutions'
            }
          },
          message: {
            label: 'Message',
            placeholder: 'Tell us about your project or requirements...'
          }
        },
        discoveryCall: {
          title: 'Book a Discovery Call',
          description: {
            part1: 'You can book a ',
            highlight1: 'FREE 15 minute discovery call',
            part2: 'with our team, to identify potential for',
            highlight2: 'cutting expenses or saving time',
            part3: 'in your business processes.'
          }
        },
        submitButton: 'Submit',
        agreement: {
          text: 'By contacting us you agree to our',
          terms: 'Terms',
          and: 'and',
          privacy: 'Privacy Policy'
        },
        contactInfo: {
          title: 'Get in Touch',
          phone: {
            label: 'Phone',
            value: '+36 (70) 200 2220'
          },
          email: {
            label: 'Email',
            value: 'info@netlintech.com'
          },
          linkedin: {
            label: 'LinkedIn',
            value: '@netlintech'
          }
        },
        // Added localized validation errors
        errors: {
          firstNameRequired: 'First name is required.',
          lastNameRequired: 'Last name is required.',
          emailRequired: 'Email is required.',
          messageRequired: 'Message is required.',
          serviceRequired: 'Please select a service.'
        },
        // Added success texts
        success: {
          title: 'Message sent successfully',
          description: "Thanks for reaching out. We'll get back to you soon.",
          anotherMessageButton: 'Send another message'
        },
        // Added booking labels
        booking: {
          openInNewTab: 'Open calendar in a new tab',
          notConfigured: 'Calendar booking is not configured. Set NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL in your environment to show the booking iframe.'
        },
        // Added transient UI states
        states: {
          sending: 'Sending...'
        }
      },
      blogArticles: {
        title: 'All Articles',
        subtitle: 'We develop custom AI-powered systems that eliminate manual work, save time, and keep your business running.',
        searchPlaceholder: 'Search articles...',
        categories: {
          all: 'All Articles',
          automation: 'Automation',
          seo: 'SEO',
          webDevelopment: 'Web Development',
          news: 'News'
        },
        sampleArticle: {
          date: 'Feb 10, 2024',
          title: 'Integration of AI Agents: Challenges and Solutions',
          excerpt: 'Discover the challenges that arise when integrating AI agents into businesses and how to Discover the challenges that arise when integrating AI agents into businesses and how to.'
        },
        learnMore: 'Learn More'
      },
      bottomBanner: {
        title: 'Ready to get started?',
        description: 'Transform your business with custom automation solutions.',
        buttonText: 'Start now',
        problems: {
          heading: 'The problems we solve.',
          subtitle: 'Does this sound familiar?',
          description: 'We solve the most common automation problems of small and medium-sized businesses - without programming',
          cards: {
            scaling: {
              title: 'You want to scale but can\'t afford more employees.',
              description: 'Our AI automation solutions enable profitable growth without additional personnel costs.',
              issues: [
                'Manual data entry costs 2-4 hours daily',
                'Error-prone processes burden your team',
                'Routine work blocks important projects'
              ],
              solution: 'Solution: fully automatic workflow setup'
            },
            support: {
              title: 'Customer inquiries overwhelm your support team',
              description: 'Our AI automation solutions enable profitable growth without additional personnel costs.',
              issues: [
                'Long response times frustrate customers',
                'Standard inquiries tie up valuable resources',
                '24/7 support is not feasible with staff'
              ],
              solution: 'Solution: Intelligent AI chatbot with escalation'
            },
            efficiency: {
              title: 'Tool Efficiency',
              description: 'Different tools do not work optimally together',
              issues: [
                'Important data is scattered across different tools',
                'Manual reports are time-consuming and error-prone',
                'Real-time data for quick decisions is missing'
              ],
              solution: 'Solution: Automated data integration and reporting'
            }
          }
        },
        solution: {
          subtitle: 'The solution to the problems',
          title: 'Analyze Processes',
          description: 'We analyze your processes and find the way to a seamless solution.',
          learnMore: 'Learn more >',
          toolsLabel: 'With tools like'
        },
        finalSection: {
          subtitle: 'The solution to the problems',
          title: 'AI Automation',
          description: 'We build and implement custom AI systems to solve your business problems. ',
          learnMore: 'Learn more >',
          toolsLabel: 'With tools like'
        }
      },
      blogHero: {
        title: 'Insight and Updates',
        subtitle: 'We develop custom AI-powered systems that eliminate manual work, save time, and keep your business running.'
      },
      banner: {
        title: 'Transform your business',
        description: 'Discover how automation can revolutionize your workflow.',
        buttonText: 'Learn more'
      },
      bannerInfo: {
        title: 'Proven Impact Across 99+ Companies',
        description: 'Increase efficiency, reduce costs, and focus on what matters most.',
        subtitle: 'Over 300 successfully automated business processes speak for themselves:',
        animatedWords: {
          word1: 'SAVED',
          word2: 'WORKFLOWS',
          word3: 'RESOLVED'
        },
        ticker1: 'Live Results',
        ticker2: 'Businesses',
        mobileUnit: 'pcs',
        desktopUnit: {
          letter1: 'p',
          letter2: 'c',
          letter3: 's',
      }
      },
      processFlow: {
        recommendation: {
          text1: 'Recommendations for',
          text2: 'Automation & Optimization.'
        },
        steps: {
          roleIdentification: {
            title: 'Role Identification',
            description: {
              line1: 'Identification of all involved',
              line2: 'roles, departments and',
              line3: 'responsibilities.'
            }
          },
          initialAnalysis: {
            title: 'Initial Analysis',
            description: {
              line1: 'Initial assessment of your',
              line2: 'business processes based',
              line3: 'on interviews & data.'
            }
          },
          workflowMapping: {
            title: 'Workflow Mapping',
            description: {
              line1: 'Detailed mapping and',
              line2: 'structuring of your',
              line3: 'workflows.'
            }
          },
          bottlenecksHurdles: {
            title: 'Bottlenecks & Hurdles',
            description: {
              line1: 'Discovery & documentation of',
              line2: 'recurring problems,',
              line3: 'manual processes.'
            }
          },
          analysisReport: {
            title: 'Analysis Report',
            description: {
              line1: 'Detailed report with all',
              line2: 'roles, workflows, problems and',
              line3: 'optimization suggestions.'
            }
          }
        }
      },
      bannerSection: {
        cards: {
          slack: {
            title: 'Slack Module',
            description: 'Team members receive a notification'
          },
          aiAgent: {
            title: 'Customer AI Agent',
            description: 'AI Agent processes the scenario'
          },
          gmail: {
            title: 'Gmail Module',
            description: 'Warm lead sends a message'
          }
        },
        modules: {
          chatgpt: {
            title: 'ChatGPT 5',
            subtitle: 'Chat-model'
          },
          airtable: {
            title: 'Airtable',
            subtitle: 'Memory'
          },
          calendar: {
            title: 'Calendar',
            subtitle: 'Appointments'
          },
          hubspot: {
            title: 'Hubspot',
            subtitle: 'CRM System'
          }
        },
        steps: {
          messageAnalyzed: 'Message analyzed',
          answerReceived: 'Answer received from database',
          appointmentAdded: 'Appointment added to calendar',
          appointmentAddedAgain: 'Lead status updated'
        },
        testimonial: {
          author: 'Lukas Steinberger',
          quote: 'This automation saved me €3,000.'
        },
        trustText: 'Those who ALREADY trust us.'
      },
      aiTools: {
        title: 'AI-Powered Tools',
        description: 'Cutting-edge AI solutions for modern businesses.',
        tools: [
          {
            name: 'Smart Analytics',
            description: 'AI-driven insights for better decision making.'
          },
          {
            name: 'Automated Workflows',
            description: 'Streamline processes with intelligent automation.'
          }
        ]
      }
    }
  },
  de: {
    routes: {
      home: '/',
      contact: '/kontakt', 
      services: '/dienstleistungen',
      automation: '/automatisierung',
      customer_service_automation: '/kundenservice-automatisierung',
      blog: '/blog'
    },
    metaData: {
      homeTitle: 'No-Code KI-Automatisierung | Individuelle, skalierbare Workflows für dein Business | NETLINTECH',
      homeDesc: "Wir machen aus deinem Business ein System, das sich selbst betreibt. Individuelle KI-Workflows, die Overhead killen, manuelle Aufgaben eliminieren und hart skalieren. Built to win. Built by NETLINTECH.",
      
      automationTitle: 'Automatisiere dein Business mit KI | Cash drucken | NETLINTECH',
      automationDesc: 'Wir bauen skalierbare Automationen, die Bullshit-Arbeit eliminieren und ROI drucken. Kein Blabla. Kein Code. Nur Systeme, die laufen, während du schläfst. Built by NETLINTECH.',
      
      blogTitle: 'Erprobte Systeme. Echter ROI. | No-Code KI-Automatisierung lernen | NETLINTECH',
      blogDesc: 'Echte Strategien, die Unternehmen wachsen lassen. Keine Theorie. Nur getestete KI-Automationen, skalierbare Systeme und Resultate zum Nachbauen. Nutze, was funktioniert. Spar dir den Bullshit.',
      
      contactTitle: 'Sprich mit Machern, nicht Verkäufern | No-Code KI-Automatisierung | NETLINTECH',
      contactDesc: "Du hast ein Problem, das es wert ist, gelöst zu werden? Lass es uns fixen. Keine Verkaufsskripte. Nur klare Antworten, bewährte Systeme und ROI-fokussierte Umsetzung.",
      
      aboutTitle: 'Wer baut die Systeme, die ROI drucken? | Über uns | NETLINTECH',
      aboutDesc: "Wir sind Builder, die echte Probleme mit echter Automatisierung lösen. Das ist das Team hinter dem Chaos. Built different. Built by NETLINTECH.",
      customerServiceAutomationTitle: 'Kundenservice Automatisierung mit KI — KI Kundenservice | NETLINTECH',
      customerServiceAutomationDesc:
        'Kundenservice Automatisierung mit KI Kundenservice: Antworten in Sekunden, Tickets automatisch routen und Support skalieren, ohne mehr Personal.',
    },

    content: {
      aboutUsTitle: 'Über Uns',
      aboutUsDescription: 'Erfahren Sie mehr über unser Unternehmen',
      homeTitle: 'Willkommen',
      navigation: {
        home: 'Startseite',
        about: 'Über Uns',
        contact: 'Kontakt',
        services: 'Dienstleistungen',
        automation: 'Automatisierung',
        customer_service_automation: 'Kundenservice-Automatisierung',
        blog: 'Blog'
      },
      whatWeDo: {
        title: 'Was wir automatisieren',
        description: 'Nein, das ist keine Robotik. Es kommen keine smarten selbstlernenden Roboter zum Einsatz. Heute ist Robotik ein Fehlbegriff für Geschäftsprozessoptimierung, der allgemein üblich geworden ist. Stattdessen sprechen wir lieber von intelligenter Automatisierung. Das gibt uns die Möglichkeit, bestehende Geschäftsprozesse und -systeme mit Hilfe von Technologie zu verbessern.',
        businessSystems: {
          title: 'Geschäftssysteme',
          items: [
            'Automatisieren Sie Ihre Beschaffung',
            'Vervollständigen Sie Auftragsworkflows',
            'Prozessüberwachung und -analytik',
            'Automatisieren Sie Ihr Lager',
            'Vervollständigen Sie Ihre Logistikprozesse',
            'Prozessleistungsanalyse'
          ],
          moreText: '... und mehr',
          buttonText: 'Jetzt automatisieren'
        },
        businessProcesses: {
          title: 'Geschäftsprozesse',
          items: [
            'Optimieren Sie Ihre Verkaufsprozesse',
            'Vervollständigen Sie Kundenworkflows',
            'Marketing-Automatisierung',
            'Automatisieren Sie Ihre Buchhaltung',
            'Vervollständigen Sie HR-Prozesse',
            'Prozessqualitätsanalyse'
          ],
          moreText: '... und mehr',
          buttonText: 'Jetzt automatisieren',
          automateProcessText: 'PROZESS AUTOMATISIEREN',
          analyzeText: 'ANALYSIEREN'
        }
      },
      toolsOverview: {
        tools: [
          {
            title: 'Automatisierung mit n8n',
            description: 'Wir nutzen n8n, um robuste Automatisierungen für Ihre geschäftskritischen Prozesse zu erstellen - vollständig anpassbar und mit maximaler Kontrolle. Ideal für Unternehmen, die Flexibilität schätzen.'
          },
          {
            title: 'Automatisierung mit Make.com',
            description: 'Mit Make.com erstellen wir mächtige Automatisierungen visuell - ideal für einfache, schnelle und skalierbare Workflows. Perfekt für Teams, die ohne Code loslegen möchten.'
          },
          {
            title: 'Custom Entwicklung Automatisierung',
            description: 'Für komplexe Anforderungen entwickeln wir individuelle Lösungen mit KI, APIs und Custom Code. Wenn Standard-Tools nicht ausreichen, bauen wir das System, das Sie wirklich brauchen.'
          }
        ]
      },
      tools: {
        automation: 'Automatisierung',
        webDevelopment: 'Webentwicklung',
        seo: 'SEO'
      },
      reviews: {
        title: '...und was sie über uns sagen',
        items: [
          {
            image: '/sarah-kim.png',
            name: 'Sarah Kim',
            text: 'Netlin Technologies hat eine KI-Automation entwickelt, die Bestellungen aus Shopify abruft, mit unserem Fulfillment-Partner synchronisiert und proaktiv Lieferupdates über WhatsApp sendet. Wir sparen dadurch über 10 Stunden pro Woche und die Kundenzufriedenheit ist deutlich gestiegen.'
          },
          {
            image: '/daniel-jansen.png',
            name: 'Daniel Jansen',
            text: 'Früher haben wir die Kundenerfassungsformulare manuell verarbeitet. Netlin hat eine Automation gebaut, die Jotform, Google Sheets und ClickUp verbindet – jetzt läuft alles komplett automatisch. Was früher 2 Stunden pro Kunde dauerte, ist jetzt in 2 Minuten erledigt.'
          },
          {
            image: '/alina-petrova.png',
            name: 'Alina Petrova',
            text: 'Unser gesamter CRM-Onboarding-Prozess war chaotisch, bis Netlin eine KI-Lösung implementiert hat, die Kundenantworten liest, Aufgaben in ClickUp erstellt und die Stimmung analysiert. Unsere Onboarding-Zeit hat sich um 30 % verkürzt und kein Lead geht mehr verloren.'
          },
          {
            image: '/marcus-reed.png',
            name: 'Marcus Reed',
            text: 'Netlin hat für uns eine LinkedIn-Outreach-Automation gebaut, die Leads identifiziert, Nachrichten mit GPT-4 personalisiert und alles in Airtable dokumentiert. Wir haben im letzten Monat dreimal so viele Erstgespräche gebucht – ganz ohne manuellen Aufwand.'
          },
          {
            image: '/emily-tran.png',
            name: 'Emily Tran',
            text: 'Ich hätte nie gedacht, dass Automation mein Business so verändern kann. Das Team von Netlin ist unglaublich schnell, weiß genau, was gebraucht wird, und erklärt alles so, dass sogar Technik-Laien es verstehen.'
          },
          {
            image: '/leo-martinez.png',
            name: 'Leo Martinez',
            text: 'Mit Netlin zu arbeiten war, als hätte ich Superkräfte freigeschaltet. Alle nervigen Aufgaben wurden automatisiert. Mein Stresslevel ist gesunken und der Umsatz gestiegen.'
          },
          {
            image: '/hannah-wolfe.png',
            name: 'Hannah Wolfe',
            text: 'Als virtuelle Assistentin ist Effizienz mein Job – und Netlin hat mir geholfen, noch einen Schritt weiterzugehen. Dank ihrer Automationen konnte ich mehr Kunden übernehmen, ohne auszubrennen.'
          },
          {
            image: '/tomasz-nowak.png',
            name: 'Tomasz Nowak',
            text: 'Netlin Technologies ist mein Geheimtipp für erfolgreiche Kundenprojekte. Ihre maßgeschneiderten Workflows sind sauber, leistungsstark und perfekt auf meine Anforderungen abgestimmt.'
          },
          {
            image: '/priya-desai.png',
            name: 'Priya Desai',
            text: 'Ich habe schon mit vielen Agenturen gearbeitet, aber keine war so proaktiv und schnell wie Netlin. Sie verstehen sofort, was gebraucht wird. Jede Automation hat auf Anhieb funktioniert.'
          }
        ]
      },
      ourClients: {
        title: 'Wir haben bereits ihre Prozesse automatisiert',
        description: 'Schauen Sie sich unsere neuesten automatisierten Prozesse an.',
        buttonText: 'Mehrere Referenzen',
        clients: [
          {
            name: 'Beispiel Unternehmen GmbH',
            website: 'www.beispiel.de',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
          },
          {
            name: 'Beispiel Unternehmen AG',
            website: 'www.beispiel.ch',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
          },
          {
            name: 'Beispiel Unternehmen GmbH',
            website: 'www.beispiel.de',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
          },
          {
            name: 'Beispiel Unternehmen GmbH',
            website: 'www.beispiel.de',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
          }
        ]
      },
      howItWorks: {
        title: 'So funktioniert es...',
        features: ['100% maßgeschneidert', 'Keine Lernkurve', 'Für nicht-technische Gründer konzipiert'],
        steps: [
          {
            number: '1',
            title: 'Analyse',
            description: 'Erzählen Sie uns, was Sie manuell machen - wir identifizieren Automatisierungsmöglichkeiten. Gemeinsam decken wir die zeitaufwändigsten Aufgaben und die größten Hebel für Ihren täglichen Betrieb auf.'
          },
          {
            number: '2',
            title: 'Entwicklung',
            description: 'Wir erstellen einen maßgeschneiderten Workflow mit den besten Tools. Keine Vorlagen. Kein Chaos. Nur ein System, das zu Ihrem Unternehmen passt – ohne technisches Wissen erforderlich.'
          },
          {
            number: '3',
            title: 'Start',
            description: 'Sie erhalten ein Plug-and-Play-System, das leise im Hintergrund läuft. Keine technischen Kopfschmerzen. Sie arbeiten wie gewohnt weiter – nur schneller, automatisierter und mit weniger manuellem Stress.'
          }
        ]
      },
      homeHero: {
        title: 'Erspare Zeit und Geld mit maßgeschneiderter KI-Automatisierung',
        subtitle: 'Unsere maßgeschneiderte Systeme ersparen mehr als €3.000 pro Monat und reduzieren monotone Aufgaben mit über 67%.',
        savings: '€3.000',
        reduction: '67%',
        automateButton: 'Jetzt automatisieren',
        howItWorksButton: 'Wie funktioniert\'s'
      },
      hero: {
        badge: 'Automatisierung',
        title: 'Automatisieren Sie Ihr Geschäft, nicht Ihr Leben.',
        description: 'Wir entwickeln maßgeschneiderte KI-gestützte Systeme, die manuelle Arbeit eliminieren, Zeit sparen und Ihr Geschäft am Laufen halten... auch wenn Sie offline sind.',
        freeAnalysisButton: 'Kostenlose Analyse',
        howItWorksButton: 'Wie es funktioniert'
      },
      customerServiceAutomation: {
        faqSubtitle: 'Keine Antwort zu Ihrer Frage zur Kundenservice-Automatisierung gefunden?',
        landing: {
          title: 'Kundenservice Automatisierung',
          subtitle:
            'Kundenservice Automatisierung mit KI Kundenservice: Standardanfragen automatisiert beantworten, Antwortzeiten drastisch senken und Support ohne zusätzliches Personal skalieren.',
          highlights: ['24/7 KI Kundenservice', 'Antwortzeiten um bis zu 67% senken', '50–70% Ticket-Deflection'],
          stats: [
            { label: 'Ø Antwortzeit', value: '-67%' },
            { label: 'First-Contact-Resolution', value: '+35%' },
            { label: 'Kosten pro Ticket', value: '-40%' },
          ],
          sections: [
            {
              id: 'was-ist',
              heading: 'Was ist Kundenservice Automatisierung?',
              paragraphs: [
                'Kundenservice Automatisierung nutzt KI Kundenservice, Workflows und Integrationen, um häufige Anfragen sofort zu beantworten, Anfragen zu qualifizieren und Tickets automatisch zu routen oder zu lösen.',
                'Statt langer Warteschlangen erkennt KI Absichten, nutzt Ihr Wissensmanagement und Ihre Richtlinien und erstellt präzise Antworten – Sonderfälle gehen mit vollem Kontext an Mitarbeitende.',
                'Moderne KI Kundenservice-Lösungen bearbeiten 60–80% repetitiver Aufgaben: FAQs, Bestellstatus, Stornierungen, Retouren, einfache Abrechnungen, Terminplanung, Onboarding-Schritte und Konto-Updates – stets markenkonform und sicher.',
              ],
            },
            {
              id: 'hero-graphic',
              heading: 'Von Chaos zu Klarheit',
              paragraphs: [
                'Der heutige Kundenservice ist chaotisch: E‑Mails, Live‑Chat, WhatsApp, Formulare und CRM‑Ereignisse landen in unterschiedlichen Postfächern. Mitarbeitende kopieren Daten zwischen Tools, Makros sind veraltet und Antworten variieren je nach Person. Warteschlangen wachsen, Backlogs nach Feierabend ebenso – und die immer gleichen Fragen kommen erneut.',
                'Tickets werden manuell (oder gar nicht) geroutet, SLAs rutschen durch und Kontext geht über Threads hinweg verloren. Wissen verteilt sich auf Docs, Wikis und Tabellen – selbst erfahrene Mitarbeitende suchen statt zu lösen. Duplikate, falsche Prioritäten und verdeckte Abhängigkeiten verlangsamen und verteuern den Betrieb.',
                'Kundenservice Automatisierung löst das, indem sie alle Kanäle in einem Intake bündelt, Intent und Priorität klassifiziert, Duplikate zusammenführt und jeden Fall mit Kunden‑ und Bestelldaten anreichert. Die richtige Antwort wird aus Wissensdatenbank und Richtlinien gezogen und in markenkonformer Tonalität sofort vorgeschlagen.',
                'Mit Kundenservice Automatisierung werden Routine‑Tickets automatisch gelöst, komplexe Fälle mit vollem Kontext eskaliert und Workflows in deinem Stack (CRM, Helpdesk, Abrechnung, Logistik) zuverlässig ausgelöst. Guardrails sichern Ton und Policy‑Compliance ab – mit optionaler menschlicher Freigabe.',
                'Die Ergebnisse sind messbar: schnellere Antworten, höhere First‑Contact‑Resolution, geringere Kosten pro Ticket und echte 24/7‑Abdeckung – während das System aus jeder Interaktion lernt und wöchentlich besser wird.',
                'Kurz: Kundenservice Automatisierung verwandelt verstreute Tools und ständiges Feuerlöschen in ein klares, messbares System, das SLAs schützt, Support skaliert und konsistente Antworten sicherstellt.',
              ],
            },
            {
              id: 'warum-jetzt',
              heading: 'Warum jetzt investieren',
              paragraphs: [
                'Mehr Volumen, weniger Budget, höhere Erwartungen: Kundenservice Automatisierung ist der schnellste Hebel für bessere Margen und höhere Zufriedenheit.',
                'Ein KI Kundenservice übernimmt Routine, Ihr Team fokussiert sich auf Beziehungspflege und komplexe Fälle.',
                'Unternehmen mit Kundenservice Automatisierung reagieren schneller, lösen mehr Fälle beim ersten Kontakt und bieten 24/7 Erreichbarkeit – ohne Team-Überlastung.',
              ],
            },
            {
              id: 'so-funktioniert-es',
              heading: 'So funktioniert KI Kundenservice',
              paragraphs: [
                'KI Kundenservice arbeitet in zwei Hauptformen: im Chat und am Telefon. Im Chat empfängt KI Kundenservice Nachrichten über E‑Mail, Live‑Chat, WhatsApp, Formulare und CRM‑Ereignisse. Es klassifiziert Intent und Priorität, zieht präzise Antworten aus Wissensdatenbank und Richtlinien und erstellt markenkonforme Antworten – die große Mehrheit repetitiver Fälle wird sofort gelöst.',
                'Am Telefon begrüßt KI Kundenservice Anrufende, erfasst das Anliegen in natürlicher Sprache, verifiziert Details und folgt konformen Skripten. Es kann Datensätze aktualisieren, Workflows auslösen und Antworten in Echtzeit geben. Wenn der Fall nuanciert oder sensibel ist, eskaliert KI Kundenservice mit vollem Kontext (Zusammenfassung, erkannter Intent, Priorität, empfohlene nächste Schritte) an Mitarbeitende.',
                'Dieses Dual‑Channel‑Modell sorgt dafür, dass Kund:innen sofort Hilfe bekommen – ob getippt oder gesprochen – während Ihr Team nur die Minderheit komplexer Ausnahmen übernimmt. Ergebnis: kürzere Wartezeiten, höhere First‑Contact‑Resolution und konsistente, richtlinienkonforme Antworten über alle Kanäle.',
                '1) Erfassung: E‑Mail, Chat, Telefon, WhatsApp, Formulare, Webhooks und CRM‑Ereignisse in Echtzeit.',
                '2) Verstehen: Intent, Stimmung und Priorität erkennen, mit Kunden-/Bestelldaten anreichern und relevantes Wissen abrufen.',
                '3) Handeln: Antwort verfassen/senden, Systeme aktualisieren, Workflows auslösen oder mit vollständigem Kontext an Mitarbeitende übergeben.',
              ],
            },
            {
              id: 'prozess-flow',
              heading: 'Ablauf auf einen Blick',
              paragraphs: ['Ein Überblick über die Kundenservice Automatisierung: von Erfassung bis Optimierung.'],
            },
            {
              id: 'use-cases',
              heading: 'Use Cases mit hohem ROI',
              paragraphs: [
                'Starten Sie mit den Top-Intents: Bestellstatus, Terminvereinbarung, Rechnungen, Onboarding und Konto-/Passwortthemen.',
                'Kundenservice Automatisierung übernimmt die repetitiven 60–80%, Ihr Team die anspruchsvollen 20–40%.',
              ],
            },
            {
              id: 'beweise',
              heading: 'Nachweise aus echten Projekten',
              paragraphs: [
                'Shopify DTC (Apparel): 72% Ticket-Deflection in 8 Wochen, 58% schnellere Antworten und +12 NPS – dank KI Kundenservice mit Produkt- & Retourenrichtlinien.',
                'B2B SaaS (Developer-Tools): 41% weniger Backlog, +34% First-Contact-Resolution und echte 24/7 Abdeckung mit automatischem Routing, On-Call und sauberem Handover.',
                'Healthcare-Verbund: 65% weniger Termin-Anrufe, 99,4% Genauigkeit bei Eligibility-Checks – mit sicherer EHR-Abfrage, Redaction und Policy-Guardrails.',
                'Marketplace-Betreiber: 44% weniger „Wo ist meine Bestellung“-Anfragen durch automatisierte Tracking-Updates und proaktive Status-Benachrichtigungen via E-Mail & WhatsApp.',
              ],
            },
            {
              id: 'implementierung',
              heading: 'Implementierungsplan',
              paragraphs: [
                'Woche 1: Analyse & Datensammlung (Intents, Makros, Wissensdatenbank, Richtlinien).',
                'Woche 2: Flows bauen, Systeme integrieren, Eskalationen konfigurieren.',
                'Woche 3: Soft Launch mit Human-in-the-loop, messen und iterieren.',
                'Kontinuierlich: Optimierung, neue Intents, Trainingsdaten – plus Quartalsreviews und Performance-Tuning.',
              ],
            },
            {
              id: 'ergebnisse',
              heading: 'Ihr Ergebnis',
              paragraphs: [
                'Eine produktionsreife Kundenservice Automatisierung, maßgeschneidert auf Marke und Systeme.',
                'Dashboards für SLAs, Deflection, CSAT-Proxies und Agent Assist.',
                'Klare Governance: Eskalationsregeln, Change-Management, Audit-Logs.',
              ],
            },
            {
              id: 'visueller-effekt',
              heading: 'Vorher vs. Nachher',
              paragraphs: ['So komprimiert Kundenservice Automatisierung Warteschlangen und beschleunigt die Bearbeitung – bei gleichbleibender Qualität und Markenstimme.'],
            },
            {
              id: 'sicherheit',
              heading: 'Sicherheit, Compliance & Kontrolle',
              paragraphs: [
                'Ihre Kundendaten bleiben geschützt. Unsere Kundenservice Automatisierung arbeitet mit Least-Privilege-Zugriff, verschlüsselt Daten in Transit und unterstützt regionale Hosting-Optionen. Sensible Felder können maskiert oder ausgeschlossen werden.',
                'Wir implementieren rollenbasierte Freigaben, Inhalts-Guardrails und Audit-Logging. In regulierten Umgebungen richten wir uns nach Ihrem Auftragsverarbeitungsvertrag, Datenaufbewahrung und Incident-Prozessen.',
              ],
            },
            {
              id: 'betrieb',
              heading: 'Betrieb & Weiterentwicklung',
              paragraphs: [
                'Wir betreiben Ihren KI Kundenservice mit monatlichen Performance-Reviews, Intent-Erweiterungen und Wissenspflege. Wenn sich Produkte und Richtlinien ändern, ändert sich das System mit.',
                'Bei Bedarf ergänzen wir Agent Assist, Mehrsprachigkeit und proaktive Ansprache – für noch mehr Automatisierung und Conversions.',
              ],
            },
            {
              id: 'cta',
              heading: 'Bereit für Kundenservice Automatisierung?',
              paragraphs: ['Buchen Sie eine kostenlose Analyse. Wir prüfen Ihren Support, identifizieren Top-Intents und entwerfen einen Rollout-Plan mit schnellen Erfolgen in wenigen Wochen.'],
            },
          ],
          features: [
            {
              title: 'Kernfunktionen',
              items: [
                'KI Kundenservice-Assistent auf Basis Ihres Wissens',
                'Auto-Tagging, Priorisierung & Klassifizierung',
                'Human-in-the-loop Freigaben',
              ],
            },
            {
              title: 'Integrationen',
              items: [
                'Zendesk, Freshdesk, Intercom, HubSpot, Salesforce',
                'Gmail/Outlook, Slack, WhatsApp (Twilio), Webhooks',
                'Make.com, n8n, Custom APIs',
              ],
            },
            {
              title: 'Compliance & Kontrolle',
              items: [
                'DSGVO-konforme Verarbeitung',
                'Rollenbasierte Freigaben & Guardrails',
                'Audit-Logs & Analytics-Dashboard',
              ],
            },
            {
              title: 'Unsere Garantie',
              items: [
                'MVP in 2–3 Wochen live für definierte Top‑Intents',
                'Klare, messbare Ziele (Deflection, Antwortzeit, FCR)',
                'Wenn das MVP die Ziele verfehlt, iterieren wir ohne Mehrkosten bis es passt',
                'Kein Lock‑in: Sie besitzen Stack, Workflows und Wissensbasis',
              ],
            },
          ],
          faq: [
            {
              q: 'Ersetzt KI Kundenservice mein Team?',
              a: 'Nein. Ki Kundenservice automatisiert wiederkehrende, volumenstarke Anfragen und unterstützt Mitarbeitende – ersetzt sie aber nicht. Mit Kundenservice Automatisierung lösen wir FAQs, Bestellstatus, Retouren und einfache Abrechnungen sofort, während sensible oder komplexe Fälle mit vollem Kontext (Intent, Priorität, Historie, Antwortvorschlag) an Mitarbeitende übergeben werden. So übernimmt ki kundenservice die repetitiven 60–80%, Ihr Team konzentriert sich auf Beziehungsarbeit und komplexe Gespräche.'
            },
            {
              q: 'Welche Kanäle werden unterstützt?',
              a: 'Ki kundenservice arbeitet kanalübergreifend: E‑Mail, Live‑Chat, WhatsApp, Webformulare und CRM/Webhooks. Kundenservice Automatisierung hält alle Interaktionen in Helpdesk und CRM (z. B. Zendesk, Freshdesk, Intercom, HubSpot, Salesforce) synchron – inklusive Tags, Status, Verantwortlichen und Audit‑Trail. Ergebnis: eine einheitliche Warteschlange mit SLAs – unabhängig vom Eingangskanal.'
            },
            {
              q: 'Wie bleiben Antworten markenkonform?',
              a: 'Antworten werden retrieval‑basiert in Ihrem Wissen und Ihren Richtlinien verankert, mit Steuerung für Tonalität und Format. Guardrails (erlaubte Themen, Wortwahl, Eskalationsschwellen) und Human‑in‑the‑loop sichern Qualität. Kundenservice Automatisierung lernt aus freigegebenen Antworten und Ergebnissen – so wird ki kundenservice über die Zeit konsistenter und markenkonformer.'
            },
            {
              q: 'Wie schnell starten wir?',
              a: 'Ein MVP für kundenservice automatisierung startet meist in 2–3 Wochen. Wir beginnen mit Top‑Intents und binden die wichtigsten Systeme an, dann messen wir harte Kennzahlen: Deflection‑Rate, Ø Antwortzeit und First‑Contact‑Resolution. Stabilisieren sich die Ergebnisse, erweitern wir die Abdeckung und ergänzen bei Bedarf Telefon‑Workflows im ki kundenservice.'
            },
            {
              q: 'Ist das sicher und DSGVO-konform?',
              a: 'Least‑Privilege, Verschlüsselung in Transit (und at rest, sofern unterstützt), regionale Hosting‑Optionen. Personenbezogene Daten können bereits bei der Erfassung maskiert/redigiert werden. Kundenservice Automatisierung folgt Ihren Aufbewahrungsrichtlinien und Ihrem AVV; SSO/SCIM und Audit‑Logs sind möglich. Ki kundenservice arbeitet hinter Policy‑Guardrails und kann in regulierten Schritten menschliche Freigaben erzwingen.'
            },
            {
              q: 'Welchen ROI kann ich erwarten?',
              a: 'Typische Ergebnisse: 40–70% Ticket‑Deflection, 30–60% schnellere Antworten und echte 24/7‑Abdeckung in den ersten Monaten. Kundenservice Automatisierung senkt die Kosten pro Ticket und reduziert Backlogs bei steigender Zufriedenheit. Zusätzlich erhöht ki kundenservice die Agent‑Produktivität durch präzise Antwortvorschläge und automatische Datensynchronisation.'
            },
          ],
        },
        heroChat: {
          chatHeader: 'KI Kundenservice',
          chatItems: [
            { side: 'user', text: 'Ich möchte meine Bestellung stornieren.' },
            { side: 'ai', text: 'Gern. Ich prüfe den Status. Bestellnummer bitte?' },
            { side: 'user', text: '#A10293' },
            { side: 'ai', text: 'Storno möglich. Ich habe die Rückerstattung eingeleitet – Bestätigung per E-Mail.' },
          ],
          typingText: 'KI tippt …',
          voiceHeader: 'Anruf mit KI Kundenservice',
          voiceStatus: 'Spracherkennung aktiv · Routing nach Intent',
          callDuration: '00:42',
          mute: 'Stumm',
          end: 'Beenden',
        },
        heroGraphic: {
          title: 'Bündeln, verstehen, handeln',
          subtitle: 'Kanäle fließen in einen KI-Kern, der Intents versteht und Ergebnisse liefert.',
          channelsHeading: 'Kanäle',
          channels: ['E-Mail', 'Live-Chat', 'WhatsApp', 'Formulare/API', 'CRM-Ereignisse'],
          aiHeading: 'KI Kundenservice Kern',
          aiBullets: ['Intent, Priorität, Stimmung', 'Wissensbasierte Antworten', 'Richtlinien & Tonalität', 'Smartes Routing & Eskalation'],
          outcomesHeading: 'Ergebnisse',
          outcomes: ['Schnellere Antworten', 'Höhere FCR', 'Geringere Kosten/Ticket', '24/7 Abdeckung'],
        },
        flow: {
          labels: {
            captureTitle: 'Erfassen',
            captureDesc1: 'E-Mail / Chat / WhatsApp / Formulare / Webhooks',
            captureDesc2: 'Aus CRM, Helpdesk, Website',
            understandTitle: 'Verstehen',
            understandDesc1: 'Intent / Priorität / Stimmung / Wissen',
            understandDesc2: 'Verankert in Richtlinien & Wissen',
            actTitle: 'Handeln',
            actDesc1: 'Antworten / Routen / Aktualisieren / Terminieren',
            actDesc2: 'Aufgaben erstellen, CRM updaten, eskalieren',
            measureTitle: 'Messen',
            measureDesc1: 'SLA / FCR / Deflection / CSAT',
            measureDesc2: 'Wöchentlich iterieren',
            channels: ['Gmail / Outlook', 'Live-Chat', 'WhatsApp', 'Formulare / API'],
            kpiHeading: 'Typische Wirkung nach 6–8 Wochen',
            kpiLine: '-67% Antwortzeit / +35% FCR / 50–70% Deflection',
          },
        },
        statsChart: {
          title: 'Operative Wirkung',
          description: 'Pro KPI normierte Balken zeigen die relative Verbesserung nach der Automatisierung.',
          notes: 'Richtwerte aus Projekten; tatsächliche Werte variieren je nach Volumen-Mix und Richtlinien-Komplexität.',
          kpis: [
            { label: 'Ø Antwortzeit', before: 30, after: 10, unit: ' Min', betterIsLower: true },
            { label: 'First-Contact-Resolution', before: 45, after: 60, unit: '%', betterIsLower: false },
            { label: 'Kosten pro Ticket', before: 10, after: 6, unit: ' €', betterIsLower: true },
          ],
        },
      },
      footer: {
        ctaSection: {
          title: 'Bereit, weniger zu tun und mehr zu skalieren?',
          description: 'Netlin ist nicht für jeden. Netlin ist für die engagiertesten Unternehmer, wenn Effizienz und Skalierung entscheidend sind. Netlin ist für betriebsintensive Unternehmen, die bereit sind, manuelle Arbeit für immer zu eliminieren.',
          buttonText: 'Kostenloses Automatisierungs-Audit Anfordern',
        },
        categories: [
          {
            title: 'DIENSTLEISTUNGEN',
            links: [
              {name: 'Automatisierung', route: "automation"}
            ]
          },
          {
            title: 'UNTERNEHMEN',
            links: [
             // {name: 'ABOUT US', route: "/about"},
             // {name: 'SUCCESS STORIES', route: "/success"},
              {name: 'Kontakt', route: "contact"},
              {name: "Blog", route: "blog"}
              //{name: 'Datenschutz', route: "/privacy"}
            ]
          },
          /*
          {
            title: 'RESOURCES',
            links: ['BLOG', 'DOWNLOADS', 'DOCUMENTATION']
          },
          {
            title: 'SOLUTIONS',
            links: ['SERVICES', 'SERVICES', 'SERVICES']
          },
          {
            title: 'WHO WE SERVE',
            links: ['CONSULTANTS', 'CONTENT CREATORS', 'SEO']
          }*/
        ],
        copyright: '© 2024 Ihr Unternehmen. Alle Rechte vorbehalten.'
      },
      faq: {
        title: 'Häufig gestellte Fragen (F.A.Q.)',
        subtitle: 'Keine Antwort auf Ihre Frage gefunden?',
        items: [
          {
            question: 'Wie schnell kann KI-Automatisierung in meinem Unternehmen implementiert werden?',
            answer: 'Die Implementierungszeit variiert je nach Komplexität der Prozesse: Einfache Workflows können in 1–3 Tagen eingerichtet werden, während umfassende Integrationen 2–6 Wochen dauern können. Unsere No-Code-Lösungen mit Tools wie n8n ermöglichen erste Automatisierungen bereits innerhalb einer Woche.'
          },
          {
            question: 'Welche Geschäftsprozesse eignen sich am besten für KI-Automatisierung?',
            answer: 'Repetitive Aufgaben wie Dateneingabe, E-Mail-Management, Kundensupport, Rechnungsverarbeitung und Lead-Qualifizierung sind ideal für Automatisierung. Wir konzentrieren uns auf Prozesse, die viel Zeit beanspruchen und klare, regelbasierte Schritte haben.'
          },
          {
            question: 'Benötige ich technisches Wissen, um No-Code-Automatisierungstools zu verwenden?',
            answer: 'Nein, technisches Wissen ist nicht erforderlich. Wir entwerfen und implementieren alles für Sie und bieten dann einfache Schulungen zur Nutzung und Überwachung Ihrer automatisierten Systeme. Unsere Lösungen sind benutzerfreundlich für nicht-technische Anwender konzipiert.'
          },
          {
            question: 'Was kosten maßgeschneiderte KI-Automatisierungen?',
            answer: 'Die Kosten variieren je nach Komplexität und Umfang. Einfache Automatisierungen beginnen bei €500, während umfassende Geschäftsprozessautomatisierung von €2.000-€10.000 reicht. Die meisten Kunden sehen ROI innerhalb von 2-3 Monaten durch Zeitersparnis und Effizienzsteigerungen.'
          },
          {
            question: 'Welchen ROI kann ich von Geschäftsprozessautomatisierung erwarten?',
            answer: 'Unsere Kunden sehen typischerweise 300-500% ROI im ersten Jahr. Zeitersparnis von 15-30 Stunden pro Woche ist üblich, plus verbesserte Genauigkeit, schnellere Verarbeitungszeiten und die Möglichkeit, Abläufe ohne zusätzliche Mitarbeiter zu skalieren.'
          }
        ]
      },
      contactHero: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Bereit, Ihr Geschäft zu automatisieren? Lassen Sie uns Ihre Bedürfnisse besprechen.'
      },
      contactForm: {
        form: {
          firstName: {
            label: 'Vorname',
            placeholder: 'Geben Sie Ihren Vornamen ein'
          },
          lastName: {
            label: 'Nachname',
            placeholder: 'Geben Sie Ihren Nachnamen ein'
          },
          workEmail: {
            label: 'Geschäftliche E-Mail',
            placeholder: 'Geben Sie Ihre E-Mail-Adresse ein'
          },
          service: {
            label: 'Service',
            placeholder: 'Wählen Sie einen unserer Services',
            options: {
              webDevelopment: 'Web-Entwicklung',
              aiAutomation: 'KI-Automatisierung',
              consulting: 'Beratung',
              customSolutions: 'Maßgeschneiderte Lösungen'
            }
          },
          message: {
            label: 'Nachricht',
            placeholder: 'Erzählen Sie uns von Ihrem Projekt oder Ihren Anforderungen...'
          }
        },
        discoveryCall: {
          title: 'Buchen Sie ein Erstgespräch',
          description: {
            part1: 'Sie können ein',
            highlight1: 'KOSTENLOSES 15-minütiges Erstgespräch',
            part2: 'mit unserem Team buchen, um Potentiale für',
            highlight2: 'Kostensenkung oder Zeitersparnis',
            part3: 'in Ihren Geschäftsprozessen zu identifizieren.'
          }
        },
        submitButton: 'Absenden',
        agreement: {
          text: 'Indem Sie uns kontaktieren, stimmen Sie unseren',
          terms: 'Bedingungen',
          and: 'und',
          privacy: 'Datenschutzrichtlinien'
        },
        contactInfo: {
          title: 'Kontakt aufnehmen',
          phone: {
            label: 'Telefon',
            value: '+36 (70) 200 2220'
          },
          email: {
            label: 'E-Mail',
            value: 'info@netlintech.com'
          },
          linkedin: {
            label: 'LinkedIn',
            value: '@netlintech'
          }
        },
        errors: {
          firstNameRequired: 'Vorname ist erforderlich.',
          lastNameRequired: 'Nachname ist erforderlich.',
          emailRequired: 'E-Mail ist erforderlich.',
          messageRequired: 'Nachricht ist erforderlich.',
          serviceRequired: 'Bitte wählen Sie einen Service aus.'
        },
        success: {
          title: 'Nachricht erfolgreich gesendet',
          description: 'Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze.',
          anotherMessageButton: 'Weitere Nachricht senden'
        },
        booking: {
          openInNewTab: 'Kalender in neuem Tab öffnen',
          notConfigured: 'Kalenderbuchung ist nicht konfiguriert. Setzen Sie NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL in Ihrer Umgebung, um das Buchungs-Iframe anzuzeigen.'
        },
        states: {
          sending: 'Senden...'
        }
      },
      blogArticles: {
        title: 'Alle Artikel',
        subtitle: 'Wir entwickeln maßgeschneiderte KI-gestützte Systeme, die manuelle Arbeit eliminieren, Zeit sparen und Ihr Geschäft am Laufen halten.',
        searchPlaceholder: 'Artikel suchen...',
        categories: {
          all: 'Alle Artikel',
          automation: 'Automatisierung',
          seo: 'SEO',
          webDevelopment: 'Web-Entwicklung',
          news: 'Nachrichten'
        },
        sampleArticle: {
          date: '10. Feb 2024',
          title: 'Integration von KI-Agenten: Herausforderungen und Lösungen',
          excerpt: 'Entdecken Sie die Herausforderungen, die bei der Integration von KI-Agenten in Unternehmen auftreten und wie Sie diese lösen können.'
        },
        learnMore: 'Mehr erfahren'
      },
      bottomBanner: {
        title: 'Bereit anzufangen?',
        description: 'Transformieren Sie Ihr Geschäft mit maßgeschneiderten Automatisierungslösungen.',
        buttonText: 'Jetzt starten',
        problems: {
          heading: 'Die Probleme, die wir lösen.',
          subtitle: 'Kommt dir das bekannt vor?',
          description: 'Wir lösen die häufigsten Automatisierungsprobleme kleiner und mittelständischer Unternehmen - ohne Programmierung',
          cards: {
            scaling: {
              title: 'Du willst skalieren, kannst dir aber keine Mitarbeiter leisten.',
              description: 'Unsere KI-Automatisierungslösungen ermöglichen profitables Wachstum ohne zusätzliche Personalkosten.',
              issues: [
                'Manuelle Dateneingabe kostet 2-4 Stunden täglich',
                'Fehleranfällige Prozesse belasten Ihr Team',
                'Routinearbeiten blockieren wichtige Projekte'
              ],
              solution: 'Lösung: vollautomatische Workflow-Einstellung'
            },
            support: {
              title: 'Kundenanfragen überlasten deinen Support-Team',
              description: 'Unsere KI-Automatisierungslösungen ermöglichen profitables Wachstum ohne zusätzliche Personalkosten.',
              issues: [
                'Lange Antwortzeiten frustrieren Kunden',
                'Standardanfragen binden wertvolle Ressourcen',
                '24/7 Support ist personell nicht machbar'
              ],
              solution: 'Lösung: Intelligenter AI-Chatbot mit Escalation'
            },
            efficiency: {
              title: 'Tool Effizienz',
              description: 'Verschiedene Tools arbeiten nicht optimal zusammen',
              issues: [
                'Wichtige Daten sind in verschiedenen Tools verstreut',
                'Manuelle Reports kosten Zeit und sind fehleranfällig',
                'Echtzeitdaten für schnelle Entscheidungen fehlen'
              ],
              solution: 'Lösung: Automatisierte Datenintegration und Reporting'
            }
          }
        },
        solution: {
          subtitle: 'Die Lösung für die Probleme',
          title: 'Prozesse Analysieren',
          description: 'Wir analysieren deine Prozesse und finden den Weg zur reibungslosen Lösung.',
          learnMore: 'Mehr erfahren >',
          toolsLabel: 'Mit Tools wie'
        },
        finalSection: {
          subtitle: 'Die Lösung für die Probleme',
          title: 'AI Automatisierung',
          description: 'Wir bauen und implementieren maßgeschneiderte KI-Systeme um die Probleme deines Businesses zu lösen.',
          learnMore: 'Mehr erfahren >',
          toolsLabel: 'Mit Tools wie'
        }
      },
      blogHero: {
        title: 'Einblicke und Updates',
        subtitle: 'Wir entwickeln maßgeschneiderte KI-gestützte Systeme, die manuelle Arbeit eliminieren, Zeit sparen und Ihr Geschäft am Laufen halten.'
      },
      banner: {
        title: 'Transformieren Sie Ihr Geschäft',
        description: 'Entdecken Sie, wie Automatisierung Ihren Workflow revolutionieren kann.',
        buttonText: 'Mehr erfahren'
      },
      bannerInfo: {
        title: 'Warum Automatisierung wählen?',
        description: 'Steigern Sie die Effizienz, reduzieren Sie Kosten und konzentrieren Sie sich auf das Wesentliche.',
        subtitle: 'Über 300 erfolgreich automatisierte Geschäftsprozesse sprechen für sich:',
        animatedWords: {
          word1: 'ERSPART',
          word2: 'WORKFLOWS',
          word3: 'AUFGELÖST'
        },
        ticker1: 'Live Ergebnisse',
        ticker2: 'Unternehmen',
        mobileUnit: 'Stk',
        desktopUnit: {
          letter1: 'S',
          letter2: 't',
          letter3: 'k',
      }
      },
      processFlow: {
        recommendation: {
          text1: 'Empfehlungen zur',
          text2: 'Automatisierung & Optimierung.'
        },
        steps: {
          roleIdentification: {
            title: 'Rollenidentifikation',
            description: {
              line1: 'Identifikation aller beteiligten',
              line2: 'Rollen, Abteilungen und',
              line3: 'Verantwortlichkeiten.'
            }
          },
          initialAnalysis: {
            title: 'Erstanalyse',
            description: {
              line1: 'Ersteinschätzung deiner',
              line2: 'Geschäftsprozesse basierend',
              line3: 'auf Interviews & Daten.'
            }
          },
          workflowMapping: {
            title: 'Workflow-Mapping',
            description: {
              line1: 'Detaillierte Abbildung und',
              line2: 'Strukturierung deiner',
              line3: 'Arbeitsabläufe.'
            }
          },
          bottlenecksHurdles: {
            title: 'Engpässe & Hürden',
            description: {
              line1: 'Aufdeckung & Notierung von',
              line2: 'wiederkehrenden Problemen,',
              line3: 'manuellen Prozessen.'
            }
          },
          analysisReport: {
            title: 'Analyse-Report',
            description: {
              line1: 'Detaillierter Bericht mit allen',
              line2: 'Rollen, Workflows, Problemen und',
              line3: 'Optimierungsvorschlägen.'
            }
          }
        }
      },
      bannerSection: {
        cards: {
          slack: {
            title: 'Slack Modul',
            description: 'Warme Lead schickt eine Nachricht'
          },
          aiAgent: {
            title: 'Customer AI Agent',
            description: 'AI Agent bearbeitet die Scenario'
          },
          gmail: {
            title: 'Gmail Modul',
            description: 'Warme Lead schickt eine Nachricht'
          }
        },
        modules: {
          chatgpt: {
            title: 'ChatGPT 4o',
            subtitle: 'ChatGPT 4o'
          },
          airtable: {
            title: 'Airtable',
            subtitle: 'Memory'
          },
          calendar: {
            title: 'Kalender',
            subtitle: 'Chat-model'
          },
          hubspot: {
            title: 'Hubspot',
            subtitle: 'CRM System'
          }
        },
        steps: {
          messageAnalyzed: 'Nachricht analysiert',
          answerReceived: 'Antwort aus Datenbank erhalten',
          appointmentAdded: 'Termin zum Kalender hinzugefügt',
          appointmentAddedAgain: 'Lead-Status aktualisiert'
        },
        testimonial: {
          author: 'Lukas Steinberger',
          quote: 'Diese Automatisierung hat mir 3.000€ gespart.'
        },
        trustText: 'Diejenigen, die uns SCHON vertrauen.'
      },
      aiTools: {
        title: 'KI-gestützte Tools',
        description: 'Modernste KI-Lösungen für moderne Unternehmen.',
        tools: [
          {
            name: 'Smart Analytics',
            description: 'KI-gesteuerte Erkenntnisse für bessere Entscheidungsfindung.'
          },
          {
            name: 'Automatisierte Workflows',
            description: 'Optimieren Sie Prozesse mit intelligenter Automatisierung.'
          }
        ]
      }
    }
  }
}

const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'

export const t = translations[locale]
export const currentLocale = locale

// =============================
// Use-case landing localization
// =============================
export type UseCaseSection = {
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

export type UseCaseFeatureGroup = {
  title: string
  items: string[]
  icon?: string
}

export type UseCaseFAQ = { q: string; a: string }

export type UseCaseConfig = {
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
  gallery?: { title: string; items: { image: string; title?: string; description?: string }[] }
  updatedAt?: string
}

// Localized index page meta (keep outside of translations typing to avoid breaking existing interface)
const usesIndexMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Use cases — Netlin Technologies',
    description: 'Explore practical AI automation use cases and implementation playbooks.',
  },
  de: {
    title: 'Use Cases — Netlin Technologies',
    description: 'Praktische KI-Automatisierungs-Use-Cases und Umsetzungs-Playbooks entdecken.',
  },
}

export function getUsesIndexMeta(loc?: string) {
  const l = loc || currentLocale
  return usesIndexMeta[l] || usesIndexMeta.en
}

// Localized use-case catalog per locale
const useCasesByLocale: Record<string, Record<string, UseCaseConfig>> = {
  en: {
    'lead-enrichment': {
      slug: 'lead-enrichment',
      name: 'Lead Enrichment',
      title: 'Lead Enrichment Automation — turn raw leads into revenue-ready profiles',
      subtitle:
        'Auto-enrich every inbound lead with company data, titles, emails, LinkedIn, tech stack and buying intent, then route instantly to CRM with zero manual work.',
      tags: ['lead gen', 'sales ops', 'CRM', 'enrichment'],
      heroImage: '/assets/uses/placeholder-illustration.svg',
      heroBackdrop: '/assets/uses/gradient-blob.svg',
      heroHighlights: ['Real-time data enrichment', 'CRM-ready in seconds', 'Zero manual input'],
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
            'Leads arrive across multiple channels, forms, email, ads, LinkedIn. Your team copies data into spreadsheets, searches for missing fields, and updates the CRM by hand.',
            'It’s slow, inconsistent, and kills response times. High-intent leads get cold while your team plays data detective.',
          ],
          image: '/assets/uses/placeholder-illustration.svg',
          imageAlt: 'Problem overview',
          layout: 'imageRight',
          imageCaption: 'Manual copy-paste across tools creates delays and errors.',
        },
        {
          id: 'solution',
          heading: 'A system that enriches and routes leads automatically',
          paragraphs: [
            'We build an automation that captures each lead, enriches it using best-in-class APIs, validates contact details, scores buying intent, and routes it to the right person, instantly.',
            'All data is pushed to your CRM and neatly organized. No more spreadsheets. No more dropped leads.',
          ],
          image: '/assets/uses/flow-diagram.svg',
          imageAlt: 'Automation flow',
          layout: 'imageLeft',
          imageCaption: 'Automated capture → enrichment → validation → routing.',
          imageCaptionMode: 'overlay',
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
          imageCaption: 'Connect your CRM, sheets, inbox, and ad platforms.',
        },
        {
          id: 'implementation',
          heading: 'Implementation and handoff that sticks',
          paragraphs: [
            'We document routing rules, API keys, and failure handling clearly.',
            'Your team gets a plain-language runbook plus an optional sandbox.',
            'We can monitor and iterate post-launch for 2–4 weeks to ensure stability.',
          ],
          layout: 'twoUp',
          columns: {
            left: [
              'Documentation: playbooks, diagrams, and fallback paths.',
              'Security: scoped credentials and audit logs.',
            ],
            right: [
              'Ownership: simple admin toggles and alerts.',
              'Monitoring: metrics and notifications to Slack/Email.',
            ],
          },
          image: '/assets/uses/placeholder-illustration.svg',
          imageAlt: 'Handoff materials',
          imageCaption: 'Configuration + handoff kit',
          imageCaptionMode: 'below',
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
          a: 'Yes. We can capture and enrich from LinkedIn, paid forms, website chat, Typeform, HubSpot forms, and more, then sync all fields into your CRM.',
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
          { image: '/assets/uses/stats-cards.svg', title: 'Ops metrics', description: 'Monitor throughput and response time.' },
        ],
      },
      updatedAt: new Date().toISOString(),
    },
  },
  // For now, mirror EN content for DE; replace with translations later
  de: {
    'lead-enrichment': {
      slug: 'lead-enrichment',
      name: 'Lead Enrichment',
      title: 'Lead Enrichment Automatisierung — rohe Leads in vertriebsbereite Profile verwandeln',
      subtitle:
        'Jeden eingehenden Lead automatisch mit Firmendaten, Titeln, E-Mails, LinkedIn, Tech-Stack und Kaufintention anreichern und ohne manuellen Aufwand direkt ins CRM routen.',
      tags: ['lead gen', 'sales ops', 'CRM', 'enrichment'],
      heroImage: '/assets/uses/placeholder-illustration.svg',
      heroBackdrop: '/assets/uses/gradient-blob.svg',
      heroHighlights: ['Echtzeit-Datenanreicherung', 'In Sekunden CRM-ready', 'Null manueller Input'],
      stats: [
        { label: 'Manuelle Arbeit reduziert', value: '67%' },
        { label: 'Ø monatliche Einsparungen', value: '€3.000+' },
        { label: 'Time-to-Contact', value: '< 2 min' },
      ],
      sections: [
        {
          id: 'problem',
          heading: 'Das Problem mit manueller Lead-Verarbeitung',
          paragraphs: [
            'Leads kommen über mehrere Kanäle — Formulare, E-Mail, Ads, LinkedIn. Ihr Team kopiert Daten in Tabellen, sucht fehlende Felder und aktualisiert das CRM per Hand.',
            'Es ist langsam, inkonsistent und verlangsamt die Reaktionszeit. Hochintente Leads kühlen ab, während Ihr Team Detektivarbeit leistet.',
          ],
          image: '/assets/uses/placeholder-illustration.svg',
          imageAlt: 'Problemübersicht',
          layout: 'imageRight',
          imageCaption: 'Manuelles Copy-Paste über Tools erzeugt Verzögerungen und Fehler.',
        },
        {
          id: 'solution',
          heading: 'Ein System, das Leads automatisch anreichert und routet',
          paragraphs: [
            'Wir bauen eine Automation, die jeden Lead erfasst, mit Best-in-Class-APIs anreichert, Kontaktdaten validiert, Kaufintention scored und unmittelbar an die richtige Person leitet.',
            'Alle Daten werden in Ihr CRM übertragen und sauber organisiert. Keine Tabellen mehr. Keine verlorenen Leads.',
          ],
          image: '/assets/uses/flow-diagram.svg',
          imageAlt: 'Automations-Flow',
          layout: 'imageLeft',
          imageCaption: 'Automatisches Erfassen → Anreichern → Validieren → Routen.',
          imageCaptionMode: 'overlay',
        },
        {
          id: 'stack',
          heading: 'Funktioniert mit Ihrem Stack',
          paragraphs: [
            'Wir integrieren Ihre bestehenden Tools: HubSpot, Pipedrive, Salesforce, Airtable, Google Sheets, Notion, Slack, Gmail, Make.com, n8n und Custom APIs.',
            'Sie behalten Ihren Workflow. Wir entfernen die manuellen Teile.',
          ],
          image: '/assets/uses/stats-cards.svg',
          imageAlt: 'Integrationen',
          layout: 'imageBelow',
          imageCaption: 'CRM, Tabellen, Inbox und Ad-Plattformen verbinden.',
        },
        {
          id: 'implementation',
          heading: 'Implementierung und Handover, das hält',
          paragraphs: [
            'Wir dokumentieren Routing-Regeln, API-Keys und Fehlerbehandlung klar.',
            'Ihr Team erhält ein verständliches Runbook plus optional eine Sandbox.',
            'Wir können 2–4 Wochen nach Launch mit überwachen und iterieren.',
          ],
          layout: 'twoUp',
          columns: {
            left: [
              'Dokumentation: Playbooks, Diagramme, Fallback-Pfade.',
              'Sicherheit: Gescopte Credentials und Audit-Logs.',
            ],
            right: [
              'Ownership: Einfache Admin-Toggles und Alerts.',
              'Monitoring: Metriken und Benachrichtigungen in Slack/E-Mail.',
            ],
          },
          image: '/assets/uses/placeholder-illustration.svg',
          imageAlt: 'Übergabematerial',
          imageCaption: 'Konfiguration + Handover-Kit',
          imageCaptionMode: 'below',
        },
      ],
      features: [
        {
          title: 'Was enthalten ist',
          icon: '/assets/uses/icons/check.svg',
          items: [
            'Multi-Source Capture (Formulare, Ads, Chat, LinkedIn)',
            'Company & Role Enrichment (Industrie, Größe, Tech, HQ)',
            'E-Mail & Telefon-Validierung (Bounce-sicheres Outreach)',
            'Intent Scoring & Routing-Regeln',
            'Automatisches CRM-Sync + Deduplizierung',
            'Slack/E-Mail Alerts mit smarten Zusammenfassungen',
          ],
        },
        {
          title: 'Was Sie erwarten können',
          icon: '/assets/uses/icons/spark.svg',
          items: [
            '2–5x schnellere erste Reaktionszeit',
            'Saubereres CRM, weniger manuelle Administration',
            'Mehr gebuchte Calls mit gleichem Traffic',
            'Zuverlässiges Reporting mit vollständigen Lead-Daten',
          ],
        },
      ],
      faq: [
        {
          q: 'Können Leads aus LinkedIn oder Ads angereichert werden?',
          a: 'Ja. Wir erfassen und reichern aus LinkedIn, Paid-Formularen, Website-Chat, Typeform, HubSpot-Formularen u. m. an und synchronisieren alle Felder in Ihr CRM.',
        },
        {
          q: 'Müssen wir unser CRM wechseln?',
          a: 'Nein. Wir integrieren Ihr aktuelles CRM und ändern nur die manuellen Schritte. Ihr Team behält die bekannten Tools.',
        },
        {
          q: 'Wie lange dauert die Implementierung?',
          a: 'Einfache Varianten: 3–5 Tage. Fortgeschrittenes Scoring/Routing mit mehreren Datenprovidern: 1–2 Wochen.',
        },
      ],
      gallery: {
        title: 'Snapshots des Systems in Aktion',
        items: [
          { image: '/assets/uses/placeholder-illustration.svg', title: 'Lead-Profil', description: 'Vereinheitlichte Ansicht mit angereicherten Feldern.' },
          { image: '/assets/uses/flow-diagram.svg', title: 'Routing-Logik', description: 'Smartes Branching nach Territorium und Intent.' },
          { image: '/assets/uses/stats-cards.svg', title: 'Ops-Metriken', description: 'Durchsatz und Reaktionszeit überwachen.' },
        ],
      },
      updatedAt: new Date().toISOString(),
    },
  },
}

export function getUseCases(loc?: string): Record<string, UseCaseConfig> {
  const l = loc || currentLocale
  return useCasesByLocale[l] || useCasesByLocale.en
}

export function listUseCases(loc?: string): UseCaseConfig[] {
  return Object.values(getUseCases(loc))
}

export function getUseCase(slug: string, loc?: string): UseCaseConfig | undefined {
  return getUseCases(loc)[slug]
}