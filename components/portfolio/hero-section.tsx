"use client"

import { Button } from "@/components/ui/button"
import { Download, FolderOpen, ChevronDown, Terminal } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <Terminal className="w-4 h-4" />
              <span>Backend_Developer.java</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
            >
              Hola, soy <span className="text-primary">Fabrizio</span><br/>
              Construyo APIs <br className="hidden lg:block"/>Escalables
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Estudiante de Ingeniería en la{" "}
              <span className="text-primary font-medium">UNJu</span>
              {" "}| Apasionado por la arquitectura de software, Clean Code y las bases de datos optimizadas.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
                onClick={() => {
                  let lang = 'es'; // por defecto
                  
                  // Detectar idioma desde el atributo html lang proporcionado por Google Translate
                  const htmlLang = document.documentElement.lang || '';
                  if (htmlLang.toLowerCase().includes('en')) {
                    lang = 'en';
                  } else if (htmlLang.toLowerCase().includes('ru')) {
                    lang = 'ru';
                  }

                  // Descarga o vista forzada en nueva pestaña
                  const fileUrl = `/webFabrizioArmada/cv-${lang}.pdf`;
                  const link = document.createElement('a');
                  link.href = fileUrl;
                  link.download = `CV_Fabrizio_${lang.toUpperCase()}.pdf`;
                  link.target = "_blank";
                  document.body.appendChild(link);
                  link.click();
                  setTimeout(() => document.body.removeChild(link), 100);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar CV
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-2xl border-border hover:bg-secondary/50 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                asChild
              >
                <a href="#projects">
                  <FolderOpen className="mr-2 h-5 w-5" />
                  Ver Proyectos
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Code Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl transform -rotate-6"></div>
            <div className="relative rounded-2xl overflow-hidden border border-border bg-[#1e1e1e] shadow-2xl">
              <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-[#404040]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="mx-auto text-[#858585] text-xs font-mono tracking-widest">DeveloperController.java</div>
              </div>
              <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto text-[#d4d4d4]">
                <p><span className="text-[#c678dd]">@RestController</span></p>
                <p><span className="text-[#c678dd]">@RequestMapping</span>(<span className="text-[#98c379]">"/api/v1/developer"</span>)</p>
                <p><span className="text-[#56b6c2]">public class</span> <span className="text-[#e5c07b]">DeveloperController</span> {"{"}</p>
                <br/>
                <p className="pl-4"><span className="text-[#c678dd]">@GetMapping</span>(<span className="text-[#98c379]">"/skills"</span>)</p>
                <p className="pl-4"><span className="text-[#56b6c2]">public</span> <span className="text-[#e5c07b]">ResponseEntity</span>&lt;<span className="text-[#e5c07b]">Stats</span>&gt; <span className="text-[#61afef]">getStats</span>() {"{"}</p>
                <p className="pl-8"><span className="text-[#e5c07b]">Stats</span> stats = <span className="text-[#56b6c2]">new</span> <span className="text-[#e5c07b]">Stats</span>();</p>
                <p className="pl-8">stats.<span className="text-[#61afef]">setCleanArchitecture</span>(<span className="text-[#d19a66]">true</span>);</p>
                <p className="pl-8">stats.<span className="text-[#61afef]">setMainLanguage</span>(<span className="text-[#98c379]">"Java 17 / Spring Boot"</span>);</p>
                <p className="pl-8">stats.<span className="text-[#61afef]">addDatabase</span>(<span className="text-[#98c379]">"PostgreSQL"</span>);</p>
                <p className="pl-8">stats.<span className="text-[#61afef]">setStatus</span>(<span className="text-[#e5c07b]">Status</span>.<span className="text-[#d19a66]">READY_FOR_WORK</span>);</p>
                <br/>
                <p className="pl-8"><span className="text-[#c678dd]">return</span> <span className="text-[#e5c07b]">ResponseEntity</span>.<span className="text-[#61afef]">ok</span>(stats);</p>
                <p className="pl-4">{"}"}</p>
                <p>{"}"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#approach" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-semibold">Descubrir</span>
          <ChevronDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  )
}
