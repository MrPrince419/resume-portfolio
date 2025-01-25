import { motion } from 'framer-motion'

interface SkillsProps {
  skills: Array<{
    category: string
    items: string[]
  }>
}

function Skills({ skills }: SkillsProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
