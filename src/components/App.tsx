import { resumeData } from '../data/resume'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Header personalInfo={resumeData.personalInfo} />
      <main>
        <About intro={resumeData.intro} />
        <Experience experience={resumeData.experience} education={resumeData.education} />
        <Skills skills={resumeData.skills} />
        <Projects projects={resumeData.projects} />
        <Contact personalInfo={resumeData.personalInfo} />
      </main>
    </div>
  )
}

export default App
