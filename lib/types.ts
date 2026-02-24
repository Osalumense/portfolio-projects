export interface Project {
  id: number
  title: string
  url: string
  category: string
  role: string
  description: string
  tech: string[]
  status: "live" | "mobile" | "offline"
  image: string
  links?: { label: string; url: string }[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export type Language = "en" | "fr"

export interface Translations {
  nav: {
    about: string
    projects: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description1: string
    description2: string
    learnMore: string
  }
  about: {
    title: string
    description: string
    skillsTitle: string
  }
  projects: {
    title: string
    description: string
    all: string
    role: string
    category: string
    whatIBuilt: string
    techStack: string
    links: string
  }
  contact: {
    title: string
    description: string
    sendEmail: string
    linkedinDesc: string
    githubDesc: string
    devtoDesc: string
  }
  common: {
    live: string
    mobile: string
    offline: string
  }
  skillCategories: {
    backend: string
    frontend: string
    databases: string
    devops: string
  }
}
