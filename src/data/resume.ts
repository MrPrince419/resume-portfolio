interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  highlights?: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface Skills {
  [key: string]: string[];
}

interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  currentFocus: string;
  professionalGoals: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Prince Uwagboe",
    location: "Lagos, Nigeria",
    email: "uwagboeprince@gmail.com",
    phone: "+234 803 123 4567",
    linkedin: "https://linkedin.com/in/prince-uwagboe",
    github: "https://github.com/mrprince419"
  },
  summary: "Passionate Full Stack Developer with expertise in building modern web applications using React, TypeScript, and Node.js. Committed to creating efficient, scalable, and user-friendly solutions.",
  currentFocus: "Currently focusing on expanding my knowledge in cloud technologies and microservices architecture while building robust full-stack applications.",
  professionalGoals: "Aiming to become a technical leader who can architect complex systems and mentor other developers while staying hands-on with coding.",
  experience: [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      responsibilities: [
        "Developed and maintained multiple React-based web applications",
        "Implemented RESTful APIs using Node.js and Express",
        "Optimized database queries and improved application performance",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Ltd",
      period: "2020 - 2022",
      responsibilities: [
        "Built responsive user interfaces using React and TypeScript",
        "Implemented state management solutions using Redux and Context API",
        "Worked with UI/UX designers to implement pixel-perfect designs",
        "Mentored junior developers and conducted code reviews"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Lagos",
      period: "2016 - 2020",
      highlights: [
        "First Class Honours",
        "Best Graduating Student in Computer Science",
        "President of the Computer Science Student Association"
      ]
    }
  ],
  skills: {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "HTML5/CSS3"
    ],
    backend: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "RESTful APIs",
      "GraphQL"
    ],
    database: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis"
    ],
    tools: [
      "Git",
      "Docker",
      "AWS",
      "Jest",
      "CI/CD",
      "Webpack"
    ]
  },
  projects: [
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      link: "https://github.com/mrprince419/ecommerce-platform"
    },
    {
      name: "Task Management System",
      description: "A collaborative task management application with real-time updates and team features",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      link: "https://github.com/mrprince419/task-manager"
    },
    {
      name: "Portfolio Website",
      description: "A modern portfolio website built with React and TypeScript",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/mrprince419/portfolio"
    }
  ]
};
