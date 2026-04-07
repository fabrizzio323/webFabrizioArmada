"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, TrendingUp, Handshake, Target, BrainCircuit } from "lucide-react"

const skills = [
  {
    icon: Lightbulb,
    title: "Resolución de Problemas",
    description: "Enfoque altamente analítico ante bugs difíciles. Priorizo entender el origen del fallo y diseñar soluciones a largo plazo por encima de arreglos temporales."
  },
  {
    icon: Handshake,
    title: "Trabajo en Equipo",
    description: "Colaborador nato. Excelente disposición para code reviews, para compartir hallazgos, y para fomentar un entorno empático e impulsado por el éxito grupal."
  },
  {
    icon: Users,
    title: "Comunicación Asertiva",
    description: "Capacidad comprobada para traducir arquitectura backend compleja y lógica de negocio a un lenguaje sencillo para stakeholders y front-ends."
  },
  {
    icon: TrendingUp,
    title: "Adaptabilidad y Aprendizaje",
    description: "Altamente proactivo abrazando nuevas tecnologías. Evoluciono constantemente mi ecosistema (Java, Spring, etc.) adaptándome ágilmente a los cambios del proyecto."
  },
  {
    icon: Target,
    title: "Autonomía y Entrega",
    description: "Fuerte autogestión en la toma de requerimientos. Capaz de estimar tareas con precisión técnica, priorizar de forma metodológica y cumplir con deadlines."
  },
  {
    icon: BrainCircuit,
    title: "Pensamiento Crítico",
    description: "Adopto un rol preventivo: evalúo el impacto, la escalabilidad y las posibles vulnerabilidades del código antes de llegar a la fase de producción."
  }
]

export function SoftSkills() {
  return (
    <section id="soft-skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Habilidades Blandas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            El código robusto nace de una mentalidad colaborativa. Estas son las capacidades interpersonales que elevan mi desempeño técnico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                <skill.icon className="w-6 h-6 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
