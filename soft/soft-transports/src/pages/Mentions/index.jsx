import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';

function Mentions () {
    return (

        <div>
            <Header/>
            <main>
                <div className='mentions'>
                    <h1 className='mentions__h1'>Mentions légales</h1>

                    <div className='mentions__bloc'>
                        <h2 className='mentions__h2'> <strong>Société :</strong> Soft Transports</h2>
                        <h2 className='mentions__h2'> <strong>Responsable :</strong></h2>
                        <h2 className='mentions__h2'><strong>SIRET :</strong> 900 561 721 00029</h2>
                        <h2 className='mentions__h2'><strong>Numéro de TVA :</strong> FR47900561721</h2>
                        <h2 className='mentions__h2'><strong>Adresse :</strong> 9 rue de Wattignies 75012 Paris</h2>
                        <h2 className='mentions__h2'><strong>Adresse e-mail :</strong> contact@soft-transports.fr</h2>
                        <h2 className='mentions__h2'><strong>Téléphone :</strong> 06 30 72 22 88</h2>
                        <h2 className='mentions__h2'><strong>Hébergeur :</strong> IONOS</h2>
                        <p className='mentions__text'>Ce site est la propriété de Soft Transports. Toute reproduction, même partielle, est strictement <br /> interdite sans autorisation préalable de la société. <br /><br />

                            Pour toute question ou réclamation concernant ce site, veuillez contacter notre service clientèle à <br /> l'adresse e-mail mentionnée ci-dessus ou par téléphone au numéro indiqué.
                        </p>
                    </div>
    
                </div>

            </main>
            <Footer/>
        </div>

    )
}

export default Mentions