import { motion } from 'framer-motion';

interface AboutProps {
  about: string;
}

function About({ about }: AboutProps) {
  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {about}
        </p>
      </motion.div>
    </section>
  );
}

export default About;
