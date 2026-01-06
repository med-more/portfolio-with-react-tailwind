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
import p2 from "../assets/cooooocking.jpeg"
import p3 from "../assets/auth.jpeg"
import p4 from "../assets/blog.jpeg"
import p5 from "../assets/quiz.jpeg"
import p6 from "../assets/movie.jpeg"
import p7 from "../assets/weather.jpeg"
import p8 from "../assets/constructions.jpeg"
import p9 from "../assets/tasks.jpeg"
import p10 from "../assets/Pportfolio.png"

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

// Skills section data - Updated with company logos
export const SKILLS = [
  {
    name: "Frontend Development",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
        alt="Frontend" 
        className="h-5 w-5"
      />
    ),
    experience: "4 years",
    level: 70,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Building dynamic UIs with React, modern JavaScript, and responsive design patterns",
    projects: 25,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "React.js",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
        alt="React" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 65,
    skillLevel: "Advanced",
    category: "Frontend",
    description: "Advanced React patterns, hooks, context, and state management solutions",
    projects: 30,
    color: "from-cyan-400 via-blue-500 to-blue-600",
  },
  {
    name: "Framer Motion",
    icon: (
      <img 
        src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" 
        alt="Framer Motion" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 70,
    skillLevel: "Advanced",
    category: "Frontend",
    description: "Animation library for React, creating smooth and performant UI animations",
    projects: 20,
    color: "from-purple-500 via-pink-500 to-red-500",
  },
  {
    name: "CSS",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
        alt="CSS3" 
        className="h-5 w-5"
      />
    ),
    experience: "4 years",
    level: 80,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Advanced CSS techniques, animations, and responsive design",
    projects: 35,
    color: "from-blue-500 via-blue-600 to-indigo-600",
  },
  {
    name: "Bootstrap",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
        alt="Bootstrap" 
        className="h-5 w-5"
      />
    ),
    experience: "3 years",
    level: 75,
    skillLevel: "Expert",
    category: "Frontend",
    description: "Rapid UI development, responsive components, and customization",
    projects: 20,
    color: "from-purple-500 via-purple-600 to-indigo-600",
  },
  {
    name: "Backend Development",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
        alt="Backend" 
        className="h-5 w-5"
      />
    ),
    experience: "3 years",
    level: 70,
    skillLevel: "Expert",
    category: "Backend",
    description: "Scalable server-side applications with PHP, Node.js, Express, and microservices architecture",
    projects: 20,
    color: "from-green-400 via-green-500 to-emerald-500",
  },
  {
    name: "Node.js",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
        alt="Node.js" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 75,
    skillLevel: "Advanced",
    category: "Backend",
    description: "Server-side JavaScript, API development, and real-time applications",
    projects: 22,
    color: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    name: "Express.js",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
        alt="Express.js" 
        className="h-5 w-5 brightness-0 invert"
      />
    ),
    experience: "1 year",
    level: 75,
    skillLevel: "Advanced",
    category: "Backend",
    description: "RESTful APIs, middleware architecture, and server-side routing",
    projects: 24,
    color: "from-gray-400 via-gray-500 to-slate-500",
  },
  {
    name: "MongoDB",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
        alt="MongoDB" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 75,
    skillLevel: "Advanced",
    category: "Database",
    description: "NoSQL database design, aggregation pipelines, and performance optimization",
    projects: 20,
    color: "from-green-600 via-green-700 to-emerald-700",
  },
  {
    name: "MySQL",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
        alt="MySQL" 
        className="h-5 w-5"
      />
    ),
    experience: "2 years",
    level: 80,
    skillLevel: "Advanced",
    category: "Database",
    description: "Database design, optimization, and complex queries",
    projects: 15,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "JavaScript (ES6+)",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        alt="JavaScript" 
        className="h-5 w-5"
      />
    ),
    experience: "3 years",
    level: 85,
    skillLevel: "Expert",
    category: "Language",
    description: "Modern JavaScript, async/await, functional programming, and ES6+ features",
    projects: 35,
    color: "from-yellow-400 via-orange-400 to-red-400",
  },
  {
    name: "HTML5",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
        alt="HTML5" 
        className="h-5 w-5"
      />
    ),
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
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
        alt="CSS3" 
        className="h-5 w-5"
      />
    ),
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
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
        alt="TypeScript" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 65,
    skillLevel: "Intermediate",
    category: "Language",
    description: "Type safety, interfaces, generics, and TypeScript features",
    projects: 15,
    color: "from-blue-500 via-blue-600 to-indigo-600",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <img 
        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
        alt="Tailwind CSS" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 70,
    skillLevel: "Advanced",
    category: "Frontend",
    description: "Utility-first CSS framework, responsive design, and custom configurations",
    projects: 25,
    color: "from-cyan-400 via-blue-500 to-blue-600",
  },
  {
    name: "Postman",
    icon: (
      <img 
        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" 
        alt="Postman" 
        className="h-5 w-5"
      />
    ),
    experience: "2 years",
    level: 88,
    skillLevel: "Expert",
    category: "Tools",
    description: "API testing, documentation, and automated testing workflows",
    projects: 20,
    color: "from-orange-400 via-orange-500 to-red-500",
  },
  {
    name: "Docker",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
        alt="Docker" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 60,
    skillLevel: "Intermediate",
    category: "Tools",
    description: "Containerization, Docker Compose, and deployment workflows",
    projects: 12,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "Git & GitHub",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
        alt="Git" 
        className="h-5 w-5"
      />
    ),
    experience: "3 years",
    level: 85,
    skillLevel: "Advanced",
    category: "Tools",
    description: "Version control, collaborative development, and CI/CD workflows",
    projects: 40,
    color: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    name: "Notion",
    icon: (
      <img 
        src="https://www.notion.so/images/logo-ios.png" 
        alt="Notion" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 60,
    skillLevel: "Intermediate",
    category: "Tools",
    description: "Documentation, project management, and knowledge base organization",
    projects: 15,
    color: "from-gray-800 via-gray-900 to-black",
  },
  {
    name: "Trello",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" 
        alt="Trello" 
        className="h-5 w-5"
      />
    ),
    experience: "2 years",
    level: 80,
    skillLevel: "Advanced",
    category: "Tools",
    description: "Project management, task organization, and team collaboration",
    projects: 25,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "ChatGPT",
    icon: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" 
        alt="ChatGPT" 
        className="h-5 w-5"
      />
    ),
    experience: "4 year",
    level: 85,
    skillLevel: "Advanced",
    category: "Tools",
    description: "AI-assisted development, code generation, and problem-solving",
    projects: 15,
    color: "from-green-400 via-green-500 to-emerald-500",
  },
  {
    name: "Draw.io",
    icon: (
      <img 
        src="https://cdn.worldvectorlogo.com/logos/draw-io.svg" 
        alt="Draw.io" 
        className="h-5 w-5"
      />
    ),
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
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
        alt="Figma" 
        className="h-5 w-5"
      />
    ),
    experience: "2 years",
    level: 70,
    skillLevel: "Advanced",
    category: "Design",
    description: "UI/UX design, prototyping, and collaborative design workflows",
    projects: 12,
    color: "from-purple-400 via-purple-500 to-indigo-500",
  },
  {
    name: "JWT & Authentication",
    icon: (
      <img 
        src="https://jwt.io/img/pic_logo.svg" 
        alt="JWT" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 70,
    skillLevel: "Advanced",
    category: "Security",
    description: "Secure authentication, authorization, and user session management",
    projects: 25,
    color: "from-red-400 via-pink-400 to-rose-400",
  },
  {
    name: "Problem Solving",
    icon: (
      <img 
        src="https://cdn-icons-png.flaticon.com/512/1995/1995570.png" 
        alt="Problem Solving" 
        className="h-5 w-5"
      />
    ),
    experience: "4 years",
    level: 90,
    skillLevel: "Expert",
    category: "Soft Skills",
    description: "Analytical thinking, debugging, and creative problem-solving approaches",
    projects: 40,
    color: "from-indigo-400 via-indigo-500 to-purple-500",
  },
  {
    name: "Team Collaboration",
    icon: (
      <img 
        src="https://cdn-icons-png.flaticon.com/512/476/476863.png" 
        alt="Team Collaboration" 
        className="h-5 w-5"
      />
    ),
    experience: "2 years",
    level: 95,
    skillLevel: "Expert",
    category: "Soft Skills",
    description: "Effective communication, pair programming, and agile team collaboration",
    projects: 35,
    color: "from-green-400 via-green-500 to-emerald-500",
  },
  {
    name: "Time Management",
    icon: (
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2387/2387633.png" 
        alt="Time Management" 
        className="h-5 w-5"
      />
    ),
    experience: "4 years",
    level: 88,
    skillLevel: "Expert",
    category: "Soft Skills",
    description: "Project planning, deadline management, and task prioritization",
    projects: 30,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "Adaptability",
    icon: (
      <img 
        src="https://cdn-icons-png.flaticon.com/512/1995/1995570.png" 
        alt="Adaptability" 
        className="h-5 w-5"
      />
    ),
    experience: "4 years",
    level: 92,
    skillLevel: "Expert",
    category: "Soft Skills",
    description: "Quick learning of new technologies and adapting to changing project requirements",
    projects: 35,
    color: "from-purple-400 via-purple-500 to-indigo-500",
  },
  {
    name: "Code Review",
    icon: (
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2387/2387633.png" 
        alt="Code Review" 
        className="h-5 w-5"
      />
    ),
    experience: "3 years",
    level: 85,
    skillLevel: "Expert",
    category: "Soft Skills",
    description: "Thorough code review practices, providing constructive feedback, and maintaining code quality",
    projects: 25,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "Documentation",
    icon: (
      <img 
        src="https://cdn-icons-png.flaticon.com/512/1995/1995570.png" 
        alt="Documentation" 
        className="h-5 w-5"
      />
    ),
    experience: "4 years",
    level: 87,
    skillLevel: "Expert",
    category: "Soft Skills",
    description: "Creating clear and comprehensive technical documentation for projects and APIs",
    projects: 28,
    color: "from-green-400 via-green-500 to-emerald-500",
  },
  {
    name: "Debugging",
    icon: (
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2387/2387633.png" 
        alt="Debugging" 
        className="h-5 w-5"
      />
    ),
    experience: "4 years",
    level: 90,
    skillLevel: "Expert",
    category: "Soft Skills",
    description: "Advanced debugging techniques and systematic problem-solving approaches",
    projects: 32,
    color: "from-red-400 via-red-500 to-pink-500",
  },
  {
    name: "Version Control",
    icon: (
      <img 
        src="https://cdn-icons-png.flaticon.com/512/1995/1995570.png" 
        alt="Version Control" 
        className="h-5 w-5"
      />
    ),
    experience: "4 years",
    level: 93,
    skillLevel: "Expert",
    category: "Soft Skills",
    description: "Expertise in Git workflows, branching strategies, and collaborative development",
    projects: 38,
    color: "from-orange-400 via-orange-500 to-red-500",
  },
  {
    name: "Arabic",
    icon: (
      <img 
        src="https://flagcdn.com/w40/ma.png" 
        alt="Arabic" 
        className="h-5 w-5 rounded-sm"
      />
    ),
    experience: "Native",
    level: 100,
    skillLevel: "Native",
    category: "Languages",
    description: "Native speaker with full professional proficiency",
    projects: 0,
    color: "from-green-400 via-green-500 to-emerald-500",
  },
  {
    name: "French",
    icon: (
      <img 
        src="https://flagcdn.com/w40/fr.png" 
        alt="French" 
        className="h-5 w-5 rounded-sm"
      />
    ),
    experience: "Advanced",
    level: 70,
    skillLevel: "Advanced",
    category: "Languages",
    description: "Professional working proficiency in French",
    projects: 0,
    color: "from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    name: "English",
    icon: (
      <img 
        src="https://flagcdn.com/w40/gb.png" 
        alt="English" 
        className="h-5 w-5 rounded-sm"
      />
    ),
    experience: "Advanced",
    level: 75,
    skillLevel: "Advanced",
    category: "Languages",
    description: "Professional working proficiency in English",
    projects: 0,
    color: "from-red-400 via-red-500 to-pink-500",
  },
  {
    name: "German",
    icon: (
      <img 
        src="https://flagcdn.com/w40/de.png" 
        alt="German" 
        className="h-5 w-5 rounded-sm"
      />
    ),
    experience: "Beginner",
    level: 30,
    skillLevel: "Beginner",
    category: "Languages",
    description: "Intermediate proficiency in German",
    projects: 0,
    color: "from-yellow-400 via-yellow-500 to-orange-500",
  },
  {
    name: "Redux",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
        alt="Redux" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 70,
    skillLevel: "Advanced",
    category: "Frontend",
    description: "State management, Redux Toolkit, and middleware",
    projects: 15,
    color: "from-purple-500 via-purple-600 to-indigo-600",
  },
  {
    name: "Vercel",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" 
        alt="Vercel" 
        className="h-5 w-5"
      />
    ),
    experience: "1 year",
    level: 75,
    skillLevel: "Advanced",
    category: "Tools",
    description: "Deployment, serverless functions, and edge computing",
    projects: 20,
    color: "from-black via-gray-900 to-gray-800",
  },
]

