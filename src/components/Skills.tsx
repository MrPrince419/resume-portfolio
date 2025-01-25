import { motion } from 'framer-motion';

interface SkillsProps {
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    databases: string[];
  };
}

function Skills({ skills }: SkillsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
                className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {skills.databases.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
                className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
