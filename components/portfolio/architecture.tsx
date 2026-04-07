"use client"

import { motion } from "framer-motion"
import { Server, Database, Lock, RefreshCw, Cpu, Layers } from "lucide-react"

const principles = [
  {
    icon: Layers,
    title: "Arquitectura Limpia",
    description: "Separación estricta de responsabilidades. Dominio y Casos de Uso completamente aislados de frameworks y capas externas."
  },
  {
    icon: Lock,
    title: "Seguridad Robusta",
    description: "Implementación de Spring Security, JWT (stateless), codificación BCrypt y manejo detallado de CORS y Authorities."
  },
  {
    icon: Database,
    title: "Integridad y Datos",
    description: "Diseño de esquemas relacionales bien normalizados en PostgreSQL, manejo de transacciones ACID y uso eficiente de Spring Data JPA."
  },
  {
    icon: Server,
    title: "APIs RESTful",
    description: "Diseño de URIs estandarizadas, respuestas HTTP apropiadas, manejo global de excepciones (@ControllerAdvice) y documentación con Swagger."
  },
  {
    icon: RefreshCw,
    title: "DevOps & Docker",
    description: "Aislamiento de entornos con Docker y Docker Compose para facilitar despliegues consistentes y reproducibles."
  },
  {
    icon: Cpu,
    title: "Rendimiento Optimo",
    description: "Prevención de problemas N+1, uso de DTOs mapeados con MapStruct y estrategias de paginación de datos para reducir latencia."
  }
]

export function Architecture() {
  return (
    <section id="approach" className="py-20 md:py-32 bg-secondary/10 border-y border-border/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full transform translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Metodología y Diseño
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mi Enfoque Técnico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más allá de escribir código que funcione, me enfoco en diseñar sistemas mantenibles, escalables y fáciles de entender por otros desarrolladores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5 transition-all group duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
