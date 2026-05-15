"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Shield, Database, Layers } from "lucide-react"
import { motion } from "framer-motion"

const projectFeatures = [
  {
    icon: Layers,
    title: "Arquitectura Limpia",
    description: "Implementacion de Clean Architecture con separacion clara de responsabilidades entre capas"
  },
  {
    icon: Shield,
    title: "Seguridad JWT",
    description: "Autenticacion y autorizacion robusta e independiente basada en tokens JWT (sin uso de refresh tokens)"
  },
  {
    icon: Database,
    title: "PostgreSQL",
    description: "Base de datos relacional optimizada con indices y queries eficientes"
  }
]

const techStack = ["Java 17", "Spring Boot 3", "Spring Security", "PostgreSQL", "Docker", "Swagger/OpenAPI"]

// Diagrama de arquitectura simplificado, completamente responsivo
function ArchDiagram() {
  const branches = [
    { ctrl: "AuthCtrl", srv: "AuthSrv", repo: null, extra: "Security", color: "red" },
    { ctrl: "ProdCtrl", srv: "ProductSrv", repo: "ProductRepo", extra: null, color: "blue" },
    { ctrl: "CatCtrl", srv: "CategorySrv", repo: "CatRepo", extra: null, color: "blue" },
    { ctrl: "CartCtrl", srv: "CartSrv", repo: "CartRepo", extra: null, color: "blue" },
    { ctrl: "OrderCtrl", srv: "OrderSrv", repo: "OrderRepo", extra: null, color: "blue" },
  ]

  return (
    <div className="w-full overflow-x-auto rounded-xl">
      {/* Versión compacta para mobile (< md) */}
      <div className="md:hidden w-full space-y-1.5 p-3">
        {/* Client → Controller */}
        <div className="flex flex-col items-center gap-1">
          <div className="bg-white dark:bg-zinc-800 border border-border px-5 py-1.5 rounded text-xs font-semibold text-foreground shadow-sm">Client</div>
          <div className="h-4 w-px bg-muted-foreground/40" />
          <div className="bg-muted px-3 py-0.5 text-[10px] font-semibold text-muted-foreground rounded">REST API</div>
          <div className="h-4 w-px bg-muted-foreground/40" />
          <div className="w-full bg-red-400 dark:bg-red-500/80 text-white text-center py-1.5 text-[11px] font-bold rounded tracking-widest shadow">CONTROLLER</div>
        </div>

        {/* Branches en grid 2 col */}
        <div className="grid grid-cols-2 gap-1.5 mt-1.5">
          {branches.map((b) => (
            <div key={b.ctrl} className="flex flex-col gap-1 bg-secondary/20 border border-border/50 rounded-lg p-2">
              <div className="bg-zinc-100 dark:bg-zinc-900 border border-border text-center text-[10px] font-semibold py-1 rounded truncate">{b.ctrl}</div>
              <div className="h-3 w-px bg-muted-foreground/40 mx-auto" />
              <div className="bg-white dark:bg-zinc-800 border border-border text-center text-[10px] font-medium py-1 rounded truncate">{b.srv}</div>
              {b.extra && (
                <>
                  <div className="h-3 w-px bg-muted-foreground/40 mx-auto" />
                  <div className="bg-red-400 text-white text-[9px] font-medium py-0.5 rounded text-center truncate">{b.extra}</div>
                </>
              )}
              {b.repo && (
                <>
                  <div className="h-3 w-px bg-muted-foreground/40 mx-auto" />
                  <div className="border-2 border-blue-400/50 text-blue-600 dark:text-blue-400 text-[9px] font-bold py-0.5 rounded text-center truncate">{b.repo}</div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Database */}
        <div className="flex flex-col items-center gap-1 mt-1">
          <div className="h-4 w-px bg-muted-foreground/40" />
          <div className="w-full bg-teal-400 dark:bg-teal-500/80 text-black dark:text-white text-center py-1.5 text-[11px] font-extrabold rounded tracking-widest shadow">DATABASE</div>
        </div>
      </div>

      {/* Versión completa para desktop (>= md) */}
      <div className="hidden md:block min-w-[640px] flex flex-col items-center justify-center font-mono text-xs p-5">
        <div className="flex flex-col items-center w-full">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-zinc-800 text-black dark:text-white px-8 py-2.5 text-sm font-semibold shadow border border-border/50 rounded-sm z-10 transition-colors">Client</motion.div>
          <div className="h-5 w-px bg-muted-foreground/40" />
          <div className="bg-muted px-4 py-1 text-xs font-semibold text-muted-foreground rounded-sm z-10 shadow-sm">REST API</div>
          <div className="h-5 w-px bg-muted-foreground/40" />
          <motion.div whileHover={{ scale: 1.05 }} className="w-[85%] bg-red-400 dark:bg-red-500/80 text-white text-center py-2.5 text-sm font-bold shadow-md rounded-md z-10 tracking-[0.2em]">CONTROLLER</motion.div>

          <div className="flex w-[95%] justify-between mt-0 relative">
            <div className="absolute top-5 left-[10%] right-[10%] h-[2px] bg-muted-foreground/40 z-0" />
            {branches.map((b) => (
              <div key={b.ctrl} className="flex flex-col items-center mt-5 z-10 w-[18%]">
                <div className="h-5 w-[2px] bg-muted-foreground/40 mt-[-20px]" />
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-border px-1 py-1.5 w-full text-center text-[10px] font-semibold truncate rounded-md shadow-sm">{b.ctrl}</div>
                <div className="h-4 w-[2px] bg-muted-foreground/40" />
                {b.extra ? (
                  <div className="flex gap-1 w-full justify-center h-7">
                    <div className="bg-red-400 text-white text-[9px] font-medium px-1 rounded-sm w-1/2 flex items-center justify-center shadow-sm">Security</div>
                    <div className="bg-amber-400 text-black text-[9px] font-medium px-1 rounded-sm w-1/2 flex items-center justify-center shadow-sm">{b.srv}</div>
                  </div>
                ) : (
                  <>
                    <div className="bg-white dark:bg-zinc-800 border border-border px-1 py-1.5 w-full text-center text-[10px] font-semibold truncate rounded-md shadow-sm">{b.srv}</div>
                    <div className="h-4 w-[2px] bg-muted-foreground/40" />
                    <div className="bg-white dark:bg-zinc-800 border-2 border-blue-400/50 text-blue-600 dark:text-blue-400 px-1 py-1.5 w-full text-center text-[9px] font-bold truncate rounded-md shadow-sm">{b.repo}</div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="h-7 w-full flex justify-center relative mt-3">
            <div className="absolute top-0 bottom-0 left-[18%] right-[18%] border-b-2 border-l-2 border-r-2 border-muted-foreground/30 rounded-b-2xl z-0" />
            <div className="absolute bottom-0 h-5 w-[2px] bg-muted-foreground/30 z-0" />
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-teal-400 dark:bg-teal-500/80 text-black dark:text-white px-14 py-2.5 text-sm tracking-[0.2em] font-extrabold shadow-lg z-10 rounded-md">DATABASE</motion.div>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProject() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <Badge variant="outline" className="mb-4 rounded-full border-primary/50 text-primary">
            Proyecto Destacado
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            EasyCommerce
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            API REST completa para e-commerce con arquitectura limpia y seguridad empresarial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Diagrams */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Architecture Diagram */}
            <Card className="overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg text-foreground flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary shrink-0" />
                  Arquitectura del Sistema
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Diagrama estructural de flujo interactivo</CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <ArchDiagram />
              </CardContent>
            </Card>

            {/* Database Schema */}
            <Card className="overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <CardTitle className="text-base sm:text-lg text-foreground flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary shrink-0" />
                  Diseño de Base de Datos (E-R)
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  El sistema maneja carritos persistentes y los convierte en órdenes con registros históricos de precios.
                </p>
                <ul className="space-y-2 sm:space-y-2.5">
                  {[
                    { rel: "User (1) ↔ (1) Cart", desc: "Cada usuario tiene su carrito de compras persistente." },
                    { rel: "Cart (1) ↔ (N) CartItem", desc: "Los artículos en el carrito referencian productos y cantidades." },
                    { rel: "Order (1) ↔ (N) OrderItem", desc: "Al procesar la compra, los artículos del carrito se convierten en ítems de la orden." },
                    { rel: "Price Snapshot", desc: "OrderItem almacena el precio al momento de la compra para asegurar precisión histórica.", accent: true },
                  ].map((item) => (
                    <li key={item.rel} className="p-2.5 sm:p-3 rounded-xl bg-secondary/30 border border-border/50">
                      <strong className={`font-mono text-[11px] sm:text-xs block mb-1 ${
                        item.accent ? "text-primary" : "text-foreground"
                      }`}>{item.rel}</strong>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6"
          >
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-full bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <Card className="rounded-2xl bg-card/50 backdrop-blur-sm border-border overflow-hidden">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <CardTitle className="text-base sm:text-lg text-foreground">Descripcion Tecnica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 sm:px-6">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  EasyCommerce es un sistema robusto, seguro y escalable diseñado con la arquitectura:
                </p>

                {/* Flujo de capas — stacked en mobile, horizontal en sm+ */}
                <div className="bg-secondary/30 p-3 rounded-xl border border-border/50 font-mono text-[11px] sm:text-xs">
                  {/* Mobile: vertical stack */}
                  <div className="flex flex-col items-center gap-0.5 sm:hidden">
                    {["Request", "Controller", "Service", "Repository", "PostgreSQL"].map((step, i, arr) => (
                      <div key={step} className="flex flex-col items-center">
                        <div className={`px-3 py-1 rounded text-center font-semibold ${
                          step === "PostgreSQL"
                            ? "text-teal-600 dark:text-teal-400 bg-teal-500/10 border border-teal-500/20"
                            : "text-primary bg-primary/10 border border-primary/20"
                        }`}>{step}</div>
                        {i < arr.length - 1 && <div className="text-muted-foreground text-sm leading-none py-0.5">↓</div>}
                      </div>
                    ))}
                  </div>
                  {/* Desktop: horizontal with scroll */}
                  <div className="hidden sm:block overflow-x-auto">
                    <div className="text-primary font-semibold whitespace-nowrap text-center py-1">
                      Request → Controller → Service → Repository → PostgreSQL
                    </div>
                  </div>
                  <div className="text-muted-foreground text-center mt-1.5">↓ DTOs (MapStruct) ↓</div>
                  <div className="text-muted-foreground text-center">↓ JWT Filter (Spring Security) ↓</div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {[
                    { label: "Controller", desc: "Maneja las peticiones HTTP y delega a la capa de servicio." },
                    { label: "Service", desc: "Contiene toda la lógica de negocio central y validaciones." },
                    { label: "Repository", desc: "Acceso a datos limpio utilizando Spring Data JPA." },
                    { label: "DTO", desc: "Asegura una separación estricta entre los contratos de la API y las entidades de la base de datos." },
                    { label: "Security", desc: "Cadena completa de filtros orientada a JWT en modo stateless puro con control de acceso por roles (RBAC)." },
                  ].map(({ label, desc }) => (
                    <li key={label} className="flex gap-1.5 leading-relaxed">
                      <strong className="text-foreground shrink-0">{label}:</strong>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="space-y-3">
              {projectFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 flex-1 text-sm"
                asChild
              >
                <a href="https://github.com/fabrizzio323/easyecommerce.git" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  GitHub Repository
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl border-border hover:bg-secondary/50 flex-1 text-sm"
                asChild
              >
                <a href="https://easyecommerce-vwi-production.up.railway.app/swagger-ui/index.html" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Live Swagger (Railway)
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
