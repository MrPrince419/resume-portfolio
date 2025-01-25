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

  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Tools', items: skills.tools },
    { title: 'Databases', items: skills.databases },
  ];

  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full"
                >
                  <span className="text-blue-800 dark:text-blue-200">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
