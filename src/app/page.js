import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-full w-full bg-[#030014] text-white">
      <div className="flex flex-col gap-20">
        
        {/* --- Hero Section --- */}
        <section id="about-me" className="relative flex flex-col h-full w-full pt-32">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
          >
            <source src="/videos/blackhole.webm" type="video/webm" />
          </video>
          
          <div className="flex flex-col items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]">
            <div className="h-full w-full flex flex-col items-center gap-5 justify-center m-auto text-center">
              <div className="Welcome-box flex flex-row items-center justify-center py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#b49bff] mr-[10px] h-5 w-5">
                  <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5Z" clipRule="evenodd" />
                </svg>
                <h1 className="Welcome-text text-[13px] text-center">AI/ML Engineer • Computer Engineer • Web Developer</h1>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 mt-6">
                <div className="flex flex-col items-center gap-0 text-5xl md:text-7xl font-bold text-white max-w-[600px]">
                  <span>
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Jeimeen</span>{" "}
                    Chaudhari
                  </span>
                </div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/50 flex-shrink-0 mx-auto md:mx-0 mt-6 md:mt-0">
                  <img
                    alt="Jeimeen (Jony) Chaudhari"
                    draggable="false"
                    loading="lazy"
                    className="object-cover w-full h-full"
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Jeimeen"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-400 my-5 max-w-[600px]">
                Building production-ready AI systems, intelligent assistants, and ML-driven applications.
              </p>

              <div className="flex flex-row justify-center gap-4 flex-wrap">
                <a href="#projects" className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg">
                  View Projects
                </a>
                <a href="/Jeimeen_Resume.pdf" download className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg">
                  Download Resume
                </a>
              </div>
            </div>

            <div className="hidden md:flex w-full justify-center items-center mt-10">
              {/* Optional Hero BG Graphic */}
              <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 blur-3xl shadow-[0_0_100px_rgba(168,85,247,0.4)] animate-pulse -z-10"></div>
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 px-6">
          <div className="w-full h-auto flex flex-col items-center justify-center text-center">
            <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
              <h1 className="Welcome-text text-[13px] px-2 text-center">Why do we fall? So we can learn to pick ourselves up.</h1>
            </div>
            <div className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
              Making apps with modern technologies.
            </div>
            <div className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center">
              Never miss a task, deadline or idea.
            </div>
          </div>

          {/* Render simple list of skills based on their dom */}
          <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center max-w-5xl">
            {[
              { name: 'html', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
              { name: 'css', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
              { name: 'js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
              { name: 'tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
              { name: 'react', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
              { name: 'redux', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
              { name: 'ts', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
              { name: 'next', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
              { name: 'node', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
              { name: 'mongodb', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
              { name: 'postgresql', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
              { name: 'firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
              { name: 'git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
              { name: 'docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
            ].map(skill => (
              <img key={skill.name} alt={skill.name} title={skill.name.toUpperCase()} width="80" height="80" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 mx-2 my-2 bg-white/5 rounded-full p-2 border border-white/10" src={skill.url} />
            ))}
          </div>

          {/* Skills bg video overlay */}
          <div className="w-full h-full absolute top-0 z-[-10] opacity-30 flex items-center justify-center bg-cover pointer-events-none">
            <video className="w-full h-auto object-cover" preload="false" playsInline loop muted autoPlay>
              <source src="/videos/skills-bg.webm" type="video/webm" />
            </video>
          </div>
        </section>

        {/* --- Encryption / Performance Section --- */}
        <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full z-10 px-6 overflow-hidden">
          <div className="absolute w-auto h-auto top-20 z-[5]">
            <div className="text-[30px] md:text-[40px] font-medium text-center text-gray-200">
              Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">&</span> security.
            </div>
          </div>

          <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
             <div className="text-6xl z-20">🔐</div>
             <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B]">
                <h1 className="Welcome-text text-[12px]">Encryption</h1>
             </div>
          </div>

          <div className="absolute z-[20] bottom-[40px] px-[5px]">
            <div className="cursive text-[20px] font-medium text-center text-gray-300">Secure your data with end-to-end encryption.</div>
          </div>
          
          <div className="w-full flex items-start justify-center absolute top-0 -z-10 opacity-60">
            <video loop muted autoPlay playsInline preload="false" className="w-[1200px] max-w-full h-auto">
              <source src="/videos/encryption-bg.webm" type="video/webm" />
            </video>
          </div>
        </div>

        {/* --- Experience & Education --- */}
        <section id="experience" className="flex flex-col items-center justify-center py-20 relative z-[20] px-6">
          <h1 className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
            Experience & Education
          </h1>
          <div className="w-full max-w-6xl">
            {/* Education */}
            <div className="mb-16 flex flex-col items-center">
              <h2 className="text-3xl font-semibold text-white mb-8 border-b border-cyan-500 pb-4 w-fit text-center">Education</h2>
              <div className="space-y-6 w-full max-w-4xl">
                <div className="relative p-6 rounded-lg border border-[#2A0E61] bg-[#0300145e] hover:border-cyan-500 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-cyan-500 rounded-full border-4 border-[#030014] group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="flex flex-col items-center justify-center mb-3">
                    <div className="flex flex-col items-center">
                      <h3 className="text-2xl font-semibold text-white">Bachelor of Engineering in Computer Engineering</h3>
                      <p className="text-lg text-cyan-400">Gec(Surat)</p>
                    </div>
                    <span className="text-gray-400 text-sm md:text-base mt-2">2023 - 2027</span>
                  </div>
                  <p className="text-gray-300">Focused on software development, data structures, algorithms, and machine learning.</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold text-white mb-8 border-b border-purple-500 pb-4 w-fit text-center">Professional Experience</h2>
              <div className="space-y-6 w-full max-w-4xl">
                
                <div className="relative p-6 rounded-lg border border-[#2A0E61] bg-[#0300145e] hover:border-purple-500 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#030014] group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="flex flex-col items-center justify-center mb-3">
                    <div className="flex flex-col items-center">
                      <h3 className="text-2xl font-semibold text-white">AI/ML Training</h3>
                      <p className="text-lg text-purple-400">Shell Edunet (Green Skills & AI Lab)</p>
                    </div>
                    <span className="text-gray-400 text-sm md:text-base mt-2">Jul 2025 — Nov 2025</span>
                  </div>
                  <p className="text-gray-300 mb-4">Completed advanced training in Artificial Intelligence and Machine Learning. Gained practical skills in supervised/unsupervised learning... Worked on hands-on projects involving Python, data visualization (Plotly, Matplotlib), and AI-powered applications.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Python", "AI/ML", "Plotly", "Matplotlib", "Data Preprocessing", "Model Evaluation"].map(t => (
                      <span key={t} className="px-3 py-1 text-xs font-medium text-white bg-purple-500/20 rounded-full border border-purple-500/50">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="relative p-6 rounded-lg border border-[#2A0E61] bg-[#0300145e] hover:border-purple-500 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#030014] group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="flex flex-col items-center justify-center mb-3">
                    <div className="flex flex-col items-center">
                      <h3 className="text-2xl font-semibold text-white">Machine Learning Intern</h3>
                      <p className="text-lg text-purple-400">Unified Mentor</p>
                    </div>
                    <span className="text-gray-400 text-sm md:text-base mt-2">Oct 2025 — Nov 2025</span>
                  </div>
                  <p className="text-gray-300 mb-4">I completed an internship at Unified Mentor where I built four ML projects: Fraud Detection, Lung Cancer Prediction, Phone Price Prediction, and Heart Disease Prediction. I learned data preprocessing, model training, evaluation, and deployment.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Python", "Streamlit", "Machine Learning", "Pandas", "Scikit-learn", "XGBoost"].map(t => (
                      <span key={t} className="px-3 py-1 text-xs font-medium text-white bg-purple-500/20 rounded-full border border-purple-500/50">{t}</span>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects --- */}
        <section id="projects" className="flex flex-col items-center justify-center py-20 px-6">
          <h1 className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">My Projects</h1>
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Project 1 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-purple-500/30 flex flex-col bg-[#0300145e] transition-all duration-300 hover:border-purple-500/60">
              <img alt="Batman Theme" className="w-full h-48 object-cover" src="https://placehold.co/600x400/0a0a1a/a855f7?text=Batman+Theme" />
              <div className="relative p-5 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-semibold text-white">Batman-Theme-Website</h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-3">Interactive web experience inspired by the Batman universe. It delivers a cinematic UI with smooth animations, dark-themed aesthetics, and engaging transitions.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 mb-4">
                   <span className="px-2 py-1 text-xs text-white bg-purple-500/20 rounded-full border border-purple-500/50">Next.js</span>
                   <span className="px-2 py-1 text-xs text-white bg-purple-500/20 rounded-full border border-purple-500/50">Framer Motion</span>
                </div>
                <div className="mt-auto flex justify-center w-full gap-3">
                   <a target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-[#2A0E61] text-xs font-semibold hover:bg-purple-600 transition" href="https://github.com/JeimeenChaudhari/Batman_CJ">Code</a>
                   <a target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-xs font-semibold hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition" href="https://batman-cj.vercel.app">Live</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-purple-500/30 flex flex-col bg-[#0300145e] transition-all duration-300 hover:border-purple-500/60">
              <img alt="Typing Speed" className="w-full h-48 object-cover" src="https://placehold.co/600x400/0a0a1a/a855f7?text=Typing+Speed+Test" />
              <div className="relative p-5 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-semibold text-white">Typing Speed Test</h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-3">A fast, interactive typing speed tester built with React. It measures your typing speed in Words Per Minute (WPM), tracks accuracy, mistakes, and shows detailed results.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 mb-4">
                   <span className="px-2 py-1 text-xs text-white bg-purple-500/20 rounded-full border border-purple-500/50">React</span>
                   <span className="px-2 py-1 text-xs text-white bg-purple-500/20 rounded-full border border-purple-500/50">Vite</span>
                </div>
                <div className="mt-auto flex justify-center w-full gap-3">
                   <a target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-[#2A0E61] text-xs font-semibold hover:bg-purple-600 transition" href="https://github.com/JeimeenChaudhari/Typing_speed_test">Code</a>
                   <a target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-xs font-semibold hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition" href="https://jeimeenchaudhari.github.io/Typing_speed_test/">Live</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-purple-500/30 flex flex-col bg-[#0300145e] transition-all duration-300 hover:border-purple-500/60">
              <img alt="Fraud Detection" className="w-full h-48 object-cover" src="https://placehold.co/600x400/0a0a1a/a855f7?text=Fraud+Detection" />
              <div className="relative p-5 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-semibold text-white">Fraud Detection App</h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-3">A Streamlit app that utilizes machine learning algorithms to detect fraudulent activities in financial transactions, providing users with real-time analysis.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 mb-4">
                   <span className="px-2 py-1 text-xs text-white bg-purple-500/20 rounded-full border border-purple-500/50">Streamlit</span>
                   <span className="px-2 py-1 text-xs text-white bg-purple-500/20 rounded-full border border-purple-500/50">Python</span>
                </div>
                <div className="mt-auto flex justify-center w-full gap-3">
                   <a target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-[#2A0E61] text-xs font-semibold hover:bg-purple-600 transition" href="https://github.com/JeimeenChaudhari/fraud_detection-UMP1">Code</a>
                   <a target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-xs font-semibold hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition" href="https://fraud-detection-ump1.streamlit.app/">Live</a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-purple-500/30 flex flex-col bg-[#0300145e] transition-all duration-300 hover:border-purple-500/60">
              <img alt="BMS Dashboard" className="w-full h-48 object-cover" src="https://placehold.co/600x400/0a0a1a/a855f7?text=BMS+Dashboard" />
              <div className="relative p-5 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-semibold text-white">Battery BMS Dashboard</h3>
                <p className="mt-2 text-sm text-gray-300 line-clamp-3">A comprehensive dashboard for monitoring and managing battery management systems (BMS) in electric vehicles, providing real-time data visualizaton.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 mb-4">
                   <span className="px-2 py-1 text-xs text-white bg-purple-500/20 rounded-full border border-purple-500/50">Streamlit</span>
                   <span className="px-2 py-1 text-xs text-white bg-purple-500/20 rounded-full border border-purple-500/50">Pandas</span>
                </div>
                <div className="mt-auto flex justify-center w-full gap-3">
                   <a target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-[#2A0E61] text-xs font-semibold hover:bg-purple-600 transition" href="https://github.com/JeimeenChaudhari/BMS_dashboard">Code</a>
                   <a target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-xs font-semibold hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition" href="https://bms-dashboardflow.streamlit.app/">Live</a>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* --- Contact --- */}
        <section id="contact" className="flex flex-col items-center justify-center py-20 w-full relative px-6">
          <div className="flex flex-col items-center justify-center mb-10 text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">Get In Touch</h1>
            <p className="text-gray-300">I'm available for freelance and full time work.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-center w-full max-w-5xl gap-10">
            <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center text-center">
              <a href="mailto:jeimeen3001@gmail.com" className="flex flex-col items-center justify-center w-full max-w-sm gap-2 p-4 rounded-xl border border-[#2A0E61] bg-[#0300145e] hover:bg-[#2A0E61] transition-all">
                <div className="flex flex-col items-center text-center">
                  <span className="text-gray-200 font-semibold text-lg">Email</span>
                  <span className="text-purple-400">jeimeen3001@gmail.com</span>
                </div>
              </a>
              <a href="tel:+919316101640" className="flex flex-col items-center justify-center w-full max-w-sm gap-2 p-4 rounded-xl border border-[#2A0E61] bg-[#0300145e] hover:bg-[#2A0E61] transition-all">
                <div className="flex flex-col items-center text-center">
                  <span className="text-gray-200 font-semibold text-lg">Phone</span>
                  <span className="text-purple-400">+91 9316101640</span>
                </div>
              </a>
              <div className="flex flex-col items-center justify-center w-full max-w-sm gap-2 p-4 rounded-xl border border-[#2A0E61] bg-[#0300145e] hover:bg-[#2A0E61] transition-all">
                <div className="flex flex-col items-center text-center">
                  <span className="text-gray-200 font-semibold text-lg">Location</span>
                  <span className="text-purple-400">Surat, Gujarat</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <form className="flex flex-col gap-5 p-8 rounded-2xl border border-[#2A0E61] bg-[#0300145e] shadow-lg shadow-[#2A0E61]/50">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-medium">Your Name</label>
                  <input type="text" placeholder="ex: abc-xyz" className="w-full p-3 rounded-lg bg-[#110C2A] border border-[#2A0E61] text-white focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-medium">Your Email</label>
                  <input type="email" placeholder="ex: abc@xyz.com" className="w-full p-3 rounded-lg bg-[#110C2A] border border-[#2A0E61] text-white focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 font-medium">Message</label>
                  <textarea rows={4} placeholder="Write Your Message" className="w-full p-3 rounded-lg bg-[#110C2A] border border-[#2A0E61] text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
