"use client"

import { motion } from "framer-motion"
import { NAVIGATION_LINKS, SOCIAL_MEDIA_LINKS } from "../constants/index"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 w-full border-t border-white/10 bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent transition-colors hover:from-cyan-500 hover:to-blue-400"
            >
              MedFolio
            </motion.a>
            <p className="text-white/60 max-w-md">
              Combining healthcare expertise with cutting-edge technology to create innovative solutions for modern
              medical challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const target = document.getElementById(item.href.substring(1))
                      if (target) {
                        const offset = -85
                        const elementPosition = target.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.scrollY + offset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        })
                      }
                    }}
                    className="text-white/60 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex flex-wrap gap-4 social-icons">
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 backdrop-blur-sm transition-all hover:bg-blue-500/20 ${link.hoverColor}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-white/40">&copy; {currentYear} MedFolio. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
