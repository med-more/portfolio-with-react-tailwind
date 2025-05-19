"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { PROJECTS } from "../constants/index"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  // Calculate total pages
  const totalPages = Math.ceil(PROJECTS.length / projectsPerPage)

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = PROJECTS.slice(indexOfFirstProject, indexOfLastProject)

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1
    if (pageNumber > totalPages) pageNumber = totalPages
    setCurrentPage(pageNumber)

    // Scroll to top of projects section
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      const offset = -100
      const elementPosition = projectsSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="projects" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 backdrop-blur-sm mb-4">
            My Work
          </span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            A collection of my most significant work combining medical expertise with modern technology solutions.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden border-l-2 border-t-2 border-blue-500/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                  {/* Technical overlay */}
                  <div className="absolute top-2 left-2 text-xs font-mono text-blue-400/70">
                    &lt;project id="{project.id}"&gt;
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-none bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 border-l border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mb-6 text-white/70 line-clamp-3">{project.description}</p>

                  <div className="flex items-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-none bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-blue-500/10 border-l border-white/10 hover:border-blue-500/30"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-none bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-blue-500/10 border-l border-white/10 hover:border-blue-500/30"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex justify-center items-center gap-2"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: currentPage === 1 ? "rgba(255, 255, 255, 0.05)" : "rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                currentPage === 1
                  ? "bg-white/5 text-white/40 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-blue-500/20 hover:text-blue-300"
              } transition-all duration-300`}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: currentPage === index + 1 ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(index + 1)}
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  currentPage === index + 1
                    ? "bg-blue-500/30 text-white border border-blue-500/50"
                    : "bg-white/10 text-white hover:bg-blue-500/20 hover:text-blue-300"
                } transition-all duration-300`}
                aria-label={`Page ${index + 1}`}
              >
                {index + 1}
              </motion.button>
            ))}

            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: currentPage === totalPages ? "rgba(255, 255, 255, 0.05)" : "rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                currentPage === totalPages
                  ? "bg-white/5 text-white/40 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-blue-500/20 hover:text-blue-300"
              } transition-all duration-300`}
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
