"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, Download } from "lucide-react"
import { HERO } from "../constants/index"

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Typing animation effect
  const nameRef = useRef(null)
  const greetRef = useRef(null)

  useEffect(() => {
    const nameElement = nameRef.current
    const greetElement = greetRef.current

    if (nameElement && greetElement) {
      const nameText = HERO.name
      const greetText = HERO.greet

      // Clear the initial content
      nameElement.textContent = ""
      greetElement.textContent = ""

      let nameIndex = 0
      const typeNameInterval = setInterval(() => {
        if (nameIndex < nameText.length) {
          nameElement.textContent += nameText.charAt(nameIndex)
          nameIndex++
        } else {
          clearInterval(typeNameInterval)

          // Start typing greeting after name is complete
          let greetIndex = 0
          const typeGreetInterval = setInterval(() => {
            if (greetIndex < greetText.length) {
              greetElement.textContent += greetText.charAt(greetIndex)
              greetIndex++
            } else {
              clearInterval(typeGreetInterval)
            }
          }, 50)
        }
      }, 70)
    }
  }, [])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center pt-20 overflow-hidden"
    >
      {/* Space background with stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container absolute inset-0 z-0">
          {Array.from({ length: 150 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-none bg-blue-600/20 px-4 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm border-l-2 border-blue-500"
            >
              Welcome to my portfolio
            </motion.div>
            <h1
              ref={nameRef}
              className="text-4xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(59,130,246,0.3)]"
            ></h1>
            <h2 ref={greetRef} className="text-2xl md:text-3xl lg:text-4xl text-white/80 font-light"></h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed border-l-2 border-blue-500/30 pl-4"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-2 rounded-none bg-blue-600/30 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-blue-600/40 border-l-2 border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(15, 23, 42, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download="Dr_Medina_Carlson_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-none bg-slate-900/60 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-slate-800/70 border-l-2 border-slate-700 shadow-[0_0_15px_rgba(15,23,42,0.3)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex items-center gap-4 pt-6"
          >
            <motion.a
              whileHover={{ y: -3, color: "#6366f1", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-indigo-500 transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#0077b5", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#1DA1F2", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-sky-500 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-none bg-gradient-to-r from-blue-600 to-cyan-600 opacity-75 blur-xl"></div>
            <div className="relative overflow-hidden rounded-none border-l-2 border-t-2 border-blue-500/20 bg-slate-900/80 backdrop-blur-sm shadow-[0_0_25px_rgba(37,99,235,0.3)]">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Dr. Medina Carlson"
                className="w-full max-w-md object-cover"
              />

              {/* Technical overlay elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-4 left-4 text-xs font-mono text-blue-400/70">
                  &lt;img src="profile.jpg" /&gt;
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-blue-400/70">&lt;/img&gt;</div>
                <div className="absolute top-0 left-0 w-20 h-1 bg-blue-500/50"></div>
                <div className="absolute top-0 left-0 w-1 h-20 bg-blue-500/50"></div>
                <div className="absolute bottom-0 right-0 w-20 h-1 bg-blue-500/50"></div>
                <div className="absolute bottom-0 right-0 w-1 h-20 bg-blue-500/50"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })
          }}
          className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
