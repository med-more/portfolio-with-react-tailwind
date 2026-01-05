"use client"

import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Layout from "./components/Layout"
import Introduction from "./components/Introduction"
import About from "./components/About"
import ProjectsNew from "./components/ProjectsNew"
import SkillsNew from "./components/SkillsNew"
import ExperienceNew from "./components/ExperienceNew"
import EducationNew from "./components/EducationNew"
import ContactNew from "./components/ContactNew"
import Stats from "./components/Stats"
import FooterNew from "./components/FooterNew"

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    
    // Handle system theme preference
    if (savedTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      document.documentElement.classList.remove("dark", "light")
      document.body.classList.remove("dark", "light")
      document.documentElement.classList.add(systemTheme)
      document.body.classList.add(systemTheme)
    } else {
      document.documentElement.classList.remove("dark", "light")
      document.body.classList.remove("dark", "light")
      document.documentElement.classList.add(savedTheme)
      document.body.classList.add(savedTheme)
    }
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "rgba(0, 0, 0, 0.9)",
              color: "#fff",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(147, 51, 234, 0.2)",
              boxShadow: "0 0 15px rgba(147, 51, 234, 0.3)",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsNew />} />
          <Route path="/skills" element={<SkillsNew />} />
          <Route path="/experience" element={<ExperienceNew />} />
          <Route path="/education" element={<EducationNew />} />
          <Route path="/contact" element={<ContactNew />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        <FooterNew />
      </Layout>
    </BrowserRouter>
  )
}

export default App
