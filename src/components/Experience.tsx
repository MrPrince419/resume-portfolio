import { motion } from 'framer-motion'

interface ExperienceProps {
  experience: Array<{
    title: string
    company: string
    period: string
    location?: string
    responsibilities: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    period: string
    location: string
    highlights: string[]
  }>
}

function Experience({ experience, education }: ExperienceProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{job.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{job.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300">{responsibility}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-bold my-6 text-gray-900 dark:text-white">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{edu.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300">{highlight}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience
