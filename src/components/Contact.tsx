import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactProps {
  email: string;
  phone: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
  };
}

function Contact({ email, phone, location, links }: ContactProps) {
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
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        Contact
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div variants={item} className="space-y-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${email}`}
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaEnvelope className="w-5 h-5" />
            <span>{email}</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${phone}`}
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaPhone className="w-5 h-5" />
            <span>{phone}</span>
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
          >
            <FaMapMarkerAlt className="w-5 h-5" />
            <span>{location}</span>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
