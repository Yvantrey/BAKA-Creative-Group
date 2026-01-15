"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Share2, MessageSquare, Calendar, Video, PenTool } from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Copywriting",
    description: "Compelling copy that resonates with your target audience",
  },
  {
    icon: Share2,
    title: "Social Media Planning",
    description: "Strategic content calendars and campaign management",
  },
  {
    icon: MessageSquare,
    title: "Community Management",
    description: "Building and nurturing engaged online communities",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visuals that tell your brand story",
  },
  {
    icon: Calendar,
    title: "Content Planning",
    description: "Data-driven content strategies for maximum impact",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video content that captures attention",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 px-6 bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I do</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
