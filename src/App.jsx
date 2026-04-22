import './App.css'

function App() {
  return (
    <div className="app"> 
      <section id="home" className="hero">
        <div className="hero-content">
          <img src="https://avatars.githubusercontent.com/u/145797601?v=4" alt="Md. Mehedi Hasan" className="profile-image" />
          <h1>Hi, I'm Md. Mehedi Hasan</h1>
          <h2>Full Stack Mobile Application Developer</h2>
          <p>Specializing in Flutter (Dart), Android (Java & Kotlin), and Backend with Node.js, Express.js, Fastify</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary"><i className="fas fa-eye"></i> View My Work</a>
            <a href="#contact" className="btn secondary"><i className="fas fa-paper-plane"></i> Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/mehediinf" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/mehedi4556/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://www.facebook.com/mehedi.cse.inf" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2><i className="fas fa-info-circle"></i> About Me</h2>
          <p>Hello! I'm Md. Mehedi Hasan, a passionate Full Stack Mobile Application Developer specializing in Flutter (Dart) and Android (Java and Kotlin). I develop high-performance, scalable, and user-friendly mobile applications with modern architecture and seamless backend integrations using Node.js, Express.js, and Fastify.</p>
          <p>Currently working on enterprise banking applications and real-world marketplace platforms. I believe in building applications that not only meet technical requirements but also provide exceptional user experiences.</p>
          <div className="about-stats">
            <div className="stat">
              <i className="fas fa-code-branch"></i>
              <h3>150+ Repositories</h3>
              <p>On GitHub</p>
            </div>
            <div className="stat">
              <i className="fas fa-users"></i>
              <h3>2+ Years</h3>
              <p>Professional Experience</p>
            </div>
            <div className="stat">
              <i className="fas fa-mobile-alt"></i>
              <h3>5+ Apps</h3>
              <p>Developed & Deployed</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2><i className="fas fa-briefcase"></i> Professional Experience</h2>
          <div className="experience-item">
            <div className="experience-header">
              <i className="fas fa-building"></i>
              <h3>Assistant Programmer @ MicroMac Techno Valley Ltd.</h3>
            </div>
            <p>Working on enterprise mobile applications for banking systems. Developing mobile applications for financial platforms, contributing to banking solutions for City Bank and BRAC Bank. Implementing secure authentication, financial-grade security, REST APIs, and scalable architectures.</p>
            <ul>
              <li><i className="fas fa-check"></i> Developed City Bank's LOS Source App with Online and Offline Mode</li>
              <li><i className="fas fa-check"></i> Built City Bank's LOS Approver App for loan processing</li>
              <li><i className="fas fa-check"></i> Completed full development of BRAC Bank's Litigation Management System (LMS)</li>
              <li><i className="fas fa-check"></i> Upcoming: Prime Bank's LOS Apps development</li>
              <li><i className="fas fa-check"></i> Implemented SOLID Architecture principles</li>
              <li><i className="fas fa-check"></i> Integrated secure payment gateways and financial APIs</li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="experience-header">
              <i className="fas fa-globe"></i>
              <h3>Mobile Application Developer @ Bideshi Bazar e.U. (Austria)</h3>
            </div>
            <p>Built Bideshibazar Consumer App using Android (Java) and rebuilt with Flutter for cross-platform support. Developed Bideshibazar Seller App with Flutter for Android & iOS, featuring seller dashboards, product management, and order tracking.</p>
            <ul>
              <li><i className="fas fa-check"></i> Cross-platform app development with Flutter</li>
              <li><i className="fas fa-check"></i> Real-time updates and push notifications</li>
              <li><i className="fas fa-check"></i> Payment gateway integrations</li>
              <li><i className="fas fa-check"></i> Published on Google Play Store and Apple App Store</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2><i className="fas fa-project-diagram"></i> Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>Bideshibazar Consumer App</h3>
              <p>Marketplace app for international products with user authentication, product browsing, order management, push notifications, and payment integration.</p>
              <p><strong>Tech:</strong> Android (Java), Flutter, Firebase, REST APIs</p>
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.mtach.bideshibazar&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="project-link"><i className="fab fa-google-play"></i> Play Store</a>
                <a href="https://apps.apple.com/fr/app/bideshibazar/id6747597147" target="_blank" rel="noopener noreferrer" className="project-link"><i className="fab fa-app-store-ios"></i> App Store</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>Bideshibazar Seller App</h3>
              <p>Seller dashboard for managing products and orders with real-time updates, sales management, and push notifications.</p>
              <p><strong>Tech:</strong> Flutter, Firebase, GetX, REST APIs</p>
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.mtech.bideshibazarseller" target="_blank" rel="noopener noreferrer" className="project-link"><i className="fab fa-google-play"></i> Play Store</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>Banking Applications</h3>
              <p>Enterprise banking apps with secure authentication, financial transactions, and backend integration using Node.js and Express.js.</p>
              <p><strong>Tech:</strong> Android, Flutter, Node.js, Express.js, MySQL</p>
              <div className="project-links">
                <span className="project-link"><i className="fas fa-lock"></i> Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2><i className="fas fa-tools"></i> Tech Stack & Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><i className="fas fa-mobile-alt"></i> Mobile Development</h3>
              <ul>
                <li><i className="fab fa-android"></i> Android (Java & Kotlin)</li>
                <li><i className="fas fa-mobile"></i> Flutter (Dart)</li>
                <li><i className="fas fa-cogs"></i> Clean Architecture</li>
                <li><i className="fas fa-exchange-alt"></i> REST API Integration</li>
                <li><i className="fas fa-bell"></i> Push Notifications (FCM)</li>
                <li><i className="fas fa-credit-card"></i> Payment Gateway Integration</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-server"></i> Backend Development</h3>
              <ul>
                <li><i className="fab fa-node-js"></i> Node.js</li>
                <li><i className="fas fa-code"></i> JavaScript (ES6+)</li>
                <li><i className="fas fa-rocket"></i> Express.js</li>
                <li><i className="fas fa-bolt"></i> Fastify</li>
                <li><i className="fas fa-database"></i> MySQL</li>
                <li><i className="fas fa-fire"></i> Firebase</li>
                <li><i className="fab fa-php"></i> PHP</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-tools"></i> Tools & IDE</h3>
              <ul>
                <li><i className="fab fa-git-alt"></i> Git & GitHub</li>
                <li><i className="fas fa-code"></i> VS Code</li>
                <li><i className="fas fa-mobile"></i> Android Studio</li>
                <li><i className="fas fa-palette"></i> Figma</li>
                <li><i className="fas fa-terminal"></i> Postman</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-brain"></i> Architecture & State Management</h3>
              <ul>
                <li><i className="fas fa-sitemap"></i> MVVM</li>
                <li><i className="fas fa-layer-group"></i> MVP</li>
                <li><i className="fas fa-cubes"></i> BLoC</li>
                <li><i className="fas fa-share-alt"></i> Provider</li>
                <li><i className="fas fa-wind"></i> GetX</li>
                <li><i className="fas fa-map-marker-alt"></i> Google Maps Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2><i className="fas fa-envelope"></i> Contact Me</h2>
          <p>Let's connect! Feel free to reach out for collaborations, opportunities, or just to say hello.</p>
          <div className="contact-links">
            <a href="https://github.com/mehediinf" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/mehedi4556/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://www.facebook.com/mehedi.cse.inf" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p><i className="fas fa-copyright"></i> 2026 Md. Mehedi Hasan. Built with <i className="fas fa-heart"></i> using React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
