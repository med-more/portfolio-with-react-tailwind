"use client"

import { useState, useEffect, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Home, 
  User, 
  FolderKanban, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  BarChart3,
  Search,
  Sun,
  Moon,
  Github,
  ExternalLink,
  ArrowUpRight,
  Menu,
  X,
  Music,
  ChevronDown,
  Monitor
} from "lucide-react"
import resumePdf from "../assets/Mohammed Baba Resume.pdf"
import { PROJECTS, BIO, SKILLS } from "../constants/index"

const SECTIONS = [
  { id: "introduction", label: "Introduction", icon: Home, path: "/" },
  { id: "about", label: "About Me", icon: User, path: "/about" },
  { id: "projects", label: "Projects", icon: FolderKanban, path: "/projects" },
  { id: "skills", label: "Skills & Tools", icon: Code, path: "/skills" },
  { id: "experience", label: "Experience", icon: Briefcase, path: "/experience" },
  { id: "education", label: "Education", icon: GraduationCap, path: "/education" },
  { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
  { id: "stats", label: "Stats", icon: BarChart3, path: "/stats" },
]

const Layout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState("introduction")
  const [theme, setTheme] = useState("light")
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileTime, setMobileTime] = useState("")
  const [dragStartY, setDragStartY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    
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

  // Handle system theme changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = (e) => {
        const systemTheme = e.matches ? "dark" : "light"
        document.documentElement.classList.remove("dark", "light")
        document.body.classList.remove("dark", "light")
        document.documentElement.classList.add(systemTheme)
        document.body.classList.add(systemTheme)
      }
      // Apply initial system theme
      handleChange(mediaQuery)
      // Listen for changes
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme])

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
      // Format time for mobile (hours:minutes am/pm)
      const date = new Date()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const ampm = hours >= 12 ? 'pm' : 'am'
      const displayHours = hours % 12 || 12
      const displayMinutes = minutes.toString().padStart(2, '0')
      setMobileTime(`${displayHours}:${displayMinutes} ${ampm}`)
    }
    updateTime() // Initial call
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Handle drag to close - smooth dragging
  useEffect(() => {
    if (!isDragging) {
      // Reset offset when not dragging
      if (dragOffset > 0) {
        setDragOffset(0)
      }
      return
    }

    const handleMouseMove = (e) => {
      const deltaY = e.clientY - dragStartY
      if (deltaY > 0) {
        setDragOffset(deltaY)
      }
    }

    const handleMouseUp = () => {
      if (dragOffset > 100) {
        setIsMobileMenuOpen(false)
      }
      setIsDragging(false)
      setDragOffset(0)
    }

    const handleTouchMove = (e) => {
      const deltaY = e.touches[0].clientY - dragStartY
      if (deltaY > 0) {
        setDragOffset(deltaY)
      }
    }

    const handleTouchEnd = () => {
      if (dragOffset > 100) {
        setIsMobileMenuOpen(false)
      }
      setIsDragging(false)
      setDragOffset(0)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, dragStartY, dragOffset])

  useEffect(() => {
    // Update active section based on current route
    const currentSection = SECTIONS.find(s => s.path === location.pathname)
    if (currentSection) {
      setActiveSection(currentSection.id)
    }
  }, [location])

  // Reset drag offset when menu closes and prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when menu is closed
      document.body.style.overflow = 'unset'
      setDragOffset(0)
      setIsDragging(false)
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when search popup is open
  useEffect(() => {
    if (isSearchOpen) {
      // Prevent body scroll when search popup is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when search popup is closed
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isSearchOpen])

  const setThemeMode = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      document.documentElement.classList.remove("dark", "light")
      document.body.classList.remove("dark", "light")
      document.documentElement.classList.add(systemTheme)
      document.body.classList.add(systemTheme)
    } else {
      document.documentElement.classList.remove("dark", "light")
      document.body.classList.remove("dark", "light")
      document.documentElement.classList.add(newTheme)
      document.body.classList.add(newTheme)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setThemeMode(newTheme)
  }

  // Create search index with all content
  const createSearchIndex = () => {
    const index = []
    
    // Add sections
    SECTIONS.forEach(section => {
      index.push({
        type: 'section',
        title: section.label,
        content: section.label,
        path: section.path,
        icon: section.icon,
        id: section.id
      })
    })
    
    // Add projects
    PROJECTS.forEach(project => {
      index.push({
        type: 'project',
        title: project.name,
        content: `${project.name} ${project.description}`,
        path: '/projects',
        icon: FolderKanban
      })
    })
    
    // Add bio content
    BIO.forEach((paragraph, idx) => {
      index.push({
        type: 'bio',
        title: 'About Me',
        content: paragraph,
        path: '/about',
        icon: User
      })
    })
    
    // Add skills
    SKILLS.forEach(skill => {
      index.push({
        type: 'skill',
        title: skill.name,
        content: `${skill.name} ${skill.description || ''}`,
        path: '/skills',
        icon: Code
      })
    })
    
    return index
  }

  // Search function
  const searchContent = (query) => {
    if (!query.trim()) return []
    
    const searchIndex = createSearchIndex()
    const lowerQuery = query.toLowerCase()
    
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.content.toLowerCase().includes(lowerQuery)
    )
  }

  // Filter sections based on search query
  const filteredSections = searchQuery.trim() 
    ? searchContent(searchQuery)
    : SECTIONS.map(s => ({ type: 'section', title: s.label, content: s.label, path: s.path, icon: s.icon, id: s.id }))
  
  // Highlight text function
  const highlightText = (text, query) => {
    if (!query.trim()) return text
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-300 dark:bg-yellow-600/50 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    )
  }

  // Handle keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Focus search input when modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById("search-input")
        if (searchInput) searchInput.focus()
      }, 100)
    }
  }, [isSearchOpen])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = resumePdf
    link.download = "Mohammed Baba Resume.pdf"
    link.click()
  }

  const navigateToSection = (path) => {
    navigate(path)
    setActiveSection(SECTIONS.find(s => s.path === path)?.id || "introduction")
  }

  // Get current page name
  const getCurrentPageName = () => {
    if (location.pathname === "/") {
      return "Mohammed Baba"
    }
    const currentSection = SECTIONS.find(s => s.path === location.pathname)
    return currentSection ? currentSection.label : "Page"
  }

  // Get current effective theme (system -> actual theme)
  const effectiveTheme = useMemo(() => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return theme
  }, [theme])

  return (
    <div className={`min-h-screen bg-white ${effectiveTheme === "dark" ? "dark" : ""}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b ${
        effectiveTheme === "dark" 
          ? "bg-black/80 border-gray-800" 
          : "bg-white/80 border-gray-200"
      }`}>
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left: Logo and Nav */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu Button - 2 lines (mobile only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl transition-all hover:opacity-80 flex items-center justify-center min-w-[40px] min-h-[40px]"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-6 items-center">
                <div 
                  className="w-full rounded-full"
                  style={{ 
                    height: '2px', 
                    minHeight: '2px', 
                    width: '100%',
                    backgroundColor: effectiveTheme === "dark" ? '#ffffff' : '#000000'
                  }} 
                />
                <div 
                  className="w-full rounded-full"
                  style={{ 
                    height: '2px', 
                    minHeight: '2px', 
                    width: '100%',
                    backgroundColor: effectiveTheme === "dark" ? '#ffffff' : '#000000'
                  }} 
                />
              </div>
            </button>
            {/* Logo name - hidden on mobile, shown on desktop */}
            <a href="/" onClick={(e) => { e.preventDefault(); navigateToSection("/") }} className={`hidden md:flex navbar-link items-center gap-2 px-3 py-1.5 rounded-xl ${
              effectiveTheme === "dark" 
                ? "text-white" 
                : "text-black"
              }`}>
              <span className="text-lg font-semibold">medfolio.dev</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <nav className="hidden md:flex items-center gap-4">
              <a href="/" onClick={(e) => { e.preventDefault(); navigateToSection("/") }} className={`navbar-link text-sm px-3 py-1.5 rounded-xl ${
                effectiveTheme === "dark"
                  ? "text-white"
                  : "text-gray-900"
              }`}>Home</a>
              <a href="https://www.linkedin.com/in/mohammed-baba-919b28336/" target="_blank" rel="noopener noreferrer" className={`navbar-link text-sm flex items-center gap-1 px-3 py-1.5 rounded-xl group ${
                effectiveTheme === "dark"
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}>
                LinkedIn
                <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <button onClick={handleDownload} className={`navbar-link text-sm flex items-center gap-1 px-3 py-1.5 rounded-xl group ${
                theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}>
                Resume
                <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </nav>
          </div>

          {/* Right: Search, Status, Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search sections...</span>
              <kbd className="ml-2 px-1.5 py-0.5 bg-white border border-gray-300 rounded-xl text-xs">⌘K</kbd>
            </button>
            {/* Timer - Hidden on mobile, shown only in mobile menu */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-xl border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600">{currentTime}</span>
            </div>
            <button onClick={toggleTheme} className={`p-2 rounded-xl transition-all group ${
              effectiveTheme === "dark"
                ? "hover:bg-[#262629] hover:scale-105"
                : ""
            }`}>
              {effectiveTheme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-400 group-hover:text-yellow-400 transition-colors" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600 transition-colors" />
              )}
            </button>
            <a href="https://github.com/med-more" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-xl transition-all group ${
              effectiveTheme === "dark"
                ? "hover:bg-[#262629] hover:scale-105"
                : ""
            }`}>
              <Github className={`w-4 h-4 transition-colors ${
                effectiveTheme === "dark"
                  ? "text-gray-400 group-hover:text-white"
                  : "text-gray-600"
              }`} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Slides from bottom */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Page Name Header - Between navbar and menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`md:hidden fixed top-14 left-0 right-0 z-45 px-6 py-3 ${
                effectiveTheme === "dark"
                  ? "bg-black/90 border-b border-gray-800"
                  : "bg-white/90 border-b border-gray-200"
              } backdrop-blur-sm`}
            >
              <p className={`text-xl font-bold ${
                effectiveTheme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}>
                {getCurrentPageName()}
              </p>
            </motion.div>
            
            {/* Menu Panel */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: isDragging ? dragOffset : 0 }}
              exit={{ y: "100%" }}
              transition={isDragging ? { duration: 0 } : { type: "spring", damping: 25, stiffness: 200 }}
              className={`md:hidden fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl ${
                theme === "dark"
                  ? "bg-black border-t border-gray-800"
                  : "bg-white border-t border-gray-200"
              }`}
              style={{ maxHeight: "80vh", touchAction: "none" }}
            >
              <div className="p-6 overflow-y-auto" style={{ maxHeight: "80vh" }}>
                {/* Drag Handle - Drag Down to Close */}
                <div
                  onMouseDown={(e) => {
                    setDragStartY(e.clientY)
                    setIsDragging(true)
                  }}
                  onTouchStart={(e) => {
                    setDragStartY(e.touches[0].clientY)
                    setIsDragging(true)
                  }}
                  className="flex items-center justify-center mb-6 w-full cursor-grab active:cursor-grabbing select-none py-2"
                >
                  <div className={`w-20 h-1.5 rounded-full transition-all ${
                    isDragging ? "scale-110" : "hover:scale-110"
                  } ${
                    effectiveTheme === "dark" ? "bg-gray-600" : "bg-gray-400"
                  }`} />
                </div>
                
                {/* Header with Logo, Timer, and Icons */}
                <div className="flex items-center justify-between mb-6 gap-4">
                  {/* Left: Logo Name with Icon */}
                  <div className="flex items-center gap-2">
                    <span className={`text-base font-medium ${
                      effectiveTheme === "dark" ? "text-white" : "text-black"
                    }`}>
                      medfolio.dev
                    </span>
                    <ArrowUpRight className={`w-4 h-4 ${
                      effectiveTheme === "dark" ? "text-white" : "text-black"
                    }`} />
                  </div>
                  
                  {/* Right: Search, Timer, Dark/Light Mode, Close */}
                  <div className="flex items-center gap-3">
                    {/* Search Button */}
                    <button 
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsSearchOpen(true)
                      }}
                      className={`p-2 rounded-xl transition-all ${
                        effectiveTheme === "dark"
                          ? "hover:bg-[#262629] text-gray-400"
                          : "hover:bg-[#f5f5f5] text-gray-600"
                      }`}
                    >
                      <Search className="w-4 h-4" />
                    </button>
                    {/* Timer */}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className={`text-xs font-medium ${
                        effectiveTheme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}>{mobileTime}</span>
                    </div>
                    {/* Dark/Light Mode Toggle */}
                    <button 
                      onClick={toggleTheme} 
                      className={`p-2 rounded-xl transition-all ${
                        effectiveTheme === "dark"
                          ? "hover:bg-[#262629]"
                          : "hover:bg-[#f5f5f5]"
                      }`}
                    >
                      {effectiveTheme === "dark" ? (
                        <Sun className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <Moon className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                    {/* Close Icon */}
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`p-2 rounded-xl transition-all ${
                        effectiveTheme === "dark"
                          ? "hover:bg-[#262629] text-gray-400"
                          : "hover:bg-[#f5f5f5] text-gray-600"
                      }`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Home Section - Simple Design */}
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => {
                    navigateToSection("/")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm mb-4 transition-all ${
                    activeSection === "introduction"
                      ? effectiveTheme === "dark"
                        ? "bg-[#262629] text-[#7e21ff]"
                        : "bg-[#f5f5f5] text-[#7e21ff]"
                      : effectiveTheme === "dark"
                        ? "bg-[#1a1a1a] text-white hover:bg-[#262629]"
                        : "bg-gray-100 text-gray-900 hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span>Home</span>
                  <span className="text-xs">{">"}</span>
                </motion.button>
                
                {/* Title */}
                <h2 className={`text-xs font-bold mb-3 uppercase tracking-wider text-center ${
                  effectiveTheme === "dark" ? "text-gray-500" : "text-gray-500"
                }`}>SECTIONS</h2>
                
                {/* Sections List - Simple Design */}
                <nav className="space-y-1.5">
                  {SECTIONS.filter(section => section.path !== "/").map((section, index) => {
                    const isActive = activeSection === section.id
                    return (
                      <motion.button
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          navigateToSection(section.path)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all ${
                          isActive
                            ? effectiveTheme === "dark"
                              ? "bg-[#262629] text-[#7e21ff]"
                              : "bg-[#f5f5f5] text-[#7e21ff]"
                            : effectiveTheme === "dark"
                              ? "bg-[#1a1a1a] text-white hover:bg-[#262629]"
                              : "bg-gray-100 text-gray-900 hover:bg-[#f5f5f5]"
                        }`}
                      >
                        <span>{section.label}</span>
                        <span className="text-xs">{">"}</span>
                      </motion.button>
                    )
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Popup Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full max-w-2xl mx-4 ${
                effectiveTheme === "dark" 
                  ? "bg-[#1a1a1a] border-gray-800" 
                  : "bg-white border-gray-200"
              } rounded-xl border shadow-2xl`}
            >
              {/* Search Input */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <Search className={`w-5 h-5 ${effectiveTheme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search sections..."
                    className={`flex-1 bg-transparent outline-none text-lg ${
                      effectiveTheme === "dark" ? "text-white" : "text-black"
                    } placeholder-gray-500`}
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    Esc
                  </button>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto p-2">
                {filteredSections.length > 0 ? (
                  <div className="space-y-1">
                    {filteredSections.map((item, index) => {
                      const Icon = item.icon
                      const isActive = activeSection === (SECTIONS.find(s => s.path === item.path)?.id || "")
                      const typeLabels = {
                        'section': 'Section',
                        'project': 'Project',
                        'bio': 'About',
                        'skill': 'Skill'
                      }
                      
                      return (
                        <motion.button
                          key={`${item.type}-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            navigateToSection(item.path)
                            setIsSearchOpen(false)
                            setSearchQuery("")
                          }}
                          className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                            isActive
                              ? effectiveTheme === "dark"
                                ? "bg-[#262629] text-[#7e21ff]"
                                : "bg-[#f5f5f5] text-[#7e21ff]"
                              : effectiveTheme === "dark"
                                ? "text-gray-300 hover:bg-[#262629]"
                                : "text-gray-700 hover:bg-[#f5f5f5]"
                          }`}
                        >
                          <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{highlightText(item.title, searchQuery)}</span>
                            </div>
                            {item.content && item.content !== item.title && (
                              <p className={`text-xs truncate ${
                                effectiveTheme === "dark" ? "text-gray-400" : "text-gray-500"
                              }`}>
                                {highlightText(item.content.substring(0, 80), searchQuery)}
                                {item.content.length > 80 ? '...' : ''}
                              </p>
                            )}
                          </div>
                          <span className="text-xs opacity-50 flex-shrink-0">→</span>
                        </motion.button>
                      )
                    })}
                  </div>
                ) : searchQuery.trim() ? (
                  <div className={`text-center py-8 ${effectiveTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    No results found for "{searchQuery}"
                  </div>
                ) : (
                  <div className={`text-center py-8 ${effectiveTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Start typing to search...
                  </div>
                )}
              </div>

              {/* Theme Selector */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <div className={`text-xs font-semibold mb-3 ${effectiveTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  THEME
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setThemeMode("system")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                      theme === "system"
                        ? effectiveTheme === "dark"
                          ? "bg-[#262629] text-white"
                          : "bg-[#f5f5f5] text-black"
                        : effectiveTheme === "dark"
                          ? "text-gray-400 hover:bg-[#262629]"
                          : "text-gray-600 hover:bg-[#f5f5f5]"
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                    <span>System</span>
                  </button>
                  <button
                    onClick={() => setThemeMode("light")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                      theme === "light"
                        ? effectiveTheme === "dark"
                          ? "bg-[#262629] text-white"
                          : "bg-[#f5f5f5] text-black"
                        : effectiveTheme === "dark"
                          ? "text-gray-400 hover:bg-[#262629]"
                          : "text-gray-600 hover:bg-[#f5f5f5]"
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                    <span>Light</span>
                  </button>
                  <button
                    onClick={() => setThemeMode("dark")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                      theme === "dark"
                        ? effectiveTheme === "dark"
                          ? "bg-[#262629] text-white"
                          : "bg-[#f5f5f5] text-black"
                        : effectiveTheme === "dark"
                          ? "text-gray-400 hover:bg-[#262629]"
                          : "text-gray-600 hover:bg-[#f5f5f5]"
                    }`}
                  >
                    <Moon className="w-4 h-4" />
                    <span>Dark</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex pt-14">
        {/* Sidebar - Hidden on mobile */}
        <aside className={`hidden md:block fixed left-0 top-14 bottom-0 w-64 border-r overflow-y-auto ${
          effectiveTheme === "dark" 
            ? "bg-black border-gray-800" 
            : "bg-white border-gray-200"
        }`}>
          <div className="p-6">
            <h2 className={`text-xl font-bold mb-4 ${
              effectiveTheme === "dark" ? "text-white" : "text-black"
            }`}>Sections</h2>
            <nav className="space-y-2">
              {SECTIONS.map((section) => {
                const Icon = section.icon
                const isActive = activeSection === section.id
                return (
                  <button
                    key={section.id}
                    onClick={() => navigateToSection(section.path)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                      isActive
                        ? effectiveTheme === "dark" 
                          ? "bg-[#262629] text-[#7e21ff] font-medium rounded-xl"
                          : "bg-[#f5f5f5] text-[#7e21ff] font-medium rounded-xl"
                        : effectiveTheme === "dark"
                          ? "text-gray-400 hover:bg-[#262629] hover:text-white rounded-xl hover:scale-[1.02]"
                          : "text-black hover:bg-[#f5f5f5] rounded-xl hover:scale-[1.02]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${
                      isActive 
                        ? "text-[#7e21ff]"
                        : effectiveTheme === "dark" ? "" : "text-black"
                    }`} />
                    <span>{section.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
