interface Translations {
  routes: {
    home: string;
    about: string;
    contact: string;
    services: string;
    automation: string;
    blog: string;
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
    footer: {
      categories: {
        title: string;
        links: string[];
      }[];
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
      about: '/aboutus',
      contact: '/contact',
      services: '/services',
      automation: '/automation',
      blog: '/blog'
    },
    metaData: {
      homeTitle: 'No-Code AI Automation | Custom, Scalable workflows for your business | NETLINTECH',
      homeDesc: "We turn your biz into a system that runs itself. Custom AI workflows that slash overhead, kill manual tasks and scale hard. Built to win. Built by NETLINTECH.",
      automationTitle: 'Automate your business with AI | Print Cash | NETLINTECH',
      automationDesc: 'We build scalable automations that kill busywork and print ROI. No BS. No code. Just scalable systems that run while you sleep. Built by NETLINTECH.',
      blogTitle: 'Proven systems. Real ROI. | Learn no-code AI Automation | NETLINTECH',
      blogDesc: 'Get real strategies that grow businesses. No theory. Just tested AI automations, scalable systems and results you can copy. Use what works. Skip the BS.',
      contactTitle: 'Talk to Builders, not Salespeople | No-code AI Automation | NETLINTECH',
      contactDesc: "Have a problem worth solving? Let's fix it. No sales scripts. Just straight answers, proven systems and ROI-focused execution.",
      aboutTitle: 'Who Builds the Systems that Print ROI? | About Us | NETLINTECH',
      aboutDesc: "We're builders who solve real problems with real automation. This is the crew that solves the chaos. Built different. Built by NETLINTECH.",
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
      footer: {
        categories: [
          {
            title: 'SERVICES',
            links: ['SERVICES', 'SERVICES', 'SERVICES']
          },
          {
            title: 'COMPANY',
            links: ['ABOUT US', 'SUCCESS STORIES', 'CONTACT', 'PRIVACY POLICY']
          },
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
          }
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
        title: 'Why choose automation?',
        description: 'Increase efficiency, reduce costs, and focus on what matters most.',
        subtitle: 'Over 150 successfully automated business processes speak for themselves:',
        animatedWords: {
          word1: 'SAVED',
          word2: 'WORKFLOWS',
          word3: 'RESOLVED'
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
            description: 'Warm lead sends a message'
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
            title: 'ChatGPT 4o',
            subtitle: 'ChatGPT 4o'
          },
          airtable: {
            title: 'Airtable',
            subtitle: 'Memory'
          },
          calendar: {
            title: 'Calendar',
            subtitle: 'Chat-model'
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
      about: '/überuns',
      contact: '/kontakt', 
      services: '/dienstleistungen',
      automation: '/automatisierung',
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
      footer: {
        categories: [
          {
            title: 'DIENSTLEISTUNGEN',
            links: ['DIENSTLEISTUNGEN', 'DIENSTLEISTUNGEN', 'DIENSTLEISTUNGEN']
          },
          {
            title: 'UNTERNEHMEN',
            links: ['ÜBER UNS', 'ERFOLGSGESCHICHTEN', 'KONTAKT', 'DATENSCHUTZ']
          },
          {
            title: 'RESSOURCEN',
            links: ['BLOG', 'DOWNLOADS', 'DOKUMENTATION']
          },
          {
            title: 'LÖSUNGEN',
            links: ['DIENSTLEISTUNGEN', 'DIENSTLEISTUNGEN', 'DIENSTLEISTUNGEN']
          },
          {
            title: 'WEN WIR BEDIENEN',
            links: ['BERATER', 'CONTENT CREATORS', 'SEO']
          }
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
        subtitle: 'Über 150 erfolgreich automatisierte Geschäftsprozesse sprechen für sich:',
        animatedWords: {
          word1: 'ERSPART',
          word2: 'WORKFLOWS',
          word3: 'AUFGELÖST'
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