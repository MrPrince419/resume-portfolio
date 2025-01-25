import { resumeData } from '../data/resume'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header personalInfo={resumeData.personalInfo} />
        <About intro={resumeData.intro} summary={resumeData.summary} />
        <Experience 
          experience={resumeData.experience} 
          education={resumeData.education} 
        />
        <Projects projects={resumeData.projects} />
        <Skills skills={resumeData.skills} />
        <Contact personalInfo={resumeData.personalInfo} />
      </div>
    </div>
  )
}

export default App
