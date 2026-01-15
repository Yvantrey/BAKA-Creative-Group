"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Founder & CEO, BAKA Creative Group</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-balance">
              <span className="text-foreground">I Help Brands</span>
              <br />
              <span className="text-primary">Grow & Connect</span>
              <br />
              <span className="text-foreground">Digitally</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Digital Marketer & Graphic Designer crafting visual stories that connect brands with their audiences
              through powerful social media campaigns and compelling content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-primary/30 text-foreground rounded-full font-medium hover:bg-primary/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl scale-110" />
              <div className="relative w-72 h-80 md:w-96 md:h-[28rem]">
                <Image
                  src="/images/af8a6456-402x.png"
                  alt="Nelly Ornella Bakankunda"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-8"
        >
          <Link
            href="#services"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
