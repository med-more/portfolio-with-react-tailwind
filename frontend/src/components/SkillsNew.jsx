"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { SKILLS } from "../constants/index"

const SkillsNew = () => {
  const navigate = useNavigate()
  
  // Filter to show only main technical skills (not soft skills or languages)
  const mainSkills = SKILLS.filter(skill => 
    !["Soft Skills", "Languages"].includes(skill.category)
  )

  return (
    <section id="skills" className="min-h-screen px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
              Skills & Tools
            </h2>
            <p className="text-lg text-gray-600 italic">
              Learned by coding all night and debugging all day!
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed max-w-3xl">
            As a full-stack Software Engineer, I specialize in building scalable web applications using modern technologies such as Next.js, React, and Tailwind CSS. I'm also expanding my expertise into DevOps and cloud practices to create efficient, maintainable, robust web solutions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mainSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-black dark:bg-white skill-card-white rounded-xl px-3 py-2 border border-gray-200 dark:border-gray-800 hover:border-purple-500 transition-all flex flex-row items-center gap-2 shadow-sm ${skill.name.toLowerCase() === 'vercel' ? 'vercel-skill' : ''}`}
              >
                <div className="flex items-center justify-center h-5 w-5 flex-shrink-0">
                  {skill.icon}
                </div>
                <span className="text-sm text-white dark:text-black font-medium whitespace-nowrap overflow-hidden text-ellipsis">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="pt-8 flex justify-between">
            <button onClick={() => navigate("/projects")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              <span className="text-lg">←</span> Projects
            </button>
            <button onClick={() => navigate("/experience")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              Experience <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsNew

