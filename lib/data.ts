import { Project, SkillCategory } from "./types"

export const projects: Project[] = [
  {
    id: 1,
    title: "BestdealNaija",
    url: "https://bestdealnaija.com",
    category: "E-commerce",
    role: "Fullstack Developer",
    description:
      "Multi-vendor e-commerce platform. Built admin dashboard, user landing, and core modules like product, vendor, category management.",
    tech: ["React", "Flask", "Docker"],
    status: "live",
    image: "/images/bestdeal.png",
    translations: {
      fr: {
        role: "Développeur Fullstack",
        description:
          "Plateforme e-commerce multi-vendeurs. Construit le tableau de bord admin, la page d'accueil utilisateur et les modules principaux comme la gestion des produits, vendeurs et catégories.",
      },
    },
  },
  {
    id: 2,
    title: "AFJ Farms",
    url: "https://afjfarms.com",
    category: "AgriTech",
    role: "Fullstack Developer",
    description: "Agro-commerce platform. Designed dashboard, core logic, and integrated Flutterwave payments.",
    tech: ["Laravel", "Tailwind", "PHP"],
    status: "live",
    image: "/images/afjafarms.png",
    translations: {
      fr: {
        role: "Développeur Fullstack",
        description:
          "Plateforme agro-commerce. Conçu le tableau de bord, la logique de base et intégré les paiements Flutterwave.",
      },
    },
  },
  {
    id: 3,
    title: "GUO Transport",
    url: "https://guotransport.com",
    category: "Logistics",
    role: "Backend Developer",
    description: "Contributed to core architecture of Nigeria's top transport logistics website.",
    tech: ["Laravel", "TypeScript"],
    status: "live",
    image: "/images/guo.png",
    translations: {
      fr: {
        role: "Développeur Backend",
        description: "Contribué à l'architecture principale du site Web de logistique de transport leader au Nigeria.",
      },
    },
  },
  {
    id: 4,
    title: "Comdoity",
    url: "https://comdoity.com",
    category: "Social Platform",
    role: "Fullstack Developer",
    description:
      "Social platform for NGOs. Revamped homepage, redesigned admin dashboard, and integrated Stripe for donations.",
    tech: ["React", "Laravel"],
    status: "live",
    image: "/images/comdoity.png",
    translations: {
      fr: {
        role: "Développeur Fullstack",
        description:
          "Plateforme sociale pour les ONG. Refonte de la page d'accueil, refonte du tableau de bord admin et intégration de Stripe pour les dons.",
      },
    },
  },
  {
    id: 5,
    title: "FarmPropa",
    url: "#",
    category: "AgriTech",
    role: "Backend Developer",
    description:
      "Smart advisory platform for farmers in Nigeria. Built full backend, user flows, and an intelligent recommendation engine. Now with 1,000+ downloads on Google Play Store and featured in BusinessDay.",
    tech: ["Node.js", "TypeScript", "Sequelize", "AWS"],
    status: "mobile",
    image: "/images/farmpropa.png",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.farmpropa.saro&hl=en" },
      {
        label: "BusinessDay Feature",
        url: "https://businessday.ng/agriculture/article/saro-agrosciences-unveils-farmpropa-to-support-farmers-with-agronomic-guidance/",
      },
    ],
    translations: {
      fr: {
        role: "Développeur Backend",
        description:
          "Plateforme de conseil intelligente pour les agriculteurs au Nigeria. Construit tout le backend, les flux utilisateur et un moteur de recommandation intelligent. Plus de 1 000 téléchargements sur Google Play Store et présenté dans BusinessDay.",
        links: [
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.farmpropa.saro&hl=en" },
          {
            label: "Article BusinessDay",
            url: "https://businessday.ng/agriculture/article/saro-agrosciences-unveils-farmpropa-to-support-farmers-with-agronomic-guidance/",
          },
        ],
      },
    },
  },
  {
    id: 6,
    title: "MLD",
    url: "https://mld.ng",
    category: "Corporate",
    role: "Frontend Developer",
    description: "Built a clean landing page tailored to brand guidelines.",
    tech: ["React", "Tailwind"],
    status: "live",
    image: "/placeholder.svg?height=300&width=400",
    translations: {
      fr: {
        role: "Développeur Frontend",
        description: "Construit une page d'accueil épurée adaptée aux directives de la marque.",
      },
    },
  },
  {
    id: 7,
    title: "Simacombet",
    url: "https://simacombet.shop",
    category: "Gaming",
    role: "Fullstack Developer",
    description: "Betting platform. Redesigned homepage, implemented registration system, and integrated payments.",
    tech: ["PHP", "Bootstrap", "Redis", "Docker"],
    status: "live",
    image: "/images/sima.png",
    translations: {
      fr: {
        role: "Développeur Fullstack",
        description:
          "Plateforme de paris. Refonte de la page d'accueil, mise en place du système d'inscription et intégration des paiements.",
      },
    },
  },
  {
    id: 8,
    title: "Earlybean",
    url: "#",
    category: "EdTech",
    role: "Backend Developer",
    description:
      "Financial literacy app for kids. Built a complete course management backend, parental monitoring features, and enrollment logic.",
    tech: ["Laravel", "PostgreSQL", "Heroku"],
    status: "mobile",
    image: "/images/earlybean.png",
    translations: {
      fr: {
        role: "Développeur Backend",
        description:
          "Application de littératie financière pour les enfants. Construit un backend complet de gestion de cours, des fonctionnalités de surveillance parentale et la logique d'inscription.",
      },
    },
  },
  {
    id: 9,
    title: "MyJobPadi",
    url: "https://myjobpadi.com",
    category: "AI Platform",
    role: "Fullstack Developer",
    description: "AI-powered job matching platform. Built a waitlist page and am working on the full MVP.",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    status: "live",
    image: "/images/jobpadi.png",
    translations: {
      fr: {
        role: "Développeur Fullstack",
        description:
          "Plateforme de correspondance d'emplois alimentée par l'IA. Construit une page de liste d'attente et travaille sur le MVP complet.",
      },
    },
  },
  {
    id: 10,
    title: "Etuition App",
    url: "#",
    category: "EdTech",
    role: "Backend Developer",
    description: "Learning platform for Nigerian secondary school students. Built and deployed backend v1 & v2.",
    tech: ["Node.js", "MySQL", "Redis", "AWS"],
    status: "offline",
    image: "/images/etuition.png",
    translations: {
      fr: {
        role: "Développeur Backend",
        description:
          "Plateforme d'apprentissage pour les étudiants du secondaire nigérians. Construit et déployé le backend v1 & v2.",
      },
    },
  },
  {
    id: 11,
    title: "Zonely",
    url: "http://tryzonely.com",
    category: "Productivity",
    role: "Backend Developer",
    description:
      "Team productivity tool for scheduling across time zones. Developed all backend APIs with Google Calendar integration.",
    tech: ["Node.js", "MySQL", "AWS"],
    status: "offline",
    image: "/images/zonely.png",
    translations: {
      fr: {
        role: "Développeur Backend",
        description:
          "Outil de productivité d'équipe pour la planification à travers les fuseaux horaires. Développé toutes les API backend avec intégration Google Calendar.",
      },
    },
  },
  {
    id: 12,
    title: "Shiptonaija",
    url: "#",
    category: "Logistics",
    role: "Backend Developer",
    description:
      "Shipping logistics tool for delivering from US/China/UK to Nigeria. Architected and built entire backend.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "AWS"],
    status: "offline",
    image: "/images/shiptonaija.png",
    translations: {
      fr: {
        role: "Développeur Backend",
        description:
          "Outil de logistique d'expédition pour la livraison des États-Unis/Chine/Royaume-Uni vers le Nigeria. Architecturé et construit tout le backend.",
      },
    },
  },
  {
    id: 13,
    title: "Export to Wealth",
    url: "#",
    category: "Logistics",
    role: "Backend Developer",
    description: "Shipping app for exporting from Nigeria. Built backend APIs.",
    tech: ["Node.js", "TypeScript", "PostgreSQL"],
    status: "offline",
    image: "/placeholder.svg?height=300&width=400",
    translations: {
      fr: {
        role: "Développeur Backend",
        description: "Application d'expédition pour l'exportation depuis le Nigeria. Construit les API backend.",
      },
    },
  },
  {
    id: 14,
    title: "DensOps",
    url: "https://densops.com",
    category: "SaaS",
    role: "Fullstack Developer",
    description:
      "AI-powered local business lead generation and B2B prospecting platform. Finds, enriches, and exports business lists in seconds — including social handles, contact info, and verified business data. Built the frontend in Next.js, APIs in NestJS, and the AI/enrichment service in Python.",
    tech: ["Next.js", "NestJS", "Python"],
    status: "live",
    image: "/images/densops.png",
    translations: {
      fr: {
        role: "Développeur Fullstack",
        description:
          "Plateforme de génération de leads d'entreprises locales et de prospection B2B alimentée par l'IA. Trouve, enrichit et exporte des listes d'entreprises en quelques secondes — y compris les identifiants sociaux, les informations de contact et les données commerciales vérifiées. Construit le frontend en Next.js, les API en NestJS et le service IA/enrichissement en Python.",
      },
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "backend",
    skills: ["Node.js", "Laravel", "NestJS", "PHP", "Python"],
  },
  {
    name: "frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    name: "devops",
    skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Microservices"],
  },
]

export const categories = [
  "All",
  "E-commerce",
  "AgriTech",
  "Logistics",
  "EdTech",
  "Social Platform",
  "AI Platform",
  "Gaming",
  "Corporate",
  "Productivity",
  "SaaS",
]
