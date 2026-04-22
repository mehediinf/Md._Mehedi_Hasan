import './App.css'

function Nav() {
  return (
    <nav className="navbar">
        <div className="nav-container">
            <h1 className="nav-logo"><i className="fas fa-code"></i> Md. Mehedi Hasan</h1>
            <ul className="nav-menu">
                <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
                <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
                <li><a href="#experience"><i className="fas fa-briefcase"></i> Experience</a></li>
                <li><a href="#projects"><i className="fas fa-project-diagram"></i> Projects</a></li>
                <li><a href="#skills"><i className="fas fa-tools"></i> Skills</a></li>
                <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
            </ul>
        </div>
    </nav>
  )}
export default Nav