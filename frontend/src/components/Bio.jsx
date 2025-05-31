"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download } from "lucide-react"
import { BIO, BIO_STATS } from "../constants/index"

const Bio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="bio" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 dark:text-blue-300 light:text-slate-900 backdrop-blur-sm mb-4">
            About Me
          </span>
          <h2 className="text-4xl font-bold text-white bg-clip-text text-transparent">
            My Story
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-none overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                  "linear-gradient(45deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 z-0"
            />

            {/* Glass card */}
            <div className="relative z-10 backdrop-blur-xl bg-black/30 border-l-2 border-t-2 border-white/10 p-8 md:p-12">
              <div ref={ref} className="space-y-6">
                {BIO.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="text-lg md:text-xl text-white/90 leading-relaxed border-l border-blue-500/30 pl-4"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-wrap justify-center gap-4"
              >
                {BIO_STATS.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center rounded-none bg-blue-500/10 px-6 py-4 backdrop-blur-sm border-l border-t border-blue-500/30"
                  >
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-white/70">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Resume download button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="mt-10 flex justify-center"
              >
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/assets/Mohammed Baba.pdf"
                  download="Mohammed Baba.pdf"
                  type="application/pdf"
                  className="inline-flex items-center gap-2 rounded-none bg-blue-500/20 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-blue-500/30 border-l-2 border-t-2 border-blue-500/30 light:text-slate-900"
                >
                  <Download className="h-5 w-5" />
                  Download Full Resume
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
