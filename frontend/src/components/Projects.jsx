"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Eye, Code2, Star } from "lucide-react"
import { PROJECTS } from "../constants/index"

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const [forceAnimation, setForceAnimation] = useState(false)

  const totalPages = Math.ceil(PROJECTS.length / projectsPerPage)
  
  // Ensure currentPage does not exceed totalPages
  const safeSetCurrentPage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
    setForceAnimation(true) // Trigger animation on page change
  };

  // Calculate current projects whenever currentPage or PROJECTS changes
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = PROJECTS.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = (pageNumber) => {
    safeSetCurrentPage(pageNumber);

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

  // Reset forceAnimation after animation completes
  useEffect(() => {
    if (forceAnimation) {
      const timer = setTimeout(() => setForceAnimation(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [forceAnimation])

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
    <section id="projects" className="py-20 w-full min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
                    <span className="inline-block rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 dark:text-blue-300 light:text-slate-900 backdrop-blur-sm mb-4">
            My Projects
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
            A showcase of my most impactful work, merging robust full-stack development (MERN) with innovative problem-solving to build scalable, user-centric applications.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`projects-${currentPage}`}
            variants={containerVariants}
            initial="hidden"
            animate={forceAnimation ? "visible" : "visible"} // Always animate when forceAnimation is true
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentProjects.length > 0 ? (
              currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 cursor-pointer flex flex-col light:bg-blue-50 light:border-blue-200 light:hover:border-blue-400"
                >
                  {/* Project content remains the same */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100" />
                  </div>

                  <div className="relative flex flex-col h-full p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-b-lg group hover:bg-slate-900/70 light:bg-blue-50 light:border-blue-200 light:hover:bg-blue-100">
                    <div className="flex flex-col flex-grow pb-12">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block rounded-full px-2 py-0.5 text-xs font-medium text-blue-200 border border-blue-500/20 hover:border-blue-400/40 hover:from-blue-500/20 hover:to-purple-500/20 light:bg-blue-100 light:text-blue-800 light:border-blue-300 light:hover:bg-blue-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-white light:text-slate-900">{project.name}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed flex-grow group-hover:text-slate-200 light:text-slate-700 light:group-hover:text-slate-800">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-auto pt-2 border-t border-slate-700/50 absolute bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm p-2 rounded-b-lg group-hover:bg-slate-900/98 light:border-blue-200 light:bg-blue-100 light:group-hover:bg-blue-200">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-700/50 text-white text-xs font-medium hover:bg-gray-600/50 border border-slate-600/50 hover:border-gray-500/50 group/btn light:bg-slate-800 light:text-white light:border-slate-700 light:hover:bg-slate-700"
                      >
                        <Github className="w-3 h-3 group-hover/btn:rotate-12" />
                        <span>GitHub</span>
                      </a>
                      {/* <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-700/50 text-white text-xs font-medium hover:bg-gray-600/50 border border-slate-600/50 hover:border-gray-500/50 group/btn"
                      >
                        <Eye className="w-3 h-3 group-hover/btn:rotate-12" />
                        <span>View Demo</span>
                      </a> */}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-slate-400">
                No projects found on this page
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pagination controls with small rounded buttons */}
        {PROJECTS.length > projectsPerPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex justify-center items-center gap-3"
          >
            {/* Previous button */}
            <motion.button
              whileHover={{
                scale: currentPage === 1 ? 1 : 1.1,
                backgroundColor: currentPage === 1 ? "rgba(255, 255, 255, 0.05)" : "rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: currentPage === 1 ? 1 : 0.9 }}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentPage === 1
                  ? "bg-slate-800/50 text-slate-500 cursor-not-allowed border border-slate-700/50"
                  : "bg-slate-700/50 text-white hover:bg-blue-500/20 hover:text-blue-300 border border-slate-600/50 hover:border-blue-500/50"
              } transition-all duration-300 backdrop-blur-sm`}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>

            {/* Page numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: currentPage === index + 1 ? "rgba(59, 130, 246, 0.4)" : "rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(index + 1)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-medium text-sm ${
                    currentPage === index + 1
                      ? "bg-slate-700/50 text-white border border-blue-500/50"
                      : "bg-slate-700/50 text-slate-300 hover:bg-blue-500/20 border border-slate-600/50 hover:border-blue-500/50"
                  } transition-all duration-300 backdrop-blur-sm`}
                  aria-label={`Page ${index + 1}`}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>

            {/* Next button */}
            <motion.button
              whileHover={{
                scale: currentPage === totalPages ? 1 : 1.1,
                backgroundColor: currentPage === totalPages ? "rgba(255, 255, 255, 0.05)" : "rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: currentPage === totalPages ? 1 : 0.9 }}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentPage === totalPages
                  ? "bg-slate-800/50 text-slate-500 cursor-not-allowed border border-slate-700/50"
                  : "bg-slate-700/50 text-white hover:bg-blue-500/20 hover:text-blue-300 border border-slate-600/50 hover:border-blue-500/50"
              } transition-all duration-300 backdrop-blur-sm`}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects