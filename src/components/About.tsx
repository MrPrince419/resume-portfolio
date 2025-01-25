import { motion } from 'framer-motion';

interface AboutProps {
  intro: string;
}

function About({ intro }: AboutProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        {intro}
      </motion.p>
    </motion.section>
  );
}

export default About;
