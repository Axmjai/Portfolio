import React,{useState} from "react";
import { Link } from "react-scroll";
import './Navbar.css'

const Navber=()=>{

    const [clicks,setclick] = useState(false);
    const closeMenu = () => setclick(false);
    return (
        <>
        <nav className="nav-wrapper"> 
        <div className="nav-content">
            <div className="textw">Welcome to Portfolio</div>
      
            <ul>
            <li>
                <Link to="1" spy={true} smooth={true} offset={-500} duration={500} onClick={closeMenu} className="menu-item">Home</Link>    
            </li>    
            <li>
                <Link to="2" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="menu-item">Skills</Link>    
            </li>        
            <li>
                <Link to="3" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="menu-item">Work Experience</Link>    
            </li>       
            <li>
                <Link to="4" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu} className="menu-item">Contact Me</Link>    
            </li>    

            </ul>    
            </div>       
        </nav>
        </>
    );
}

export default Navber;