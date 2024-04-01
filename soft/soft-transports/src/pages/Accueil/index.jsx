import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import { Link } from "react-router-dom";
import Banner from '../../assets/bann.png';
import Demenagement from '../../assets/demenagement.png';
import Monte from '../../assets/montemeuble.png';
import Garde from '../../assets/gardemeuble.png';
import Tel from '../../assets/telephone.png';
import Localisation from '../../assets/localisateur.png';
import Email from '../../assets/email.png';

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

                    <div className='home__blocDescription'>

                        <div className='home__demenagement'> 

                           <h3 className='home__h3'>Déménagement</h3>

                            <div className='home__demenagement-bloc'>
                                <p className='home__description'>Pour les particuliers, le déménagement représente <br /> toujours un événement significatif. Soft Transports <br /> propose une expérience de déménagement sur <br /> mesure, conçue pour  répondre à chaque besoin <br /> spécifique de ses clients à Paris et en Île-de-France.

                                    <br /><br />Optez pour la facilité lors de votre déménagement <br /> en faisant appel à des professionnels  dotés de <br /> plusieurs années d'expérience dans la manutention <br /> et le transport. Nous acheminons tous types de <br /> mobiliers  et équipements à travers toute la France.

                                    <br /><br /> Avec Soft Transports, déménagez en toute sérénité <br /> et dans un esprit soft.
                                </p>

                                <div className='home__demenagementbloc-img'>
                                    <img className="home__demenagement-img" src={Demenagement} alt="demenagement" />
                                </div>
                            </div>
                        

                        </div>

                        <div className='home__monte'>

                            <h3 className='home__h3'>Location de monte-meuble</h3>

                            <div className='home__demenagement-bloc'>
                                <div className='home__montebloc-img'>
                                    <img className="home__monte-img" src={Monte} alt="monte meuble" />
                                </div>

                                <p className='home__description'>Si vous envisagez de louer un monte-meuble avec un <br /> technicien pour faciliter le transport  d'un piano, d'un gros <br /> canapé, d'un meuble ou d'appareils électroménagers par la <br /> fenêtre, Soft Transports est là pour vous offrir une solution <br /> sur mesure répondant à vos besoins spécifiques de déménagement.<br />

                                    <br />Nous comprenons les défis que peut représenter le déplacement <br /> d'articles volumineux ou délicats à travers des espaces restreints <br /> ou des points d'accès difficiles. C'est pourquoi notre service de <br /> location de monte-meuble avec un technicien qualifié est conçu <br /> pour vous fournir l'assistance nécessaire afin de rendre  votre <br /> déménagement aussi fluide et efficace que possible.

                                </p>
                            </div>

                            
                            
                        </div>

                        <div className='home__garde'>

                            <h3 className='home__h3'>Location de garde-meuble</h3>

                            <div className='home__demenagement-bloc'> 
                                <p className='home__description'>Que vous recherchiez une solution de stockage à <br /> long terme pour des biens supplémentaires ou un <br /> espace  temporaire pendant une période de <br /> déménagement, de rénovation, de recherche de <br /> logement  ou d'expatriation, Soft Transports vous <br /> propose des options flexibles et sécurisées 24/7 en <br /> Île-de-France, grâce à notre réseau de partenaires <br /> spécialisés.                        
                                    <br /><br />Nous mettons à votre disposition des installations <br /> de stockage fiables  et accessibles, adaptées à vos <br /> besoins  spécifiques, pour garantir la sécurité et la <br /> protection de vos biens, quelles que  soient les <br />circonstances.<br />
                                    <br />Avec Soft Transports, bénéficiez d'une solution de <br /> stockage sur mesure qui vous offre la tranquillité <br /> d'esprit  nécessaire pour chaque étape de votre <br /> projet, que ce soit à court ou à long terme.

                                </p>

                                <div className='home__gardebloc-img'>
                                    <img className="home__garde-img" src={Garde} alt="garde meuble" />
                                </div>
                            </div>                        

                        </div>

                    </div>

                    <div className='home__tarif'>

                        <h3 className='home__tarif-h3'>Nos formules de déménagement</h3>

                        <p>Nos tarifs de déménagement sont calculés en fonction du volume réel des biens à déplacer.<br />
                            N’hésitez pas à simuler votre tarif dès aujourd’hui grâce à notre outil en ligne pour obtenir<br />
                            un devis détaillé.<br /><br />
                            Le prix de votre déménagement est calculé en fonction :<br /><br />
                            1 : Du volume des biens à déménager<br />
                            2 : Du matériel nécessaire (monte-meuble, objets fragiles, lourds)<br />
                            3 : De l'accès à votre logement actuel et futur (étage, ascenseur)<br />
                            4 : De la distance à parcourir entre l’adresse de départ et d’arrivée<br />
                        </p>

                        <div className='home__tarif-bloc'>
                            <h4 className='home__tarif-titre'>Economique</h4>

                            <div className='home__tarif-listes'>
                                <ul className='home__tarif-blocListe'> 
                                    <li className='home__tarif-prix'>300 €</li>
                                    <li className='home__tarif-li'>Mise à la disposition des fournitures d’emballage (cartons et adhésifs)</li>
                                    <li className='home__tarif-li'>Chargement et déchargement</li>
                                    <li className='home__tarif-li'>Protection du mobilier sous couvertures ou papier bulle</li>
                                    <li className='home__tarif-li'>Mise en penderie portable des vêtements sur cintre</li>
                                    <li className='home__tarif-li'>Protection sous housses plastiques des canapés et literies</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className='home__tarif-bloc'>
                            <h4 className='home__tarif-titre'>Economique +</h4>

                            <div className='home__tarif-listes'>
                                <ul className='home__tarif-blocListe'> 
                                    <li className='home__tarif-prix'>400 €</li>
                                    <li className='home__tarif-li'>Mise à la disposition des fournitures d’emballage (cartons et adhésifs)</li>
                                    <li className='home__tarif-li'>Chargement et déchargement</li>
                                    <li className='home__tarif-li'>Protection du mobilier sous couvertures ou papier bulle</li>
                                    <li className='home__tarif-li'>Mise en penderie portable des vêtements sur cintre</li>
                                    <li className='home__tarif-li'>Protection sous housses plastiques des canapés et literies</li>
                                    <li className='home__tarif-li'>Démontage et remontage des meubles</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className='home__tarif-bloc'>
                            <h4 className='home__tarif-titre'>Standard</h4>

                            <div className='home__tarif-listes'>
                                <ul className='home__tarif-blocListe'> 
                                    <li className='home__tarif-prix'>500 €</li>
                                    <li className='home__tarif-li'>Mise à la disposition des fournitures d’emballage (cartons et adhésifs)</li>
                                    <li className='home__tarif-li'>Chargement et déchargement</li>
                                    <li className='home__tarif-li'>Protection du mobilier sous couvertures ou papier bulle</li>
                                    <li className='home__tarif-li'>Mise en penderie portable des vêtements sur cintre</li>
                                    <li className='home__tarif-li'>Protection sous housses plastiques des canapés et literies</li>
                                    <li className='home__tarif-li'>Démontage et remontage des meubles</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className='home__tarif-bloc'>
                            <h4 className='home__tarif-titre'>Luxe</h4>

                            <div className='home__tarif-listes'>
                                <ul className='home__tarif-blocListe'> 
                                    <li className='home__tarif-prix'>600 €</li>
                                    <li className='home__tarif-li'>Mise à la disposition des fournitures d’emballage (cartons et adhésifs)</li>
                                    <li className='home__tarif-li'>Chargement et déchargement</li>
                                    <li className='home__tarif-li'>Protection du mobilier sous couvertures ou papier bulle</li>
                                    <li className='home__tarif-li'>Mise en penderie portable des vêtements sur cintre</li>
                                    <li className='home__tarif-li'>Protection sous housses plastiques des canapés et literies</li>
                                    <li className='home__tarif-li'>Démontage et remontage des meubles</li>
                                    <li className='home__tarif-li'>Emballages des objets non fragiles tels que vêtements, livres, jouets, chaussures...</li>
                                    <li className='home__tarif-li'>Emballage et déballage des objets fragiles tels que vaisselles, cadres, lampes, bibelots...</li>
                                    <li className='home__tarif-li'>Protection du matériel audio, hifi et informatique</li>
                                </ul>
                            </div>
                            
                        </div>

                    </div>

                    <div className='home__estimation'>
                        <h3 className='home__estimation-h3'></h3>

                        <div className='home__estimation-formulaire'>
                            <h4 className='home__estimation-h4'>REMPLISSEZ CE FORMULAIRE ET VOUS RECEVREZ UN DEVIS SOUS 24H</h4>

                            <form action="/submit_form" method="post">
        <fieldset>
            <legend>Informations de contact</legend>
            <div>
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required></input>
            </div>
            <div>
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required></input>
            </div>
            <div>
                <label for="telephone">Téléphone :</label>
                <input type="tel" id="telephone" name="telephone" required></input>
            </div>
            <div>
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required></input>
            </div>
        </fieldset>

        <fieldset>
            <legend>Votre déménagement</legend>
            <div>
                <label for="date_dem">Date de déménagement :</label>
                <input type="date" id="date_dem" name="date_dem" required></input>
            </div>
            <div>
                <label for="ville_dep">Ville de départ :</label>
                <input type="text" id="ville_dep" name="ville_dep" required></input>
            </div>
            <div>
                <label for="ville_arr">Ville d'arrivée :</label>
                <input type="text" id="ville_arr" name="ville_arr" required></input>
            </div>
            <div>
                <label for="adresse">Adresse :</label>
                <input type="text" id="adresse" name="adresse" required></input>
            </div>
            <div>
                <label for="volume">Volume en m² :</label>
                <input type="number" id="volume" name="volume" required></input>
            </div>
            <div>
                <label for="remarques">Remarques :</label>
                <textarea id="remarques" name="remarques" rows="4"></textarea>
            </div>
        </fieldset>

        <fieldset>
            <legend>Formule</legend>
            <div>
                <label>
                    <input type="checkbox" name="formule" value="economique"></input>
                    Économique
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="formule" value="economique+"></input>
                    Économique +
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="formule" value="standard"></input>
                    Standard
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="formule" value="luxe"></input>
                    Luxe
                </label>
            </div>
        </fieldset>

        <fieldset>
            <legend>Options</legend>
            <div>
                <label>
                    <input type="checkbox" name="options" value="monte_meuble"></input>
                    Monte-meuble
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="options" value="garde_meuble"></input>
                    Garde-meuble
                </label>
            </div>
        </fieldset>

        <div>
            <button type="submit">Obtenir un devis</button>
        </div>
    </form>
                        </div>

                    </div>

                    <div className='home__contact'>

                        <h5 className='home__contact-h5'>Contact</h5>
                        <div className='home__contact-bloc'>

                            <div className='home__contac-tbloc2'>
                                <img className="home__contact-imgTel" src={Tel} alt="icone tel" />
                                <p className='home__contact-tel'>Tel : 07 61 87 27 02 / 06 30 72 22 88</p>
                            </div>

                            <div className='home__contac-tbloc2'>
                                <img className="home__contact-imgEmail" src={Email} alt="icone email" />
                                <p className='home__contact-email'>contact@soft-transports.fr</p>

                            </div>
                            

                            <div>
                                <img className="home__contact-imgAdresse" src={Localisation} alt="icone localisation" />
                                <p className='home__contact-adresse'>9 rue de Wattignies 75012 Paris</p>
                            </div>
                
                        </div>

                    </div>



                    


                   


                </div>

            </main>
            <Footer />
        </div>

    )
}

export default Accueil;