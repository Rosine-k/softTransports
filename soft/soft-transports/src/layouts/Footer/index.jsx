import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

 
    return (
        <footer className="footer">
   
            <div className="footer__bloc" >
                
                <div className="footer__copyright"> © 2024 SOFT TRANSPORTS | 
                  <Link to="/mentions-legales">Mentions légales</Link>  | 
                  <Link to="/conditions-generales-vente">Conditions générales de vente</Link>
                </div>

            </div>

        </footer>
      
    );
}
  
export default Footer;