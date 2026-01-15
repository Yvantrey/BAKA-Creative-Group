"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Email Marketing",
    category: "Email Marketing",
    role: "Graphic Designer",
    description:
      "Professional email marketing designs for various clients including real estate, beauty brands, photography, and jewelry businesses.",
    image: "/images/emailmarketing.jpg",
  },
  {
    id: 2,
    title: "Sherrie Silver Foundation",
    category: "Content Production",
    role: "Content Producer & Graphic Designer",
    description:
      "The Sherrie Silver Foundation empowers young people in Rwanda and across Africa by providing them with the space, skills, resources, and support they need to build bright futures.",
    image: "/images/silvergala.jpg",
  },
  {
    id: 3,
    title: "Designs",
    category: "Graphic Design",
    role: "Graphic Designer",
    description:
      "A comprehensive collection of graphic design work showcasing various projects including social media posts, promotional materials, and brand designs for multiple clients.",
    image: "/images/designs (1).jpg",
  },
  {
    id: 4,
    title: "Panera Bakery",
    category: "Graphic Design",
    role: "Graphic Designer",
    description:
      "A fast-casual bakery-café chain offering fresh-baked bread, sandwiches, soups, salads, and coffee across Kigali in Rwanda.",
    image: "/images/panera.jpg",
  },
  {
    id: 5,
    title: "AfriVintage",
    category: "Social Media",
    role: "Social Media Manager & Graphic Designer",
    description:
      "Afri Vintage aims to redefine global perceptions of Africa by showcasing the continent's rich culture, natural beauty, and deep-rooted values through high-quality, engaging content.",
    image: "/images/afrivintage.jpg",
  },
  {
    id: 6,
    title: "MealensAI",
    category: "Social Media",
    role: "Social Media Manager & Graphic Designer",
    description:
      "A smart cooking tool that simplifies recipes into one-shot meal preparation making cooking faster, easier, and more enjoyable for everyone.",
    image: "/images/mealensai.jpg",
  },
  {
    id: 7,
    title: "HealthEdu",
    category: "Social Media",
    role: "Social Media Manager & Graphic Designer",
    description:
      "HealthEdu is a digital learning platform that provides free, accessible, and high-quality health education to healthcare professionals and the public.",
    image: "/images/healthedu.jpg",
  },
]

const categories = ["All", "Social Media", "Graphic Design", "Content Production", "Email Marketing"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Work</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-border group-hover:border-primary/50 transition-colors">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium flex items-center gap-2">
                    <ExternalLink size={16} />
                    View Project
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={selectedProject.id === 7 ? "relative w-full overflow-y-auto max-h-[60vh]" : "relative aspect-video"}>
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill={selectedProject.id !== 7}
                  width={selectedProject.id === 7 ? 1000 : undefined}
                  height={selectedProject.id === 7 ? 2000 : undefined}
                  className={selectedProject.id === 7 ? "w-full h-auto rounded-t-2xl" : "object-cover rounded-t-2xl"}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X size={20} className="text-foreground" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary uppercase tracking-widest">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-1">{selectedProject.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{selectedProject.role}</p>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
