"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal as TerminalIcon } from "lucide-react"

type CommandOutput = {
  command: string
  output: React.ReactNode
}

export function TerminalDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div className="text-green-400">
          Welcome to Fabrizio OS v1.0.0
          <br /> Type 'help' to see available commands.
        </div>
      )
    }
  ])
  
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history, isOpen])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim().toLowerCase()
    let output: React.ReactNode = ""

    switch (cmd) {
      case "help":
        output = (
          <div className="text-gray-300">
            Available commands:
            <br /> <span className="text-primary">about</span>    - Who is Fabrizio?
            <br /> <span className="text-primary">skills</span>   - List my technical skills
            <br /> <span className="text-primary">contact</span>  - How to reach me
            <br /> <span className="text-primary">clear</span>    - Clear terminal window
            <br /> <span className="text-primary">sudo</span>     - Super user privileges
          </div>
        )
        break
      case "about":
        output = "I'm a dedicated Backend Developer focused on Java, Spring Boot, and scalable architectures. I study Engineering at UNJu."
        break
      case "skills":
        output = "Java 17+, Spring Boot 3, PostgreSQL, Docker, JWT, Git, Clean Architecture."
        break
      case "contact":
        output = "Email: fabrizioarmada3@gmail.com | LinkedIn: /in/fabrizio-armada"
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      case "sudo":
        output = <span className="text-red-400">Nice try! You are not in the sudoers file. This incident will be reported.</span>
        break
      default:
        output = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>
    }

    setHistory([...history, { command: cmd, output }])
    setInput("")
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-card border border-border shadow-2xl flex items-center justify-center text-primary hover:bg-card/80 backdrop-blur-sm"
          >
            <TerminalIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed z-50 bg-[#1e1e1e] border border-border shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
              isExpanded 
                ? "inset-4 md:inset-10 rounded-2xl" 
                : "bottom-6 right-6 w-[calc(100vw-3rem)] max-w-sm h-96 rounded-2xl"
            }`}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-[#404040]">
              <div className="flex gap-2">
                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80" />
                <button onClick={() => setIsExpanded(!isExpanded)} className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80" />
                <button onClick={() => setIsExpanded(true)} className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80" />
              </div>
              <div className="text-[#858585] text-xs font-mono">fabrizio@backend-os: ~</div>
              <div className="w-16"></div> {/* Spacer for symmetry */}
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, i) => (
                <div key={i} className="mb-4">
                  <div className="flex gap-2 text-primary/80">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-foreground">{entry.command}</span>
                  </div>
                  <div className="mt-1 text-gray-300 break-words">{entry.output}</div>
                </div>
              ))}
              
              <form onSubmit={handleCommand} className="flex gap-2 text-primary/80">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-foreground"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
