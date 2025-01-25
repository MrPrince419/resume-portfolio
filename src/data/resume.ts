interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  avatar?: string;
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
  github?: string;
  image?: string;
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
  references?: string;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Prince Uwagboe",
    location: "Canada",
    email: "uwagboe.o.p@gmail.com",
    phone: "249-356-4705",
    linkedin: "https://linkedin.com/in/prince-uwagboe",
    github: "https://github.com/mrprince419",
    avatar: "/resume picture.jpg"
  },
  summary: "I am a full-stack developer with a background in computer science from Algoma University. I specialize in Python, JavaScript/TypeScript, React.js, Node.js, Django, Flask, AWS, Docker, and SQL/NoSQL. With experience in technical support and CRM management, I've created projects like Social Media App, and Mood-Based Music Player. My technical proficiency, analytical skills, and commitment to continuous learning make me an invaluable asset to any organization.",
  currentFocus: "Currently pursuing a Bachelor's degree in Computer Science while working on full-stack web development projects.",
  professionalGoals: "Aiming to leverage my technical skills and experience to contribute to innovative software solutions while continuing to grow as a developer.",
  experience: [
    {
      title: "IT Support Intern",
      company: "Cita Marketplace",
      period: "Feb 2024 – Jan 2025",
      responsibilities: [
        "Provided technical assistance to clients and employees, resolving hardware and software issues via email and chat",
        "Assisted with setting up and maintaining computer systems and networks",
        "Updated and maintained the IT knowledge base for common issues and solutions"
      ]
    },
    {
      title: "Customer Service Representative",
      company: "Mary's Place",
      period: "Mar 2022 – Dec 2022",
      responsibilities: [
        "Assisted customers with inquiries, reservations, and order placements via phone, email, and chat",
        "Resolved customer complaints and issues promptly, ensuring high levels of customer satisfaction",
        "Processed online orders and managed order tracking"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science, Computer Science",
      school: "Algoma University",
      period: "2023 – present",
      highlights: [
        "AWS Workshop",
        "Volunteer, Tech Support Team",
        "Mobile App Development Workshop"
      ]
    }
  ],
  skills: {
    frontend: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "TailwindCSS"
    ],
    backend: [
      "Node.js",
      "Python",
      "Django",
      "Flask",
      "SQL/NoSQL"
    ],
    cloud: [
      "AWS",
      "Docker",
      "Netlify"
    ],
    other: [
      "Technical Support",
      "Troubleshooting",
      "CRM Management",
      "Git"
    ]
  },
  projects: [
    {
      name: "Mood Based Music Player",
      description: "A web application that detects user mood and creates personalized playlists. Features real-time mood detection, music upload, and mood-based playlist organization.",
      technologies: ["TensorFlow.js", "Web Audio API", "JavaScript", "Tailwind CSS"],
      link: "https://mood-player.netlify.app",
      github: "https://github.com/mrprince419/mood-player",
      image: "https://via.placeholder.com/800x400?text=Mood+Based+Music+Player"
    },
    {
      name: "Social Media App",
      description: "A social media platform with user authentication, post creation, and real-time interactions. Features image uploads and live previews.",
      technologies: ["JavaScript", "HTML5", "CSS3", "DiceBear API"],
      link: "https://social-app.netlify.app",
      github: "https://github.com/mrprince419/social-app",
      image: "https://via.placeholder.com/800x400?text=Social+Media+App"
    },
    {
      name: "Shopping Cart",
      description: "An e-commerce shopping cart with interactive product browsing and real-time updates. Built with modern UI components and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      link: "https://shopping-cart.netlify.app",
      github: "https://github.com/mrprince419/shopping-cart",
      image: "https://via.placeholder.com/800x400?text=Shopping+Cart"
    },
    {
      name: "Voting System",
      description: "A polling system with user authentication, real-time form validation, and dynamic poll creation. Features localStorage sessions and real-time vote counting.",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      link: "https://voting-system.netlify.app",
      github: "https://github.com/mrprince419/voting-system",
      image: "https://via.placeholder.com/800x400?text=Voting+System"
    },
    {
      name: "Calorie Calculator",
      description: "A health tracking application with BMR calculation, nutritional goals, and progress visualization using Chart.js.",
      technologies: ["React", "JavaScript", "Chart.js"],
      link: "https://calorie-calc.netlify.app",
      github: "https://github.com/mrprince419/calorie-calculator",
      image: "https://via.placeholder.com/800x400?text=Calorie+Calculator"
    }
  ],
  references: "Available upon request"
};
