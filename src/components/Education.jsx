import { EDUCATION } from "../constants"
import { motion } from "framer-motion"

const Education = () => {
  return (
    <section className="flex max-w-5xl flex-col items-center gap-12 pt-20 mx-auto" id="education">
      <motion.h2
      initial ={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1}}
       className="text-center text-3xl lg:text-4xl font-semibold tracking-wide text-white">Education</motion.h2>
      <div className="relative mx-auto rounded-2xl bg-black/30 p-8 backdrop-blur-xl shadow-xl border border-transparent bg-gradient-to-br from-white/10 to-white/5">
        <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-40"></div>
        <div className="relative z-10">
          {EDUCATION.map((edu, index) => (
            <motion.div
            initial ={{opacity:0, x:-20}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:index * 0.5}}
             key={index} className={`py-6 ${index !== EDUCATION.length - 1 ? "border-b border-white/20" : ""}`}>
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-lg text-white/90">{edu.institution}</p>
              <p className="text-sm text-white/60">{edu.duration}</p>
              <p className="mt-2 text-white/80">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
