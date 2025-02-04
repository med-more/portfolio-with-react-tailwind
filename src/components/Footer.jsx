import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-20 w-full p-6 bg-black/30 backdrop-blur-xl shadow-lg border-t border-stone-50/30 bg-gradient-to-br from-white/10 to-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between">
        
        <motion.a
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5}}
         href="#" className="text-3xl font-semibold text-white hover:text-red-500">MedFolio</motion.a>

        
        <div className="flex items-center gap-6 mt-4 lg:mt-0">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:index*1}}
             key={index} href={link.href} target="_blank" title={link.title} rel="noopener noreferrer" className={`text-white transition-colors duration-300 ${link.hoverColor}`}>
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      
      <p className="mt-6 text-center text-sm tracking-wide text-white/60">
        &copy; MedFolio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
