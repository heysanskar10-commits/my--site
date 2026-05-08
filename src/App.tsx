
import {
  Download, ExternalLink,
  Monitor, Smartphone, PenTool, Database, Code, Layout,
  Briefcase
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './index.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">Sanskar.</div>
        <nav className="nav-links">
          <a href="#about" className="nav-link">About Me</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact me</a>
        </nav>
        <button className="btn btn-primary">
          Resume <Download size={18} />
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Hello I'm <span className="font-bold">Sanskar.</span><br />
              <span className="text-outline">Frontend</span> Developer<br />
              Based In <span className="font-bold">India.</span>
            </h1>
            <p>
              I'm a passionate frontend developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><FaGithub size={24} /></a>
              <a href="#" className="social-link"><FaLinkedin size={24} /></a>
              <a href="#" className="social-link"><FaTwitter size={24} /></a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero.png" alt="Developer Illustration" />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <h2 className="section-title">My <span className="font-bold">Skills</span></h2>
          <div className="container skills-grid">
            {[
              { icon: <Code />, name: 'Javascript' },
              { icon: <Monitor />, name: 'React.js' },
              { icon: <Smartphone />, name: 'React Native' },
              { icon: <PenTool />, name: 'Tailwind CSS' },
              { icon: <Database />, name: 'Node.js' },
              { icon: <Layout />, name: 'Figma' },
              { icon: <Code />, name: 'Typescript' },
              { icon: <Database />, name: 'MongoDB' },
              { icon: <Monitor />, name: 'Next.js' },
              { icon: <Code />, name: 'Git' },
            ].map((skill, index) => (
              <div key={index} className="skill-card">
                {skill.icon}
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience section-dark">
          <h2 className="section-title">My <span className="font-bold">Experience</span></h2>
          <div className="container experience-list">
            {[
              { title: 'Senior Frontend Developer', company: 'Tech Corp', date: 'Jan 2023 - Present' },
              { title: 'UI/UX Designer', company: 'Design Agency', date: 'Mar 2021 - Dec 2022' },
              { title: 'Frontend Intern', company: 'Startup Inc', date: 'Jun 2020 - Feb 2021' },
            ].map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-left">
                  <div className="exp-icon">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                </div>
                <div className="exp-date">{exp.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="about-image">
            <img src="/about.png" alt="About Me" />
          </div>
          <div className="about-content">
            <h2 className="section-title">About <span className="font-bold">Me</span></h2>
            <p>
              Hello! I'm Sanskar, a passionate web developer with a keen eye for design and a drive for creating intuitive, dynamic user experiences. My journey in tech started with a curiosity for how things work on the internet, which quickly blossomed into a full-fledged career.
            </p>
            <p>
              I specialize in React, Node.js, and modern CSS frameworks, constantly pushing myself to learn new technologies and stay ahead of industry trends. When I'm not coding, you can find me exploring new coffee shops, reading about tech innovations, or contributing to open-source projects.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section-dark">
          <h2 className="section-title">My <span className="font-bold">Projects</span></h2>
          <div className="container">
            {[
              {
                num: '01',
                title: 'Crypto Dashboard UI',
                desc: 'A high-fidelity dark mode dashboard for tracking cryptocurrency portfolios. Built with React and Recharts, featuring real-time data updates and interactive graphs.',
                img: '/project1.png'
              },
              {
                num: '02',
                title: 'Minimal E-Commerce',
                desc: 'A clean, aesthetic e-commerce platform designed for a premium shopping experience. Features seamless cart management and integration with Stripe API.',
                img: '/project2.png'
              }
            ].map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-image">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-content">
                  <span style={{ fontSize: '2rem', fontWeight: 800, display: 'block', marginBottom: '1rem' }}>{project.num}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <a href="#" className="btn btn-outline">
                    <ExternalLink size={18} /> View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2 className="section-title">My <span className="font-bold">Testimonial</span></h2>
          <div className="container testimonials-grid">
            {[
              {
                text: "Sanskar is an exceptional developer who always goes above and beyond. His attention to detail and creative problem-solving skills are unmatched.",
                name: "John Doe",
                role: "CEO at TechCorp",
                active: false
              },
              {
                text: "Working with Sanskar was a breeze. He translated our complex designs into flawless code and significantly improved our platform's performance.",
                name: "Jane Smith",
                role: "Design Lead",
                active: true
              },
              {
                text: "Highly recommend! Sanskar delivers high-quality work on time and is a fantastic communicator throughout the entire project lifecycle.",
                name: "Mike Johnson",
                role: "Product Manager",
                active: false
              }
            ].map((test, index) => (
              <div key={index} className={`testimonial-card ${test.active ? 'active' : ''}`}>
                <p className="test-text">"{test.text}"</p>
                <div className="test-author">
                  <div className="test-avatar">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${test.name}`} alt={test.name} />
                  </div>
                  <div>
                    <h4 className="test-name">{test.name}</h4>
                    <span className="test-role">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section-dark">
          <div className="container contact-container">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Let's talk for <br />Something special
              </h2>
              <p style={{ color: '#A1A1AA', marginBottom: '3rem' }}>
                I seek to push the limits of web development and create digital products that leave a lasting impact. Let's build something great together.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <h4>Email</h4>
                  <p>heysanskar10@gmail.com</p>
                </div>
                <div className="info-item">
                  <h4>Phone</h4>
                  <p>+91 9113198480</p>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const website = formData.get('website');
                const message = formData.get('message');
                window.location.href = `mailto:heysanskar10@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AContact Details:%0AName: ${name}%0AEmail: ${email}%0AWebsite: ${website}`;
              }}
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="text" name="website" placeholder="Website (Optional)" />
              <textarea name="message" placeholder="How can I help you?" required></textarea>
              <button type="submit" className="btn btn-primary" style={{ background: '#FFF', color: '#000', marginTop: '1rem' }}>
                Get In Touch
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo">Sanskar.</div>
        <p style={{ color: '#A1A1AA' }}>&copy; 2026 Sanskar. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
