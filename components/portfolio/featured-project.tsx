"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export function FeaturedProject() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 rounded-full border-primary/50 text-primary">
            Proyecto Destacado
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            EasyCommerce
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            API REST completa para e-commerce con arquitectura limpia y seguridad empresarial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Project Screenshots Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Swagger UI Placeholder */}
            <Card className="overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="pb-2">
                <CardDescription className="text-xs font-mono text-muted-foreground">
                  Swagger UI Documentation
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-white dark:bg-[#121212] h-48 md:h-64 flex flex-col border-t border-border overflow-hidden">
                  <div className="bg-slate-100 dark:bg-[#1e1e1e] p-2 flex items-center gap-2 border-b border-border/50">
                    <div className="flex gap-1.5 px-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground">/swagger-ui.html</div>
                  </div>
                  <div className="p-3 md:p-4 space-y-2.5 flex-1 overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                    {/* GET Endpoint */}
                    <div className="flex items-center gap-3 border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 rounded px-2 py-1.5">
                      <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded w-12 text-center">GET</span>
                      <span className="font-mono text-xs text-foreground font-medium truncate">/api/products</span>
                      <span className="text-[10px] text-muted-foreground hidden sm:block ml-auto truncate">Obtener inventario</span>
                    </div>
                    {/* POST Endpoint */}
                    <div className="flex items-center gap-3 border border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/20 rounded px-2 py-1.5">
                      <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded w-12 text-center">POST</span>
                      <span className="font-mono text-xs text-foreground font-medium truncate">/api/cart/add</span>
                      <span className="text-[10px] text-muted-foreground hidden sm:block ml-auto truncate">Añadir al carrito</span>
                    </div>
                    {/* POST Auth Endpoint */}
                    <div className="flex items-center gap-3 border border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/20 rounded px-2 py-1.5">
                      <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded w-12 text-center">POST</span>
                      <span className="font-mono text-xs text-foreground font-medium truncate">/api/auth/login</span>
                      <span className="text-[10px] text-muted-foreground hidden sm:block ml-auto truncate">Autenticación (JWT)</span>
                    </div>
                    {/* PUT Order Endpoint */}
                    <div className="flex items-center gap-3 border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 rounded px-2 py-1.5 opacity-70">
                      <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded w-12 text-center">PUT</span>
                      <span className="font-mono text-xs text-foreground font-medium truncate">/api/orders/checkout</span>
                      <span className="text-[10px] text-muted-foreground hidden sm:block ml-auto truncate">Procesar pago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Database Schema Details */}
            <Card className="overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Diseño de Base de Datos (E-R)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Comprender el flujo de datos es clave. El sistema maneja carritos persistentes y los convierte en órdenes con registros históricos de precios.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                  <li className="p-3 rounded-xl bg-secondary/30 border border-border/50">
                    <strong className="text-foreground">User (1) &harr; (1) Cart</strong>
                    <p className="font-sans text-xs mt-1 text-muted-foreground">Cada usuario tiene su carrito de compras persistente.</p>
                  </li>
                  <li className="p-3 rounded-xl bg-secondary/30 border border-border/50">
                    <strong className="text-foreground">Cart (1) &harr; (N) CartItem</strong>
                    <p className="font-sans text-xs mt-1 text-muted-foreground">Los artículos en el carrito referencian productos y cantidades.</p>
                  </li>
                  <li className="p-3 rounded-xl bg-secondary/30 border border-border/50">
                    <strong className="text-foreground">Order (1) &harr; (N) OrderItem</strong>
                    <p className="font-sans text-xs mt-1 text-muted-foreground">Al procesar la compra, los artículos del carrito se convierten en artículos de la orden.</p>
                  </li>
                  <li className="p-3 rounded-xl bg-secondary/30 border border-border/50">
                    <strong className="text-foreground text-primary">Price Snapshot</strong>
                    <p className="font-sans text-xs mt-1 text-muted-foreground">OrderItem almacena el precio al instante de la compra para asegurar la precisión histórica si el producto cambia de valor más adelante.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="rounded-full bg-secondary/50 text-secondary-foreground hover:bg-secondary/80"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <Card className="rounded-2xl bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Descripcion Tecnica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  EasyCommerce es un sistema robusto, seguro y escalable diseñado con la arquitectura:
                </p>
                <div className="bg-secondary/30 p-4 rounded-xl font-mono text-xs md:text-sm border border-border/50 text-center space-y-2">
                  <div className="text-primary font-semibold">Request &rarr; Controller &rarr; Service &rarr; Repository &rarr; PostgreSQL</div>
                  <div className="text-muted-foreground">&darr; DTOs (MapStruct) &darr;</div>
                  <div className="text-muted-foreground">&darr; JWT Filter (Spring Security) &darr;</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Controller:</strong> Maneja las peticiones HTTP y delega a la capa de servicio.</li>
                  <li><strong className="text-foreground">Service:</strong> Contiene toda la lógica de negocio central y validaciones.</li>
                  <li><strong className="text-foreground">Repository:</strong> Acceso a datos limpio utilizando Spring Data JPA.</li>
                  <li><strong className="text-foreground">DTO:</strong> Asegura una separación estricta entre los contratos de la API y las entidades de la base de datos.</li>
                  <li><strong className="text-foreground">Security:</strong> Cadena completa de filtros orientada a JWT en modo stateless puro (sin refresh tokens) con control de acceso por roles (RBAC).</li>
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
                  className="flex gap-4 p-4 rounded-2xl bg-card/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                asChild
              >
                <a href="https://github.com/fabrizzio323/easyecommerce.git" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Repository
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="rounded-2xl border-border hover:bg-secondary/50 flex-1"
                asChild
              >
                <a href="https://easyecommerce.onrender.com/swagger-ui.html" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Swagger (Render)
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
