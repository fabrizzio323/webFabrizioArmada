"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Building } from "lucide-react"

const timelineItems = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Analista Programador Universitario",
    organization: "Facultad de Ingeniería (UNJu) - San Salvador de Jujuy",
    period: "2022 - Actualidad",
    description: "Formación teórica y práctica enfocada en el desarrollo de software, análisis de sistemas, bases de datos y principios de programación."
  },
  {
    type: "experience",
    icon: Building,
    title: "Backend Developer Java",
    organization: "Dev-jujuy Software Factory",
    period: "Abril 2025 - Marzo 2026",
    description: "Desarrollo y mantenimiento de soluciones backend escalables utilizando el ecosistema Java y aplicando buenas prácticas de ingeniería de software."
  },
  {
    type: "experience",
    icon: Users,
    title: "Tutor de Programación Estructurada (C++)",
    organization: "Facultad de Ingeniería (UNJu)",
    period: "2025 - Actualidad",
    description: "Dictado de clases de apoyo y tutorías en C++, facilitando el aprendizaje de algoritmos, lógica de programación y estructuras de código a estudiantes universitarios."
  }
]

export function Timeline() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiencia y Educacion
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mi trayectoria academica y profesional
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                  <div className={`p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-colors ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  }`}>
                    <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {item.organization}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
