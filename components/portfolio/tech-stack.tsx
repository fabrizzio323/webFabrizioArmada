"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "JWT", icon: "🔐" },
]

// SVG icons for a more professional look
function JavaIcon() {
  return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-6 h-6 object-contain" />
}

function SpringIcon() {
  return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="w-6 h-6 object-contain" />
}

function PostgresIcon() {
  return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6 object-contain" />
}

function DockerIcon() {
  return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6 object-contain" />
}

function JwtIcon() {
  return (
    <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full p-[1px]">
      <img src="https://jwt.io/img/pic_logo.svg" alt="JWT" className="w-5 h-5 object-contain" />
    </div>
  )
}

const techIcons: Record<string, any> = {
  "Java": JavaIcon,
  "Spring Boot": SpringIcon,
  "PostgreSQL": PostgresIcon,
  "Docker": DockerIcon,
  "JWT": JwtIcon,
}

export function TechStack() {
  return (
    <section id="tech" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tecnologias y herramientas con las que trabajo diariamente
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => {
            const IconComponent = techIcons[tech.name]
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <span className="text-primary">
                  {IconComponent ? <IconComponent /> : tech.icon}
                </span>
                <span className="text-foreground font-medium">{tech.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
