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
    href: "https://github.com",
    label: "@fabrizioarmada"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalState, setModalState] = useState<{isOpen: boolean, type: "success"|"error", message: string}>({
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
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
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
    } catch (error) {
      setModalState({ isOpen: true, type: "error", message: "No se pudo conectar con el servidor. Revisa tu conexión a internet." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer id="contact" className="py-20 md:py-32 border-t border-border relative">
      <AnimatePresence>
        {modalState.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm rounded-3xl bg-card border border-border p-8 shadow-2xl flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setModalState({ ...modalState, isOpen: false })}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${modalState.type === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                {modalState.type === 'success' ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {modalState.type === 'success' ? '¡Gracias!' : 'Ups...'}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                {modalState.message}
              </p>
              
              <Button 
                onClick={() => setModalState({ ...modalState, isOpen: false })}
                className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 py-6"
              >
                Entendido
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contactame</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Estoy disponible para nuevos proyectos y oportunidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl bg-secondary/30 border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl bg-secondary/30 border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tu mensaje..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 rounded-xl bg-secondary/30 border-border focus:border-primary resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Conectemos
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Siempre estoy abierto a discutir nuevos proyectos, ideas creativas 
                o oportunidades para ser parte de algo increible.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card/30 border border-border hover:border-primary/50 hover:bg-card/50 transition-all group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{link.name}</p>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Hecho con <Heart className="w-4 h-4 text-primary inline" /> por Fabrizio Armada
              </p>
              <p className="text-xs text-muted-foreground/60 mt-2">
                &copy; {new Date().getFullYear()} Todos los derechos reservados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
