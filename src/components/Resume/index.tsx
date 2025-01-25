import { motion } from 'framer-motion'
import { Moon, Sun, Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink } from 'lucide-react'
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={personalInfo.avatar || "https://via.placeholder.com/150"}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 dark:border-blue-400 shadow-lg"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-6"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{personalInfo.location}</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {resumeData.summary}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8"
          >
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{personalInfo.email}</span>
            </a>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{personalInfo.phone}</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center justify-center space-x-6"
          >
            <a 
              href="/resume.pdf" 
              download
              className="btn btn-primary flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
            <a 
              href="#projects"
              className="btn btn-outline flex items-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Projects</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center space-x-6 mt-8"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(resumeData.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold mb-4 capitalize text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                    <motion.div
                      className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: idx * 0.1 }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Component
function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <span className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <span className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// References Component
function References() {
  return (
    <section id="references" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">References</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            {resumeData?.references || "Available upon request"}
          </p>
        </motion.div>
      </div>
    </section>
  );
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
        <References />
      </main>
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 Prince Uwagboe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;