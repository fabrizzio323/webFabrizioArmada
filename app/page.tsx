import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { Architecture } from "@/components/portfolio/architecture"
import { TechStack } from "@/components/portfolio/tech-stack"
import { FeaturedProject } from "@/components/portfolio/featured-project"
import { Timeline } from "@/components/portfolio/timeline"
import { SoftSkills } from "@/components/portfolio/soft-skills"
import { Certifications } from "@/components/portfolio/certifications"
import { Footer } from "@/components/portfolio/footer"
import { TerminalDrawer } from "@/components/portfolio/terminal-drawer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Architecture />
      <TechStack />
      <FeaturedProject />
      <Timeline />
      <SoftSkills />
      <Certifications />
      <Footer />
      <TerminalDrawer />
    </main>
  )
}
