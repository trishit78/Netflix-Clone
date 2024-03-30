import React, { useState, useEffect } from "react";
//import Logo from "../../assets/logo-transparent.jpeg";
import Logo2 from "../../assets/avatar.png";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [show, handleshow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else handleshow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="flex justify-between">
        

        
          
        <NavLink to='/'>


          <img
            src="https://cdn.pixabay.com/photo/2022/08/24/20/20/netflix-7408710_1280.png"
            alt=""
            className="nav__logo"
            />
            </NavLink>
            
        <NavLink to="/profile">
        <img src={Logo2} alt="" className="nav__avatar mt-4" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
