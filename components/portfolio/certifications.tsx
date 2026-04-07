"use client"

import { motion } from "framer-motion"
import { Award, CalendarDays } from "lucide-react"

const certs = [
  {
    title: "Desarrollo de REST APIs con Spring Boot",
    academy: "Todo Code Academy",
    date: "Julio 2024",
  },
  {
    title: "Microservicios con Spring Cloud",
    academy: "Todo Code Academy",
    date: "Septiembre 2024",
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificaciones
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cursos y especializaciones que respaldan mis conocimientos técnicos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-6">
                  {cert.academy}
                </p>
              </div>
              
              <div className="flex items-center text-muted-foreground text-sm border-t border-border/50 pt-4 mt-2">
                <CalendarDays className="w-4 h-4 mr-2" />
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
