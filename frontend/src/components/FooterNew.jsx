"use client"

import { motion } from "framer-motion"

const FooterNew = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-gray-600">
            "Code is like humor. When you have to explain it, it's bad." — Cory House
          </p>
          <p className="text-sm text-gray-600">
            ©{currentYear}
          </p>
          <p className="text-sm text-gray-600">
            Developed by <a href="https://github.com/med-more" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">Mohammed Baba</a> · Source code available on <a href="https://github.com/med-more" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">GitHub</a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterNew

