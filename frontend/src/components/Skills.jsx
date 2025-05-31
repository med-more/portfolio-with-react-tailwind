"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { SKILLS } from "../constants/index"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState("all")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const filters = [
    { id: "all", label: "All" },
    { id: "Frontend", label: "Frontend" },
    { id: "Backend", label: "Backend" },
    { id: "Database", label: "Database" },
    { id: "Tools", label: "Tools" },
    { id: "Design", label: "Design" },
    { id: "Security", label: "Security" },
  ]

  const filteredSkills = SKILLS.filter(skill => 
    activeFilter === "all" ? true : skill.category === activeFilter
  )

  return (
    <section id="skills" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 dark:text-blue-300 light:text-slate-900 backdrop-blur-sm mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl font-bold text-white bg-clip-text text-transparent mb-6">
            Skills
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            My journey as a Full Stack Developer, combining frontend and backend expertise with a passion for creating modern and high-performance web applications.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-blue-500 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col rounded-none border-l-2 border-t-2 border-blue-500/30 p-4 backdrop-blur-sm ${
                  skill.category === "Frontend" ? "bg-blue-500/10" :
                  skill.category === "Backend" ? "bg-green-500/10" :
                  skill.category === "Database" ? "bg-purple-500/10" :
                  skill.category === "Tools" ? "bg-orange-500/10" :
                  skill.category === "Design" ? "bg-pink-500/10" :
                  skill.category === "Security" ? "bg-red-500/10" :
                  "bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-none border-l border-t ${
                    skill.category === "Frontend" ? "bg-blue-500/20 border-blue-500/30" :
                    skill.category === "Backend" ? "bg-green-500/20 border-green-500/30" :
                    skill.category === "Database" ? "bg-purple-500/20 border-purple-500/30" :
                    skill.category === "Tools" ? "bg-orange-500/20 border-orange-500/30" :
                    skill.category === "Design" ? "bg-pink-500/20 border-pink-500/30" :
                    skill.category === "Security" ? "bg-red-500/20 border-red-500/30" :
                    "bg-blue-500/20 border-blue-500/30"
                  }`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                </div>
                {/* <span className="mt-2 text-xs text-white/50">{skill.skillLevel}</span> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
