"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, ExternalLink, Github, Linkedin, Mail, Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { projects, skillCategories, categories } from "@/lib/data"
import { translations } from "@/lib/translations"
import { Project, Language } from "@/lib/types"

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
      setFilteredProjects(projects.filter((project) => project.category.includes(category)))
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

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            SA
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {t.nav.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              title={language === "en" ? "Français" : "English"}
            >
              <Languages className="h-5 w-5" />
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">{t.hero.subtitle}</h2>
          </div>

          <div className="animate-fade-in-up delay-300 mb-8">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4 max-w-3xl mx-auto">
              {t.hero.description1}
            </p>
            <p className="text-muted-foreground text-sm md:text-base">{t.hero.description2}</p>
          </div>

          <div className="animate-fade-in-up delay-500">
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.learnMore}
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            id="about-title"
            data-animate
            className={`mb-12 text-center transition-all duration-1000 ${
              isVisible["about-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">{t.about.description}</p>
          </div>

          {/* Skills by Category */}
          <div
            id="skills-categories"
            data-animate
            className={`transition-all duration-1000 delay-300 ${
              isVisible["skills-categories"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-8">{t.about.skillsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={category.name}
                  className="bg-card hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">
                      {t.skillCategories[category.name as keyof typeof t.skillCategories]}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
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

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            id="projects-title"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["projects-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.projects.description}</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const projectCount = category === "All" ? projects.length : projects.filter((p) => p.category === category).length
              return (
                <Button
                  key={category}
                  onClick={() => filterProjects(category)}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={`rounded-full transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "hover:bg-accent"
                  }`}
                >
                  {category} ({projectCount})
                </Button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group bg-card hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant={project.status === "live" ? "default" : "secondary"}
                        className={`${
                          project.status === "live"
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : project.status === "mobile"
                              ? "bg-blue-500 text-white hover:bg-blue-600"
                              : "bg-gray-500 text-white hover:bg-gray-600"
                        }`}
                      >
                        {t.common[project.status]}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                      {project.url !== "#" && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div
            id="contact-title"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible["contact-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg mb-8">{t.contact.description}</p>

            <Button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 mb-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.contact.sendEmail}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/akugbe-stephen"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-accent rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              title={t.contact.linkedinDesc}
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Osalumense"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-accent rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
              title={t.contact.githubDesc}
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://dev.to/Osalumense"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-accent rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              title={t.contact.devtoDesc}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
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
                      className="text-blue-600 hover:text-blue-500"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.projects.role}</h3>
                    <p className="text-muted-foreground">{selectedProject.role}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.projects.category}</h3>
                    <Badge className="bg-blue-600 text-white hover:bg-blue-700">{selectedProject.category}</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">{t.projects.whatIBuilt}</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">{t.projects.techStack}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{t.projects.links}</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-600 dark:text-blue-400 text-sm transition-colors"
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
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Stephen Akugbe. {language === "en" ? "All rights reserved." : "Tous droits réservés."}</p>
        </div>
      </footer>
    </div>
  )
}
