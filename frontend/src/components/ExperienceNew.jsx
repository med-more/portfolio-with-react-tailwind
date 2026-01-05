"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Calendar, MapPin } from "lucide-react"
import { INTERNSHIPS } from "../constants/index"

const ExperienceNew = () => {
  const navigate = useNavigate()
  
  return (
    <section id="experience" className="min-h-screen px-8 py-20 bg-white dark:bg-black">
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
              Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
              You need it to get the job, but the job's what gives it!
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My journey as a Full Stack Developer has been marked by working with cutting-edge technologies, debugging complex issues, building scalable web applications, solving challenging problems, writing clean and maintainable code, collaborating with talented teams, and continuously learning and adapting to new tools and frameworks.
          </p>

          <div className="space-y-6">
            {INTERNSHIPS.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-purple-500 group"
              >
                <div className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-black dark:text-white flex items-center gap-2 flex-wrap">
                    {exp.title} · {exp.company}
                    {index === 0 && (
                      <span className="px-2 py-0.5 bg-purple-500 text-white text-xs rounded-full">Latest</span>
                    )}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-2xl text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="pt-8 flex justify-between">
            <button onClick={() => navigate("/skills")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              <span className="text-lg">←</span> Skills & Tools
            </button>
            <button onClick={() => navigate("/education")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              Education <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceNew

