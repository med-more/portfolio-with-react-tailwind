import { motion } from "framer-motion"
import Lottie from "lottie-react"
import animationData from "../assets/animations/Animation footer.json"
import animationLeft from "../assets/animations/Animation left.json"
import { NAVIGATION_LINKS, SOCIAL_MEDIA_LINKS } from "../constants/index"



const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.getElementById(href.substring(1))
    if (target) {
      const offset = -85
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="mt-20 w-full border-t border-white/10 bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo & About */}
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
              id="logo"
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="text-3xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent transition-colors hover:from-blue-300 hover:to-white drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)] light:text-blue-600 light:hover:text-blue-500"
            >
              MedFolio
            </motion.a>
            <p className="text-white/60 max-w-md">
              I'm Mohammed Baba - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!
            </p>

            {/* NEW Lottie Animation (Below description) */}
            <div className="w-36">
              <Lottie animationData={animationLeft} loop={true} />
            </div>
          </motion.div>

          {/* Navigation Links */}
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
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-white/60 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media + Footer Animation */}
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
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 backdrop-blur-sm transition-all hover:bg-blue-500/20 ${link.hoverColor} ${link.lightColor}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Existing Lottie under social links */}
            <div className="w-40 pt-4">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </motion.div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white light:text-slate-900">
          &copy; {currentYear} MedFolio🚀. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
