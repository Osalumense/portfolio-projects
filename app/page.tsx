"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, ExternalLink, Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LanguageSwitcher } from "@/components/language-switcher"
import { projects, skillCategories, categories } from "@/lib/data"
import { translations } from "@/lib/translations"
import { Project, Language } from "@/lib/types"
import { getProjectTranslation, getCategoryKey } from "@/lib/helpers"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeFilter, setActiveFilter] = useState("All")
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [language, setLanguage] = useState<Language>("en")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const t = translations[language]

  // Reset filter when language changes
  useEffect(() => {
    setActiveFilter(t.categories.all)
    setFilteredProjects(projects)
  }, [language, t.categories.all])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filterProjects = (category: string) => {
    setActiveFilter(category)
    if (category === "All" || category === "Tous") {
      setFilteredProjects(projects)
    } else {
      // Find the English category name to filter by
      const categoryKey = getCategoryKey(category)
      const englishCategory = categories.find((cat) => getCategoryKey(cat) === categoryKey) || category
      setFilteredProjects(projects.filter((project) => project.category === englishCategory))
    }
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleEmailClick = () => {
    window.location.href =
      "mailto:akugbestephen3@gmail.com?subject=Let's discuss a project&body=Hi Akugbe,%0D%0A%0D%0AI'd like to discuss a potential project with you.%0D%0A%0D%0ABest regards,"
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Stephen Akugbe
            </button>
            
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground hover:scale-105 transition-all relative group"
              >
                {t.nav.about}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground hover:scale-105 transition-all relative group"
              >
                {t.nav.projects}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground hover:scale-105 transition-all relative group"
              >
                {t.nav.contact}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg hover:bg-accent transition-all hover:scale-105 border border-border/40"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Elegant Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] dark:bg-blue-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-teal-500/[0.03] dark:bg-teal-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/[0.02] dark:bg-purple-500/[0.03] rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center z-10 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {t.hero.title}
              </h1>
            </div>
            <h2 className="text-2xl md:text-4xl text-muted-foreground font-light tracking-wide">
              {t.hero.subtitle}
            </h2>
          </div>

          <div className="animate-fade-in-up delay-300 mt-10 mb-12 space-y-4">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto font-light">
              {t.hero.description1}
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              {t.hero.description2}
            </p>
          </div>

          <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/25"
            >
              {t.hero.learnMore}
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="px-8 py-6 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-border/50"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.contact.sendEmail}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            id="about-title"
            data-animate
            className={`mb-16 text-center transition-all duration-1000 ${
              isVisible["about-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              {t.about.description}
            </p>
          </div>

          {/* Skills by Category */}
          <div
            id="skills-categories"
            data-animate
            className={`transition-all duration-1000 delay-300 ${
              isVisible["skills-categories"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">{t.about.skillsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={category.name}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                      {t.skillCategories[category.name as keyof typeof t.skillCategories]}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            id="projects-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["projects-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              {t.projects.description}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const categoryKey = getCategoryKey(category)
              const translatedCategory =
                t.categories[categoryKey as keyof typeof t.categories] || category
              const projectCount =
                category === "All" ? projects.length : projects.filter((p) => p.category === category).length
              const isActive = activeFilter === category || activeFilter === translatedCategory
              
              return (
                <Button
                  key={category}
                  onClick={() => filterProjects(translatedCategory)}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                      : "hover:bg-accent hover:scale-105"
                  }`}
                >
                  {translatedCategory}
                  <span className="ml-1.5 opacity-70">({projectCount})</span>
                </Button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={`projects-${language}`}>
            {filteredProjects.map((project, index) => {
              const translatedProject = getProjectTranslation(project, language)
              const categoryKey = getCategoryKey(project.category)
              const translatedCategory = t.categories[categoryKey as keyof typeof t.categories] || project.category
              
              return (
                <Card
                  key={`${project.id}-${language}`}
                  className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up overflow-hidden`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(translatedProject)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3">
                        <Badge
                          className={`${
                            project.status === "live"
                              ? "bg-green-500 text-white shadow-lg shadow-green-500/50"
                              : project.status === "mobile"
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                                : "bg-gray-500 text-white shadow-lg shadow-gray-500/50"
                          }`}
                        >
                          {t.common[project.status]}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {translatedProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-border/50">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs border-border/50">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-muted-foreground font-medium">{translatedCategory}</span>
                        {project.url !== "#" && (
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div
            id="contact-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["contact-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 font-light">{t.contact.description}</p>

            <Button
              onClick={handleEmailClick}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-10 py-6 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/25"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.contact.sendEmail}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://linkedin.com/in/akugbe-stephen"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title={t.contact.linkedinDesc}
            >
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative p-4 bg-accent rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-border/50">
                <Linkedin className="h-6 w-6" />
              </div>
            </a>
            <a
              href="https://github.com/Osalumense"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title={t.contact.githubDesc}
            >
              <div className="absolute inset-0 bg-gray-800 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative p-4 bg-accent rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 border border-border/50">
                <Github className="h-6 w-6" />
              </div>
            </a>
            <a
              href="https://dev.to/Osalumense"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title={t.contact.devtoDesc}
            >
              <div className="absolute inset-0 bg-green-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative p-4 bg-accent rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-border/50">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full shadow-xl hover:shadow-2xl shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-border/50">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  {selectedProject.title}
                  {selectedProject.url !== "#" && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-72 object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-muted-foreground">{t.projects.role}</h3>
                    <p className="text-lg">{selectedProject.role}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-muted-foreground">{t.projects.category}</h3>
                    <Badge className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                      {t.categories[getCategoryKey(selectedProject.category) as keyof typeof t.categories] || selectedProject.category}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{t.projects.whatIBuilt}</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{t.projects.techStack}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">{t.projects.links}</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-600 dark:text-blue-400 text-sm transition-all hover:scale-105"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Stephen Akugbe.{" "}
            {language === "en" ? "All rights reserved." : "Tous droits réservés."}
          </p>
        </div>
      </footer>
    </div>
  )
}
