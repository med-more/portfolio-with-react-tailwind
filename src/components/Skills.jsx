"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SKILLS } from "../constants/index"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

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
          <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-6">
            Skills & Proficiencies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            A unique combination of medical expertise and technical skills that allows me to create innovative
            healthcare solutions.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
                className="flex flex-col rounded-none border-l-2 border-t-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-blue-500/20 border-l border-t border-blue-500/30">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-medium text-white/70">{skill.experience}</span>
                </div>

                <div className="h-2 w-full overflow-hidden bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  />
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-xs text-white/50">Beginner</span>
                  <span className="text-xs text-white/50">Expert</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
