import { motion } from 'framer-motion'

interface AboutProps {
  intro: string
  summary: string
}

function About({ intro, summary }: AboutProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
      <div className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">{intro}</p>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      </div>
    </motion.section>
  )
}

export default About
