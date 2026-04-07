"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Tech", href: "#tech" },
  { name: "Proyectos", href: "#projects" },
  { name: "Experiencia", href: "#experience" },
  { name: "Contacto", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const changeLanguage = (langCode: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60]"
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="font-bold text-lg text-foreground">
              <span className="text-primary">F</span>A
            </a>
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-green-500/10 border border-green-500/20 text-green-500 dark:text-green-400 text-[11px] font-semibold tracking-wider rounded-full uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to work
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <div className="relative group">
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Globe className="h-5 w-5" />
              </Button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden py-1">
                <button onClick={() => changeLanguage('es')} className="px-4 py-2 text-sm text-left hover:bg-secondary/50 text-foreground transition-colors">Español</button>
                <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-sm text-left hover:bg-secondary/50 text-foreground transition-colors">English</button>
                <button onClick={() => changeLanguage('ru')} className="px-4 py-2 text-sm text-left hover:bg-secondary/50 text-foreground transition-colors">Русский</button>
              </div>
            </div>
            <ThemeToggle />
            <Button 
              size="sm" 
              className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#contact">Hablemos</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground hover:text-primary transition-colors rounded-xl hover:bg-secondary/50"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="mt-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="#contact">Hablemos</a>
              </Button>
              <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                <button onClick={() => { changeLanguage('es'); setIsMobileMenuOpen(false) }} className="flex-1 px-4 py-2 text-sm text-center rounded-xl border border-border hover:bg-secondary/50">ES</button>
                <button onClick={() => { changeLanguage('en'); setIsMobileMenuOpen(false) }} className="flex-1 px-4 py-2 text-sm text-center rounded-xl border border-border hover:bg-secondary/50">EN</button>
                <button onClick={() => { changeLanguage('ru'); setIsMobileMenuOpen(false) }} className="flex-1 px-4 py-2 text-sm text-center rounded-xl border border-border hover:bg-secondary/50">RU</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
