import React, { useEffect } from "react";

import logo from '../../Assets/logo/ok5.png';
import navIcon1 from '../../Assets/img/nav-icon1.svg';
import navIcon2 from '../../Assets/img/git2.svg';
import navIcon3 from '../../Assets/img/nav-icon3.svg';
import './Navbar.css'

const NavBar = () => {

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (

        <nav className='navbar'>
            <div className='nav_logo'>
                <img className="logo_img" src={logo} alt="" />
            </div>
            {/* <p className="logo_txt">UP Level</p> */}
            <div className='nav_tabs'>
                <a to="#Home" onClick={() => handleClickScroll("Home")}> Home</a>
                <a to="#test" onClick={() => handleClickScroll("test")}> Tests</a>
                <a to="#Services" onClick={() => handleClickScroll("Services")}> Services</a>
                <a to="#About" onClick={() => handleClickScroll("About")}> About</a>
                <a to="#Partner" onClick={() => handleClickScroll("Partner")}> Partner</a>
            </div>
            <div className='nav_buttons'>
                <button>signup</button>
                <button>login</button>
            </div>
        </nav>

    )
}

export default NavBar