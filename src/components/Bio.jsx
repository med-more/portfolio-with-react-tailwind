import { BIO } from "../constants";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <section className="flex max-w-5xl flex-col items-center gap-12 pt-20" id="bio">
      <motion.h2
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1}}
       className="text-center text-5xl lg:text-4xl font-semibold tracking-wide text-white">Bio</motion.h2>
      <div className="relative mx-auto max-w-5xl rounded-2xl bg-black/30 p-6 backdrop-blur-xl shadow-xl border border-transparent bg-gradient-to-br from-white/10 to-white/5">
        <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-40"></div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8, delay:0.2}}
         className="relative z-10">
          {BIO.map((bio, index) => (
            <motion.p
            initial={{opacity:0, x:-20}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.8, delay:index*0.5}}
             key={index} className="mb-4 text-lg lg:text-xl text-white text-opacity-90 leading-relaxed">
              {bio}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
