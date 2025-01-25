import { motion } from 'framer-motion'

interface ContactProps {
  personalInfo: {
    email: string
    phone: string
    links: {
      linkedin: string
      github: string
    }
  }
}

function Contact({ personalInfo }: ContactProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always open to new opportunities and collaborations.
            </p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {personalInfo.phone}
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
