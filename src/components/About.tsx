import { motion } from 'framer-motion';

interface AboutProps {
  summary: string;
}

function About({ summary }: AboutProps) {
  if (!summary) return null;
  
  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 dark:text-gray-300"
      >
        {summary}
      </motion.p>
    </section>
  );
}

export default About;
