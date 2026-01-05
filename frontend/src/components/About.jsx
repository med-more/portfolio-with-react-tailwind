"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { BIO } from "../constants/index"

const About = () => {
  const navigate = useNavigate()
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20 bg-white">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
            About Mohammed
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            More than just a title—let's dive deeper!
          </p>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            {BIO.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Navigation */}
          <div className="pt-8 flex justify-between">
            <button onClick={() => navigate("/")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              <span className="text-lg">←</span> Introduction
            </button>
            <button onClick={() => navigate("/projects")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              Projects <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

