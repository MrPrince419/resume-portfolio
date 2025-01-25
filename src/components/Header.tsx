import { motion } from 'framer-motion'

interface HeaderProps {
  personalInfo: {
    name: string
    location: string
    email: string
    phone: string
    links: {
      linkedin: string
      github: string
      projects: string
    }
  }
}

function Header({ personalInfo }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
        {personalInfo.name}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
        {personalInfo.location}
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href={personalInfo.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          GitHub
        </a>
        <a
          href={personalInfo.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Email
        </a>
      </div>
    </motion.header>
  )
}

export default Header
