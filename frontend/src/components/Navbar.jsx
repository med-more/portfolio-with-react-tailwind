"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from "lucide-react"
import { NAVIGATION_LINKS } from "../constants/index"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") || "dark"
    }
    return "dark"
  })
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Appliquer le thème initial
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.add(savedTheme)
    document.documentElement.classList.remove(savedTheme === "dark" ? "light" : "dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.add(newTheme)
    document.documentElement.classList.remove(newTheme === "dark" ? "light" : "dark")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      const offset = -85
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full">
      {/* Desktop menu */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mx-auto hidden max-w-5xl items-center justify-center py-4 px-6 lg:flex ${
          scrolled
            ? "backdrop-blur-xl bg-slate-950/80 border-b border-blue-500/20 shadow-[0_5px_15px_rgba(15,23,42,0.3)]"
            : "mt-4 border-l-2 border-t-2 border-blue-500/20 bg-slate-950/60 backdrop-blur-lg shadow-[0_5px_25px_rgba(15,23,42,0.3)]"
        } transition-all duration-300`}
      >
        <div className="flex w-full items-center justify-between">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="logo"
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className={`text-3xl font-bold ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-blue-300 hover:from-blue-300 hover:to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
                : "text-white/80 hover:text-blue-400"
            } transition-colors`}
          >
            MedFolio
          </motion.a>
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-6 navbar-links">
              {NAVIGATION_LINKS.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={item.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-blue-400"
                    onClick={(e) => handleLinkClick(e, item.href)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="rounded-full border border-blue-500/30 p-2 hover:bg-blue-900/20 transition-colors shadow-[0_0_10px_rgba(37,99,235,0.2)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-500" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`lg:hidden ${
          scrolled
            ? "backdrop-blur-xl bg-slate-950/80 border-b border-blue-500/20 shadow-[0_5px_15px_rgba(15,23,42,0.3)]"
            : "mt-4 mx-4 rounded-md border border-blue-500/20 bg-slate-950/60 backdrop-blur-lg shadow-[0_5px_25px_rgba(15,23,42,0.3)]"
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="logo"
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className={`text-2xl font-bold ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-blue-300 hover:from-blue-300 hover:to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
                : "text-white/80 hover:text-blue-400"
            } transition-colors`}
          >
            MedFolio
          </motion.a>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="rounded-full border border-blue-500/30 p-2 hover:bg-blue-900/20 transition-colors shadow-[0_0_10px_rgba(37,99,235,0.2)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-blue-500" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-4 p-4 navbar-links">
                {NAVIGATION_LINKS.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      className="block w-full py-2 text-lg font-medium text-white/80 transition-colors hover:text-blue-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="mt-4 flex gap-4 border-t border-blue-500/20 pt-4"
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </motion.div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  )
}

export default Navbar
