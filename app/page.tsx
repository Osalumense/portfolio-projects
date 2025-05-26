"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Project data
const projects = [
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
    image: "https://github.com/user-attachments/assets/57c3903c-761a-4396-aeab-cc16111cd937",
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
    image: "https://github.com/user-attachments/assets/fa882a40-b875-4bb3-a926-de26cd0f6665",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "https://github.com/user-attachments/assets/8bfa55c9-6287-48fd-81e9-6d44c3be28c4",
  },
  {
    id: 5,
    title: "FarmPropa",
    url: "#",
    category: "AgriTech",
    role: "Backend Developer",
    description:
      "Smart advisory platform for farmers in Nigeria. Built full backend, user flows, and an intelligent recommendation engine.",
    tech: ["Node.js", "TypeScript", "Sequelize", "AWS"],
    status: "mobile",
    image: "https://github.com/user-attachments/assets/039a1d01-be28-4ca7-85ad-da6708072252",
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
    image: "https://github.com/user-attachments/assets/010408c4-f9a8-4de3-8f71-d570661eb0fc",
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
    image: "https://github.com/user-attachments/assets/9155e989-113f-441b-8219-841442854240",
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
    image: "https://github.com/user-attachments/assets/7eba9b41-95e5-4791-b347-291fd71e1118",
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
    image: "https://github.com/user-attachments/assets/f7229b21-1594-415e-983e-dfdf8c698e89",
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
    image: "https://github.com/user-attachments/assets/f662d005-f67a-42b3-9028-5377648ebca7",
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
    image: "https://github.com/user-attachments/assets/c15468a5-eb8e-49ef-a784-5963f615b92a",
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
  },
]

const skills = [
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "CI/CD",
  "TypeScript",
  "MySQL",
  "MongoDB",
  "React",
  "Next.js",
  "PHP",
  "Python",
  "Kubernetes",
  "Microservices",
]

const categories = [
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
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeFilter, setActiveFilter] = useState("All")
  const [isVisible, setIsVisible] = useState({})

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

  const filterProjects = (category) => {
    setActiveFilter(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category))
    }
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleEmailClick = () => {
    window.location.href =
      "mailto:akugbestephen3@gmail.com?subject=Let's discuss a project&body=Hi Akugbe,%0D%0A%0D%0AI'd like to discuss a potential project with you.%0D%0A%0D%0ABest regards,"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Stephen Akugbe
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Backend Developer / Fullstack Engineer
            </h2>
          </div>

          <div className="animate-fade-in-up delay-300 mb-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-3xl mx-auto">
              I build robust backend systems and high-performance APIs powering apps used by thousands, from e-commerce
              platforms to financial literacy tools, logistics, and agritech solutions.
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              Specializing in Laravel, Node.js, TypeScript, AWS, PostgreSQL, and scalable architectures.
            </p>
          </div>

          <div className="animate-fade-in-up delay-500">
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="about-title"
            data-animate
            className={`mb-12 transition-all duration-1000 ${
              isVisible["about-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I'm a software developer who turns product ideas into scalable platforms. Whether designing core
              architectures, building APIs, integrating payment systems, or setting up cloud infrastructure, I make
              digital systems reliable, secure, and ready to scale.
            </p>
          </div>

          {/* Skills Cloud */}
          <div
            id="skills-cloud"
            data-animate
            className={`transition-all duration-1000 delay-300 ${
              isVisible["skills-cloud"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  className={`bg-gradient-to-r from-blue-600/20 to-teal-600/20 text-white border-blue-400/30 px-4 py-2 text-sm font-medium hover:scale-110 transition-transform duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of applications I've built, from e-commerce platforms to fintech solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => filterProjects(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 ${
                  activeFilter === category ? "bg-blue-600 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
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
                            ? "bg-green-500 text-white"
                            : project.status === "mobile"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-500 text-white"
                        }`}
                      >
                        {project.status === "live" ? "Live" : project.status === "mobile" ? "Mobile App" : "Offline"}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-blue-400 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-gray-400 text-gray-300">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{project.category}</span>
                    {project.url !== "#" && (
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-300 transition-colors" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Something</h2>
            <p className="text-gray-400 text-lg mb-8">
              Ready to turn your ideas into reality? Let's discuss your next project.
            </p>

            {/* Email CTA */}
            <Button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 mb-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me an Email
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/akugbe-stephen"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              title="Connect on LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-white group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://github.com/Osalumense"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              title="View GitHub Profile"
            >
              <Github className="h-6 w-6 text-white group-hover:text-gray-300 transition-colors" />
            </a>
            <a
              href="https://dev.to/Osalumense"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              title="Read my technical articles on Dev.to"
            >
              <FileText className="h-6 w-6 text-white group-hover:text-green-400 transition-colors" />
            </a>
          </div>

          {/* Social Links Description */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-white">LinkedIn:</span> Professional networking and career updates
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-white">GitHub:</span> Open source contributions and code repositories
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium text-white">Dev.to:</span> Technical articles and insights I publish from
              time to time
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  {selectedProject.title}
                  {selectedProject.url !== "#" && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
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
                    <h3 className="text-lg font-semibold text-white mb-2">My Role</h3>
                    <p className="text-gray-300">{selectedProject.role}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Category</h3>
                    <Badge className="bg-blue-600 text-white">{selectedProject.category}</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">What I Built</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-400 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
