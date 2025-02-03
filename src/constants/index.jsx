import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { 
  BiLogoJavascript, 
  BiLogoPostgresql 
} from "react-icons/bi";
import { 
  SiMongodb, 
  SiExpress, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiTailwindcss 
} from "react-icons/si";
import { 
  FaNodeJs, 
  FaReact 
} from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Mohammed Baba",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with Html and CSS also bootstrap and jquery to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/med-more/Portfolio-Dynamique",
  },
  {
    id: 2,
    name: "Personal Portfolio version 2",
    description:
      "A personal portfolio website built with Reactjs and Tailwind CSS also framer motion to showcase my skills, projects, and contact information.",
    image: projectImage2,
    githubLink: "https://github.com/med-more/portfolio-with-react-tailwind",
  },
  {
    id: 3,
    name: "weather Application",
    description:
      "An interactive web application that allows users to view real-time weather forecasts for different cities. The application should include an innovative feature for managing a list of favorite cities to provide a personalized and engaging experience.",
    image: projectImage3,
    githubLink: "https://github.com/med-more/Meteo-Application",
  },
  {
    id: 4,
    name: "start-up",
    description:
      "A team project the object is creating a website to introducing our team that project created with html, css, bootstrap, js and AOS for animations",
    image: projectImage4,
    githubLink: "https://github.com/med-more/start-up",
  },
  {
    id: 5,
    name: "Blog static Platform",
    description:
      "A blogging platform developed with html and css .",
    image: projectImage5,
    githubLink: "https://github.com/med-more/Blog-Statique",
  },
  {
    id: 6,
    name: "Task Manager",
    description:
      "A backend task management application using Node.js, Express.js, and MongoDB.",
    image: projectImage6,
    githubLink: "https://github.com/med-more/gestionnaire-des-taches",
  },
];

export const BIO = [
  "Mohammed Baba is a passionate web developer with a strong foundation in full-stack development. With nearly two years of experience, he has worked on a variety of web applications and websites, showcasing his expertise in HTML, CSS, JavaScript, PHP, and Laravel.",
  "Holding a specialized diploma in software development, Mohammed has successfully built several projects, including a pharmaceutical sales management system, a rental property management platform, and a dynamic blog application. His proficiency extends to Bootstrap, Git, GitHub, and database modeling (Merise, UML), allowing him to craft efficient and scalable solutions.",
  "Dedicated to continuous learning, he has earned certifications in Full-Stack JavaScript Development (Simplon) and AI Fundamentals (Elements of AI). Beyond technical skills, Mohammed is recognized for his strong teamwork, adaptability, and commitment to excellence in every project he undertakes.",
];

export const SKILLS = [
  {
    icon: <BiLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "SQL",
    experience: "1+ year",
  },
  {
    icon: <SiExpress className="text-4xl text-gray-400 lg:text-5xl" />,
    name: "Express.js",
    experience: "1.5+ years",
  },
  {
    icon: <SiHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    experience: "2+ years",
  },
  {
    icon: <SiCss3 className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
    experience: "2+ years",
  },
  {
    icon: <SiBootstrap className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "2+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <FaReact className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  }
];


export const EDUCATION = [
  {
    degree: "Specialized Technician Diploma in Software Development",
    institution: "Prosec Private Institute, Beni Mellal",
    duration: "2024",
    description:
      "Acquired advanced skills in software development, including programming languages such as HTML, CSS, JavaScript, PHP, and Laravel. Gained hands-on experience in database management, web development frameworks, and software modeling using UML and Merise.",
  },
  {
    degree: "Full-Stack JavaScript Web Developer Certificate",
    institution: "Simplon",
    duration: "2025",
    description:
      "Completed an intensive web development program focusing on JavaScript, React, Node.js, and MongoDB. Worked on hands-on projects and built full-stack applications.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
