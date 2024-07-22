import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Formulaire() {
    const form = useRef();
    const [formSent, setFormSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        // Liste des options
        const options = [
            'formule_economique', 
            'formule_economique_plus', 
            'formule_standard', 
            'formule_luxe',
            'option_monte_meuble',
            'option_garde_meuble'
        ];
        options.forEach(option => {
            if (!formData.has(option)) {
                formData.append(option, 'Non');
            } else {
                formData.set(option, 'Oui');
            }
        });

        const emailData = Object.fromEntries(formData.entries());
        

        emailjs.send('service_c2jcjct', 'template_fyry905', emailData, '9pgXfcaQ6kRKYUzhw')
            .then(
                () => {
                    setFormSent(true);
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div>
            <main>
                {/*ESTIMATION*/} 
                <div className='home__estimation' id='estimation'>
                    <h3 className='home__h3'>Estimation</h3>

                    <div className='home__estimation-formulaire'>
                        <h4 className='home__estimation-h4'>REMPLISSEZ CE FORMULAIRE ET VOUS RECEVREZ UN DEVIS SOUS 24H</h4>
                        
                        {/*FORMULAIRE*/}
                        <form ref={form} onSubmit={sendEmail} className='home__form'>
                            <fieldset>
                                <legend className='home__form-titre'>Informations de contact</legend>
                                <div className='home__form-blocUn'>
                                    {/*NOM*/}
                                    <div>
                                        <label htmlFor="nom"></label>
                                        <input className='home__form-input' type="text" id="nom" name="nom" placeholder='Nom* ' required />
                                        <p id="nomError" className="home__error"></p>
                                    </div>
                                    {/*PRENOM*/}
                                    <div>
                                        <label htmlFor="prenom"></label>
                                        <input className='home__form-input' type="text" id="prenom" name="prenom" placeholder='Prénom*' required />
                                        <p id="prenomError" className="home__error"></p>
                                    </div>
                                </div>
                                <div className='home__form-blocUn'>
                                    {/*TELEPHONE*/}
                                    <div>
                                        <label htmlFor="telephone"></label>
                                        <input className='home__form-input' type="tel" id="telephone" name="telephone" placeholder='Téléphone*' required />
                                        <p id="telephoneError" className="home__error"></p>
                                    </div>
                                    {/*EMAIL*/}
                                    <div>
                                        <label htmlFor="email"></label>
                                        <input className='home__form-input' type="email" id="email" name="email" placeholder='Email*' required />
                                        <p id="emailError" className="home__error"></p>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className='home__form-titre'>Votre déménagement</legend>
                                {/*DATE*/}
                                <div>
                                    <label htmlFor="date_dem"></label>
                                    <input className='home__form-inputUn' type="date" id="date_dem" name="date_dem" placeholder='Date de déménagement*' required />
                                    <p id="dateError" className="home__error"></p>
                                </div>
                                <div className='home__form-blocUn'>
                                    {/*VILLE DEPART*/}
                                    <div>
                                        <label htmlFor="ville_dep"></label>
                                        <input className='home__form-input' type="text" id="ville_dep" name="ville_dep" placeholder='Ville de départ*' required />
                                        <p id="villeDepError" className="home__error"></p>
                                    </div>
                                    {/*VILLE ARRIVEE*/}
                                    <div>
                                        <label htmlFor="ville_arr"></label>
                                        <input className='home__form-input' type="text" id="ville_arr" name="ville_arr" placeholder="Ville d'arrivée*" required />
                                        <p id="villeArrError" className="home__error"></p>
                                    </div>
                                </div>
                                <div className='home__form-blocUn'>
                                    {/*ADRESSE*/}
                                    <div>
                                        <label htmlFor="adresse"></label>
                                        <input className='home__form-input' type="text" id="adresse" name="adresse" placeholder='Adresse*' required />
                                        <p id="adresseError" className="home__error"></p>
                                    </div>
                                    {/*VOLUME*/}
                                    <div>
                                        <label htmlFor="volume"></label>
                                        <input className='home__form-input' type="number" id="volume" name="volume" placeholder='Volume en m³*' required />
                                        <p id="volumeError" className="home__error"></p>
                                    </div>
                                </div>
                                {/*REMARQUES*/}
                                <div>
                                    <label htmlFor="remarques"></label>
                                    <textarea className='home__textarea' id="remarques" name="remarques" placeholder='Remarques' rows="4"></textarea>
                                </div>
                            </fieldset>
                            {/*FORMULES*/}
                            <fieldset className='home__formules'>
                                <legend className='home__formulesOption'>Formule souhaitée :</legend>
                                <div className='home__choix'>
                                    <div>
                                        <label className='home__choixDif'>
                                            <input type="checkbox" name="formule_economique" id='formule_economique' value="economique" />
                                            Économique
                                        </label>
                                    </div>
                                    <div>
                                        <label className='home__choixDif'>
                                            <input type="checkbox" name="formule_economique_plus" id='formule_economique_plus' value="economique_plus" />
                                            Économique +
                                        </label>
                                    </div>
                                    <div>
                                        <label className='home__choixDif'>
                                            <input type="checkbox" name="formule_standard" id='formule_standard' value="standard" />
                                            Standard
                                        </label>
                                    </div>
                                    <div>
                                        <label className='home__choixDif'>
                                            <input type="checkbox" name="formule_luxe" id='formule_luxe' value="luxe" />
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
                                            <input type="checkbox" name="option_monte_meuble" id="option_monte_meuble" value="monte_meuble" />
                                            Monte-meuble
                                        </label>
                                    </div>
                                    <div>
                                        <label className='home__choixDif'>
                                            <input type="checkbox" name="option_garde_meuble" id="option_garde_meuble" value="garde_meuble" />
                                            Garde-meuble
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            {/*BOUTON*/}
                            <div>
                                <button type='submit' className='home__buttonForm'>OBTENIR UN DEVIS</button>
                            </div>
                            
                        </form>
                        {formSent && (
                                <p style={{ color: 'green' }}>Formulaire envoyé !</p>
                        )}
                    </div>
                </div>
            </main>     
        </div>
    );
}

export default Formulaire;
