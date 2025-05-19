import {
  Code,
  Database,
  Server,
  Stethoscope,
  Brain,
  LineChart,
  Microscope,
  Tablet,
  Cloud,
  ShieldCheck,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react"

// Hero section data
export const HERO = {
  name: "Baba Mohammed",
  greet: "Full Stack Developper",
  description:
    "🎯 Full Stack Web Developer Passionate about crafting modern, responsive web applications from front to back. ✨ UI/UX lover | 🔐 Security-focused | ⚙️ API builder",
}

// Bio section data
export const BIO = [
  "I'm Dr. Medina Carlson, a board-certified physician with over 10 years of clinical experience who discovered a passion for technology and software development.",
  "After witnessing firsthand the inefficiencies in healthcare systems, I decided to bridge the gap between medicine and technology by learning to code and developing innovative healthcare solutions.",
  "My unique background allows me to understand the real-world challenges faced by healthcare providers and create software that addresses their specific needs while improving patient care.",
  "I specialize in developing intuitive, HIPAA-compliant applications that streamline clinical workflows, enhance data management, and ultimately improve healthcare delivery and patient outcomes.",
]

// Skills section data
export const SKILLS = [
  {
    name: "Frontend Development",
    icon: <Code className="h-6 w-6 text-blue-400" />,
    experience: "5 years",
    level: 90,
  },
  {
    name: "Backend Development",
    icon: <Server className="h-6 w-6 text-blue-400" />,
    experience: "4 years",
    level: 85,
  },
  {
    name: "Database Management",
    icon: <Database className="h-6 w-6 text-blue-400" />,
    experience: "4 years",
    level: 80,
  },
  {
    name: "Machine Learning",
    icon: <Brain className="h-6 w-6 text-blue-400" />,
    experience: "3 years",
    level: 75,
  },
  {
    name: "Clinical Medicine",
    icon: <Stethoscope className="h-6 w-6 text-blue-400" />,
    experience: "10 years",
    level: 95,
  },
  {
    name: "Data Analysis",
    icon: <LineChart className="h-6 w-6 text-blue-400" />,
    experience: "6 years",
    level: 85,
  },
  {
    name: "Medical Research",
    icon: <Microscope className="h-6 w-6 text-blue-400" />,
    experience: "8 years",
    level: 90,
  },
  {
    name: "Mobile Development",
    icon: <Tablet className="h-6 w-6 text-blue-400" />,
    experience: "3 years",
    level: 70,
  },
  {
    name: "Cloud Services",
    icon: <Cloud className="h-6 w-6 text-blue-400" />,
    experience: "4 years",
    level: 80,
  },
  {
    name: "Healthcare Security",
    icon: <ShieldCheck className="h-6 w-6 text-blue-400" />,
    experience: "5 years",
    level: 85,
  },
]

// Education section data
export const EDUCATION = [
  {
    degree: "Doctor of Medicine (MD)",
    institution: "Stanford University School of Medicine",
    location: "Stanford, CA",
    duration: "2008 - 2012",
    description:
      "Graduated with honors. Specialized in Internal Medicine with a focus on healthcare technology integration.",
    achievements: ["Research Excellence Award", "Clinical Innovation Prize"],
  },
  {
    degree: "Residency in Internal Medicine",
    institution: "Massachusetts General Hospital",
    location: "Boston, MA",
    duration: "2012 - 2015",
    description:
      "Completed residency with distinction. Participated in digital health initiatives and electronic medical record optimization.",
    achievements: ["Chief Resident", "Quality Improvement Award"],
  },
  {
    degree: "Fellowship in Medical Informatics",
    institution: "Johns Hopkins University",
    location: "Baltimore, MD",
    duration: "2015 - 2017",
    description: "Specialized in healthcare data systems, clinical decision support, and medical software development.",
    achievements: ["Innovation Fellowship", "Published 5 research papers"],
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "Tech Academy",
    location: "San Francisco, CA",
    duration: "2018",
    description:
      "Intensive program covering modern web development technologies and practices with a focus on healthcare applications.",
    achievements: ["Best Capstone Project", "Mentor's Choice Award"],
  },
]

// Projects section data
export const PROJECTS = [
  {
    id: 1,
    name: "MedTrack Pro",
    description: "A comprehensive patient tracking system for healthcare professionals with real-time analytics.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    name: "HealthSync",
    description: "Mobile application for synchronizing patient data across multiple healthcare providers.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: 3,
    name: "MedVision AI",
    description: "AI-powered diagnostic tool for analyzing medical images and providing preliminary assessments.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["Python", "TensorFlow", "Flask", "AWS"],
  },
  {
    id: 4,
    name: "Clinical Trials Dashboard",
    description: "Interactive dashboard for monitoring and managing clinical trials data and participant information.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["Vue.js", "D3.js", "PostgreSQL"],
  },
  {
    id: 5,
    name: "MedScheduler",
    description: "Appointment scheduling system optimized for medical practices with automated reminders.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["React", "GraphQL", "MongoDB"],
  },
  {
    id: 6,
    name: "HealthData API",
    description: "Secure API for standardized health data exchange between different healthcare systems.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["Node.js", "Express", "OAuth", "Docker"],
  },
  {
    id: 7,
    name: "Medical Research Platform",
    description: "Collaborative platform for medical researchers to share findings and coordinate studies.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["React", "Django", "PostgreSQL", "Redis"],
  },
  {
    id: 8,
    name: "Patient Portal",
    description:
      "Secure patient portal for accessing medical records, scheduling appointments, and messaging providers.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["Angular", "Node.js", "MySQL", "Socket.io"],
  },
  {
    id: 9,
    name: "Medical Inventory System",
    description: "Inventory management system for hospitals and clinics with barcode scanning and alerts.",
    image: "/placeholder.svg?height=400&width=600",
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    tags: ["React", "Express", "MongoDB", "Electron"],
  },
]

// Navigation links
export const NAVIGATION_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#bio", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

// Social media links
export const SOCIAL_MEDIA_LINKS = [
  {
    title: "GitHub",
    href: "https://github.com",
    icon: <Github className="h-5 w-5" />,
    hoverColor: "hover:text-indigo-500",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="h-5 w-5" />,
    hoverColor: "hover:text-blue-500",
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />,
    hoverColor: "hover:text-sky-500",
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram className="h-5 w-5" />,
    hoverColor: "hover:text-pink-500",
  },
  {
    title: "Email",
    href: "mailto:contact@medfolio.com",
    icon: <Mail className="h-5 w-5" />,
    hoverColor: "hover:text-gray-400",
  },
]

// Contact form validation schema
export const CONTACT_SCHEMA = {
  name: {
    min: 2,
    max: 50,
    required: true,
    errorMessages: {
      min: "Name is too short",
      max: "Name is too long",
      required: "Name is required",
    },
  },
  email: {
    required: true,
    errorMessages: {
      email: "Invalid email address",
      required: "Email is required",
    },
  },
  message: {
    min: 10,
    max: 1000,
    required: true,
    errorMessages: {
      min: "Message is too short",
      max: "Message is too long",
      required: "Message is required",
    },
  },
}

// Bio stats
export const BIO_STATS = [
  {
    value: "10+",
    label: "Years in Medicine",
  },
  {
    value: "5+",
    label: "Years Coding",
  },
  {
    value: "20+",
    label: "Projects Completed",
  },
  {
    value: "15+",
    label: "Healthcare Partners",
  },
]
