import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
// import { Link } from "react-router-dom";
import Banner from '../../assets/bann.png';
import Demenagement from '../../assets/demenagement.png';
import Monte from '../../assets/montemeuble.png';
import Garde from '../../assets/gardemeuble.png';
import Tel from '../../assets/telephone.png';
import Localisation from '../../assets/localisateur.png';
import Email from '../../assets/email.png';
// import { nanoid } from 'nanoid';

function Accueil () {
    // const [csrfToken] = useState(nanoid());

    return (
        <div>
            <Header />
            <main>
                <div className='home'>

                    {/*BANNER*/} 
                    <div className='home__blocBanner'>

                        <div className='home__imgBanner'>
                            <img className="home__banner" src={Banner} alt="banner" />
                        </div>
                        
                        <div className='home__textBanner'>
                            <div className='home__banner-phone-container'><span className='home__banner-phone'>Tel : 07 61 87 27 02 | 06 30 72 22 88</span></div>
                            <div className='home__banner-h1-container'><h1 className='home__banner-h1'>SOFT TRANSPORTS</h1></div>
                            <div className='home__banner-h2-container'><h2 className='home__banner-h2'>Déménagement de particuliers et de professionels, <br />
                            location de monte-meuble et de garde-meuble</h2></div>
                            
                            <div className='home__banner-blocLink'>
                                <a className='home__banner-linkT' href='#tarif'>Tarifs</a>
                                <a className='home__banner-linkE' href='#estimation'>Estimation gratuite</a>
                            </div>
                        </div>
                        
                    </div>

                    {/*INFORMATIONS*/} 
                    <div className='home__blocDescription'>

                        {/*DEMENAGEMENT*/} 
                        <div  className='home__demenagement' id='demenagement'> 

                           <h3 className='home__h3' >Déménagement</h3>

                            <div className='home__demenagement-bloc'>
                                <p className='home__description'>Pour les particuliers, le déménagement représente toujours un événement significatif. Soft Transports propose une expérience de déménagement sur mesure, conçue pour  répondre à chaque besoin spécifique de ses clients à Paris et en Île-de-France.

                                    <br /> <br />Optez pour la facilité lors de votre déménagement en faisant appel à des professionnels  dotés de plusieurs années d'expérience dans la manutention et le transport. Nous acheminons tous types de  mobiliers  et équipements à travers toute la France.

                                    <br /><br /> Avec Soft Transports, déménagez en toute sérénité et dans un esprit soft.
                                </p>

                                <div className='home__demenagementbloc-img'>
                                    <img className="home__demenagement-img" src={Demenagement} alt="demenagement" />
                                </div>
                            </div>
                        

                        </div>

                        {/*MONTE CHARGE*/} 
                        <div className='home__monte' id='monte'>

                            <h3 className='home__h3' >Location de monte-meuble</h3>

                            <div className='home__demenagement-bloc'>
                                <div className='home__montebloc-img'>
                                    <img className="home__monte-img" src={Monte} alt="monte meuble" />
                                </div>

                                <p className='home__description'>Si vous envisagez de louer un monte-meuble avec un technicien pour faciliter le transport  d'un piano, d'un gros canapé, d'un meuble ou d'appareils électroménagers par la fenêtre, Soft Transports est là pour vous offrir une solution sur mesure répondant à vos besoins spécifiques de déménagement.<br />

                                    <br />Nous comprenons les défis que peut représenter le déplacement d'articles volumineux ou délicats à travers des espaces restreints ou des points d'accès difficiles. C'est pourquoi notre service de location de monte-meuble avec un technicien qualifié est conçu pour vous fournir l'assistance nécessaire afin de rendre  votre déménagement aussi fluide et efficace que possible.

                                </p>
                            </div>                            
                            
                        </div>

                        {/*GARDE MEUBLE*/} 
                        <div className='home__garde'>

                            <h3 className='home__h3' id='garde'>Location de garde-meuble</h3>

                            <div className='home__demenagement-bloc'> 
                                <p className='home__description'>Que vous recherchiez une solution de stockage à long terme pour des biens supplémentaires ou un espace  temporaire pendant une période de déménagement, de rénovation, de recherche de logement  ou d'expatriation, Soft Transports vous propose des options flexibles et sécurisées 24/7 en Île-de-France, grâce à notre réseau de partenaires spécialisés.                        
                                    <br /><br />
                                    Avec Soft Transports, bénéficiez d'une solution de stockage sur mesure qui vous offre la tranquillité d'esprit  nécessaire pour chaque étape de votre projet, que ce soit à court ou à long terme.

                                </p>

                                <div className='home__gardebloc-img'>
                                    <img className="home__garde-img" src={Garde} alt="garde meuble" />
                                </div>
                            </div>                        

                        </div>

                    </div>

                    {/*TARIF*/} 
                    <div className='home__tarif'>

                        <h3 className='home__h3' id='tarif'>Nos formules de déménagement</h3>

                        <p className='home__tarif-text'>Nos tarifs de déménagement sont calculés en fonction du volume réel des biens à déplacer.<br />
                            <br />
                            Le prix de votre déménagement est calculé en fonction :<br /><br />                           

                        </p>
                        <ul className='home__tarif-list1'>
                            <li className='home__tarif-li1'>1 : Du volume des biens à déménager<br /></li>
                            <li className='home__tarif-li1'>2 : Du matériel nécessaire (monte-meuble, objets fragiles, lourds)<br /></li>
                            <li className='home__tarif-li1'>3 : De l'accès à votre logement actuel et futur (étage, ascenseur)<br /></li>
                            <li className='home__tarif-li1'>4 : De la distance à parcourir entre l’adresse de départ et d’arrivée<br /><br /></li>
                        </ul>
                        <p className='home__tarif-text'>N’hésitez pas à simuler votre tarif dès aujourd’hui grâce à notre outil en ligne pour obtenir<br />
                            un devis détaillé.</p>

                        <div className='home__tarif-troisbloc'>

                            <div className='home__tarif-bloc'>                                

                                <div className='home__tarif-listes'>
                                    <ul className='home__tarif-blocListe'> 
                                        <li className='home__tarif-titre formuleUn'>Economique</li>
                                        <li className='home__tarif-prix'>A partir de 300 €</li>
                                        <li className='home__tarif-li'>Mise à la disposition des fournitures d’emballage (cartons et adhésifs)</li>
                                        <li className='home__tarif-li'>Chargement et déchargement</li>
                                        <li className='home__tarif-li'>Protection du mobilier sous couvertures ou papier bulle</li>
                                        <li className='home__tarif-li'>Mise en penderie portable des vêtements sur cintre</li>
                                        <li className='home__tarif-li'>Protection sous housses plastiques des canapés et literies</li>
                                    </ul>
                                </div>
                                
                            </div>

                            <div className='home__tarif-bloc'>

                                <div className='home__tarif-listes'>
                                    <ul className='home__tarif-blocListe'> 
                                        <li className='home__tarif-titre formuleDeux'>Economique +</li>
                                        <li className='home__tarif-prix'>A partir de 400 €</li>
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

                                <div className='home__tarif-listes'>
                                    <ul className='home__tarif-blocListe'> 
                                    <li className='home__tarif-titre formuleTrois'>Standard</li>
                                        <li className='home__tarif-prix'> A partir de 500 €</li>
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

                                <div className='home__tarif-listes'>
                                    <ul className='home__tarif-blocListe'> 
                                        <li className='home__tarif-titre formuleQuatre'>Luxe</li>
                                        <li className='home__tarif-prix'>A partir de 600 €</li>
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
                    </div>  

                    {/*ESTIMATION*/} 
                    <div className='home__estimation' id='estimation'>
                        <h3 className='home__h3'>Estimation</h3>

                        <div className='home__estimation-formulaire'>
                            <h4 className='home__estimation-h4'>REMPLISSEZ CE FORMULAIRE ET VOUS RECEVREZ UN DEVIS SOUS 24H</h4>
                            {/*FORMULAIRE*/}
                            <form id="form" onsubmit="sendForm(); return false;">

                                {/* jeton CSRF */}
                                {/* <input type="hidden" name="_csrf" value={csrfToken} />   */}
                                <fieldset>
                                    <legend className='home__form-titre'>Informations de contact</legend>
                                    
                                    <div className='home__form-blocUn'>
                                        {/*NOM*/}
                                        <div>
                                            <label for="nom"></label>
                                            <input className='home__form-input' type="text" id="nom" name="nom" placeholder='Nom* 'required></input>
                                            <p id="nomError" class="home__error"></p>
                                        </div>
                                        {/*PRENOM*/}
                                        <div>
                                            <label for="prenom"></label>
                                            <input className='home__form-input' type="text" id="prenom" name="prenom" placeholder='Prénom*' required></input>
                                            <p id="prenomError" class="home__error"></p>
                                        </div>
                                    </div>

                                    <div className='home__form-blocUn'>
                                        {/*TELEPHONE*/}
                                        <div>
                                            <label for="telephone"></label>
                                            <input className='home__form-input' type="tel" id="telephone" name="telephone" placeholder='Téléphone*' required></input>
                                            <p id="telephoneError" class="home__error"></p>
                                        </div>
                                        {/*EMAIL*/}
                                        <div>
                                            <label for="email"></label>
                                            <input className='home__form-input' type="email" id="email" name="email" placeholder='Email*' required></input>
                                            <p id="emailError" class="home__error"></p>
                                        </div>
                                    </div>

                                    
                                </fieldset>

                                <fieldset>
                                    <legend className='home__form-titre'>Votre déménagement</legend>
                                    {/*DATE*/}                                    
                                    <div>
                                        <label for="date_dem"></label>
                                        <input className='home__form-inputUn' type="date" id="date_dem" name="date_dem" placeholder='Date de déménagement*' required></input>
                                        <p id="dateError" class="home__error"></p>
                                    </div>

                                    <div className='home__form-blocUn'>
                                        {/*VILLE DEPART*/}
                                        <div>
                                            <label for="ville_dep"></label>
                                            <input className='home__form-input' type="text" id="ville_dep" name="ville_dep" placeholder='Ville de départ*' required></input>
                                            <p id="villeDepError" class="home__error"></p>
                                        </div>
                                        {/*VILLE ARRIVEE*/}
                                        <div>
                                            <label for="ville_arr"></label>
                                            <input className='home__form-input' type="text" id="ville_arr" name="ville_arr" placeholder="Ville d'arrivée*" required></input>
                                            <p id="villeArrError" class="home__error"></p>
                                        </div>

                                    </div>

                                    <div className='home__form-blocUn'>
                                        {/*ADRESSE*/}
                                        <div>
                                            <label for="adresse"></label>
                                            <input className='home__form-input' type="text" id="adresse" name="adresse" placeholder='Adresse*' required></input>
                                            <p id="adresseError" class="home__error"></p>
                                        </div>
                                        {/*VOLUME*/}
                                        <div>
                                            <label for="volume"></label>
                                            <input className='home__form-input' type="number" id="volume" name="volume"  placeholder='Volume en m²*' required></input>
                                            <p id="volumeError" class="home__error"></p>
                                        </div>
                                    </div>
                                    
                                    {/*REMARQUES*/}
                                    <div>
                                        <label for="remarques"></label>
                                        <textarea className='home__textarea' id="remarques" name="remarques" placeholder='Remarques' rows="4"></textarea>
                                    </div>

                                </fieldset>

                                {/*FORMULES*/}
                                <fieldset className='home__formules'>
                                    <legend className='home__formulesOption'>Formule souhaitée :</legend>

                                    <div className='home__choix'>
                                        <div>
                                            <label className='home__choixDif'>
                                                <input  type="checkbox" name="formule" value="economique"></input>
                                                Économique
                                            </label>
                                        </div>
                                        <div>
                                            <label className='home__choixDif'>
                                                <input  type="checkbox" name="formule" value="economique+"></input>
                                                Économique +
                                            </label>
                                        </div>
                                        <div>
                                            <label className='home__choixDif'>
                                                <input  type="checkbox" name="formule" value="standard"></input>
                                                Standard
                                            </label>
                                        </div>
                                        <div>
                                            <label className='home__choixDif'>
                                                <input  type="checkbox" name="formule" value="luxe"></input>
                                                Luxe
                                            </label>
                                        </div>
                                    </div>
                                    
                                </fieldset>

                                {/*OPTIONS*/}
                                <fieldset className='home__formules'>
                                    <legend className='home__formulesOption'>Options :</legend>

                                    <div className='home__choix'>
                                        <div>
                                            <label className='home__choixDif'>
                                                <input  type="checkbox" name="options" value="monte_meuble"></input>
                                                Monte-meuble
                                            </label>
                                        </div>
                                        <div>
                                            <label className='home__choixDif'>
                                                <input  type="checkbox" name="options" value="garde_meuble"></input>
                                                Garde-meuble
                                            </label>
                                        </div>
                                    </div>
                                    
                                </fieldset>

                                {/*BOUTON*/}
                                <div>
                                    <button className='home__buttonForm' type="submit">OBTENIR UN DEVIS</button>
                                </div>
                            </form>
                        </div>

                    </div>

                    /{/*AVIS GOOGLE*/} 
                    <div className='home__google'>
                        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                        <div class="elfsight-app-eff75857-ba3c-4468-8ad3-a0eda61d6465" data-elfsight-app-lazy></div>
                    </div>

                    {/*CONTACT*/} 
                    <div className='home__contact' id='contact'>

                        <h5 className='home__h3'>Contact</h5>
                        <div className='home__contact-bloc'>

                            <div className='home__contac-tbloc2'>
                                <img className="home__contact-imgTel" src={Tel} alt="icone tel" />
                                <p className='home__contact-text'>Tel : 07 61 87 27 02 / 06 30 72 22 88</p>
                            </div>

                            <div className='home__contac-tbloc2'>
                                <img className="home__contact-imgEmail" src={Email} alt="icone email" />
                                <p className='home__contact-text'>contact@soft-transports.fr</p>

                            </div>
                            

                            <div className='home__contac-tbloc2'>
                                <img className="home__contact-imgAdresse" src={Localisation} alt="icone localisation" />
                                <p className='home__contact-text'>9 rue de Wattignies 75012 Paris</p>
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