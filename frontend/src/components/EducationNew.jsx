"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Calendar, MapPin } from "lucide-react"
import { EDUCATION } from "../constants/index"

const EducationNew = () => {
  const navigate = useNavigate()
  
  return (
    <section id="education" className="min-h-screen px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
              Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I learned a lot, but the real learning <span className="text-black dark:text-white">happens in the code editor!</span>
            </p>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Education has always been the cornerstone of my journey into the tech world. Pursuing a Developer web full stack at Ecole Numérique Ahmed Al Hansali (simplon), Beni Mellal, has provided me a strong foundation in computer science and software development.
            </p>
            <p>
              My academic journey has been complemented by hands-on projects and coursework, enabling me to build practical skills and a deep understanding of modern technological solutions.
            </p>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-purple-500"
              >
                <div className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black dark:text-white flex items-center gap-2 flex-wrap">
                    {edu.degree}
                    {index === 0 && (
                      <span className="px-2 py-0.5 bg-purple-500 text-white text-xs rounded-full">Latest</span>
                    )}
                  </h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300">{edu.institution}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  )}
                  {edu.achievements && edu.achievements.length > 0 && edu.achievements[0] && (
                    <div className="mt-3">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        {edu.achievements.filter(a => a).map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="pt-8 flex justify-between">
            <button onClick={() => navigate("/experience")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              <span className="text-lg">←</span> Experience
            </button>
            <button onClick={() => navigate("/contact")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              Contact <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationNew

