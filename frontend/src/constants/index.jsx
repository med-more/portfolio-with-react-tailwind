import {
  Code,
  Database,
  Server,
  Cloud,
  ShieldCheck,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Globe,
  GitBranch,
  Palette,
  Terminal,
  Layers,
  Smartphone,
  FileText,
  Figma,
  Trello,
  MessageSquare,
  Image,
  Layout,
} from "lucide-react"
import p1 from "../assets/mobile.jpeg"
import p2 from "../assets/cooking.jpeg"
import p3 from "../assets/users.jpeg"
import p4 from "../assets/blog.jpeg"
import p5 from "../assets/quiz.jpeg"
import p6 from "../assets/movie.jpeg"
import p7 from "../assets/weather.jpeg"
import p8 from "../assets/constructions.jpeg"
import p9 from "../assets/tasks.jpeg"

// Hero section data
export const HERO = {
  name: "Baba Mohammed",
  greet: "Full Stack Developer",
  description:
    "🎯 Full Stack Web Developer Passionate about crafting modern, responsive web applications from front to back. ✨ UI/UX lover | 🔐 Security-focused | ⚙️ API builder",
}

// Bio section data
export const BIO = [
  "I'm Mohammed Baba, a Full Stack Developer specializing in the MERN stack. I build scalable web apps with React, Node.js, and MongoDB, focusing on clean code and performance.",
  "A problem-solver at heart, I combine technical skills with teamwork and adaptability. I thrive in collaborative environments, turning challenges into efficient solutions.",
  "My toolkit includes Git, Postman, and JWT for secure, streamlined development. I design intuitive UIs with Tailwind CSS and Framer Motion for seamless user experiences.",
  "Passionate about impactful tech, I create apps that merge functionality with sleek design. Let's build something great together—innovation through code.",
]

// Skills section data - Updated with enhanced structure
export const SKILLS = [
  {
    name: "Frontend Development",
    icon: <Code className="h-5 w-5 text-blue-400" />,
    experience: "5 years",
    level: 90,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Building dynamic UIs with React, modern JavaScript, and responsive design patterns",
    projects: 25,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "React.js",
    icon: <Code className="h-5 w-5 text-cyan-400" />,
    experience: "3 years",
    level: 95,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Advanced React patterns, hooks, context, and state management solutions",
    projects: 30,
    color: "from-cyan-400 via-blue-500 to-blue-600",
  },
  {
    name: "CSS",
    icon: <Layout className="h-5 w-5 text-blue-500" />,
    experience: "4 years",
    level: 95,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Advanced CSS techniques, animations, and responsive design",
    projects: 35,
    color: "from-blue-500 via-blue-600 to-indigo-600",
  },
  {
    name: "Bootstrap",
    icon: <Palette className="h-5 w-5 text-purple-500" />,
    experience: "3 years",
    level: 90,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Rapid UI development, responsive components, and customization",
    projects: 20,
    color: "from-purple-500 via-purple-600 to-indigo-600",
  },
  {
    name: "Backend Development",
    icon: <Server className="h-5 w-5 text-green-400" />,
    experience: "4 years",
    level: 85,
    skillLevel: "Expert",
    category: "Backend",
    description: "Scalable server-side applications with Node.js, Express, and microservices architecture",
    projects: 20,
    color: "from-green-400 via-green-500 to-emerald-500",
  },
  {
    name: "Node.js",
    icon: <Terminal className="h-5 w-5 text-green-500" />,
    experience: "3 years",
    level: 88,
    skillLevel: "Expert",
    category: "Backend",
    description: "Server-side JavaScript, API development, and real-time applications",
    projects: 22,
    color: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    name: "Express.js",
    icon: <Globe className="h-5 w-5 text-gray-400" />,
    experience: "3 years",
    level: 92,
    skillLevel: "Expert",
    category: "Backend",
    description: "RESTful APIs, middleware architecture, and server-side routing",
    projects: 24,
    color: "from-gray-400 via-gray-500 to-slate-500",
  },
  {
    name: "MongoDB",
    icon: <Database className="h-5 w-5 text-green-600" />,
    experience: "3 years",
    level: 85,
    skillLevel: "Expert",
    category: "Database",
    description: "NoSQL database design, aggregation pipelines, and performance optimization",
    projects: 20,
    color: "from-green-600 via-green-700 to-emerald-700",
  },
  {
    name: "MySQL",
    icon: <Database className="h-5 w-5 text-blue-400" />,
    experience: "3 years",
    level: 85,
    skillLevel: "Advanced",
    category: "Database",
    description: "Database design, optimization, and complex queries",
    projects: 15,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "JavaScript (ES6+)",
    icon: <Terminal className="h-5 w-5 text-yellow-400" />,
    experience: "4 years",
    level: 95,
    skillLevel: "Expert",
    category: "Language",
    description: "Modern JavaScript, async/await, functional programming, and ES6+ features",
    projects: 35,
    color: "from-yellow-400 via-orange-400 to-red-400",
  },
  {
    name: "HTML5",
    icon: <Code className="h-5 w-5 text-orange-500" />,
    experience: "4 years",
    level: 95,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Semantic HTML, accessibility, and modern web standards",
    projects: 40,
    color: "from-orange-500 via-orange-600 to-red-600",
  },
  {
    name: "CSS3",
    icon: <Layout className="h-5 w-5 text-blue-500" />,
    experience: "4 years",
    level: 95,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Advanced CSS techniques, animations, and responsive design",
    projects: 35,
    color: "from-blue-500 via-blue-600 to-indigo-600",
  },
  {
    name: "TypeScript",
    icon: <Code className="h-5 w-5 text-blue-500" />,
    experience: "2 years",
    level: 85,
    skillLevel: "Advanced",
    category: "Language",
    description: "Type safety, interfaces, generics, and advanced TypeScript features",
    projects: 15,
    color: "from-blue-500 via-blue-600 to-indigo-600",
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="h-5 w-5 text-cyan-400" />,
    experience: "3 years",
    level: 90,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Utility-first CSS framework, responsive design, and custom configurations",
    projects: 25,
    color: "from-cyan-400 via-blue-500 to-blue-600",
  },
  {
    name: "Postman",
    icon: <Globe className="h-5 w-5 text-orange-400" />,
    experience: "3 years",
    level: 88,
    skillLevel: "Expert",
    category: "Tools",
    description: "API testing, documentation, and automated testing workflows",
    projects: 20,
    color: "from-orange-400 via-orange-500 to-red-500",
  },
  {
    name: "Docker",
    icon: <Server className="h-5 w-5 text-blue-400" />,
    experience: "2 years",
    level: 80,
    skillLevel: "Advanced",
    category: "Tools",
    description: "Containerization, Docker Compose, and deployment workflows",
    projects: 12,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "Git & GitHub",
    icon: <GitBranch className="h-5 w-5 text-orange-500" />,
    experience: "4 years",
    level: 90,
    skillLevel: "Expert",
    category: "Tools",
    description: "Version control, collaborative development, and CI/CD workflows",
    projects: 40,
    color: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    name: "Notion",
    icon: <FileText className="h-5 w-5 text-white" />,
    experience: "2 years",
    level: 85,
    skillLevel: "Advanced",
    category: "Tools",
    description: "Documentation, project management, and knowledge base organization",
    projects: 15,
    color: "from-gray-800 via-gray-900 to-black",
  },
  {
    name: "Trello",
    icon: <Trello className="h-5 w-5 text-blue-400" />,
    experience: "3 years",
    level: 90,
    skillLevel: "Expert",
    category: "Tools",
    description: "Project management, task organization, and team collaboration",
    projects: 25,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "ChatGPT",
    icon: <MessageSquare className="h-5 w-5 text-green-400" />,
    experience: "1 year",
    level: 85,
    skillLevel: "Advanced",
    category: "Tools",
    description: "AI-assisted development, code generation, and problem-solving",
    projects: 15,
    color: "from-green-400 via-green-500 to-emerald-500",
  },
  {
    name: "Draw.io",
    icon: <Image className="h-5 w-5 text-orange-400" />,
    experience: "2 years",
    level: 85,
    skillLevel: "Advanced",
    category: "Tools",
    description: "System architecture, flowcharts, and technical diagrams",
    projects: 10,
    color: "from-orange-400 via-orange-500 to-red-500",
  },
  {
    name: "Figma",
    icon: <Figma className="h-5 w-5 text-purple-400" />,
    experience: "2 years",
    level: 80,
    skillLevel: "Advanced",
    category: "Design",
    description: "UI/UX design, prototyping, and collaborative design workflows",
    projects: 12,
    color: "from-purple-400 via-purple-500 to-indigo-500",
  },
  {
    name: "JWT & Authentication",
    icon: <ShieldCheck className="h-5 w-5 text-red-400" />,
    experience: "3 years",
    level: 88,
    skillLevel: "Expert",
    category: "Security",
    description: "Secure authentication, authorization, and user session management",
    projects: 25,
    color: "from-red-400 via-pink-400 to-rose-400",
  },
]

// Education section data
export const EDUCATION = [
  {
    degree: "Developer web full stack",
    institution: "Ecole Numérique Ahmed Al Hansali (simplon)",
    location: "Beni Mellal",
    duration: "2024-2025",
    description:
      "Full stack developer can create creative solutions",
    achievements: ["Certification of full stack dev", "developement my soft and hard skills", "developent complex projects"],
  },
  {
    degree: "Technician specializing in web development",
    institution: "Instutt prosec",
    location: "Beni Mellal",
    duration: "2022-2024",
    description:
      "Learn the basics of programming and create real projects",
    achievements: ["Specialized technician diploma"],
  },
  {
    degree: "Baccalaureate in electrical science and technology",
    institution: "Technical high school",
    location: "Fquih ben salah",
    duration: "2021",
    description:
      "",
    achievements: [""],
  },
]

// Projects section data
export const PROJECTS = [
  {
    id: 1,
    name: "Plateforme mobile de gestion des incidents techniques",
    description:
      "Application MERN avec React Native, conçue selon une architecture avancée pour la gestion des incidents techniques.",
    image: p1,
    githubLink: "https://github.com/med-more/Plateforme-Mobile-de-Gestion-des-Incidents-Techniques.git",
    liveLink: "https://example.com",
    tags: ["MERN", "React Native", "Architecture Avancée"],
  },
  {
    id: 2,
    name: "CookSecure",
    description:
      "Plateforme de gestion de recettes avec navigation sécurisée et creaction d'une nouvelle recette avec la gestion des recettes et de profile.",
    image: p2,
    githubLink: "https://github.com/med-more/Plateforme-de-gestion-de-recettes.git",
    liveLink: "https://example.com",
    tags: ["React", "Tailwindcss", "framer-motion", "React router"],
  },
  {
    id: 3,
    name: "Application de gestion utilisateur",
    description: "App React de gestion des utilisateurs avec vérification d'identité et interface administrateur.",
    image: p3,
    githubLink: "https://github.com/med-more/API-s-curis-e-d-authentification.git",
    liveLink: "https://example.com",
    tags: ["React", "Tailwindcss", "React hot toast", "jwt", "Auth", "Admin", "user"],
  },
  {
    id: 4,
    name: "Application de blog",
    description:
      "Création d'un blog avec fonctionnalités de publication d'articles, gestion de commentaires et filtres dynamiques.",
    image: p4,
    githubLink: "https://github.com/med-more/application-de-blog.git",
    liveLink: "https://example.com",
    tags: ["React", "Json server", "React toastify", "Tailwincss"],
  },
  {
    id: 5,
    name: "Application de Quiz",
    description: "Application de quiz interactive utilisant l'API Trivia, avec suivi de progression du joueur.",
    image: p5,
    githubLink: "https://github.com/med-more/Application-de-Quiz-avec-API-Trivia-et-suivi-de-progression.git",
    liveLink: "https://example.com",
    tags: ["React", "TypeScript", "Trivia API", "Quiz", "REST API"],
  },
  {
    id: 6,
    name: "Application de consultation de films",
    description:
      "App React consommant une API externe pour afficher des informations sur les films, séries et acteurs.",
    image: p6,
    githubLink:
      "https://github.com/med-more/Application-de-consultation-de-films-avec-consommation-d-une-API-externe.git",
    liveLink: "https://example.com",
    tags: ["React", "OMDb API", "Javascript", "Tailwindcss", "framer motion", "Films", "Séries"],
  },
  {
    id: 7,
    name: "🌤️ WeatherNow : Application Météorologique",
    description:
      "Une application web moderne et intuitive offrant des prévisions météorologiques précises grâce à l'API OpenWeatherMap. Avec une interface responsive et des visualisations dynamiques, WeatherNow permet aux utilisateurs de surveiller les conditions environnementales (qualité de l'air, polluants, visibilité) et de sauvegarder leurs localisations favorites.",
    image: p7,
    githubLink: "https://github.com/med-more/Meteo-Application.git",
    liveLink: "https://example.com",
    tags: ["HTML", "css", "Sass", "JavaScript", "ES6", "API REST"],
  },
  {
    id: 8,
    name: "Projet de Gestion de Projets de Construction partie Admin",
    description:
      "A full-stack web app built with React.js (Vite), Node.js/Express, and MongoDB for managing construction projects, tasks, and resources. Features real-time tracking, budget control, task dependencies, and resource allocation with a modern UI (Tailwind CSS). Developed as part of École Numérique Ahmed AL HANSALI's evaluation, showcasing full CRUD operations, REST API integration, and responsive design.",
    image: p8,
    githubLink:
      "https://github.com/med-more/ConstructionXpert-Services-Solution-Application-de-Gestion-de-Projets-de-Construction.git",
    liveLink: "https://example.com",
    tags: ["Reactjs", "Tailwindcss", "Express js", "Node.js", "MongoDB", "react hot toast", "framer motion"],
  },
  {
    id: 9,
    name: "gestionnaire des taches",
    description: "une application backend de gestion des tâches en Node.js avec Express.js et MongoDB.",
    image: p9,
    githubLink: "https://github.com/med-more/gestionnaire-des-taches.git",
    liveLink: "https://example.com",
    tags: ["Nodejs", "Express", "MongoDB", "postman"],
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
    href: "https://github.com/med-more",
    icon: <Github className="h-5 w-5" />,
    hoverColor: "hover:text-indigo-500",
    lightColor: "light:text-gray-800 light:border-gray-300 light:hover:bg-gray-100"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammed-baba-919b28336/",
    icon: <Linkedin className="h-5 w-5" />,
    hoverColor: "hover:text-blue-500",
    lightColor: "light:text-blue-600 light:border-blue-300 light:hover:bg-blue-50"
  },
  {
    title: "Twitter",
    href: "https://x.com/BabaMohamm30497?t=1S5CSc8LsDm61bXSdvrbqw&s=09",
    icon: <Twitter className="h-5 w-5" />,
    hoverColor: "hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-400/40",
    lightColor: "light:text-sky-500 light:border-sky-300 light:hover:bg-sky-50"
  },
  {
    title: "Email",
    href: "mohammedbaba1505@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    hoverColor: "hover:text-gray-400",
    lightColor: "light:text-gray-700 light:border-gray-300 light:hover:bg-gray-100"
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
    value: "+3",
    label: "Years Coding",
  },
  {
    value: "+10",
    label: "Projects Completed",
  },
]
