"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { PROJECTS } from "../constants/index"
import ProjectCarousel from "./ProjectCarousel"

const ProjectsNew = () => {
  const navigate = useNavigate()
  const [selectedProject, setSelectedProject] = useState(null)

  if (selectedProject) {
    const project = PROJECTS.find(p => p.id === selectedProject)
    return (
      <section className="min-h-screen px-8 py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
            <button
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-black dark:text-white">{project.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">{project.description}</p>

            {/* Project Carousel */}
            <div className="mb-8">
              <ProjectCarousel images={project.images || [project.image]} />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-2xl text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Modern and responsive design</li>
                  <li>Built with cutting-edge technologies</li>
                  <li>Optimized for performance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Links</h3>
                <div className="flex gap-4 flex-wrap">
                  <motion.a
                    href={project.liveLink && project.liveLink !== "https://example.com" ? project.liveLink : "#"}
                    target={project.liveLink && project.liveLink !== "https://example.com" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!project.liveLink || project.liveLink === "https://example.com") {
                        e.preventDefault()
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg ${
                      project.liveLink && project.liveLink !== "https://example.com"
                        ? "bg-purple-600 hover:bg-purple-700 text-white hover:shadow-purple-500/50"
                        : "bg-gray-400 cursor-not-allowed text-white"
                    }`}
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-[#f5f5f5] dark:hover:bg-gray-700 text-black dark:text-white rounded-xl font-medium flex items-center gap-2 transition-all border border-gray-300 dark:border-gray-700 shadow-lg"
                  >
                    Github
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="min-h-screen px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
              Projects
            </h2>
            <p className="text-lg text-gray-600">
              A lot of ideas, but some are still under construction!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project.id)}
                className="relative bg-white dark:bg-black rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-800 shadow-sm group"
              >
                {/* Project Image Preview */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  {/* Tags Overlay on Hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs rounded-2xl font-medium cursor-pointer transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Badge */}
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1.5 rounded-lg group-hover:rounded-2xl text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    View Project →
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 transition-colors">
                    {project.description}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium flex items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                  >
                    Learn More...
                  </motion.button>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="pt-8 flex justify-between">
            <button onClick={() => navigate("/about")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              <span className="text-lg">←</span> About
            </button>
            <button onClick={() => navigate("/skills")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              Skills & Tools <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsNew

