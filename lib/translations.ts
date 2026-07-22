import { Translations } from "./types"

export const translations: Record<"en" | "fr", Translations> = {
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      title: "Stephen Akugbe",
      subtitle: "Product Engineer",
      description1:
        "I design and ship thoughtful digital products, from user workflows and interfaces to scalable APIs, AI capabilities, and the infrastructure that keeps them running.",
      description2:
        "I combine product thinking with systems engineering, data, multi-model AI, and the delivery practices that help software improve over time.",
      learnMore: "Learn More About Me",
    },
    about: {
      title: "About Me",
      description:
        "I'm a product engineer who turns complex ideas into reliable, useful software. I work across product thinking, user workflows, frontend experiences, backend systems, data, and deployment, taking products from an early concept to something people can genuinely use and teams can confidently grow. My work is grounded in continuity: understanding the problem, designing the right system, shipping a thoughtful first version, and improving it as real users, data, and operational needs reveal what matters next.",
      skillsTitle: "Product & Engineering Capabilities",
    },
    projects: {
      title: "Featured Projects",
      description: "A collection of products I have designed and shipped, from e-commerce platforms to AI-enabled tools",
      all: "All",
      role: "My Role",
      category: "Category",
      whatIBuilt: "What I Built",
      techStack: "Tech Stack",
      links: "Links",
    },
    contact: {
      title: "Let's Build Something",
      description: "Ready to turn your ideas into reality? Let's discuss your next project.",
      sendEmail: "Send Me an Email",
      linkedinDesc: "Connect on LinkedIn",
      githubDesc: "View GitHub Profile",
      devtoDesc: "Read my technical articles",
    },
    common: { live: "Live", mobile: "Mobile App", offline: "Offline" },
    skillCategories: {
      product: "Product Engineering",
      systems: "Systems & APIs",
      dataai: "Data & AI Engineering",
      llms: "LLM Platforms & APIs",
      reliability: "Delivery, Platform & Reliability",
    },
    categories: {
      all: "All", ecommerce: "E-commerce", agritech: "AgriTech", logistics: "Logistics", edtech: "EdTech",
      social: "Social Platform", ai: "AI Platform", gaming: "Gaming", corporate: "Corporate",
      productivity: "Productivity", saas: "SaaS",
    },
    roles: { fullstack: "Fullstack Developer", backend: "Backend Developer", frontend: "Frontend Developer" },
  },
  fr: {
    nav: { about: "À propos", projects: "Projets", contact: "Contact" },
    hero: {
      title: "Stephen Akugbe",
      subtitle: "Ingénieur produit",
      description1:
        "Je conçois et livre des produits numériques réfléchis, des parcours utilisateur et interfaces aux API évolutives, aux capacités d’IA et aux infrastructures qui les font fonctionner.",
      description2:
        "J’allie vision produit, ingénierie des systèmes, données, IA multi-modèles et pratiques de livraison qui permettent aux logiciels de s’améliorer dans le temps.",
      learnMore: "En savoir plus sur moi",
    },
    about: {
      title: "À propos de moi",
      description:
        "Je suis un ingénieur produit qui transforme des idées complexes en logiciels fiables et utiles. Je travaille sur la réflexion produit, les parcours utilisateur, les expériences frontend, les systèmes backend, les données et le déploiement, afin de faire passer un produit d’une première idée à une solution que les utilisateurs peuvent réellement adopter et que les équipes peuvent faire évoluer en confiance. Mon travail repose sur la continuité : comprendre le problème, concevoir le bon système, livrer une première version réfléchie, puis l’améliorer selon les usages, les données et les besoins opérationnels.",
      skillsTitle: "Capacités produit et ingénierie",
    },
    projects: {
      title: "Projets en vedette",
      description: "Une collection de produits que j’ai conçus et livrés, des plateformes e-commerce aux outils enrichis par l’IA",
      all: "Tous",
      role: "Mon rôle",
      category: "Catégorie",
      whatIBuilt: "Ce que j’ai construit",
      techStack: "Stack technique",
      links: "Liens",
    },
    contact: {
      title: "Construisons ensemble",
      description: "Prêt à transformer vos idées en réalité ? Discutons de votre prochain projet.",
      sendEmail: "Envoyez-moi un e-mail",
      linkedinDesc: "Se connecter sur LinkedIn",
      githubDesc: "Voir mon profil GitHub",
      devtoDesc: "Lire mes articles techniques",
    },
    common: { live: "En ligne", mobile: "Application mobile", offline: "Hors ligne" },
    skillCategories: {
      product: "Ingénierie produit",
      systems: "Systèmes et API",
      dataai: "Données et ingénierie IA",
      llms: "Plateformes et API LLM",
      reliability: "Livraison, plateforme et fiabilité",
    },
    categories: {
      all: "Tous", ecommerce: "E-commerce", agritech: "AgriTech", logistics: "Logistique", edtech: "EdTech",
      social: "Plateforme sociale", ai: "Plateforme IA", gaming: "Jeux", corporate: "Entreprise",
      productivity: "Productivité", saas: "SaaS",
    },
    roles: { fullstack: "Développeur fullstack", backend: "Développeur backend", frontend: "Développeur frontend" },
  },
}
