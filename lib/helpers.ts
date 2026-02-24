import { Project, Language } from "./types"

export function getProjectTranslation(project: Project, language: Language) {
  if (language === "fr" && project.translations?.fr) {
    return {
      ...project,
      role: project.translations.fr.role,
      description: project.translations.fr.description,
      links: project.translations.fr.links || project.links,
    }
  }
  return project
}

export function getCategoryKey(category: string): string {
  const mapping: Record<string, string> = {
    "All": "all",
    "E-commerce": "ecommerce",
    "AgriTech": "agritech",
    "Logistics": "logistics",
    "EdTech": "edtech",
    "Social Platform": "social",
    "AI Platform": "ai",
    "Gaming": "gaming",
    "Corporate": "corporate",
    "Productivity": "productivity",
    "SaaS": "saas",
  }
  return mapping[category] || category.toLowerCase()
}
