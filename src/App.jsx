import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

//Importing the projects files 
import cnrcImage from './assets/images/CNRC.png';
import cnrcVideo from './assets/Videos/CNRC.mp4';

import moneywiseImage from './assets/images/Money Wise.png';
import moneywiseVideo from './assets/Videos/Money Wise.mp4';

const YOUR_PUBLIC_KEY = 'AtZz5PEgra82HqJ9K'; // Replace with your EmailJS public key
const YOUR_SERVICE_ID = 'service_nhmvvl9'; // Replace with your Service ID from EmailJS
const YOUR_TEMPLATE_ID = 'template_usjz0qk'; // Replace with your Template ID from EmailJS



export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [projects, setProjects] = useState([
      {
      id: 1,
      title: "Automated Data Visualization Platform",
      description: "Developed a full-stack platform that scrapes, cleans, and visualizes real-time data. The system automatically updates charts and dashboards whenever the source website content changes.",
      image: cnrcImage,
      video: cnrcVideo,
      tags: ["Python", "Scrapy", "Selenium", "React", "Data Visualization", "Automation"]
    }
    ,
    {
  id: 2,
  title: "Smart Expense Tracking App",
  description: "Developed a smart financial tracking app designed to help users manage and visualize their expenses across multiple periods — daily, weekly, and monthly. The app provides personalized insights, spending breakdowns, and budgeting assistance.",
  image: moneywiseImage,
  video: moneywiseVideo,
  tags: ["Flutter", "Supabase", "Dart", "REST API", "Data Visualization", "Firebase"]
},
{
  id: 3,
  title: "Coming Soon",
  description: "",
  image: "https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg",
  video: "https://static.vecteezy.com/system/resources/previews/031/744/157/mp4/coming-soon-text-animation-on-black-background-free-video.mp4",
  tags: [""]
}

  ]);

  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "React.js", icon: "⚛️" },
    { name: "Flutter", icon: "📱" },
    { name: "Scrapy", icon: "🕷️" },
    { name: "Selenium", icon: "🌐" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🤖" },
    { name: "Pandas", icon: "📊" },
    { name: "BeautifulSoup", icon: "🍜" },
    { name: "Playwright", icon: "🎭" },
    { name: "PyPDF2", icon: "📄" }
  ];

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    description: '',
    company: ''
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(YOUR_PUBLIC_KEY);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContactSubmit = async () => {
    if (!contactForm.name || !contactForm.email || !contactForm.description) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        phone: contactForm.phone || 'Not provided',
        job_title: contactForm.jobTitle || 'Not provided',
        message: contactForm.description,
        company: 'XeroAI',  // Add this line
        to_email: 'xerofer.freelance@gmail.com' // Your email address
      };

      await emailjs.send(
        YOUR_SERVICE_ID,    // Replace with your Service ID from EmailJS
        YOUR_TEMPLATE_ID,   // Replace with your Template ID from EmailJS
        templateParams
      );

      alert('Message sent successfully! 🚀');
      setContactForm({ name: '', email: '', phone: '', jobTitle: '', description: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };



  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .glass {
          background: ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.25)'};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.4)'};
        }
        .glass-hover:hover {
          background: ${darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.35)'};
          transform: translateY(-5px);
        }
        .floating { animation: float 6s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .fade-in { animation: fadeIn 0.3s ease-in; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-4 md:px-6 py-4 flex justify-between items-center shadow-2xl">
          <h1 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
            XeroAI
          </h1>
          <div className="flex items-center gap-3 md:gap-6">
            <a href="#about" className={`text-sm md:text-base ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors hidden md:block`}>About</a>
            <a href="#tech" className={`text-sm md:text-base ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors hidden md:block`}>Tech</a>
            <a href="#projects" className={`text-sm md:text-base ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors hidden md:block`}>Projects</a>
            <a href="#contact" className={`text-sm md:text-base ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="glass p-2 rounded-xl transition-all duration-300 hover:scale-110"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-purple-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-6 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="floating">
                  <h2 className={`text-4xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r ${darkMode ? 'from-purple-400 via-pink-400 to-blue-400' : 'from-purple-600 via-pink-600 to-blue-600'} bg-clip-text text-transparent`}>
                    XeroAI
                  </h2>
                </div>
                <h3 className={`text-xl md:text-3xl mb-4 md:mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Artificial Intelligence Engineer | Data Scraping Specialist
                </h3>
                <p className={`text-base md:text-lg mb-6 md:mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  I am an Artificial Intelligence Engineer and Data Scraping Specialist with a solid foundation in software engineering. I specialize in building intelligent, automated solutions by combining AI technologies with data extraction and software development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="#contact" className={`glass glass-hover px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Get In Touch
                  </a>
                  <a href="#projects" className={`glass glass-hover px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    View Work
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-purple-600 to-pink-600' : 'from-purple-400 to-pink-400'} rounded-full blur-3xl opacity-30 glow`}></div>
                  <div className="relative glass rounded-full p-6 md:p-8 shadow-2xl">
                    <img 
  src="XeroAI.png" 
  alt="XeroAI Logo" 
  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Data Scraping & Extraction",
                desc: "Expert in extracting and visualizing data from diverse sources (websites, PDFs, XML, JSON), leveraging powerful scraping frameworks and visualization libraries to convert unstructured data into actionable insights.",
                icon: "🌐"
              },
              {
                title: "AI & Machine Learning",
                desc: "Build and train AI models tailored to your goals, craft LLM-powered solutions, and deploy intelligent systems that transform real-world challenges into data-driven opportunities.",
                icon: "🧠"
              },
              {
                title: "Full-Stack Development",
                desc: "Create dynamic, scalable web and mobile solutions leveraging multiple development tools to craft intelligent and seamless user experiences.",
                icon: "⚛️"
              }
            ].map((item, idx) => (
              <div key={idx} className="glass glass-hover rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-300">
                <div className="text-5xl md:text-6xl mb-4">{item.icon}</div>
                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
            🛠 My Toolbox
          </h2>
          <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl overflow-x-auto">
            <div className="flex gap-4 md:gap-6 flex-nowrap md:flex-wrap md:justify-center min-w-max md:min-w-0">
              {techStack.map((tech, idx) => (
                <div key={idx} className="glass glass-hover rounded-xl px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 md:gap-3 shadow-lg transition-all duration-300 whitespace-nowrap">
                  <span className="text-2xl md:text-3xl">{tech.icon}</span>
                  <span className={`text-base md:text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative glass glass-hover rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img src={project.image} alt={project.title} className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4 md:p-6">
                  <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                  <p className={`text-sm md:text-base mb-3 md:mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`glass px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 glass flex items-center justify-center z-10 fade-in">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r ${darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
            Get In Touch
          </h2>
          <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className={`block mb-2 font-semibold text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name *</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className={`w-full glass rounded-xl px-4 py-2 md:py-3 outline-none transition-all duration-300 text-sm md:text-base ${darkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'}`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-semibold text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email *</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className={`w-full glass rounded-xl px-4 py-2 md:py-3 outline-none transition-all duration-300 text-sm md:text-base ${darkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'}`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className={`block mb-2 font-semibold text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className={`w-full glass rounded-xl px-4 py-2 md:py-3 outline-none transition-all duration-300 text-sm md:text-base ${darkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'}`}
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-semibold text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Job Title</label>
                  <input
                    type="text"
                    value={contactForm.jobTitle}
                    onChange={(e) => setContactForm({...contactForm, jobTitle: e.target.value})}
                    className={`w-full glass rounded-xl px-4 py-2 md:py-3 outline-none transition-all duration-300 text-sm md:text-base ${darkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'}`}
                    placeholder="Your Job Title"
                  />
                </div>
              </div>

              <div>
                <label className={`block mb-2 font-semibold text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description *</label>
                <textarea
                  value={contactForm.description}
                  onChange={(e) => setContactForm({...contactForm, description: e.target.value})}
                  rows="5"
                  className={`w-full glass rounded-xl px-4 py-2 md:py-3 outline-none transition-all duration-300 resize-none text-sm md:text-base ${darkMode ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'}`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                onClick={handleContactSubmit}
                className={`w-full glass glass-hover rounded-xl px-6 md:px-8 py-3 md:py-4 font-bold text-base md:text-lg transition-all duration-300 shadow-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                Send Message 🚀
              </button>
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex justify-center gap-4 md:gap-6">
            <a href="#" className="glass glass-hover p-3 md:p-4 rounded-xl transition-all duration-300 shadow-lg">
              <Github className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
            </a>
            <a href="#" className="glass glass-hover p-3 md:p-4 rounded-xl transition-all duration-300 shadow-lg">
              <Linkedin className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
            </a>
            <a href="#" className="glass glass-hover p-3 md:p-4 rounded-xl transition-all duration-300 shadow-lg">
              <Twitter className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
            </a>
             <a href="#" className="glass glass-hover p-3 md:p-4 rounded-xl transition-all duration-300 shadow-lg">
              <Instagram className={`w-5 h-5 md:w-6 md:h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto glass rounded-2xl p-4 md:p-6 text-center shadow-xl">
          <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 XeroAI. Building the future with AI & Data.
          </p>
        </div>
      </footer>
    </div>
  );
}