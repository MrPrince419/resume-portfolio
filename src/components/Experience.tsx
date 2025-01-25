import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  date: string;
  description: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
  education: EducationItem[];
}

function Experience({ experience, education }: ExperienceProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {experience.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:shadow-lg after:content-[''] after:absolute after:left-[5px] after:top-10 after:w-[2px] after:h-[calc(100%-40px)] after:bg-blue-200 dark:after:bg-blue-900 last:after:hidden"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">
              {item.company}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {item.date}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {item.description.map((desc, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300">
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold my-8 text-gray-900 dark:text-white"
      >
        Education
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:shadow-lg after:content-[''] after:absolute after:left-[5px] after:top-10 after:w-[2px] after:h-[calc(100%-40px)] after:bg-blue-200 dark:after:bg-blue-900 last:after:hidden"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.degree}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">
              {item.school}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {item.date}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {item.description.map((desc, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300">
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;