// Education section data
export const EDUCATION = [
  {
    degree: "Formation – Simplon Jobintech (Augmented AI / Frontend)",
    institution: "Simplon Maghreb – Jobintech",
    location: "Casablanca",
    duration: "Oct 2025 – En cours",
    description:
      "J'ai suivi une formation spécialisée en Frontend Augmented AI, orientée vers la création d'interfaces modernes intégrant des outils d'intelligence artificielle pour améliorer l'expérience utilisateur et la productivité du développeur.",
    achievements: [
      "Maîtriser le développement Frontend moderne avec React.js",
      "Utiliser l'IA comme assistant de développement (code, refactorisation, tests, UX)",
      "Comprendre l'intégration de services intelligents dans des applications web",
      "Appliquer les bonnes pratiques professionnelles (clean code, performance, accessibilité)",
      "Développement d'interfaces dynamiques avec React (Hooks, Components, State Management)",
      "Styling moderne avec Tailwind CSS",
      "Consommation et intégration d'API REST",
      "Utilisation d'outils IA pour génération et optimisation de code, aide au debugging, amélioration UX/UI",
      "Travail en mode projet, méthodologie Agile",
      "Collaboration via Git & GitHub"
    ],
  },
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
    /* images: [p1, p1, p1], */ // Add multiple images for carousel
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
    images: [p2], // Add multiple images for carousel
    githubLink: "https://github.com/med-more/Plateforme-de-gestion-de-recettes.git",
    liveLink: "https://cooksecure-globe.netlify.app/",
    tags: ["React", "Tailwindcss", "framer-motion", "React router"],
  },
  {
    id: 3,
    name: "Application de gestion utilisateur",
    description: "App React de gestion des utilisateurs avec vérification d'identité et interface administrateur.",
    image: p3,
    /* images: [p3, p3, p3], */
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
    /* images: [p4, p4, p4], */
    githubLink: "https://github.com/med-more/application-de-blog.git",
    liveLink: "https://example.com",
    tags: ["React", "Json server", "React toastify", "Tailwincss"],
  },
  {
    id: 5,
    name: "Application de Quiz",
    description: "Application de quiz interactive utilisant l'API Trivia, avec suivi de progression du joueur.",
    image: p5,
    /* images: [p5, p5, p5], */
    githubLink: "https://github.com/med-more/Application-de-Quiz-avec-API-Trivia-et-suivi-de-progression.git",
    liveLink: "https://quiz-globe.netlify.app/",
    tags: ["React", "TypeScript", "Trivia API", "Quiz", "REST API"],
  },
  {
    id: 6,
    name: "Application de consultation de films",
    description:
      "App React consommant une API externe pour afficher des informations sur les films, séries et acteurs.",
    image: p6,
    /* images: [p6, p6, p6], */
    githubLink:
      "https://github.com/med-more/Application-de-consultation-de-films-avec-consommation-d-une-API-externe.git",
    liveLink: "https://cinverse-movies.netlify.app/",
    tags: ["React", "OMDb API", "Javascript", "Tailwindcss", "framer motion", "Films", "Séries"],
  },
  {
    id: 7,
    name: "🌤️ WeatherNow : Application Météorologique",
    description:
      "Une application web moderne et intuitive offrant des prévisions météorologiques précises grâce à l'API OpenWeatherMap. Avec une interface responsive et des visualisations dynamiques, WeatherNow permet aux utilisateurs de surveiller les conditions environnementales (qualité de l'air, polluants, visibilité) et de sauvegarder leurs localisations favorites.",
    image: p7,
    /* images: [p7, p7, p7], */
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
    /* images: [p8, p8, p8], */
    githubLink:
      "https://github.com/med-more/ConstructionXpert-Services-Solution-Application-de-Gestion-de-Projets-de-Construction.git",
    liveLink: "https://x-constructions.netlify.app/",
    tags: ["Reactjs", "Tailwindcss", "Express js", "Node.js", "MongoDB", "react hot toast", "framer motion"],
  },
  {
    id: 9,
    name: "gestionnaire des taches",
    description: "une application backend de gestion des tâches en Node.js avec Express.js et MongoDB.",
    image: p9,
    /* images: [p9, p9, p9], */
    githubLink: "https://github.com/med-more/gestionnaire-des-taches.git",
    liveLink: "https://example.com",
    tags: ["Nodejs", "Express", "MongoDB", "postman"],
  },
  {
    id: 10,
    name: "My Portfolio🚀",
    description: "This modern and interactive portfolio, built with React, Vite, and Tailwind CSS, showcases my skills, projects, and professional background.",
    image: p10,
    /* images: [p10, p10, p10], */
    githubLink: "https://github.com/med-more/portfolio-with-react-tailwind.git",
    liveLink: "https://medfoliodev.netlify.app/",
    tags: ["Reactjs", "Tailwindcss", "Framer motion", "Lucide React","Lotties" ],
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

export const INTERNSHIPS = [
  {
    title: "Développeur Full Stack (MERN / PERN)",
    company: "LiadTech",
    duration: "Sep 2025 – Nov 2025",
    location: "Remote",
    description: "Au sein de LiadTech, j'ai participé au développement d'applications web full stack en utilisant des technologies modernes côté frontend et backend. Missions principales: Développement d'applications web avec la stack MERN / PERN, Conception et implémentation d'API REST sécurisées, Développement d'interfaces utilisateur modernes et réutilisables avec React, Connexion frontend ↔ backend et gestion des données, Participation à l'amélioration des performances et de la maintenabilité du code.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Git", "GitHub", "Postman"],
  },
  {
    title: "Full Stack Developer",
    company: "Maroc Pub",
    duration: "June 2024 - August 2024",
    location: "Beni Mellal",
    description: "Development of a rental property management project using PHP. Development of a blog project using PHP Laravel.",
    technologies: ["HTML", "CSS", "BOOTSTRAP", "PHP", "MYSQL", "Git&Github", "Figma"],
  },
  {
    title: "Full Stack Developer",
    company: "Training Eadge Consulting",
    duration: "Mai 2024 - June 2024",
    location: "Beni Mellal",
    description: "Development of a project related to the sale of semi-pharmaceutical medicines.",
    technologies: ["HTML", "CSS", "BOOTSTRAP", "PHP", "MYSQL"],
  }
]

export const CERTIFICATIONS = [
  {
    title: "Full Stack Web Development",
    issuer: "Simplon",
    CertificationDuration: "1 year",
    issueDate: "December 2023",
    expiryDate: "December 2026",
    credentialId: "META-FSWD-2023",
    description: "Comprehensive certification covering frontend and backend development, including React, Node.js, and database management.",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
  },
  
  {
    title: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    issueDate: "24 JUL, 2025",
    description: "Validated skills in core JavaScript concepts including async programming, closures, memory management, and design patterns.",
    skills: ["JavaScript"],
    verificationUrl: "https://www.hackerrank.com/certificates/6b41df9be1ab"
  },
]