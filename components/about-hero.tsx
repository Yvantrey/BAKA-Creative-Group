"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-primary text-sm tracking-widest uppercase mb-4">About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
              <span className="text-foreground">Hello, I am </span>
              <span className="text-primary">Nelly Ornella Bakankunda</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate and creative social media manager and graphic designer, dedicated to helping brands and
              businesses build meaningful connections through powerful social media campaigns, engaging visuals, and
              compelling video content.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As the Founder & CEO of BAKA Creative Group, I bring over 2 years of experience as a freelancer in the
              realm of digital marketing. Based in Kigali, Rwanda, I work with clients globally to elevate their brand
              presence and drive real results.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="px-4 py-2 bg-card border border-border rounded-full">
                <span className="text-muted-foreground">French:</span> <span className="text-foreground">Fluent</span>
              </div>
              <div className="px-4 py-2 bg-card border border-border rounded-full">
                <span className="text-muted-foreground">English:</span> <span className="text-foreground">Fluent</span>
              </div>
              <div className="px-4 py-2 bg-card border border-border rounded-full">
                <span className="text-muted-foreground">Kinyarwanda:</span>{" "}
                <span className="text-foreground">Fluent</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-3xl" />
              <div className="relative w-80 h-96 md:w-96 md:h-[30rem] rounded-3xl overflow-hidden border border-primary/30">
                <Image
                  src="/images/af8a6456-402x.png"
                  alt="Nelly Ornella Bakankunda"
                  fill
                  className="object-contain object-bottom bg-gradient-to-b from-card to-background"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
