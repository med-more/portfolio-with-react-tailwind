"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ExternalLink, Mail, Download } from "lucide-react"
import { HERO, SOCIAL_MEDIA_LINKS } from "../constants/index"
import resumePdf from "../assets/Mohammed Baba Resume.pdf"

const Introduction = () => {
  const navigate = useNavigate()
  
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = resumePdf
    link.download = "Mohammed Baba Resume.pdf"
    link.click()
  }

  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center px-8 py-20 bg-white">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-2">
            {HERO.name}
          </h1>
          <p className="text-xl text-gray-700 font-semibold italic">
            {HERO.greet}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {HERO.description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium flex items-center gap-2 transition-all"
            >
              Get Resume
              <ExternalLink className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white hover:bg-[#f5f5f5] text-black rounded-xl font-medium flex items-center gap-2 transition-all border border-gray-300"
            >
              Send Mail
              <Mail className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Navigation to next section */}
          <div className="pt-8 flex justify-end">
            <button 
              onClick={() => navigate("/about")}
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105"
            >
              About Me <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction

