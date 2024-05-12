import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

 
    return (
        <footer className="footer">
   
            <div className="footer__bloc" >
                
                <div className="footer__copyright"> © 2024 SOFT TRANSPORTS</div> 
                <div className='footer__liens'>
                    <Link to="/mentions-legales" className='footer__link'>Mentions légales </Link>   
                    <Link to="/conditions-et-politique" className='footer__link'>Conditions générales de vente et politique de condifentialité</Link>
                </div> 
                
                

            </div>

        </footer>
      
    );
}
  
export default Footer;