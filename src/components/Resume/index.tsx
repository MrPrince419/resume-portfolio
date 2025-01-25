import { motion } from 'framer-motion'
import { Moon, Sun, Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink } from 'lucide-react'
import { resumeData } from '../../data/resume'
import { useTheme } from '../../context/ThemeContext'
import { getAssetPath } from '../../utils/paths'

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
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="relative w-48 h-48 lg:w-64 lg:h-64"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <img
                src={getAssetPath(resumeData.personalInfo.avatar)}
                alt={resumeData.personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {resumeData.personalInfo.name}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {resumeData.summary}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="/resume.pdf"
                  className="btn btn-primary"
                  download
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
                <a
                  href="#projects"
                  className="btn btn-outline"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{resumeData.personalInfo.location}</span>
                </div>
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <Mail className="w-5 h-5" />
                  <span>{resumeData.personalInfo.email}</span>
                </a>
                <a
                  href={`tel:${resumeData.personalInfo.phone}`}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <Phone className="w-5 h-5" />
                  <span>{resumeData.personalInfo.phone}</span>
                </a>
                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
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
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              {project.image && (
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={getAssetPath(project.image)}
                    alt={project.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm py-2"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-sm py-2"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
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