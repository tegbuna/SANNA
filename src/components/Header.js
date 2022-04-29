import React from 'react';
import {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';
import logo from "../images/sanna_logo_blackbg.jpeg";
import logoPing from "../images/sanna_logo_blackbg.jpeg";




const Header = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

  return (
  <div className="header">
      <nav className="navbar">
            <div className="logo">
                <img className="logoPing" src={logoPing} alt="SANNA Vector Logo" />
                <img className="logoBlack" src={logo} alt="SANNA Logo" />
            </div>

            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={18} style={{color: "white" }} />) : (<FaBars size={30} style={{color: "white"}}/>)}
            </div>

            {/*replace className of ul on menu for click event*/}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item"><Link to="home" spy={true} smooth={true} offset={-55} duration={500} onClick={closeMenu} className="nav-item" >Home</Link>
                </li>

                <li className="nav-item"><Link to="about" spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>About</Link>
                </li>

                <li className="nav-item"><Link to="events" spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Events</Link>
                </li>

                <li className="nav-item"><Link to="gallery" spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Gallery</Link>
                </li>

                <li className="nav-item"><Link to="contact" spy={true} smooth={true} offset={-55} duration={500} className="nav-item" onClick={closeMenu}>Contact</Link>
                </li>

            </ul>
        </nav>

  </div>
  );
};


export default Header