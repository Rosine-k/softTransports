import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  
  
  return (
    <header className={`navigation ${isScrolled ? "sticky" : ""}`}>

      <div className="navigation">
        
        <nav className="navigation__liens">

          <div className="navigation__bloca">
            <Link to="/" className="navigation__logo"><img className="navigation__logoImg" src={Logo} alt="logo" /></Link>
          </div>

          <div className='home__banner-phone-container'><span className='home__banner-phone'>Tel : 01 82 83 25 70</span></div>

          {/* <div className="navigation__blocb">

            <a href="#demenagement" className= "navigation__link">DÉMÉNAGEMENT</a>
            <a href="#monte" className="navigation__link">MONTE-MEUBLE</a>
            <a href="#garde " className="navigation__link">GARDE-MEUBLE</a>
            <a href="#tarif" className="navigation__link">FORMULES</a>
            <a href="#estimation" className="navigation__link">ESTIMATION</a>
            <a href="#contact" className="navigation__link">CONTACT</a>

          </div>           */}

        </nav>

      </div>
      
    </header>
  );
}

export default Header;