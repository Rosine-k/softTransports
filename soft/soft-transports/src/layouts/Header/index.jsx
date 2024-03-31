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

          <div className="navigation__blocb">
            <Link to="/" className="navigation__link"> TARIFS </Link>

            <Link to="/photos"  className= "navigation__link"> DÉMÉNAGEMENT </Link>

            <Link to="/videos"  className="navigation__link"> MONTE CHARGE </Link>

            <Link to="/parcours"  className="navigation__link"> GARDE MEUBLE </Link>

            <Link to="/actualites"  className="navigation__link"> ESTIMATION </Link>

            <Link to="/contact"  className="navigation__link"> CONTACT </Link>
          </div>          

        </nav>

      </div>
      
    </header>
  );
}

export default Header;