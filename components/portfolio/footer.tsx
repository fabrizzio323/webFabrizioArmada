"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Send, Heart, CheckCircle2, XCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/fabrizzio323",
    label: "@fabrizzio323"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/fabrizio-armada",
    label: "Fabrizio Armada"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:fabrizioarmada3@gmail.com",
    label: "fabrizioarmada3@gmail.com"
  }
]

export function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: "success" | "error"; message: string }>({
    isOpen: false,
    type: "success",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)
    try {
      const response = await fetch("https://formsubmit.co/ajax/fabrizioarmada3@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          Mensaje: formData.message,
          _subject: "Nuevo contacto desde tu Portafolio"
        })
      })
      if (response.ok) {
        setModalState({ isOpen: true, type: "success", message: "¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto." })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setModalState({ isOpen: true, type: "error", message: "Hubo un error al procesar tu mensaje. Intenta nuevamente, por favor." })
      }
    } catch {
      setModalState({ isOpen: true, type: "error", message: "No se pudo conectar con el servidor. Revisa tu conexión a internet." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer id="contact" className="py-16 sm:py-20 md:py-32 border-t border-border relative">
      {/* Modal */}
      <AnimatePresence>
        {modalState.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm rounded-3xl bg-card border border-border p-7 sm:p-8 shadow-2xl flex flex-col items-center text-center"
            >
              <button
                onClick={() => setModalState({ ...modalState, isOpen: false })}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 flex items-center justify-center ${modalState.type === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                {modalState.type === 'success' ? <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" /> : <XCircle className="w-7 h-7 sm:w-8 sm:h-8" />}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {modalState.type === 'success' ? '¡Gracias!' : 'Ups...'}
              </h3>
              <p className="text-muted-foreground text-sm mb-7 leading-relaxed">{modalState.message}</p>
              <Button
                onClick={() => setModalState({ ...modalState, isOpen: false })}
                className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 py-5 sm:py-6"
              >
                Entendido
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl text-foreground">Contactame</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Estoy disponible para nuevos proyectos y oportunidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl bg-secondary/30 border-border focus:border-primary text-sm"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl bg-secondary/30 border-border focus:border-primary text-sm"
                      required
                    />
                  </div>
                  <Textarea
                    placeholder="Tu mensaje..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-28 sm:min-h-32 rounded-xl bg-secondary/30 border-border focus:border-primary resize-none text-sm"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Conectemos</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Siempre estoy abierto a discutir nuevos proyectos, ideas creativas
                o oportunidades para ser parte de algo increible.
              </p>

              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card/30 border border-border hover:border-primary/50 hover:bg-card/50 transition-all group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm sm:text-base">{link.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{link.label}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
                Hecho con <Heart className="w-4 h-4 text-primary inline shrink-0" /> por Fabrizio Armada
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1.5">
                &copy; {new Date().getFullYear()} Todos los derechos reservados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
