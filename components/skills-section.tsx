"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const tools = [
  { name: "Photoshop", icon: "/images/tools/photoshop.svg" },
  { name: "After Effects", icon: "/images/tools/aftereffects.svg" },
  { name: "Figma", icon: "/images/tools/figma.svg" },
  { name: "Canva", icon: "/images/tools/canva.svg" },
  { name: "CapCut", icon: "/images/tools/capcut.svg" },
  { name: "Notion", icon: "/images/tools/notion.svg" },
  { name: "Slack", icon: "/images/tools/slack.svg" },
]

const skills = [
  "Social Media Strategy",
  "Content Creation",
  "Graphic Design",
  "Video Editing",
  "Brand Identity",
  "Email Marketing",
  "Community Management",
  "Copywriting",
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-6 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Tools</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">What I Do</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground hover:border-primary/50 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Tools I Use</h3>
            <div className="grid grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex flex-col items-center gap-2 p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 relative">
                    <Image src={tool.icon || "/placeholder.svg"} alt={tool.name} fill className="object-contain" />
                  </div>
                  <span className="text-xs text-muted-foreground text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
