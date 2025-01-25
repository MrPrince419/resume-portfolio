import { motion } from 'framer-motion'
import { Moon, Sun, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import { resumeData } from '../../data/resume'
import { useTheme } from '../../context/ThemeContext'

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => {
        if (theme === 'dark') {
          setTheme('light')
        } else if (theme === 'light') {
          setTheme('system')
        } else {
          setTheme('dark')
        }
      }}
      aria-label="Toggle theme"
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : theme === "system" ? <Sun className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  )
}

// Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

// Hero Component
function Hero() {
  const { personalInfo } = resumeData
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{personalInfo.name}</h1>
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{personalInfo.location}</span>
        </div>
        <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-1 hover:text-gray-900 dark:hover:text-gray-100">
            <Mail className="w-4 h-4" />
            <span>{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-1 hover:text-gray-900 dark:hover:text-gray-100">
            <Phone className="w-4 h-4" />
            <span>{personalInfo.phone}</span>
          </a>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
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
            <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
            <p>{resumeData.currentFocus}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Professional Goals</h3>
            <p>{resumeData.professionalGoals}</p>
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
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{job.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">{resp}</li>
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
        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{edu.period}</p>
              {edu.highlights && (
                <ul className="list-disc list-inside space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main App Component
function App() {
  return (
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
  )
}

export default App;