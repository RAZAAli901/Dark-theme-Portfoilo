export const portfolioData = {
  personal: {
    name: "Jeimeen Chaudhari",
    initials: "Jeimeen (Jony)",
    roles: ["AI/ML Engineer", "Computer Engineer", "Web Developer"],
    description: "Building production-ready AI systems, intelligent assistants, and ML-driven applications.",
    email: "jeimeen3001@gmail.com",
    phone: "+91 9316101640",
    location: "Surat, Gujarat",
    heroImage: "/jeimeen-photo.jpg", 
    logoImage: "/jeimeen-photo-2.jpg",
    resumeLink: "/Jeimeen_Resume.pdf" 
  },
  socials: {
    github: "https://github.com/JeimeenChaudhari",
    linkedin: "https://www.linkedin.com/in/jeimeen-chaudhari-3a680028b/",
    twitter: "https://x.com/Jeimeen3031",
    youtube: "https://youtube.com/@jeimen_editzzz",
    discord: "https://discord.gg/v5rthNq8hr",
    instagram: "https://instagram.com/jeimeen_Editzzz",
    facebook: "https://facebook.com"
  },
  marqueeSkills: [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "MongoDB", "PostgreSQL", "Docker", "Figma", "GraphQL", "Redux", "Tailwind"
  ],
  detailedSkills: {
    row1: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "N" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "TW" },
      { name: "Node.js", icon: "🟩" },
      { name: "Python", icon: "🐍" },
    ],
    row2: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Figma", icon: "🎨" },
      { name: "Git", icon: "🐙" },
    ]
  },
  experience: [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Engineering in Computer Engineering",
      entity: "Gec(Surat)",
      date: "2023 - 2027",
      description: "Focused on software development, data structures, algorithms, and machine learning.",
      tags: []
    },
    {
      id: 2,
      type: "work",
      title: "AI/ML Training",
      entity: "Shell Edunet (Green Skills & AI Lab)",
      date: "Jul 2025 — Nov 2025",
      description: "Completed advanced training in Artificial Intelligence and Machine Learning. Gained practical skills in supervised/unsupervised learning, data preprocessing, and model evaluation. Worked on hands-on projects involving Python, data visualization (Plotly, Matplotlib), and AI-powered applications. Self-motivated, with a strong sense of personal responsibility. Excellent communication skills, both verbal and written. Proven ability to learn quickly and adapt to new situations. Skilled at working independently and collaboratively in a team environment.",
      tags: ["Python", "AI/ML", "Plotly", "Matplotlib", "Data Preprocessing", "Model Evaluation"]
    },
    {
      id: 3,
      type: "work",
      title: "Machine Learning Intern",
      entity: "Unified Mentor",
      date: "10-8-25 to 10-11-25",
      description: "I completed an internship at Unified Mentor where I built four ML projects: Fraud Detection, Lung Cancer Prediction, Phone Price Prediction, and Heart Disease Prediction. I learned data preprocessing, model training, evaluation, and deployment. The experience strengthened my practical machine-learning skills and improved my end-to-end project execution.",
      tags: ["Python", "Streamlit", "Machine Learning", "Pandas", "Scikit-learn", "XGBoost"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Batman-Theme-Website",
      description: "Interactive web experience inspired by the Batman universe. It delivers a cinematic UI with smooth animations, dark-themed aesthetics, and engaging transitions. Built for showcasing creativity and frontend skills, it highlights modern design, responsiveness, and a premium user interface tailored for an immersive browsing experience.",
      image: "/projects/batman-cj.png", 
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveLink: "https://batman-cj.vercel.app/",
      githubLink: "https://github.com/JeimeenChaudhari/Batman_CJ"
    },
    {
      id: 2,
      title: "Typing Speed Test",
      description: "A fast, interactive typing speed tester built with React. It measures your typing speed in Words Per Minute (WPM), tracks accuracy, mistakes, and shows detailed results after completion. Perfect for improving typing skills with real-time feedback and a modern UI.",
      image: "/projects/Typing_Speed_Test.jpg", 
      tags: ["React", "Vite", "JavaScript", "gh-pages"],
      liveLink: "https://jeimeenchaudhari.github.io/Typing_speed_test/",
      githubLink: "https://github.com/JeimeenChaudhari/Typing_speed_test"
    },
    {
      id: 3,
      title: "Fraud-detction Streamlit",
      description: "Made Project Of Unified Mentor For Internship, A Streamlit app that utilizes machine learning algorithms to detect fraudulent activities in financial transactions, providing users with real-time analysis and insights.",
      image: "/projects/project5.jpg", 
      tags: ["Streamlit", "Python", "Scikit-learn", "Plotly"],
      liveLink: "https://fraud-detection-ump1.streamlit.app/",
      githubLink: "https://github.com/JeimeenChaudhari/fraud_detection-UMP1"
    },
    {
      id: 4,
      title: "Battery_BMS_Dashboard",
      description: "A comprehensive dashboard for monitoring and managing battery management systems (BMS) in electric vehicles, providing real-time data visualization and analytics.",
      image: "/projects/Battery-Bms.jpg", 
      tags: ["Streamlit", "Python", "Pandas", "DashBoard"],
      liveLink: "https://bms-dashboardflow.streamlit.app/",
      githubLink: "https://github.com/JeimeenChaudhari/BMS_dashboard"
    }
  ]
};
