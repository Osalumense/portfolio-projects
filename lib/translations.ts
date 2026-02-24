import { Translations } from "./types"

export const translations: Record<"en" | "fr", Translations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Stephen Akugbe",
      subtitle: "Backend Developer / Fullstack Engineer",
      description1:
        "I build robust backend systems and high-performance APIs powering apps used by thousands, from e-commerce platforms to financial literacy tools, logistics, and agritech solutions.",
      description2: "Specializing in Laravel, Node.js, TypeScript, AWS, PostgreSQL, and scalable architectures.",
      learnMore: "Learn More About Me",
    },
    about: {
      title: "About Me",
      description:
        "I'm a software developer who turns product ideas into scalable platforms. Whether designing core architectures, building APIs, integrating payment systems, or setting up cloud infrastructure, I make digital systems reliable, secure, and ready to scale.",
      skillsTitle: "Technical Skills",
    },
    projects: {
      title: "Featured Projects",
      description: "A collection of applications I've built, from e-commerce platforms to fintech solutions",
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
    common: {
      live: "Live",
      mobile: "Mobile App",
      offline: "Offline",
    },
    skillCategories: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Databases",
      devops: "DevOps & Cloud",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      title: "Stephen Akugbe",
      subtitle: "Développeur Backend / Ingénieur Fullstack",
      description1:
        "Je construis des systèmes backend robustes et des API haute performance alimentant des applications utilisées par des milliers de personnes, des plateformes e-commerce aux outils de littératie financière, logistique et solutions agritech.",
      description2: "Spécialisé en Laravel, Node.js, TypeScript, AWS, PostgreSQL et architectures évolutives.",
      learnMore: "En savoir plus sur moi",
    },
    about: {
      title: "À propos de moi",
      description:
        "Je suis un développeur logiciel qui transforme les idées de produits en plateformes évolutives. Que ce soit pour concevoir des architectures de base, créer des API, intégrer des systèmes de paiement ou configurer une infrastructure cloud, je rends les systèmes numériques fiables, sécurisés et prêts à évoluer.",
      skillsTitle: "Compétences techniques",
    },
    projects: {
      title: "Projets en vedette",
      description: "Une collection d'applications que j'ai construites, des plateformes e-commerce aux solutions fintech",
      all: "Tous",
      role: "Mon rôle",
      category: "Catégorie",
      whatIBuilt: "Ce que j'ai construit",
      techStack: "Stack technique",
      links: "Liens",
    },
    contact: {
      title: "Construisons ensemble",
      description: "Prêt à transformer vos idées en réalité ? Discutons de votre prochain projet.",
      sendEmail: "Envoyez-moi un email",
      linkedinDesc: "Se connecter sur LinkedIn",
      githubDesc: "Voir mon profil GitHub",
      devtoDesc: "Lire mes articles techniques",
    },
    common: {
      live: "En ligne",
      mobile: "Application mobile",
      offline: "Hors ligne",
    },
    skillCategories: {
      backend: "Backend",
      frontend: "Frontend",
      databases: "Bases de données",
      devops: "DevOps & Cloud",
    },
  },
}
