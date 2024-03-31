import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import { Link } from "react-router-dom";
import Banner from '../../assets/bann.png';

function Accueil () {

    return (
        <div>
            <Header />
            <main>
                <div className='home'>

                    <div className='home__blocBanner'>

                        <div className='home__imgBanner'>
                            <img className="home__banner" src={Banner} alt="banner" />
                        </div>
                        
                        <div className='home__textBanner'>
                            <div className='home__banner-phone-container'><span className='home__banner-phone'>Tel : 07 61 87 27 02 | 06 30 72 22 88</span></div>
                            <div className='home__banner-h1-container'><h1 className='home__banner-h1'>SOFT TRANSPORTS</h1></div>
                            <div className='home__banner-h2-container'><h2 className='home__banner-h2'>Déménagement de particuliers et de professionels, <br />
                            location de monte charge et de garde meuble</h2></div>
                            
                            <div className='home__banner-blocLink'>
                                <Link to="" className='home__banner-linkT'>Tarifs</Link>
                                <Link to="" className='home__banner-linkE'>Estimation gratuite</Link>
                            </div>
                        </div>
                        
                    </div>

                    <div></div>


                   


                </div>

            </main>
            <Footer />
        </div>

    )
}

export default Accueil;