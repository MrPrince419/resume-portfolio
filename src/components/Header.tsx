import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

interface HeaderProps {
  name: string;
  summary: string;
  links: {
    github: string;
    linkedin: string;
  };
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Header({ name, summary, links, darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="mb-12 text-center">
      <div className="flex justify-end mb-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        >
          {darkMode ? (
            <SunIcon className="w-5 h-5 text-yellow-500" />
          ) : (
            <MoonIcon className="w-5 h-5 text-gray-700" />
          )}
        </motion.button>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        {name}
      </motion.h1>

      <div className="mb-6">
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'UI/UX Enthusiast',
            2000,
            'Problem Solver',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl text-blue-600 dark:text-blue-400"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
      >
        {summary}
      </motion.p>

      <div className="flex justify-center space-x-4">
        <motion.a
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FaGithub className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <FaLinkedin className="w-6 h-6" />
        </motion.a>
      </div>
    </header>
  );
}

export default Header;
