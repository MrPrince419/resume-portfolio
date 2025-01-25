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

  const skillItem = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.15 }
    }
  };

  const skillCategories = [
    { title: 'Languages', items: skills.languages, color: 'blue' },
    { title: 'Frameworks', items: skills.frameworks, color: 'green' },
    { title: 'Tools', items: skills.tools, color: 'purple' },
    { title: 'Databases', items: skills.databases, color: 'orange' },
  ];

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
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={item}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  variants={skillItem}
                  initial="initial"
                  whileHover="hover"
                  className={`px-3 py-1 bg-${category.color}-100 dark:bg-${category.color}-900 text-${category.color}-800 dark:text-${category.color}-200 rounded-full text-sm cursor-default`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
