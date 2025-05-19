"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import { EDUCATION } from "../constants/index"

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="education" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm mb-4">
            My Background
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-6">
            Education & Training
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            My academic journey combining medical expertise with technical knowledge.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 ml-6 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 md:left-1/2 md:-ml-0.5"></div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-12"
            >
              {EDUCATION.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center md:left-1/2 md:-ml-6">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}>
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                        borderColor: "rgba(59, 130, 246, 0.5)",
                      }}
                      className="rounded-none border-l-2 border-t-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="mb-2 inline-block rounded-none bg-blue-500/20 px-3 py-1 border-l border-blue-500/30">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-blue-300" />
                          <span className="text-sm font-medium text-blue-300">{edu.degree}</span>
                        </div>
                      </div>

                      <h3 className="mb-2 text-xl font-bold text-white">{edu.institution}</h3>

                      <div className="mb-4 flex flex-wrap gap-4 text-sm text-white/70">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="mb-4 text-white/80">{edu.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white/90">Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                              <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
