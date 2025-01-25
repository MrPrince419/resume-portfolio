import { motion } from 'framer-motion'

interface ProjectProps {
  projects: Array<{
    name: string
    date: string
    tech: string[]
    features: string[]
    deployment: string
    demoUrl: string
    sourceUrl: string
  }>
}

function Projects({ projects }: ProjectProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.date}</p>
            
            <div className="mb-4">
              <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Features</h4>
              <ul className="list-disc list-inside space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Live Demo
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
