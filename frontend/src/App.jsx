"use client"

import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { motion, AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Bio from "./components/Bio"
import Skills from "./components/Skills"
import Education from "./components/Education"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallaxElements = document.querySelectorAll(".parallax")
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5
        element.style.transform = `translateY(${scrollY * speed}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Initialiser le thème au chargement
    const savedTheme = localStorage.getItem("theme") || "dark"
    document.documentElement.classList.add(savedTheme)
    document.documentElement.classList.remove(savedTheme === "dark" ? "light" : "dark")

    // Écouter les changements de thème
    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        const currentTheme = e.newValue || "dark"
        document.documentElement.classList.add(currentTheme)
        document.documentElement.classList.remove(currentTheme === "dark" ? "light" : "dark")
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden antialiased selection:bg-blue-500/30 selection:text-white">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-img z-[-3]" />

        {/* Dark mode gradient */}
        <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-[#0a0a0a] via-[#010409] to-[#0a0a0a] dark:block hidden" />

        {/* Light mode gradient */}
        <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-white via-slate-100 to-white dark:hidden block" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-[-1]" />
      </div>

      {/* Animated background shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl parallax"
          data-speed="0.3"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl parallax"
          data-speed="0.2"
          animate={{ x: [0, -70, 0], y: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl parallax"
          data-speed="0.4"
          animate={{ x: [0, 120, 0], y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <Toaster
          position="bottom-left"
          toastOptions={{
            duration: 3000,
            style: {
              background: "rgba(15, 23, 42, 0.9)",
              color: "#fff",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              boxShadow: "0 0 15px rgba(37, 99, 235, 0.3)",
            },
          }}
        />
        <Navbar />
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <Hero />
            <Projects />
            <Bio />
            <Skills />
            <Education />
            <ContactForm />
            <Footer />
          </motion.div>
        </AnimatePresence>
        <BackToTop />
      </div>
    </div>
  )
}

export default App
