import { useState, useEffect, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import { resumeData } from './data/resume'

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
    { id: 'education', label: 'Education' },
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
  const { personalInfo } = resumeData;
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{personalInfo.name}</h1>
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{personalInfo.location}</span>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
          Full Stack Developer
        </p>
        <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 mb-8">
          Portfolio: <a href="https://mrprince419.github.io/resume-portfolio/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            mrprince419.github.io/resume-portfolio
          </a>
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600" title="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-600" title="Phone">
            <Phone className="w-6 h-6" />
          </a>
          <a href={personalInfo.links.linkedin} className="hover:text-blue-600" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={personalInfo.links.github} className="hover:text-blue-600" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

// About Component
function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">{resumeData.summary}</p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
            <ul className="list-disc pl-6">
              {resumeData.currentFocus.map((focus, index) => (
                <li key={index}>{focus}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Professional Goals</h3>
            <ul className="list-disc pl-6">
              {resumeData.professionalGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// Experience Component
function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-12">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{job.period} {job.location && `| ${job.location}`}</p>
              <ul className="list-disc pl-6 space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Component
function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{edu.period} | {edu.location}</p>
            <ul className="list-disc pl-6 space-y-2">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// Skills Component
function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.skills.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Component
function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Deployment:</span> {project.deployment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main App Component
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </main>
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
          <p> 2024 Prince Uwagboe. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App;