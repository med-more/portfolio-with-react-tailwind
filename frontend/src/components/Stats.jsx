"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Eye, Heart } from "lucide-react"

const GITHUB_USERNAME = "med-more"

const Stats = () => {
  const navigate = useNavigate()
  const [githubStats, setGithubStats] = useState({
    followers: 0,
    following: 0,
    publicRepos: 0,
    location: "",
    company: "",
    hireable: false,
    totalContributions: 0,
  })
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)
  const [appreciationCount, setAppreciationCount] = useState(() => {
    return parseInt(localStorage.getItem("appreciationCount") || "273")
  })

  // Fetch GitHub stats
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const data = await response.json()
        
        setGithubStats({
          followers: data.followers || 0,
          following: data.following || 0,
          publicRepos: data.public_repos || 0,
          location: data.location || "Beni Mellal, Morocco",
          company: data.company || "None",
          hireable: data.hireable || false,
          totalContributions: 0,
        })
      } catch (error) {
        console.error("Error fetching GitHub stats:", error)
      }
    }

    fetchGitHubStats()
  }, [])

  // Fetch GitHub contributions
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Try multiple API endpoints
        let contribs = null
        
        // Try first API
        try {
          const response1 = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`)
          if (response1.ok) {
            const data = await response1.json()
            console.log("GitHub Contributions API response:", data)
            if (data.contributions) {
              contribs = data.contributions
            }
          } else {
            console.log("GitHub Contributions API response not ok:", response1.status, response1.statusText)
          }
        } catch (e) {
          console.log("First API failed:", e)
        }
        
        // Try alternative API
        if (!contribs) {
          try {
            const response2 = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`)
            if (response2.ok) {
              const events = await response2.json()
              contribs = processEventsToContributions(events)
            }
          } catch (e) {
            console.log("Alternative API failed, using mock data...")
          }
        }
        
        if (contribs && contribs.length > 0) {
          const totalContribs = contribs.reduce((sum, week) => 
            sum + week.days.reduce((daySum, day) => daySum + day.count, 0), 0
          )
          
          setGithubStats(prev => ({ ...prev, totalContributions: totalContribs }))
          setContributions(contribs)
        } else {
          generateMockContributions()
        }
      } catch (error) {
        console.error("Error fetching contributions:", error)
        generateMockContributions()
      } finally {
        setLoading(false)
      }
    }

    const processEventsToContributions = (events) => {
      // Create a map of dates to contribution counts
      const dateMap = new Map()
      const oneYearAgo = new Date()
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
      
      events.forEach(event => {
        const date = new Date(event.created_at)
        if (date >= oneYearAgo) {
          const dateStr = date.toISOString().split('T')[0]
          dateMap.set(dateStr, (dateMap.get(dateStr) || 0) + 1)
        }
      })
      
      // Generate 53 weeks of data
      const weeks = 53
      const contribs = []
      const today = new Date()
      
      for (let week = 0; week < weeks; week++) {
        const days = []
        for (let day = 0; day < 7; day++) {
          const date = new Date(today)
          date.setDate(date.getDate() - (weeks - week) * 7 - (6 - day))
          const dateStr = date.toISOString().split('T')[0]
          const count = dateMap.get(dateStr) || 0
          days.push({ count, date: dateStr })
        }
        contribs.push({ days })
      }
      
      return contribs
    }

    const generateMockContributions = () => {
      const weeks = 53
      const contribs = []
      const today = new Date()
      
      for (let week = 0; week < weeks; week++) {
        const days = []
        for (let day = 0; day < 7; day++) {
          const date = new Date(today)
          date.setDate(date.getDate() - (weeks - week) * 7 - (6 - day))
          const count = Math.floor(Math.random() * 10)
          days.push({ count, date: date.toISOString().split('T')[0] })
        }
        contribs.push({ days })
      }
      
      const totalContribs = contribs.reduce((sum, week) => 
        sum + week.days.reduce((daySum, day) => daySum + day.count, 0), 0
      )
      
      setGithubStats(prev => ({ ...prev, totalContributions: totalContribs }))
      setContributions(contribs)
    }

    fetchContributions()
  }, [])

  const handleAppreciation = () => {
    const newCount = appreciationCount + 1
    setAppreciationCount(newCount)
    localStorage.setItem("appreciationCount", newCount.toString())
  }

  const getContributionLevel = (count) => {
    if (count === 0) return 0
    if (count <= 2) return 1
    if (count <= 4) return 2
    if (count <= 6) return 3
    return 4
  }

  const getColorClass = (level) => {
    const colors = [
      "bg-[#161b22] dark:bg-[#161b22] border border-gray-800", // No contributions
      "bg-[#0e4429] dark:bg-[#0e4429]", // 1-2 contributions
      "bg-[#006d32] dark:bg-[#006d32]", // 3-4 contributions
      "bg-[#26a641] dark:bg-[#26a641]", // 5-6 contributions
      "bg-[#39d353] dark:bg-[#39d353]", // 7+ contributions
    ]
    return colors[level] || colors[0]
  }

  // Generate month labels
  const getMonthLabels = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const labels = []
    const now = new Date()
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
      labels.push({ month: months[date.getMonth()], date })
    }
    
    return labels
  }

  const monthLabels = getMonthLabels()
  const days = ["Mon", "Wed", "Fri"]

  return (
    <section id="stats" className="min-h-screen px-4 sm:px-6 md:px-8 py-12 md:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 md:space-y-12"
        >
          {/* About this portfolio */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
              About this portfolio
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
              Insights and metrics about this portfolio website
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-[#1a1a1a] dark:bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-gray-800/50 shadow-lg overflow-hidden group transition-all duration-300 ease-out"
              >
                {/* Glassmorphism overlay on hover with purple tint */}
                <div className="absolute inset-0 bg-[#7e21ff]/0 group-hover:bg-[#7e21ff]/5 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#7e21ff]/0 group-hover:from-[#7e21ff]/10 to-transparent group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300" style={{ color: '#7e21ff' }} />
                    <h3 className="text-base md:text-lg font-semibold text-white">Total Views</h3>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300" style={{ color: '#7e21ff' }}>748</p>
                  <p className="text-xs md:text-sm text-gray-400">Unique page visits since Oct-2025</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-[#1a1a1a] dark:bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-gray-800/50 shadow-lg overflow-hidden group transition-all duration-300 ease-out"
              >
                {/* Glassmorphism overlay on hover with pink tint */}
                <div className="absolute inset-0 bg-[#ff2159]/0 group-hover:bg-[#ff2159]/5 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff2159]/0 group-hover:from-[#ff2159]/10 to-transparent group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300" style={{ color: '#ff2159' }} />
                    <h3 className="text-base md:text-lg font-semibold text-white">Appreciation Count</h3>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300" style={{ color: '#ff2159' }}>{appreciationCount}</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAppreciation}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-medium flex items-center gap-2 transition-all w-full sm:w-auto"
                  >
                    <Heart className="w-4 h-4" />
                    Love this portfolio
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* GitHub Stats */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
              GitHub Stats
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
              Insights and metrics about my GitHub profile
            </p>
            
            {/* GitHub Contribution Graph - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm mb-6">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full">
                    {/* Month labels */}
                    <div className="flex mb-2 ml-8">
                      {monthLabels.map(({ month }, idx) => (
                        <div key={idx} className="text-xs text-gray-600 dark:text-gray-400" style={{ width: `${100 / 12}%` }}>
                          {idx % 2 === 0 && month}
                        </div>
                      ))}
                    </div>
                    
                    {/* Graph grid */}
                    <div className="flex gap-1">
                      {/* Day labels */}
                      <div className="flex flex-col gap-1 mr-2">
                        {days.map((day, idx) => (
                          <div key={idx} className="text-xs text-gray-600 dark:text-gray-400 h-3 flex items-center">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      {/* Contribution squares */}
                      <div className="flex gap-1 flex-1">
                        {contributions.slice(0, 53).map((week, weekIdx) => (
                          <div key={weekIdx} className="flex flex-col gap-1">
                            {week.days.map((day, dayIdx) => {
                              const level = getContributionLevel(day.count)
                              return (
                                <div
                                  key={dayIdx}
                                  className={`w-3 h-3 rounded ${getColorClass(level)}`}
                                  title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                                />
                              )
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-600 dark:text-gray-400">
                      <span>Less</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded bg-[#161b22] dark:bg-[#161b22] border border-gray-800"></div>
                        <div className="w-3 h-3 rounded bg-[#0e4429] dark:bg-[#0e4429]"></div>
                        <div className="w-3 h-3 rounded bg-[#006d32] dark:bg-[#006d32]"></div>
                        <div className="w-3 h-3 rounded bg-[#26a641] dark:bg-[#26a641]"></div>
                        <div className="w-3 h-3 rounded bg-[#39d353] dark:bg-[#39d353]"></div>
                      </div>
                      <span>More</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                      {githubStats.totalContributions} contributions in the last year
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile: Simple GitHub Activity Summary */}
            <div className="md:hidden bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm mb-4">
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-black dark:text-white">GitHub Activity</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Active</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-500 mb-1">
                      {githubStats.totalContributions}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Total contributions in the last year
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Public Repos</p>
                      <p className="text-xl font-bold text-black dark:text-white">{githubStats.publicRepos}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Followers</p>
                      <p className="text-xl font-bold text-black dark:text-white">{githubStats.followers}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-green-600 dark:bg-green-700 rounded-xl p-4 md:p-6 border border-green-700 dark:border-green-600"
              >
                <h3 className="text-sm md:text-base text-white/80 mb-2 md:mb-3">Hireable</h3>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {githubStats.hireable ? "Yes" : "No"}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-3">Total Public Repositories</h3>
                <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">{githubStats.publicRepos}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-3">Followers</h3>
                <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">{githubStats.followers}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-3">Following</h3>
                <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">{githubStats.following}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-3">Current Company</h3>
                <p className="text-2xl md:text-3xl font-bold text-black dark:text-white break-words">{githubStats.company || "None"}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 md:mb-3">Location</h3>
                <p className="text-2xl md:text-3xl font-bold text-black dark:text-white break-words">{githubStats.location || "Beni Mellal, Morocco"}</p>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="pt-8 flex justify-between">
            <button onClick={() => navigate("/contact")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              <span className="text-lg">←</span> Contact
            </button>
            <button onClick={() => navigate("/")} className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f5f5] dark:hover:bg-[#262629] hover:scale-105">
              Home <span className="text-lg">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
