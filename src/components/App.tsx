import { useState } from 'react'
import { ThemeProvider } from './ThemeProvider'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import resumeData from '../data/resume'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Header
            name={resumeData.personalInfo.name}
            intro={resumeData.intro}
            links={resumeData.personalInfo.links}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <About summary={resumeData.intro} />
          <Experience
            experience={resumeData.experience}
            education={resumeData.education}
          />
          <Projects projects={resumeData.projects} />
          <Skills skills={resumeData.skills} />
          <Contact
            email={resumeData.personalInfo.email}
            phone={resumeData.personalInfo.phone}
            location={resumeData.personalInfo.location}
            links={resumeData.personalInfo.links}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
