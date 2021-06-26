import { Link } from 'react-router-dom'

import "./index.css"

import Logo from "../../images/spotify-logo.png"
import About from "../../images/about.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="content">
        <div>
          <Link to="/home">
            <img src={Logo} alt="home logo" className="logo"></img>
          </Link>
        </div>
        {/* <div>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <div className="nav-item">
              <img src={Home} alt="home" className="icon"></img>
              <p>Home</p>
            </div>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div className="nav-item">
              <img src={About} alt="about"></img>
              <p>About</p>
            </div>
          </Link>
        </div> */}
        <div>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div className="about">
              <img src={About} alt="about" className="icon"></img>
              <p>About</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar