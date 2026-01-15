import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </main>
  )
}
