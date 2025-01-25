import { useState, useEffect, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Mail, Phone, Linkedin, Github } from 'lucide-react'

// Theme Context
type Theme = "dark" | "light" | "system"
const ThemeProviderContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void } | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

function ThemeProvider({ children, defaultTheme = "dark", storageKey = "portfolio-theme" }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme === "system" ? 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") 
      : theme)
  }, [theme])

  return (
    <ThemeProviderContext.Provider value={{
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
    }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  )
}

// Navbar Component
function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const element = section as HTMLElement
        if (window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold">Prince Uwagboe</span>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-8">
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

// Hero Component
function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Prince Uwagboe</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Full Stack Developer
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:uwagboe.o.p@gmail.com" className="hover:text-blue-600">
            <Mail className="w-6 h-6" />
          </a>
          <a href="tel:2493564705" className="hover:text-blue-600">
            <Phone className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/your-profile" className="hover:text-blue-600">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/your-profile" className="hover:text-blue-600">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

// Skills Component
const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "HTML/CSS", proficiency: 90 },
      { name: "TailwindCSS", proficiency: 85 },
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "Django", proficiency: 80 },
      { name: "Flask", proficiency: 80 },
    ]
  },
  // ... other categories
]

function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skillCategories.map(category => (
          <div key={category.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Projects Component
const projects = [
  {
    title: "Mood Based Music Player",
    date: "Dec 2024",
    description: "Real-time mood detection music player with playlist organization",
    tech: ["TensorFlow.js", "Web Audio API", "JavaScript", "Tailwind CSS"],
    features: [
      "Real-time mood detection",
      "Music upload",
      "Drag-and-drop interface",
      "Dark mode support"
    ]
  },
  // ... other projects
]

function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">{project.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {project.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// Main App Component
export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-screen w-screen flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Navbar />
              <main>
                <Hero />
                <Skills />
                <Projects />
              </main>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
} 