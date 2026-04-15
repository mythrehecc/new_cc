import React from 'react';

import { Zap, CreditCard, Gavel, User, Lightbulb, Eye, Users, Award, Heart, Target, Coffee, Sparkles, GraduationCap, Wallet } from 'lucide-react';







export const siteConfig = {

  siteName: 'crerstcode',

  logo: {

    src: '/dockly-logo.png',

    alt: 'crestcode Logo',

  },

  home: {

    hero: {

      title: {

        line1: "We Own the",

        highlight: "Engineering.",

        line2: "You own the Vision.",

      },

      description: "Strategizing, architecting, and building the next generation of digital infrastructure for global enterprises and ambitious scale-ups.",

      buttons: [

        {

          label: "Initiate Project",

          href: "/#contact-form",

          type: "primary",

          iconName: "ArrowRightOutlined",

          scroll: true,

        },

        {

          label: "Our Services",

          href: "/services",

          type: "default",

          iconName: null,

          scroll: false,

        },

      ],

      stats: {

        value: "24/7",

        badge: "LIVE",

        label: "Agile Support Cycle",

      },

      trustIconNames: ["SafetyCertificateOutlined", "GlobalOutlined", "CodeOutlined"], // List of strings

      visual: {

        image: "/code1.jpg",

        alt: "Industrial Engineering Visual",

        badgeTitle: "Deployment Status",

        badgeValue: "99.9%",

        badgeUnit: "Uptime",

      },

    },

    services: {

      header: {

        highlight: "Services",

        title: "we provide",

        description: "We are Crestcode, a technical consultancy that leverages technology to address business challenges. Guided by transparency and close collaboration, we focus on delivering long-term business value."

      },



      items: [

        {

          title: 'Start-up Lab',

          description:

            'Transform your innovative ideas into a viable and predictable business model. Our comprehensive approach helps early-stage entrepreneurs validate their concepts and build sustainable foundations.'



        },

        {

          title: 'Growth Accelerator',

          description:

            'Optimize profitability and scale your SMB with our proven strategies. We redefine Product Market Fit to ensure sustainable long-term success and exponential growth.'



        },

        {

          title: 'Product Consulting',

          description:

            'Partner with our experts to define your product vision, mission, goals, and roadmap. We help enterprises make strategic decisions that drive long-term value creation.'



        },

        {

          title: 'Digital Transformation',

          description:

            'Drive scalability and operational efficiency by modernizing your business processes. Transform, upgrade, and automate for the digital-first future.'



        },

      ]

    },



    LEADERSHIP_DATA: {

      author: {

        name: "Asfarul Huda",

        role: "CEO & Founder",

        image: "/asfar.jpg",

      },

      quote: {

        part1: "We don’t just build software - we empower businesses to ",

        highlight: "thrive",

        part2: " in a digital-first world. By blending cutting-edge technology with ",

        boldSegment: "transparent collaboration",

        part3: ", we create high-performance solutions that drive real-world results.",

      },

    },

    WHY_CRESTCODE_DATA: {

      header: {

        mainText: "Why companies work with",

        brandName: "Crestcode"

      },

      features: [

        {

          title: 'Full transparency',

          iconName: 'Eye',

          desc: 'The whole process is as transparent as possible. We immediately establish a roadmap, clear KPIs and conditions for their implementation, type of reporting, daily events, sync-ups, and product testing conditions.',

        },

        {

          title: 'Client involvement',

          iconName: 'Users',

          desc: "We determine the degree of Client involvement. We can work on a turnkey basis, or we may work with the direct participation of the Client's management - our processes are adapted easily.",

        },

        {

          title: 'Reasonable costs',

          iconName: 'DollarSign',

          desc: 'We offer fair prices for both parties: you get a well-tested application with easily maintainable code, and we get enough resources to grow as professionals.',

        },

        {

          title: 'Scoping',

          iconName: 'Target',

          desc: 'At Crestcode, accurate scoping ensures a thorough understanding of your business needs and project requirements. We define goals, prioritize features, and establish a clear development roadmap.',

        },

        {

          title: 'Resource planning',

          iconName: 'UserPlus',

          desc: "The project's success heavily relies on the people. Over the past years, we elaborated techniques to select the most suitable candidates for every role. We ensure that the candidate is a perfect fit.",

        },

        {

          title: 'Risk management',

          iconName: 'ShieldAlert',

          desc: 'Honesty about project risks, proactiveness, and a risk mitigation plan - this is our approach. We continuously evaluate operational, technology, business, and external risk factors.',

        },

      ],

    },

  },

  service: {

    hero: {

      breadcrumbs: {

        parent: "Home",

        current: "Services"

      },

      heading: {

        highlight: "Software",

        main: "Development",

        suffix: "Services."

      },

      description: "High-performance engineering designed for scale. We build resilient digital products that empower enterprises to lead their industries through technical superiority.",

      cta: {

        text: "Get Started",

        targetId: "contact-form"

      },

      rating: {

        score: "5.0 Excellence Rating",

        certification: "ISO Certified Delivery"

      },

      features: [

        {

          title: "Scalable Code",

          sub: "Enterprise-ready Architecture",

          icon: "code2",

          color: '#4F46E5' // primary

        },

        {

          title: "Secure Core",

          sub: "Military-grade Protocols",

          icon: "ShieldCheck",

          color: '#10B981' // green

        },

        {

          title: "Rapid Ship",

          sub: "Accelerated ROI Cycles",

          icon: "Zap",

          color: '#FF5757' // accentRed

        }

      ],

    },

    SERVICES_CONTENT: {

      sectionHeader: {

        titlePrefix: "Our ",

        titleHighlight: "services",

        description: "Strategic engineering services built for performance, security, and global scalability."

      },

      services: [

        {

          id: 'custom-software',

          title: '1. Partner with US',

          path: '/sd_services',

          description:

            ' partner with crestcode to build the product together.',

        },

        {

          id: 'ai-ml',

          title: '2. Get a POD',

          path: '/aiml_services',

          description:

            ' you know how to build or have worked with engineers before',

        },

        {

          id: 'web-dev',

          title: '3. Get our service ',

          path: '/web_services',

          description:

            'you want us to build something for you',

        },

      ]

    },

    SERVICES_DATA: {

      header: {

        main: "Advanced ",

        highlight: "Tech Services",

        sub: "We integrate emerging technologies into our software engineering lifecycle where they provide measurable competitive advantages for our clients."

      },

      services: [

        {

          id: 'ai',

          name: 'AI development',

          iconName: "CPU",

          title: 'Artificial Intelligence',

          description:

            'From custom model training to neural network implementation, our AI services provide precision logic for healthcare diagnostics, industrial maintenance, and predictive market analysis.'

        },

        {

          id: 'blockchain',

          name: 'Blockchain',

          iconName: "Network",

          title: 'Blockchain Engineering',

          description:

            'Deploying secure, decentralized architectures. We specialize in smart contract auditing, enterprise DApp development, and highly transparent DeFi infrastructure.'

        },

        {

          id: 'chatgpt',

          name: 'LLM Integration',

          iconName: "MessageSquare",

          title: 'Advanced LLM Services',

          description:

            'Leverage Large Language Models to automate complex customer workflows and content logic. We build custom RAG pipelines and GPT-powered specialized assistants.'

        },

        {

          id: 'analytics',

          name: 'Data Analytics',

          iconName: "BarChart3",

          title: 'Predictive Intelligence',

          description:

            'Transform raw data lakes into strategic dashboards. Our analytics platforms drive real-time decisioning through complex statistical modeling and visual intelligence.'

        },

        {

          id: 'bigdata',

          name: 'Big Data',

          iconName: "Database",

          title: 'Industrial Big Data',

          description:

            'Scalable data warehousing using Hadoop and Spark. We engineer high-velocity ETL pipelines capable of processing millions of events per second with zero latency.'

        },

      ],

    },

    BANNER: {

      title: "Ready to Engineer Your Technical Vision?",

      description: "Join elite founders and enterprises who trust Crestcode to architect, build, and scale high-performance digital products with industrial-grade precision.",

      button: {

        text: "Get in touch",

        link: "/#contact-form"

      },

    },

    FAQ_DATA: {

      header: {

        main: "Services ",

        highlight: "FAQ",

        sub: "Find answers to common questions about our software development services and how we can help your business succeed."

      },

      questions: [

        {

          question: "Can I trust my information's confidentiality with your team?",

          answer: 'Absolutely! We take data confidentiality and security very seriously. All team members sign comprehensive NDAs and confidentiality agreements. We implement industry-standard security protocols including encrypted communication, secure code repositories, and access controls. Our development processes follow GDPR and other relevant data protection regulations. We can also sign custom NDAs tailored to your specific requirements. Your intellectual property, business data, and project information remain completely confidential throughout and after the project lifecycle.',

        },

        {

          question: 'How much would my development project cost? Can I get a tailored estimate?',

          answer: "Development project costs vary based on complexity, features, timeline, and technology stack. A simple website might cost $5,000-$15,000, while complex enterprise applications can range from $50,000 to $500,000+. To get a tailored estimate, we need to understand your specific requirements, desired features, user base, and timeline. We provide free consultations and detailed project breakdowns. Our estimates include development, testing, deployment, and initial support. Contact us with your project details, and we'll provide a comprehensive quote within 2-3 business days.",

        },

        {

          question: 'How to reduce software development services costs?',

          answer: 'To reduce software development costs, start with clear requirements and detailed project planning to avoid rework. Choose the right technology stack to optimize development speed and maintenance. Consider agile development methodologies for iterative progress and early feedback. Leverage open-source technologies and reusable components where appropriate. Opt for MVP development to validate ideas before full investment. Implement automated testing to reduce manual QA costs. Consider offshore or nearshore development teams for cost efficiency. Finally, maintain clear communication to prevent misunderstandings and delays.',

        },

        {

          question: 'What are the biggest benefits of outsourcing a software development services firm?',

          answer: 'Outsourcing software development provides access to specialized expertise and talent without the overhead of hiring in-house. It reduces operational costs significantly while maintaining high quality. You get faster time-to-market with experienced teams following proven methodologies. Outsourcing allows you to focus on core business activities while technical experts handle development. It provides scalability to ramp up or down based on project needs. You also gain exposure to global best practices and innovative approaches. Additionally, it offers risk sharing and flexibility in resource allocation.',

        },

        {

          question: 'How to choose a software development services company?',

          answer: 'When choosing a software development company, consider their portfolio and case studies to verify relevant experience. Check client testimonials and reviews for reliability. Evaluate their technical expertise and technology stack alignment. Ensure they have clear communication processes and project management methodologies. Compare pricing models and ensure transparency. Look for companies that offer post-development support and maintenance. Finally, assess their understanding of your industry and business requirements.',

        },

      ],

    },

    mvp: {

      header: {

        main: "From MVPs to",

        highlight: "enterprise solutions",

        description: "We excel in developing software solutions for various business stages, combining industrial-grade expertise with a commitment to scalability and reliability."

      },

      tabs: [

        {

          id: 'enterprise',

          label: 'Enterprise Software',

          content: {

            title: 'Enterprise Software Development',

            description:

              'We build high-performance enterprise software that solves real business problems and handles complex workflows and large-scale data across manufacturing, procurement, finance, sales, and HR.',

            footerBadge: "Industrial Standard Execution"

          },

        },

        {

          id: 'mvp',

          label: 'MVP Development',

          content: {

            title: 'MVP Engineering for Scale',

            description:

              'We help startups and enterprises validate their ideas quickly and cost-effectively. Our MVP approach focuses on building core features that solve the primary problem, allowing you to test your concept with real users and gather valuable feedback.',

            footerBadge: "Industrial Standard Executions"

          },

        },

        {

          id: 'saas',

          label: 'SaaS Platforms',

          content: {

            title: 'SaaS Architecture & Development',

            description:

              'Our SaaS services encompass the entire lifecycle of cloud-based solutions. We create scalable, secure platforms with robust multi-tenancy architecture, seamless integrations, and flexible subscription systems.',

            footerBadge: "Industrial Standard Execution."

          },

        },

        {

          id: 'product',

          label: 'Product Design',

          content: {

            title: 'Comprehensive Product Development',

            description:

              'From concept to market launch, we provide comprehensive product development. Our team combines technical expertise with market insights to build products that resonate with users and drive growth.',

            footerBadge: "Industrial Standard Execution"

          }

        },

    

      ]

    },



    ctaLabel: "Learn More",

    services: [

      {

        id: 'custom-software',

        icon: 'BarChartOutlined',

        title: 'Custom software development',

        path: '/sd_services',

        description: 'We develop and deliver custom solutions of varying complexity for both startup and enterprise Clients. Our approach delves deeply into business goals, bringing visions to life with cutting-edge technologies and robust architectural planning.',

      },

      {

        id: 'ai-ml',

        icon: 'CodeOutlined',

        title: 'AI & Machine Learning',

        path: '/aiml_services',

        description: 'Transform your business with predictive analytics and intelligent automation. We leverage the latest AI models to build systems that drive massive business value and enhance strategic decision-making through data-driven intelligence.',

      },

      {

        id: 'web-dev',

        icon: 'GlobalOutlined',

        title: 'Web Development',

        path: '/web_services',

        description: 'Modern, responsive web applications built with performance-first architectures. Optimized for speed, SEO, and accessibility to ensure exceptional user experiences across all digital touchpoints and enterprise platforms.',

      },

      {

        id: 'mobile-dev',

        icon: 'MobileOutlined',

        title: 'Mobile App Development',

        path: '/mobile_services',

        description: 'Native and cross-platform mobile solutions that engage users. We develop feature-rich iOS and Android applications, ensuring flawless performance and intuitive industrial-grade UX for a global audience.',

      },

    ],

    PROCESS: {

      header: {

        titlePrefix: "Crestcode's ",

        titleHighlight: "Development Process",

        description: "A carefully elaborated set of activities designed to deliver high-quality architectures within predictable timeframes."

      },

      phases: [

        {

          number: 1,

          title: 'Project Kickoff & Discovery',

          duration: 'Duration: 1 Day Kickoff | 5-8 Weeks Elicitation',

          items: [

            'Conduct kickoff meeting to align on business goals',

            'Establish communication tools and reporting frequency',

            'Prepare project workspace in Jira and Confluence',

            'Evaluate risks and prepare mitigation plans',

            'Create a project roadmap and define major milestones',

          ],

        },

        {

          number: 2,

          title: 'UI/UX Engineering',

          duration: 'Duration: 3-6 Weeks (Parallel Execution)',

          items: [

            'Prepare prototypes and high-fidelity design concepts',

            'Conduct competitor analysis and user research',

            'Develop interactive wireframes and UI designs',

            'Create a branded UI kit with reusable components',

            'Document design specifications for development',

          ],

        },

        {

          number: 3,

          title: 'Agile Development',

          duration: 'Cycle: Bi-weekly Sprints',

          items: [

            'Write and review code based on sprint planning',

            'Conduct daily stand-ups to align priorities',

            'Tech lead oversight for absolute code quality',

            'Robust version control and CI/CD implementation',

            'Client participation in progress reviews',

          ],

        },

        {

          number: 4,

          title: 'QA & Rigorous Testing',

          duration: 'Cycle: Continuous Integration',

          items: [

            'Manual and automated testing (Selenium/TestNG)',

            'Conduct usability, performance, and security audits',

            'CI/CD pipelines for seamless feature integration',

            'Collaborative bug resolution with developers',

            'End-of-sprint demo and stakeholder sign-off',

          ],

        },

        {

          number: 5,

          title: 'Support & Maintenance',

          duration: 'Phase: Optional & Ongoing',

          items: [

            'Perform knowledge transfer and team training',

            'Monitor system performance and proactive resolution',

            'Implement technology updates and security patches',

            'Roll out new features based on user evolution',

            'Ongoing performance reports and maintenance activities',

          ],

        },

      ],

    },

    Technology: {

      header: {

        titlePrefix: "Technologies ",

        titleHighlight: "we master",

        description: "We leverage a versatile tech stack mastered by highly skilled specialists. Our expertise is continually enriched through rigorous knowledge-sharing, ensuring the latest practices are applied to every project."

      },

      technologies: [

        {

          id: 1,

          name: 'Java',

          icon: "Coffee",

          description: 'A powerful programming language for secure, enterprise-level applications. Its platform independence and robust libraries enable the development of custom software for complex business processes.'

        },

        {

          id: 2,

          name: 'Node.js',

          icon: "Server",

          description: 'Fast and scalable server-side JavaScript runtime. Perfect for real-time applications, REST APIs, and microservices with high performance and computational efficiency.'

        },

        {

          id: 3,

          name: 'React.js',

          icon: "Component",

          description: 'Leading library for dynamic user interfaces. With component-based architecture, React enables fast, modern web applications with exceptional user experiences.'

        },

        {

          id: 4,

          name: 'Ruby (RoR)',

          icon: "Gem",

          description: 'A robust web framework known for efficiency. A proven choice for rapid development of maintainable web applications with high scalability requirements.'

        },

      ],

    },

    TESTIMONIAL_DATA: {

      author: {

        name: "Asfarul Huda",

        role: "CEO & Founder",

        image: "/asfar.jpg",

      },

      quote: {

        prefix: "We strive to become a ",

        highlight: "technological partner",

        suffix: " to our Clients. It’s about saying no to unfeasible ideas, offering proactive advice, maintaining honest communication, and avoiding unrealistic expectations. We ensure every decision delivers genuine value, staying in touch like a trusted personal assistant."

      },

      settings: {

        quoteIcon: "“",

        gridGap: [48, 40] as [number, number],

      },

    },

  },

  sd_services: {

    HERO_CONTENT: {

      breadcrumbs: [

        { label: 'Home', active: false },

        { label: 'Product Development', active: true }

      ],

      heading: {

        highlight: "Custom Software",

        main: "Product",

        muted: "Service."

      },

      description: "Transform your vision into market-ready reality. We engineer scalable, high-performance software products tailored to your precise business requirements and growth objectives.",

      ctas: [

        { label: "Get in Touch", variant: "primary" },

        { label: "Free Consultation", variant: "secondary" }

      ],

      socialProof: {

        rating: "5.0 Rating",

        tagline: "Innovation-First Approach"

      },

      features: [

        {

          title: "Scalable Codebase",

          subtitle: "Enterprise-Grade Patterns",

          icon: "Code2",

          bgColor: '#4F46E5' // primary

        },

        {

          title: "Security Built-In",

          subtitle: "SOC2 & GDPR Compliance",

          icon: "ShieldCheck",

          bgColor: '#10B981' // success green

        },

        {

          title: "Rapid Deployment",

          subtitle: "Automated CI/CD Pipelines",

          icon: "Zap",

          bgColor: '#FF5757' // accent red

        }

      ],

    },

    PROCESS_DATA: {

      header: {

        title: "Our Software Product",

        highlight: "Engineering Process",

        description: "A refined, end-to-end methodology designed to grow products from initial concepts to fully functional, market-ready applications."

      },

      phases: [

        {

          number: 1,

          title: 'Business Analysis',

          duration: 'Timeline: 2-4 Weeks',

          items: [

            'Stakeholder goal alignment & expectation setting',

            'Workspace setup in Jira & Confluence',

            'Requirements refinement via collaborative workshops',

            'Risk evaluation & mitigation planning',

            'Finalized project roadmap with clear milestones',

          ],

        },

        {

          number: 2,

          title: 'Architecture Definition',

          duration: 'Timeline: 1-2 Weeks',

          items: [

            'Technical product foundation definition',

            'Scalability & security tech stack selection',

            'Data flow & integration point mapping',

            'Budget-optimized structure planning',

          ],

        },

        {

          number: 3,

          title: 'UI/UX Design',

          duration: 'Timeline: 3-6 Weeks (Parallel)',

          items: [

            'Mood boards, prototypes & initial concepts',

            'Competitor analysis & user behavior study',

            'Interactive wireframes & high-fidelity UI',

            'Branded UI kit with reusable components',

            'Development-ready design specifications',

          ],

        },

        {

          number: 4,

          title: 'Product Development',

          duration: 'Cycle: Bi-weekly Agile Sprints',

          items: [

            'Code execution for pre-approved sprint features',

            'Daily stand-ups for priority alignment',

            'Tech Lead oversight for code integrity',

            'Client-side progress reviews & feedback loops',

          ],

        },

        {

          number: 5,

          title: 'Quality Assurance',

          duration: 'Cycle: Continuous Throughout Sprints',

          items: [

            'Manual testing for immediate bug discovery',

            'Automated test cases (Selenium/TestNG)',

            'Usability, performance & security audits',

            'End-of-sprint demo & stakeholder review',

          ],

        },

        {

          number: 6,

          title: 'DevOps & Deployment',

          duration: 'Phase: Ongoing Infrastructure',

          items: [

            'System performance monitoring & scaling',

            'Deployment environment management',

            'Disaster recovery & backup protocols',

            'CI/CD pipeline optimization',

          ],

        },

        {

          number: 7,

          title: 'Maintenance & Support',

          duration: 'Phase: Optional Post-Launch',

          items: [

            'Final reporting & project closure',

            'Knowledge transfer & training sessions',

            'Proactive technical issue resolution',

            'Continuous security & performance updates',

          ],

        },

      ],

    },

    SERVICE_DATA: {

      header: {

        title: "Which product development services",

        highlight: "model",

        suffix: "you need?",

      },

      models: [

        {

          id: "outsourcing",

          iconName: "Target",

          title: "Product Development Outsourcing",

          description: "Transform your vision into fully-fledged software. Our expert team leads you through the entire development lifecycle, aligning specialized technology with your core business goals.",

          features: [

            "Full-cycle product development",

            "Advanced Tech: AI, ML, Computer Vision",

            "Refined engineering processes",

            "Cost-effective scalable solutions",

          ],

          animationX: -20,

        },

        {

          id: "augmentation",

          iconName: "Users",

          title: "Staff Augmentation",

          description: "Seamlessly extend your in-house capabilities with top-tier specialists. We adjust to your internal schedules and workflows to eliminate specialized skill gaps instantly.",

          features: [

            "Flexible short/long-term cooperation",

            "Senior-level technical specialists",

            "Developers, Designers, QA & PMs",

            "Rapid on-demand team scaling",

          ],

          animationX: 20,

        },

      ],

    },

    SERVICES_CONTENT: {

      header: {

        title: "Our",

        highlight: "services",

        description: "For over a decade, we have been accumulating knowledge and expertise in several services that became our specialization."

      },

      services: [

        {

          id: 'custom',

          iconName: 'BarChart3',

          title: 'Custom software development',

          description: "We develop and deliver custom solutions of varying complexity for both startup and enterprise Clients. Our custom approach means we delve deeply into the Client's needs and business goals, shaping the concept or vision of the software solution and bringing it to life with cutting-edge technologies.",

          link: '/services/custom-software-development'

        },

        {

          id: 'ai',

          iconName: 'Code2',

          title: 'AI & Machine Learning',

          description: 'Cutting-edge artificial intelligence solutions that transform your business with predictive analytics and intelligent automation. We leverage the latest AI and machine learning technologies to build intelligent systems that drive business value and enhance decision-making.',

          link: '/services/ai-ml-development'

        },

        {

          id: 'web',

          iconName: 'Globe',

          title: 'Web Development',

          description: 'Modern, responsive web applications built with the latest technologies and best practices. We create high-performance web applications that deliver exceptional user experiences, optimized for speed, SEO, and accessibility across all devices.',

          link: '/services/web-development'

        },

        {

          id: 'mobile',

          iconName: 'Smartphone',

          title: 'Mobile App Development',

          description: 'Native and cross-platform mobile solutions that engage users and drive business growth. We develop feature-rich mobile applications for iOS and Android platforms, ensuring flawless performance and intuitive user experiences.',

          link: '/services/mobile-app-development'

        }

      ],

    },

    TESTIMONIAL_DATA: {

      founder: {

        name: "Asfarul Huda",

        role: "CEO & Founder",

        image: "/asfar.jpg",

      },

      quote: {

        main: "Every great product starts with a",

        highlight1: "clear purpose",

        middle: "and the right team behind it. At Crestcode, we are proud to become that team for businesses worldwide – growing together, solving complex challenges, and developing digital solutions that drive",

        highlight2: "real-world results."

      },

    },



  },

  aiml: {

    HERO_CONTENT: {

      breadcrumbs: [

        { label: 'Home', link: '/' },

        { label: 'AI & ML', link: '/services/ai-ml-development' }

      ],

      headline: {

        highlight: "Custom Artificial",

        main: "Intelligence",

        muted: "Solutions."

      },

      description: "We bring businesses advanced AI-powered systems, from predictive analytics to intelligent automation. Let’s lead the AI revolution with technical superiority.",

      cta: {

        text: "Get in Touch",

        targetId: "contact-form"

      },

      rating: {

        score: "5.0 Rating",

        expertise: "Deep Learning Expertise"

      },

      techCards: [

        {

          id: 1,

          title: "Neural Engine",

          subtitle: "Custom Model Training",

          iconName: "BrainCircuit",

          color: '#4F46E5'

        },

        {

          id: 2,

          title: "Auto-Scaling",

          subtitle: "Distributed Inference",

          iconName: "Cpu",

          color: '#10B981'

        },

        {

          id: 3,

          title: "Predictive ROI",

          subtitle: "Data-Driven Insights",

          iconName: "Zap",

          color: '#FF5757' // Using the accentRed token



        }

      ],

    },

    SERVICES_DATA: {

      header: {

        mainText: "Our AI software development",

        highlightText: "services"

      },

      services: [

        {

          icon: "MessageSquare",

          title: 'AI/ML strategy consulting service',

          description:

            'Every implementation starts with a solid roadmap. Our experts analyze your challenges, business environment, and processes, assess AI feasibility, look for implementation opportunities, craft a strategic plan for AI development and adoption, and calculate ROI.',

        },

        {

          icon: "Building2",

          title: 'AI architecture design',

          description:

            'We design custom AI architecture that includes the general solution structure, components, workflows, and data management. We ensure that AI models, data pipelines, and computational resources work together, have optimal performance, and deliver maximum business value.',

        },

        {

          icon: "Network",

          title: 'AI product development',

          description:

            "From concept to market-ready AI products, we develop intelligent AI software solutions for multiple industries. Whether it's predictive analytics, automation, or NLP-powered tools, we build AI-driven products that drive results.",

        },

        {

          icon: "Monitor",

          title: 'Custom AI app development',

          description:

            'We develop AI-powered web and mobile apps that leverage machine learning, natural language processing, and computer vision. Our custom applications are precisely tailored to your unique business requirements.',

        },

        {

          icon: "Network",

          title: 'AI integration',

          description:

            'We integrate various AI technologies into existing applications and systems to bring the power of AI to them. Whether embedding ML models, NLP, or computer vision, we ensure smooth integration that enhances functionality.',

        },

        {

          icon: "GraduationCap",

          title: 'AI training and support services',

          description:

            'We empower your team with the knowledge to make the most of AI. We provide comprehensive training programs, ongoing technical support, and guidance to ensure your team can effectively use and optimize AI solutions.',

        },

      ],

    },

    PROCESS_DATA: {

      title: {

        prefix: "Crestcode's AI",

        highlight: "Process"

      },

      subtitle: "A polished set of technical activities refined to deliver high-intelligence software within predictable, enterprise-grade timeframes.",

      phases: [

        {

          number: 1,

          icon: "Settings",

          title: 'Exploratory Stage',

          duration: 'Strategic Foundation & Data Audit',

          description: 'The foundational step where we identify AI/ML opportunities. We analyze data quality, variety, and existing IT infrastructure to build a roadmap.',

          items: [

            'Analyze existing data volume, variety, and sources',

            'Collect, clean, and preprocess training data',

            'Identify specific AI-addressable business challenges',

            'Access IT infrastructure for AI integration compatibility',

            'Define system architecture and technical stack',

            'Develop detailed roadmap with milestones and goals',

          ],

        },

        {

          number: 2,

          icon: "Code",

          title: 'Design and Development',

          duration: 'Framework & Backend Architecture',

          description: 'Developing the operational framework, including user interfaces and high-performance backend systems.',

          items: [

            'User interface design and mockup creation',

            'Integration architecture with existing systems',

            'High-performance backend system development',

            'Comprehensive modular testing protocols',

          ],

        },

        {

          number: 3,

          icon: "BrainCircuit",

          title: 'Model Selection and Training',

          duration: 'Intelligence Engineering',

          description: 'Establishing accuracy criteria and training specific ML models based on efficiency and scalability requirements.',

          items: [

            'Model selection: Supervised, Deep Learning, or Reinforcement',

            'Preparation of training, validation, and testing datasets',

            'Hyper-parameter tuning and rigorous evaluation',

            'Full documentation of training results and iterations',

          ],

        },

        {

          number: 4,

          icon: "Activity",

          title: 'Deployment and Operational Integrity',

          duration: 'Live Environment Transition',

          description: 'Transitioning the solution from testing to live operational use with full data migration and monitoring.',

          items: [

            'Detailed deployment planning and environmental setup',

            'Live model deployment and system integration',

            'Secure data migration and logging configuration',

            'Stakeholder training and post-deployment monitoring',

          ],

        },

        {

          number: 5,

          icon: "Settings",

          title: 'Maintenance and Optimization',

          duration: 'Continuous Improvement',

          description: 'Monitoring system performance after deployment and adjusting logic based on real-world feedback and data performance.',

          items: [

            'Continuous fine-tuning and calibration',

            'Performance monitoring based on live data',

            'Iterative improvement based on user feedback',

          ],

        },

      ],

    },

    SCALE_DATA: {

      header: {

        prefix: "Custom AI solutions for businesses of any",

        highlight: "scale",

        description: "We excel in developing software solutions for various business types and stages, combining technical mastery with a commitment to high-performance reliability."

      },

      tabs: [

        {

          id: 'enterprise',

          label: 'Enterprise AI Development',

          title: 'Enterprise AI Development',

          description: 'Our enterprise-grade AI development solutions are designed from the beginning to be reliable, secure, and high-performance. Crestcode develops robust custom AI solutions that seamlessly integrate with your existing infrastructure, support compliance needs, and scale effortlessly with your organization.',

        },

        {

          id: 'smb',

          label: 'AI Solutions for SMBs',

          title: 'AI Solutions for SMBs',

          description: 'We help growing businesses overcome challenges like limited resources and process inefficiency. Our tailored AI solutions automate repetitive tasks, improve customer engagement, boost efficiency, and deliver valuable insights to help SMBs grow faster without stretching budgets.',

        },

        {

          id: 'startup',

          label: 'PoC & MVP for Startups',

          title: 'PoC & MVP for Startups',

          description: 'Bring your innovative AI ideas to life quickly. We develop Proof-of-Concepts (PoCs) and Minimum Viable Products (MVPs), helping startups validate concepts, attract investors, and reach the market faster. We ensure your AI product is both effective and scalable from day one.',

        },

        {

          id: 'internal-ops',

          label: 'Internal AI Productivity Tools',

          title: 'Internal AI Productivity Tools',

          description: 'Maximize workforce efficiency with custom internal AI. From automated knowledge bases to predictive resource management, we build the tools that empower your internal teams to work smarter and eliminate technical debt.',

        },

      ],

      footerBadge: "Engineered for Scalability"

    },

  },

  web: {

    HERO_DATA: {

      breadcrumbs: ["Home", "Development"],

      heading: {

        primary: "Custom Web",

        secondary: "Development",

        accent: "Services."

      },

      description: "Leveraging the latest IT innovations, we engineer scalable web systems that maximize your competitive advantage and transform business efficiency through technical excellence.",

      buttons: {

        primary: "Get in Touch",

        secondary: "Book Free Consultation"

      },

      stats: {

        rating: "5.0 Rating",

        label: "Enterprise-Grade Architecture"

      },

      features: [

        { icon: "Globe", title: "Scalable Infrastructure", subtitle: "Optimized for Global Delivery", color: '#4F46E5' },

        { icon: "ShieldCheck", title: "Security First", subtitle: "SOC2 & GDPR Compliance", color: '#10B981' },

        { icon: "Zap", title: "High Performance", subtitle: "Lighthouse Score 95+", color: '#FF5757' }

      ],

    },

    FEATURES_DATA: {

      header: {

        title: "Our custom Web development",

        highlight: "features"

      },

      items: [

        {

          icon: "Puzzle",

          title: '3rd Party Services Integration',

          description: 'Web applications are easily connected to multiple third-party services, from payment gateways to complex business automation suites.',

        },

        {

          icon: "Shield",

          title: 'Enterprise Security',

          description: 'We focus on securing our web apps by implementing role-based permission systems, transactions, and robust data-sharing protection.',

        },

        {

          icon: "Cloud",

          title: 'Cloud-Native Architecture',

          description: 'Adopting cloud services and cutting-edge real-time technologies, leveraging managed services from top-tier cloud vendors.',

        },

        {

          icon: "Cog",

          title: 'Microservices Architecture',

          description: 'Building applications using microservices allows for better scalability, maintainability, and independent deployment cycles.',

        },

        {

          icon: "Globe2",

          title: 'Universal Accessibility',

          description: 'Designed to be accessible to all users, following WCAG guidelines and ensuring cross-device compatibility.',

        },

        {

          icon: "Monitor",

          title: 'System Stability',

          description: 'We ensure application stability through comprehensive automated testing, monitoring, and software development best practices.',

        },

      ],

    },

    WHY_DATA: {

      header: {

        title: "Why build with",

        highlight: "Crestcode?",

        description: "Our specialized engineering team brings extensive experience across global markets. We select tech stacks with surgical precision, ensuring scalability and long-term resource efficiency for your future products."

      },

      stats: [

        {

          icon: "Rocket",

          value: '30%',

          label: 'Faster Market Entry',

          description: 'Reduction in time-to-market through optimized custom development workflows.',

        },

        {

          icon: "BarChart2",

          value: '25%',

          label: 'Overhead Reduction',

          description: 'Lower project costs through strategic technical consulting and lean architecture.',

        },

        {

          icon: "ShieldCheck",

          value: '90%',

          label: 'Success Rate',

          description: 'Proven track record in reviving stalled projects via technical rescue missions.',

        },

      ],

    },

    SERVICES_DATA: {

      header: {

        title: "Custom Web application",

        accent: "services"

      },

      list: [

        {

          id: 'rnd',

          title: 'R&D & Analysis',

          icon: "FileText",

          description: 'Our R&D and business analyst team study your business and ideas in detail to help you reduce market and technical risks across the entire web app development:',

          points: [

            'Validate business idea', 'Choose the right technology', 'Exact project estimation',

            'Create solution vision', 'Plan product release', 'Avoid unplanned costs'

          ],

          image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',

        },

        {

          id: 'uxui',

          title: 'UX/UI Design',

          icon: "Ruler",

          description: 'Our design team creates intuitive and engaging user experiences that align with your brand and business goals, ensuring your web application stands out:',

          points: [

            'User research & personas', 'Wireframing & prototyping', 'Visual design & branding',

            'Usability testing', 'Responsive design systems', 'Accessibility compliance'

          ],

          image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',

        },

        {

          id: 'webdev',

          title: 'Web Development',

          icon: "Monitor",

          description: 'Our experienced developers build scalable, secure, and high-performance web applications using cutting-edge technologies and best practices:',

          points: [

            'Frontend development', 'Backend architecture', 'API integration',

            'Database optimization', 'Security implementation', 'Performance tuning'

          ],

          image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',

        },

        {

          id: 'qa',

          title: 'QA & Testing',

          icon: "Settings",

          description: 'Our quality assurance team ensures your web application is reliable, bug-free, and performs flawlessly across all platforms and devices:',

          points: [

            'Functional testing', 'Performance testing', 'Security testing',

            'Automated test coverage', 'Cross-browser compatibility', 'Regression testing'

          ],

          image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',

        },

        {

          id: 'staff',

          title: 'Staff Augmentation',

          icon: "Users",

          description: 'We provide skilled professionals to seamlessly integrate with your team, helping you scale quickly and efficiently while maintaining quality:',

          points: [

            'Dedicated developers', 'Flexible team scaling', 'Expert specialists',

            'Seamless integration', 'Knowledge transfer', 'Long-term partnerships'

          ],

          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',

        },

      ],

    },

    PROCESS_DATA: {

      header: {

        title: "Our Web Development",

        accent: "Process",

        description: "A holistic web engineering approach focused on meeting business requirements while maximizing effectiveness and efficiency."

      },

      phases: [

        {

          number: 1,

          icon: "Search",

          title: 'Research',

          duration: 'Strategic Alignment',

          items: ['Stakeholder interviews', 'Key apps competitor analysis', 'Marketing and user behavior analysis'],

        },

        {

          number: 2,

          icon: "Lightbulb",

          title: 'Discover',

          duration: 'Solution Architecture',

          items: ['Shared product vision', 'Requirement specs', 'Roadmap timeline', 'System architecture'],

        },

        {

          number: 3,

          icon: "PenTool",

          title: 'Design',

          duration: 'Experience Engineering',

          items: ['Information architecture', 'Hi-fidelity wireframing', 'Interactive prototyping', 'Motion design'],

        },

        {

          number: 4,

          icon: "Terminal",

          title: 'Programming',

          duration: 'System Development',

          items: ['Backend development', 'Frontend engineering', 'Performance optimization', 'API integration'],

        },

        {

          number: 5,

          icon: "ShieldCheck",

          title: 'Quality Assurance',

          duration: 'Reliability Testing',

          items: ['Functional testing', 'Load testing', 'Regression testing'],

        },

        {

          number: 6,

          icon: "Rocket",

          title: 'Deployment',

          duration: 'Production Launch',

          items: ['Store submission', 'Enterprise implementation', 'Live monitoring'],

        },

      ]

    },

    LEADERSHIP_DATA: {

      author: {

        name: "Asfarul Huda",

        role: "CEO & Founder",

        image: "/asfar.jpg", // Ensure this path is correct in your public folder

      },

      quote: {

        main: "A well-structured development process is the foundation of successful software projects. By combining",

        highlight1: "clear planning",

        mid: ", an agile approach, and continuous early feedback, we ensure every product aligns with business goals. Our methodology minimizes risks and delivers",

        highlight2: "high-quality applications",

        end: "on time and within budget."

      }

    },

  },

  mobile: {

    HERO_DATA: {

      breadcrumbs: [

        { label: "Home", active: false },

        { label: "Mobile Development", active: true }

      ],

      content: {

        titleAccent: "Enterprise Mobile",

        titleMain: "App",

        titleMuted: "Development.",

        description: "Creating scalable, high-performance iOS, Android, and cross-platform applications. We leverage technical precision to engage users and drive business growth through mobile excellence.",

        ctaLabel: "Get in Touch"

      },

      rating: {

        score: "5.0",

        label: "Rating",

        subLabel: "iOS & Android Expertise",

        starCount: 5

      },

      design: {

        bgGradient: 'radial-gradient(at 0% 0%, #EEF2FF 0, transparent 50%), radial-gradient(at 100% 0%, #E0F2FE 0, transparent 50%), radial-gradient(at 50% 100%, #F8FAFC 0, transparent 50%), #F1F5F9',

        primary: '#4F46E5',

        textBlack: '#020617',

        textMuted: '#64748B',

        border: '#E2E8F0',

      },

    },

    FEATURES_DATA: {

      header: {

        title: "Mobile app development",

        accent: "features"

      },

      items: [

        {

          icon: "Key",

          title: 'User Access & Identity',

          description: 'Core authentication flows to keep users secure and engaged from the first interaction.',

          points: [

            'Secure registration and login',

            'Social sign-in (Google, Apple, Facebook)',

            'Password verification protocols',

            'Role-based access control',

          ],

        },

        {

          icon: "Navigation",

          title: 'Navigation Systems',

          description: 'Smooth navigation patterns designed for zero-friction user journeys.',

          points: [

            'Bottom tab & side menu systems',

            'Intuitive onboarding flows',

            'In-app search & smart sorting',

            'Dynamic grid & list layouts',

          ],

        },

        {

          icon: "Settings",

          title: 'Profile Architecture',

          description: 'Granular user management and preference handling for tailored experiences.',

          points: [

            'Identity creation & editing',

            'Optimized avatar processing',

            'Notification & locale logic',

            'Native dark/light mode support',

          ],

        },

        {

          icon: "Type",

          title: 'Input & Interaction',

          description: 'Robust components designed to collect and process complex user data.',

          points: [

            'Forms with real-time validation',

            'Rating & review modules',

            'Secure file & media uploads',

            'Interactive feedback systems',

          ],

        },

        {

          icon: "Image",

          title: 'Content Display',

          description: "High-performance presentation of your app's core digital assets.",

          points: [

            'Advanced list & card views',

            'Galleries & media carousels',

            'Dynamic service detail pages',

            'Expandable architectural sections',

          ],

        },

        {

          icon: "BarChart3",

          title: 'Analytics & Integrity',

          description: 'Ensuring your application captures the right data and performs flawlessly.',

          points: [

            'Firebase/Google screen tracking',

            'Crash & performance monitoring',

            'Offline caching & loading states',

            'Device permission handling',

          ],

        },

      ]

    },

    APP_DATA: {

      header: {

        title: "Native vs Hybrid Mobile",

        accent: "Apps",

        description: "Choosing the right architecture is critical to technical success. We guide you through engineering choices that align with your business goals, budget, and growth timeline."

      },

      tabs: {

        native: {

          id: 'native' as const,

          icon: "Smartphone",

          label: 'Native Applications',

          description: 'Native apps, built specifically for iOS (Swift) or Android (Kotlin), deliver blazing-fast performance by tapping directly into device hardware like cameras or GPS. They offer intuitive interfaces matching platform standards, perfect for high-security banking or healthcare ecosystems.',

          title: 'When to Engineer Native:',

          points: [

            'App demands peak performance and deep hardware integration.',

            'Security and user experience are top mission-critical priorities.',

            'Budget allows for a premium, platform-tailored application.',

          ],

        },

        hybrid: {

          id: 'hybrid' as const,

          icon: "Layers",

          label: 'Hybrid Applications',

          description: 'Developed with frameworks like React Native or Flutter, hybrid apps use one codebase to run on both iOS and Android. This slashed development costs and speeds up delivery, making it ideal for content-focused apps and rapid market testing.',

          title: 'When to Engineer Hybrid:',

          points: [

            'You need a cost-effective launch for both platforms simultaneously.',

            'Your app focuses on content or e-commerce over heavy device reliance.',

            'Time-to-market outweighs the need for maximum low-level optimization.',

          ],

        },

      },

    },

    SERVICES_DATA: {

      header: {

        title: "Our custom",

        accent: "Mobile app development",

        suffix: "services",

        description: "We offer comprehensive end-to-end mobile engineering, covering every major platform and technology ecosystem."

      },

      items: [

        {

          id: 'ios',

          icon: "Apple",

          title: 'iOS app development',

          description: 'Expert native development for Apple products. We leverage all gadget capabilities, including Touch ID, Face ID, Apple Pay, and Apple Wallet. This means a fully native experience for users with maximum performance across iOS, iPad, macOS, and watchOS ecosystems.',

        },

        {

          id: 'android',

          icon: "Smartphone",

          title: 'Android app development',

          description: 'Android apps built with Kotlin ensuring broad device compatibility across the fragmented smartphone landscape. We ensure seamless launches for different OS versions and integration of modern technologies like AI, voice control, and IoT.',

        },

        {

          id: 'cross-platform',

          icon: "cross-platform",

          title: 'Cross-platform apps',

          description: 'Target both iOS and Android platforms at once. Cross-platform development allows you to build a single codebase that works across multiple operating systems, reducing development time and costs while maintaining native-like user experiences.',

        },

        {

          id: 'pwa',

          icon: "pwa",

          title: 'Progressive Web Apps (PWAs)',

          description: 'PWAs deliver app-like experiences in browsers, installable on any device without app stores. They offer offline functionality, push notifications, and fast loading times while being easily discoverable via simple URLs.',

        },

      ],

    },

    PROCESS_DATA: {

      header: {

        title: "Mobile App Development",

        accent: "Process",

        description: "A polished methodology refined over 13 years to deliver high-performance mobile architectures within predictable engineering timeframes."

      },

      phases: [

        {

          number: 1,

          title: 'Discovery & Mobile Strategy',

          duration: 'Duration: 2-3 Weeks Strategy',

          items: [

            'Analyze business objectives and target audience',

            'Research market trends and competitor apps',

            'Define core app functionality and MVP scope',

            'Prepare technical roadmap and release milestones',

            'Establish security and compliance requirements',

          ],

        },

        {

          number: 2,

          title: 'UI/UX Engineering',

          duration: 'Duration: 3-5 Weeks Execution',

          items: [

            'Create interactive low-fidelity wireframes',

            'Design high-fidelity mobile prototypes',

            'Develop a native-first design system',

            'Conduct usability testing with target users',

            'Document touch-gesture and navigation logic',

          ],

        },

        {

          number: 3,

          title: 'Native & Cross-Platform Dev',

          duration: 'Cycle: Bi-weekly Agile Sprints',

          items: [

            'Perform iOS/Android specific coding',

            'Integrate secure APIs and backend systems',

            'Implement biometric and secure authentication',

            'Conduct daily stand-ups for sprint alignment',

            'Maintain absolute code quality via Tech Lead',

          ],

        },

        {

          number: 4,

          title: 'Rigorous QA & Device Lab',

          duration: 'Cycle: Continuous Integration',

          items: [

            'Test on 50+ real iOS and Android devices',

            'Conduct performance and battery-drain audits',

            'Execute automated regression and security tests',

            'Simulate real-world connectivity scenarios',

            'Obtain stakeholder sign-off on release build',

          ],

        },

        {

          number: 5,

          title: 'Deployment & Support',

          duration: 'Phase: App Store Submission',

          items: [

            'Manage App Store and Google Play reviews',

            'Implement App Store Optimization (ASO)',

            'Monitor performance with real-time analytics',

            'Deploy regular security and OS updates',

            'Provide ongoing maintenance and feature scaling',

          ],

        },

      ]

    },

    TESTIMONIAL_DATA: {

      author: {

        name: "Asfarul Huda",

        role: "CEO & Founder",

        image: "/asfar.jpg",

      },

      quote: {

        prefix: "A well-structured development process is the foundation of successful software projects. By combining",

        accent: "clear planning",

        middle: ", an agile approach, and continuous early feedback, we ensure every product aligns with business goals. Our methodology minimizes risks and delivers",

        bold: "high-quality applications",

        suffix: "that exceed client expectations and drive business growth."

      }

    }

  },

  careers: {

    PAGE_DATA: {

      hero: {

        badge: "Career Infrastructure",

        titleMain: "Join the ",

        titleAccent: "Engineering",

        titleEnd: " Force.",

        description: "Scale your potential in a high-performance environment. We are building the next generation of technical solutions and looking for precision-driven minds.",

        ctaText: "Submit Resume"

      },

      vacancies: {

        badge: "Vacancies",

        title: "Open Positions",

        description: "Strategic roles across Design, Engineering, and Growth.",

        ctaLink: "/vacancies",

        ctaText: "Explore Roles"

      },

      advantages: {

        title: "The Crestcode Advantage",

        items: [

          { icon: "Zap", title: "High-Velocity Innovation", text: "Collaborate with a cross-functional team that prizes speed and creative logic." },

          { icon: "TrendingUp", title: "Vertical Growth", text: "Clear career paths with continuous learning and specialized advisory access." },

          { icon: "Clock", title: "Agile Flexibility", text: "Focus on outcomes over hours. Remote-first infrastructure for modern work." }

        ]

      },

      formSection: {

        title: "Submit Your Credentials",

        description: "Even if you don't see a perfect match, we're always looking for exceptional engineers and architects. Upload your resume to our talent database.",

        privacyBadge: "Data Privacy Compliant",

        privacyText: "Your data is encrypted and used only for recruitment purposes.",

        contactTitle: "Contact Information",

        contacts: [

          {

            icon: "Building",

            label: "Our Office",

            content: "2nd Floor, Plot No:248, Kannan St, Sree Balaji Nagar, Pallikaranai, Chennai - 600 100.",

          },

          {

            icon: "Phone",

            label: "Phone",

            content: "Mobile: 9629664974 | Landline: 044 4604 7460",

          },

          {

            icon: "Mail",

            label: "Email",

            content: "contact@crestcode.in"

          },

          {

            icon: "Calendar",

            label: "Business Hours",

            content: "Tuesday - Friday: 11:00 AM - 8:00 PM IST | Saturday: 09:00 AM - 5:00 PM IST"

          }

        ],

        labels: {

          name: "Full Name",

          email: "Email Address",

          resume: "Resume (PDF/DOC)",

          submit: "Submit",

          submitting: "Processing Engineering Profile..."

        }

      }

    }

  },

  internship: {

    CONTENT: {

      hero: {

        badge: "Career Acceleration Program",

        title: "From Student to Software Professional Start Here.",

        titleAccent: "Software Professional ",

        description: "Immerse yourself in real-world design and engineering challenges. Build user-centric solutions across global product experiences.",

        cta: "Get in Touch"

      },

      overview: {

        title: "Crestcode Internship",

        description: "Our program is designed for final-year students ready to bridge the gap between academic theory and industrial execution.",

        videoLabel: "Watch Intro"

      },

      experience: {

        title: "Program Experience",

        items: [

          { icon: "Terminal", title: "Real Projects", text: "Start with practical evaluate-ready tasks designed for analytical growth." },

          { icon: "Cpu", title: "Technical Scoping", text: "Successful execution unlocks deep-dive infrastructure challenges." },

          { icon: "Briefcase", title: "Vetting & Mentorship", text: "Regular sessions evaluate skills, mindset, and industrial solving." },

          { icon: "Target", title: "Business Context", text: "Gain exposure to the business side of product architecture." }

        ]

      },

      pipeline: {

        title: "Selection Infrastructure",

        steps: [

          { step: "01", label: "Apply", text: "Profile review for eligibility and alignment." },

          { step: "02", label: "Assess", text: "Execution of a real-world technical project." },

          { step: "03", label: "Interview", text: "Logic and communication evaluation." },

          { step: "04", label: "Onboard", text: "Official offer and program deployment." }

        ]

      },

      eligibility: {

        title: "Is Crestcode Right for You?",

        criteria: [

          { label: "B.Tech Graduates", text: "Final-year focus on practical industry experience." },

          { label: "MBA Professionals", text: "Roles aligned with technical or product domains." }

        ]

      },

      values: [

        { title: "Ownership", icon: "UserCheck" },

        { title: "User-Centric", icon: "Lightbulb" },

        { title: "Unified", icon: "Users2" },

        { title: "Impact", icon: "ArrowRight" }

      ]

    }

  },

  main_hackathon: {

    CONTENT: {

      hero: {

        badge: "Global Innovation Initiative",

        title: "Crestcode Hackathon",

        titleAccent: "Hackathon",

        description: "Bridging engineering and management minds. Removing uncertainty and launching products with speed, clarity, and technical confidence.",

        resultsBtn: {

          text: "View 2025 Results",

          link: "/hackathon-results"

        }

      },

      upcomingEvent: {

        badge: "Upcoming Event",

        title: "Innovation Summit 2026",

        description: "Join the brightest minds in tech to build groundbreaking solutions. Compete for top prizes, gain industry exposure, and push the boundaries of innovation."

      },

      timeline: [

        {

          event: "Registrations Open",

          date: "TBD"

        },

        {

          event: "Registrations Close",

          date: "TBD"

        },

        {

          event: "Hackathon Starts",

          date: "TBD"

        },

        {

          event: "Submission Deadline",

          date: "TBD"

        },

        {

          event: "Results Announcement",

          date: "TBD"

        }

      ],

      features: [

        {

          icon: "Code2",

          title: "Coding Challenges",

          desc: "Test algorithmic skills against the best."

        },

        {

          icon: "Rocket",

          title: "Startup Pitches",

          desc: "Present ideas to industry leaders and VCs."

        },

        {

          icon: "Users2",

          title: "Team Formation",

          desc: "Find perfect teammates for your project."

        }

      ],

      architecture: {

        title: "Program Architecture",

        cards: [

          {

            icon: "GraduationCap",

            title: "Eligibility",

            text: "Open to B.E/B.Tech & M.B.A. students. Cross-functional teams encouraged."

          },

          {

            icon: "LayoutGrid",

            title: "Structure",

            text: "Two annual cycles. EVAL framework across technology and business impact."

          },

          {

            icon: "Award",

            title: "Evaluation",

            text: "Criteria: Innovation, complexity, business impact, and presentation quality."

          }

        ]

      },

      updateSection: {

        imageSrc: "https://cdn.builder.io/api/v1/image/assets%2Fcd5381e9cb504b72a5e5022356fc91d2%2Ff372562860d74806a37eb69967aea20c",

        imageAlt: "Hackathon Update Infographic showing participation details and timing"

      }

    }

  },

  hackathon: {

    HACKATHON_DATA: {

      hero: {

        tag: "2025 Edition Wrap-up",

        title: { main: "Student's", highlight: "Hackathon", year: "2025" },

        description: "A 48-hour engineering sprint that brought together the brightest minds across India to build full-stack solutions. Innovate. Build. Compete. Results are officially finalized."

      },

      stats: {

        matrix: [

          { label: "Total Candidates", value: "59", icon: "Users", color: '#4F46E5' },

          { label: "Total Ideas submitted", value: "13", icon: "Lightbulb", color: "#0EA5E9" },

          { label: "Completed Prototypes", value: "05", icon: "Cpu", color: "#10B981" }

        ],

        summary: {

          totalResponses: "07",

          incomplete: "05",

          inDiscussion: "02"

        }

      },

      rewards: [

        { title: "Runner Up Team", prize: "Rs. 10,000/-", sub: "+ E-Certificates", icon: "Medal", highlighted: false },

        { title: "Winner Team", prize: "Rs. 15,000/-", sub: "+ Internship Opportunity", icon: "Trophy", highlighted: true },

        { title: "Other Honors", prize: "Top 5 Ideators", sub: "Top 10 Team Recognition", icon: "Award", highlighted: false }

      ],

      topIdeators: [

        { rank: "01", name: "Yoghesh R V", project: "AI Guardrails for Support (Shield)" },

        { rank: "02", name: "Lokeshwaran S", project: "Codebase Time Machine" },

        { rank: "03", name: "Anmol", project: "Supply Chain Forecasting (Logistics)" },

        { rank: "04", name: "Nisha Ravi", project: "Crop Disease Detection (Agri AI)" }

      ],

      scoring: [

        { label: "Successful Implementation", val: 50 },

        { label: "Technical Innovation", val: 20 },

        { label: "UX & System Design", val: 10 },

        { label: "Documentation Integrity", val: 10 },

        { label: "Idea Novelty", val: 10 }

      ],

      images: {

        bentoBanner: "https://api.builder.io/api/v1/image/assets/TEMP/c13355c58b27d3ee390ea5340079becbdbb1955b",

        bentoText: "YOU GOT THIS."

      }

    },

  },

  privacypolicy: {

    PRIVACY_DATA: {

      hero: {

        badge: "Privacy Policy",

        title: "CrestCode Privacy ",

        titleAccent: "Policy",

        lastUpdated: "January 12, 2026",

        description: "CrestCode is designed to help you organize your digital life while keeping your data private and secure."

      },

      sections: [

        {

          id: 1,

          title: "1. Information We Collect",

          intro: "CrestCode is designed to help you organize your digital life while keeping your data private and secure. We may collect:",

          icon: "Database",

          items: [

            {

              label: "Account Information",

              text: "Name, email address, and login credentials when you sign up.",

              icon: "User"

            },

            {

              label: "Usage Information",

              text: "How you interact with CrestCode (features used, time spent).",

              icon: "Eye"

            },

            {

              label: "Optional Data You Add",

              text: "Notes, reminders, bookmarks, files, or other content you choose to store in CrestCode.",

              icon: "FileText"

            }

          ]

        },

        {

          id: 2,

          title: "2. How We Use Your Information",

          intro: "We use your information to:",

          icon: "Users",

          bullets: [

            "Deliver and maintain our services to you",

            "Process transactions and send related information",

            "Send technical notices, updates, security alerts, and support messages",

            "Respond to your comments, questions, and requests"

          ]

        },

        {

          id: 3,

          title: "3. Data Storage & Security",

          intro: "All data is encrypted in transit (TLS) and at rest.\nSensitive information (e.g., passwords in Vault) is stored using industry-standard encryption and never shared with CrestCode staff.\nWe regularly review our security practices to protect against unauthorized access.",

          icon: "Lock"

        },

        {

          id: 4,

          title: "4. Sharing of Information",

          intro: "We do not sell or rent your personal information. We may share your information only in these limited circumstances:",

          icon: "UserCheck",

          items: [

            {

              label: "With your consent",

              text: "(e.g., integrations with third-party apps).",

              icon: "CheckCircle2"

            },

            {

              label: "For legal reasons",

              text: "(if required by law, regulation, or valid legal process).",

              icon: "AlertCircle"

            },

            {

              label: "Service providers",

              text: "that help us operate CrestCode (e.g., cloud hosting providers), under strict confidentiality and security obligations.",

              icon: "Server"

            }

          ]

        },

        {

          id: 5,

          title: "5. Your Rights",

          intro: "Depending on where you live, you may have right to:",

          icon: "ShieldCheck",

          bullets: [

            "Know and control personal data we collect",

            "Access and receive a copy of your personal data",

            "Request correction or deletion of your personal data",

            "Object to or restrict processing of your personal data"

          ],

          contact: "To exercise these rights, contact us at contact@cctps.com."

        },

        {

          id: 6,

          title: "6. Data Retention",

          intro: "We retain your information only as long as necessary to provide Service, comply with legal obligations, and resolve disputes. You can request deletion of your account and data at any time.",

          icon: "Clock"

        },

        {

          id: 7,

          title: "7. Children's Privacy",

          intro: "CrestCode is not intended for children under 13 (or the minimum age in your country). We do not knowingly collect data from children without parental consent.",

          icon: "Baby"

        },

        {

          id: 8,

          title: "8. Changes to This Policy",

          intro: "We may update this Privacy Policy from time to time. If changes are material, we will notify you by email or within the app before they take effect.",

          icon: "FileText"

        }

      ],

      contact: {

        title: "9. Contact Us",

        intro: "If you have questions or concerns about this Privacy Policy, please contact us at:",

        email: "contact@cctps.com",

        supportLabel: "CrestCode Support Team"

      }

    }

  },

  termsofservice: {

    TERMS_DATA: {

      hero: {

        badge: "Legal Infrastructure",

        title: "Terms & ",

        titleAccent: "Conditions.",

        effectiveDate: "January 1, 2025",

        description: "CrestCode Technologies Pvt Ltd ('CrestCode') provides high-performance technical consulting under the following governance protocols."

      },

      summary: [

        { icon: "ShieldAlert", label: "IP Ownership", val: "Client Retained" },

        { icon: "Scale", label: "Jurisdiction", val: "Chennai, India" },

        { icon: "Lock", label: "Confidentiality", val: "Mutual NDA" }

      ],

      sections: [

        {

          id: "1",

          title: "1. INTRODUCTION",

          paragraphs: [

            "Welcome to CrestCode Technologies Pvt Ltd (\"Company,\" \"we,\" \"us,\" or \"our\"). These Terms and Conditions (\"Terms\") govern your use of our services, including software development, consulting, and participation in hackathons and events organized by CrestCode Technologies Pvt Ltd.",

            "By engaging with our services or participating in our events, you (\"Client,\" \"Participant,\" \"you,\" or \"your\") agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services or participate in our events."

          ]

        },

        {

          id: "2",

          title: "2. COMPANY SERVICES",

          subsections: [

            {

              head: "2.1 Software Development Services",

              text: "CrestCode provides custom software development services including but not limited to:",

              list: [

                "Web application development",

                "Mobile application development",

                "Software architecture and design",

                "System integration services",

                "Technical consulting",

                "Project management"

              ]

            },

            {

              head: "2.2 Client Collaboration",

              text: "We work primarily with entrepreneurs, ideators, startups, and businesses looking to develop software solutions. Our services are tailored to transform ideas into functional software products."

            },

            {

              head: "2.3 Service Delivery",

              list: [

                "All services provided according to agreed specifications and timelines.",

                "We reserve the right to modify our service offerings at any time.",

                "Service availability is not guaranteed to be uninterrupted."

              ]

            }

          ]

        },

        {

          id: "3",

          title: "3. INTELLECTUAL PROPERTY RIGHTS",

          subsections: [

            {

              head: "3.1 Client Intellectual Property",

              notice: {

                type: "blue",

                label: "IMPORTANT:",

                text: "CrestCode Technologies Pvt Ltd does NOT claim ownership rights over ideas, concepts, business models, or intellectual property shared by clients during the course of our engagement."

              }

            },

            {

              head: "3.2 Developed Software",

              list: [

                "Custom software belongs to the client upon full payment.",

                "Pre-existing code, frameworks, or tools used by CrestCode remain our property.",

                "Third-party components are governed by their respective licenses."

              ]

            }

          ]

        },

        {

          id: "4",

          title: "4. HACKATHON TERMS",

          subsections: [

            {

              head: "4.1 Hackathon Participation",

              notice: {

                type: "red",

                label: "IMPORTANT NOTICE:",

                text: "Participants must understand that any submissions selected as winners or awarded prizes will have their intellectual property rights transferred to CrestCode Technologies Pvt Ltd."

              }

            },

            {

              head: "4.2 Eligibility",

              list: [

                "Participants must be at least 18 years old.",

                "Only graduates of the years 2025, 2026, and 2027 are eligible.",

                "CrestCode reserves the right to refuse participation to anyone."

              ]

            },

            {

              head: "4.3 IP Split",

              blocks: [

                { label: "Selected Projects:", text: "Awarded projects automatically become the intellectual property of CrestCode." },

                { label: "Non-Selected:", text: "Unawarded projects remain the property of the participants." }

              ]

            },

            {

              head: "4.4 Awards",

              notice: {

                type: "yellow",

                label: "Submission Requirement:",

                text: "Awards and certificates are only provided for complete, functional projects."

              }

            }

          ]

        },

        {

          id: "5",

          title: "5. PAYMENT TERMS",

          subsections: [

            {

              head: "5.1 Service Fees",

              list: [

                "Fees specified in individual service agreements.",

                "All fees are exclusive of applicable taxes.",

                "Late payments may incur additional charges."

              ]

            },

            {

              head: "5.2 Refund Policy",

              text: "Refund policies are outlined in individual agreements. Generally, work completed cannot be refunded."

            }

          ]

        },

        {

          id: "6",

          title: "6. CONFIDENTIALITY",

          paragraphs: [

            "Both parties agree to maintain the confidentiality of proprietary information shared during engagement.",

            "CrestCode will not disclose client information to third parties without explicit written consent."

          ]

        },

        {

          id: "7",

          title: "7. LIMITATION OF LIABILITY",

          list: [

            "Services are provided 'as is' without warranties.",

            "Liability is limited to the amount paid for services.",

            "We are not liable for indirect or consequential damages."

          ]

        },

        {

          id: "8",

          title: "8. TERMINATION",

          paragraphs: [

            "Either party may terminate services with written notice as specified in agreements.",

            "Upon termination, outstanding payments become immediately due."

          ]

        },

        {

          id: "9",

          title: "9. DISPUTE RESOLUTION",

          paragraphs: [

            "Governing Law: Laws of India and the state of Tamil Nadu.",

            "Jurisdiction: All disputes must be resolved exclusively in the courts of Chennai, Tamil Nadu, India."

          ]

        },

        {

          id: "10",

          title: "10. GENERAL PROVISIONS",

          list: [

            "We reserve the right to modify these Terms at any time.",

            "If any provision is unenforceable, the remaining provisions remain in effect."

          ]

        },

        {

          id: "11",

          title: "11. ACCEPTANCE",

          paragraphs: [

            "By using our services or participating in our events, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions."

          ]

        }

      ],

      footer: {

        email: "contact@crestcode.in",

        location: "Chennai, India",

        acknowledgment: "By leveraging our technical infrastructure, you acknowledge receipt and acceptance of these Terms.",



      }

    }

  },

  team: {

    TEAM_CONTENT: {

      hero: {

        title: "About Us",

        description: "Crestcode is a product studio for founders who refuse to settle for \"Good Enough.\" We partner with entrepreneurs to remove uncertainty, work backwards from Customer Needs, and Launch Products with speed, clarity, and confidence.",

        bg: "#9BB4C2"

      },

      culture: {

        title: "Our Engineering Culture",

        description: "At Crestcode India, engineering is not just execution. It is ownership, precision, and long-term thinking. We build products the way world-class teams do: scalable foundations, clean architecture, and relentlessly improving systems.",

        image: "https://api.builder.io/api/v1/image/assets/TEMP/060552967d5df168b0541cd54d6f0d0a005c9cf4?width=1620",

        accordion: [

          {

            title: "Engineering With Intention",

            description: "We make thoughtful architectural and product decisions that ensure long-term scalability."

          },

          {

            title: "Quality at the Core",

            description: "Every engineer owns reliability, performance, and precision from build to deployment."

          },

          {

            title: "Clean Code Discipline",

            description: "We maintain clear, modular code supported by strong reviews and meaningful documentation."

          },

          {

            title: "Fast, Structured Delivery",

            description: "We move quickly through automation, defined processes, and a culture of constant improvement."

          }

        ]

      },

      copilot: {

        title: "A Technical Co-Pilot for Your Vision",

        subtitle: "No Developer Management, Clear Tech Decisions, Transparent Progress, A Team that Cares.",

        features: [

          {

            title: "Be the Founder, Not the Manager",

            description: "Focus on your mission, we handle the tech",

            icon: "User"

          },

          {

            title: "Make Smart Decisions",

            description: "Focus on your mission, we handle the tech.",

            icon: "Lightbulb"

          },

          {

            title: "Transparency at Every Step",

            description: "Focus on your mission while we keep the tech clear.",

            icon: "Eye"

          }

        ]

      },

      members: {

        title: "Team Members",

        ctaLabel: "Join Team",

        ctaHref: "/Careers",

        groupPhoto: "public/group_photo.jpeg",

        individual: [

          {

            name: "Mariya Fatima",

            role: "CEO",

            description: "Legal, IP & Patent Attorney",

            education: "PHD - VIT, B.Sc LLB - GNLU",

            image: "/mariya.jpeg"

          },

          {

            name: "Asfarul Huda",

            role: "Investor",

            description: "Ex-Amazon, Ex-PayPal, Ex-IBM",

            education: "MBA - Gtech (USA), B.Tech - IIIT-K",

            image: "https://api.builder.io/api/v1/image/assets/TEMP/6c4f12a7121525613ac83c26f8087f1f3c2f813e?width=506"

          },

          {

            name: "Fahad Siddiqui",

            role: "Advisor",

            description: "Researcher, Macro Systematic Investing",

            education: "B.Tech - IIT Mumbai, MBA - Oxford",

            image: "https://api.builder.io/api/v1/image/assets/TEMP/3b2f5098dc351c84d5fe995e6443225a11f1eecc?width=506"

          },

          {

            name: "Neyaz Ahmed",

            role: "Advisor",

            description: "Healthcare Regulations",

            education: "MD - ECFMG, MBBS - Karnataka University",

            image: "https://api.builder.io/api/v1/image/assets/TEMP/a7405292efe3cf2a4d8ae48c83ab7c8229304862?width=506"

          }

        ]

      },

      values: {

        title: "Our Core Values",

        description: "The values that guide us in everything we do",

        items: [

          { title: "Integrity", description: "Doing what's right, not what's easy.", icon: "Users" },

          { title: "Innovation", description: "Pushing boundaries, always.", icon: "Award" },

          { title: "Collaboration", description: "Working as one unified team.", icon: "Zap" },

          { title: "Passion", description: "We love what we do and it shows in our work,", icon: "Heart" },

          { title: "Excellence", description: "Setting and meeting the highest standards.", icon: "Target" },

          { title: "Technologies", description: "Leveraging cutting-edge tools and platforms.", icon: "Coffee" }

        ]

      },

      IndustriesSection: {

        header: {

          highlight: 'Industries',

          normalText: ' we help',

        },

        items: [

          {

            title: 'Healthcare',

            iconName: "Stethoscope",

            desc: 'We develop services, tools, and systems to provide patients and staff with up-to-date software.',

          },

          {

            title: 'Education',

            iconName: "GraduationCap",

            desc: 'E-learning solutions that make education flexible, engaging, and highly efficient.',

          },

          {

            title: 'Retail',

            iconName: "Store",

            desc: 'We build stronger connections with customers through web and mobile applications with superior shopping experience and 24/7 availability.',

          },

          {

            title: 'Manufacturing',

            iconName: "Factory",

            desc: 'Comprehensive software solutions for supply chain management, inventory management, warehouses, production monitoring, process automation, and more.',

          },

          {

            title: 'Professional Services',

            iconName: "Briefcase",

            desc: 'We develop CRM, management tools, billing products, document management systems, and more. Our solutions are built for professionals by professionals.',

          },

          {

            title: 'Telecoms',

            iconName: "Network",

            desc: 'We enhance global communication by building solutions for network management, customer experience, IoT, security, automation, and analytics.',

          },

          {

            title: 'Logistics & Transportation',

            iconName: "Truck",

            desc: 'Software for freight reservation, transportation management, and streamlined supply chain operations to keep goods and business moving.',

          },

          {

            title: 'Engineering & Construction',

            iconName: "HardHat",

            desc: 'From advanced BIM solutions and cost estimation tools to IoT integration, we lay the foundation for the construction industry.',

          },

          {

            title: 'Marketing & Advertising',

            iconName: "Target",

            desc: 'We build effective Client relationships with marketing automation tools that help optimize strategies, gather insights, and achieve brave goals.',

          },

        ],

      }

    }

  },

  vacancies: {

    VACANCIES_DATA: {

      hero: {

        title: "Open ",

        titleAccent: "Vacancies.",

        description: "Discover strategic roles designed for high-impact technical minds. Help us build the next generation of digital infrastructure.",

        cta: {

          text: "Join Talent Database",

          link: "/careers#upload-resume"

        }

      },

      jobs: [

        {

          id: "frontend-developer",

          title: "Frontend Developer",

          category: "Engineering",

          icon: "Layout",

          experience: "2-4 years",

          location: "Chennai / Remote",

          description: {

            overview: "Build responsive, accessible, and high-performance user interfaces for web products.",

            responsibilities: ["Develop UI using React", "Translate Figma to pixel-perfect code", "Ensure cross-browser integrity"],

            requirements: ["Strong JS/TypeScript", "React/Next.js expertise", "Responsive design mastery"]

          }

        },

        {

          id: "backend-developer",

          title: "Backend Developer",

          category: "Engineering",

          icon: "Terminal",

          experience: "2-5 years",

          location: "Chennai / Remote",

          description: {

            overview: "Build scalable, secure, and high-performance backend systems.",

            responsibilities: ["Develop robust APIs", "Database optimization", "Security orchestration"],

            requirements: ["Node.js / Python", "PostgreSQL / MongoDB", "Architecture logic"]

          }

        },

        {

          id: "uiux-designer",

          title: "UI/UX Designer",

          category: "Design",

          icon: "Code2",

          experience: "2-4 years",

          location: "Chennai / Remote",

          description: {

            overview: "Create intuitive and beautiful user experiences.",

            responsibilities: ["Figma prototyping", "User research", "Design system management"],

            requirements: ["Figma mastery", "Visual design logic", "Empathy-driven UX"]

          }

        }

      ],

      modal: {

        badge: "Role Specifications",

        ctaText: "Initiate Application"

      }

    }

  },

  generalfaq: {

    title: "General Questions",

    faqData: [

      {

        question: "What is Crestcode and what services do you offer?",

        answer: "Crestcode is a comprehensive software development company offering web development, mobile app development, AI/ML solutions, and software development services. We specialize in creating custom digital solutions tailored to your business needs."

      },

      {

        question: "How long has Crestcode been in business?",

        answer: "Crestcode has been providing software development services for several years, building a strong reputation for delivering high-quality, innovative solutions to clients across various industries."

      },

      {

        question: "What industries does Crestcode serve?",

        answer: "We serve clients across multiple industries including healthcare, finance, e-commerce, education, entertainment, and technology startups. Our diverse experience allows us to understand unique industry challenges."

      },

      {

        question: "How do I get started with Crestcode?",

        answer: "Getting started is easy! Simply reach out through our contact form, schedule a consultation call, or email us directly. Our team will discuss your requirements and provide a tailored solution proposal."

      },

      {

        question: "What is your typical project timeline?",

        answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months or more. We provide detailed timelines during the planning phase."

      },

      {

        question: "Do you provide ongoing support and maintenance?",

        answer: "Yes, we offer comprehensive support and maintenance packages to ensure your applications run smoothly. This includes bug fixes, updates, security patches, and feature enhancements."

      }

    ]

  },

  aifaq: {

    title: "AI & Machine Learning Services",

    faqData: [

      {

        question: "What AI and ML services do you offer?",

        answer: "We provide comprehensive AI/ML services including machine learning model development, natural language processing, computer vision, predictive analytics, chatbot development, recommendation systems, and AI-powered automation solutions."

      },

      {

        question: "What machine learning frameworks do you work with?",

        answer: "We work with TensorFlow, PyTorch, Scikit-learn, Keras, and other popular frameworks. For deep learning, we use CNNs, RNNs, Transformers, and custom architectures. We also work with cloud AI services like AWS SageMaker, Google AI Platform, and Azure ML."

      },

      {

        question: "Can you develop custom AI models for my business?",

        answer: "Yes, we specialize in developing custom AI models tailored to your specific business needs. We handle everything from data preparation and model training to deployment and monitoring, ensuring the solution fits your unique requirements."

      },

      {

        question: "What types of data can your AI models work with?",

        answer: "Our AI models can work with various data types including text, images, audio, video, structured data, and time-series data. We have experience with natural language, computer vision, and predictive modeling across different data formats."

      },

      {

        question: "Do you provide AI model training and optimization?",

        answer: "Absolutely! We handle the entire ML pipeline including data preprocessing, feature engineering, model training, hyperparameter tuning, performance optimization, and model deployment. We ensure your models are accurate and efficient."

      },

      {

        question: "Can you integrate AI into existing applications?",

        answer: "Yes, we specialize in integrating AI capabilities into existing applications and systems. This includes adding predictive features, natural language processing, computer vision, recommendation engines, and automation to enhance your current software."

      },

      {

        question: "What about AI ethics and responsible AI?",

        answer: "We prioritize ethical AI development, ensuring fairness, transparency, and accountability in our models. We implement bias detection, explainability features, and follow responsible AI guidelines to ensure trustworthy AI solutions."

      },

      {

        question: "Do you provide ongoing AI model maintenance?",

        answer: "Yes, we offer continuous monitoring and maintenance of AI models including performance tracking, retraining with new data, model versioning, and updates to ensure your AI solutions remain accurate and relevant over time."

      },

      {

        question: "What industries can benefit from your AI services?",

        answer: "We serve various industries including healthcare (medical imaging, diagnosis), finance (fraud detection, risk assessment), e-commerce (recommendations, demand forecasting), manufacturing (predictive maintenance), and more."

      }

    ]

  },

  hackathonfaq: {

    title: "Hackathon FAQ",

    faqData: [

      {

        question: "What is the Student's Hackathon 2025?",

        answer: "The Student's Hackathon 2025 is a 48-hour virtual hackathon inviting Engineering and MCA students from across India to build innovative, full-stack tech solutions. It's a platform to showcase technical skills, teamwork, and creativity."

      },

      {

        question: "Who can participate in the hackathon?",

        answer: "Engineering and MCA students from across India can participate. You can register individually or as a 2-member team. The hackathon is open to students with varying levels of programming experience."

      },

      {

        question: "How do I register for the hackathon?",

        answer: "Registration details will be announced on the website. You'll need to register individually or as a team, submit your initial idea for extra points, and complete the registration form with your academic details."

      },

      {

        question: "What are the hackathon challenges?",

        answer: "The hackathon features multiple challenges including building a custom Android calendar app with multi-calendar integration, and stock returns prediction using CNNs. Participants can choose challenges based on their interests and skills."

      },

      {

        question: "What technologies can I use for my project?",

        answer: "You can use various technologies including React Native/Flutter for mobile, Fast API/Flask/Django/NodeJS for backend, PostgreSQL/MongoDB/MySQL for databases, or any technology of your choice that best solves the problem."

      },

      {

        question: "What are the evaluation criteria?",

        answer: "Projects are evaluated based on: Successful Implementation (50%), Innovation (20%), User Experience & Design (10%), Documentation (10%), and New Ideas Submission (10%)."

      },

      {

        question: "What are the prizes and rewards?",

        answer: "Winner Team receives Rs.15,000/- + E-Certificates + Internship Opportunity. Runner Up Team gets Rs.10,000/- + E-Certificates. Top 5 Ideators, Top 10 Teams, and Project Completion participants also receive E-Certificates."

      },

      {

        question: "What do I need to submit?",

        answer: "You'll need to submit your GitHub repository link, live demo link (Vercel/Netlify), project description, and documentation. Make sure your code is well-documented and your demo is functional."

      },

      {

        question: "How will the hackathon be conducted?",

        answer: "The hackathon is conducted virtually over 48 hours. You'll work remotely with your team, participate in mentorship sessions, and submit your project before the deadline. Final presentations will be conducted online."

      },

      {

        question: "Will there be mentorship during the hackathon?",

        answer: "Yes, mentorship sessions will be conducted during the hackathon where experienced developers will provide guidance, answer questions, and help teams overcome technical challenges."

      }

    ]

  },

  mobilefaq: {

    title: "Mobile App Development Services",

    faqData: [

      {

        question: "What mobile app development services do you provide?",

        answer: "We offer native iOS and Android app development, cross-platform development using React Native and Flutter, app design and UI/UX, app maintenance, and app store optimization and submission services."

      },

      {

        question: "Should I choose native or cross-platform development?",

        answer: "Native apps offer better performance and platform-specific features, while cross-platform apps are more cost-effective and faster to develop. We recommend based on your budget, timeline, target audience, and required features."

      },

      {

        question: "What platforms do you develop for?",

        answer: "We develop for iOS (iPhone/iPad) using Swift and Objective-C, Android using Kotlin and Java, and cross-platform solutions using React Native, Flutter, and Xamarin for both platforms simultaneously."

      },

      {

        question: "How long does it take to develop a mobile app?",

        answer: "Simple apps take 2-3 months, moderately complex apps 4-6 months, and enterprise-level apps 6-12 months or more. Timeline depends on features, complexity, design requirements, and testing needs."

      },

      {

        question: "Can you help with app store submission?",

        answer: "Yes, we handle the entire app store submission process including creating developer accounts, preparing app metadata, designing app icons and screenshots, following guidelines, and managing the review process for both Apple App Store and Google Play Store."

      },

      {

        question: "Do you provide app maintenance and updates?",

        answer: "Absolutely! We offer ongoing maintenance packages including bug fixes, performance optimization, OS compatibility updates, security patches, feature enhancements, and app store policy compliance updates."

      },

      {

        question: "What about app security and data protection?",

        answer: "We implement industry-standard security practices including data encryption, secure authentication, API security, code obfuscation, and compliance with data protection regulations like GDPR and CCPA."

      },

      {

        question: "Can you integrate mobile apps with existing systems?",

        answer: "Yes, we specialize in integrating mobile apps with existing backend systems, databases, APIs, third-party services, and enterprise systems to ensure seamless data flow and functionality across your entire tech stack."

      },

      {

        question: "Do you provide app analytics and monitoring?",

        answer: "We integrate analytics tools like Firebase Analytics, Google Analytics for Mobile, or custom analytics solutions to track user behavior, app performance, crashes, and key metrics to help you make data-driven decisions."

      }

    ]



  },

  sdefaq: {

    title: "Software Development Services",

    faqData: [

      {

        question: "What software development services do you offer?",

        answer: "We offer end-to-end software development including custom application development, enterprise software solutions, SaaS platforms, API development, database design, system integration, and software consulting services."

      },

      {

        question: "What programming languages and technologies do you use?",

        answer: "We work with a wide range of technologies including JavaScript/TypeScript, Python, Java, C#, Ruby, Go, PHP, and more. We choose the best technology stack based on your project requirements, scalability needs, and team expertise."

      },

      {

        question: "Can you develop enterprise-level software?",

        answer: "Yes, we have extensive experience building enterprise-grade software with robust architecture, security features, scalability, performance optimization, and integration capabilities. We follow enterprise development best practices and standards."

      },

      {

        question: "Do you follow agile development methodologies?",

        answer: "Absolutely! We follow agile methodologies including Scrum and Kanban, with iterative development, regular sprints, continuous integration/deployment, and flexible project management to ensure rapid delivery and adaptability to changing requirements."

      },

      {

        question: "What about software testing and quality assurance?",

        answer: "We implement comprehensive testing strategies including unit testing, integration testing, end-to-end testing, performance testing, security testing, and user acceptance testing. We use automated testing tools and manual testing to ensure high-quality software."

      },

      {

        question: "Can you help with software architecture design?",

        answer: "Yes, we specialize in software architecture design including microservices, monolithic applications, serverless architectures, cloud-native solutions, and scalable system design. We ensure your software is built on a solid foundation."

      },

      {

        question: "Do you provide DevOps and deployment services?",

        answer: "We offer complete DevOps services including CI/CD pipeline setup, containerization with Docker, orchestration with Kubernetes, cloud deployment on AWS/Azure/GCP, infrastructure as code, and monitoring solutions."

      },

      {

        question: "Can you integrate with existing systems and databases?",

        answer: "Yes, we have extensive experience integrating new software with existing systems, legacy applications, databases, ERPs, CRMs, and third-party services. We ensure seamless data flow and functionality across your entire ecosystem."

      },

      {

        question: "What about software security and compliance?",

        answer: "We prioritize security throughout the development process, implementing secure coding practices, vulnerability assessments, penetration testing, data encryption, and compliance with regulations like GDPR, HIPAA, and industry-specific standards."

      }

    ]

  },

  webfaq: {

    title: "Web Development Services",

    faqData: [

      {

        question: "What web development services do you offer?",

        answer: "We offer comprehensive web development services including frontend development (React, Vue, Angular), backend development (Node.js, Python, Java), full-stack applications, e-commerce platforms, and custom web applications."

      },

      {

        question: "What technologies do you use for web development?",

        answer: "We work with modern technologies including React, Next.js, Vue.js, Angular for frontend; Node.js, Express, Python Django, Ruby on Rails for backend; and databases like PostgreSQL, MongoDB, MySQL. We choose the best tech stack based on your project requirements."

      },

      {

        question: "Can you help with existing website redesign?",

        answer: "Absolutely! We specialize in website redesigns, improving user experience, modernizing outdated code, enhancing performance, and adding new features to existing websites while maintaining SEO and functionality."

      },

      {

        question: "Do you build responsive and mobile-friendly websites?",

        answer: "Yes, all our websites are built with a mobile-first approach, ensuring they work perfectly across all devices - desktops, tablets, and smartphones. We use responsive design principles and thorough testing."

      },

      {

        question: "What about SEO optimization?",

        answer: "We implement SEO best practices from the ground up, including semantic HTML, proper meta tags, site speed optimization, structured data, and mobile-friendly design. We also offer ongoing SEO services."

      },

      {

        question: "Can you integrate third-party APIs and services?",

        answer: "Yes, we have extensive experience integrating various APIs including payment gateways, social media platforms, CRM systems, analytics tools, and custom APIs. We ensure seamless data flow and functionality."

      },

      {

        question: "What's the cost of a web development project?",

        answer: "Costs vary based on complexity, features, and timeline. Simple websites start from a few thousand dollars, while complex enterprise applications can cost significantly more. We provide detailed quotes after understanding your requirements."

      },

      {

        question: "Do you provide hosting and deployment services?",

        answer: "Yes, we assist with hosting setup, domain configuration, SSL certificates, and deployment to platforms like AWS, Google Cloud, Vercel, Netlify, and traditional hosting providers."

      }

    ]

  },

  founders: {
    PAGE_DATA: {
      hero: {
        badge: "STUDENT FOUNDER STUDIO"
      }
    }
  }



}



