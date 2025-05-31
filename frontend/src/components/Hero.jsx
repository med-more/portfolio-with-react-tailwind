"use client"

import { useRef } from "react"
import { ArrowDown, Github, Linkedin, Twitter, Download, Code, Zap, Star } from "lucide-react"
import img from "../assets/portfolio.jpg"

// Mock image for demo - replace with your actual image import

const HERO = {
  name: "Mohammed Baba",
  greet: "Full Stack Developer",
  description:
    "🎯 Full Stack Web Developer Passionate about crafting modern, responsive web applications from front to back. ✨ UI/UX lover | 🔐 Security-focused | ⚙️ API builder",
}

const Hero = () => {
  const ref = useRef(null)

  const handleScrollToProjects = () => {
    if (typeof window !== 'undefined') {
      const nextSection = document.getElementById('projects') || document.getElementById('about')
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Fallback to scrolling by viewport height if no section is found
        window.scrollBy({
          top: window.innerHeight - 100,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/assets/Mohammed Baba.pdf"
    link.download = "Mohammed Baba.pdf"
    link.click()
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center pt-6 text-white"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Floating orbs for ambiance */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 z-10 relative max-w-7xl py-16">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-blue-100 px-4 py-2 rounded-full border border-slate-700 dark:border-slate-700 light:border-blue-300 text-sm text-white dark:text-white light:text-blue-800">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Zap className="w-4 h-4 text-white dark:text-white light:text-blue-800" />
              <span>Welcome to my portfolio</span>
              <Star className="w-4 h-4 text-yellow-400 animate-pulse drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 bg-gradient-to-r from-white to-slate-300 dark:from-white dark:to-slate-300 light:from-slate-900 light:to-slate-700 bg-clip-text text-transparent">
              {HERO.name}
            </h1>
            <h2 className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-700">
              {HERO.greet}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            {HERO.description}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <button
              onClick={handleScrollToProjects}
              className="bg-white dark:bg-white light:bg-blue-100 text-black dark:text-black light:text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-slate-200 dark:hover:bg-slate-200 light:hover:bg-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 justify-center">
                <Code className="w-4 h-4" />
                View My Work
              </div>
            </button>

            <button
              onClick={handleDownload}
              className="bg-[#0f172a] dark:bg-[#0f172a] light:bg-blue-100 text-white dark:text-white light:text-slate-900 border border-slate-700 dark:border-slate-700 light:border-blue-200 px-6 py-2 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 justify-center">
                <Download className="w-4 h-4" />
                Download Resume
              </div>
            </button>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            {[
              { 
                icon: Github, 
                href: "https://github.com/med-more",
                hoverColor: "hover:bg-gray-800 hover:text-white hover:border-gray-600",
                lightColor: "light:text-gray-800 light:border-gray-300 light:hover:bg-gray-100"
              },
              { 
                icon: Linkedin, 
                href: "https://www.linkedin.com/in/mohammed-baba-919b28336/",
                hoverColor: "hover:bg-blue-600 hover:text-white hover:border-blue-500",
                lightColor: "light:text-blue-600 light:border-blue-300 light:hover:bg-blue-50"
              },
              { 
                icon: Twitter, 
                href: "https://x.com/BabaMohamm30497?t=1S5CSc8LsDm61bXSdvrbqw&s=09",
                hoverColor: "hover:bg-sky-500 hover:text-white hover:border-sky-400",
                lightColor: "light:text-sky-500 light:border-sky-300 light:hover:bg-sky-50"
              },
            ].map(({ icon: Icon, href, hoverColor, lightColor }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 border border-slate-700 dark:border-slate-700 rounded-full text-white dark:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${hoverColor} ${lightColor}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden">
            <img
              src={img}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["MongoDB", "Express.js", "React", "Node.js"].map((tech, index) => (
              <div
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium border border-white dark:border-white light:border-blue-300 text-white dark:text-white light:text-blue-800 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-blue-100 hover:bg-white dark:hover:bg-white light:hover:bg-blue-200 hover:text-black dark:hover:text-black light:hover:text-blue-900 transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Down */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <div
          onClick={handleScrollToProjects}
          className="flex flex-col items-center text-slate-400 hover:text-white cursor-pointer transition-all duration-500 hover:scale-110 group"
        >
          <span className="text-sm font-medium mb-2 group-hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Scroll Down</span>
          <div className="p-3 rounded-full border-2 border-white group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(255,255,0,0.5)] transition-all duration-500 cursor-pointer hover:bg-yellow-400/10">
            <ArrowDown className="w-6 h-6 group-hover:text-yellow-400 transition-colors duration-300 group-hover:animate-pulse cursor-pointer" />
          </div>
        </div>
      </div> */}

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}

export default Hero