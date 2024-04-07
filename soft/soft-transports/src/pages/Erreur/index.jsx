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
                        <h2 className='mentions__h2'><strong>Adresse e-mail :</strong> soft.transports@gmail.com</h2>
                        <h2 className='mentions__h2'><strong>Téléphone :</strong> 06 30 72 22 88</h2>
                        <h2 className='mentions__h2'><strong>Hébergeur :</strong> IONOS</h2>
                        <p className='mentions__text'>Ce site est la propriété de Soft Transports. Toute reproduction, même partielle, est strictement <br /> interdite sans autorisation préalable de la société. <br /><br />

                            Pour toute question ou réclamation concernant ce site, veuillez contacter notre service clientèle à <br /> l'adresse e-mail mentionnée ci-dessus ou par téléphone au numéro indiqué.
                        </p>
                    </div>

                    {/* <h1 className='mentions__h1'>Politique de Confidentialité</h1>

                    <div className='mentions__bloc'>

                        <h2>1. Collecte et Utilisation des Données Personnelles :</h2>
                        <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), Soft Transports s'engage à protéger la confidentialité des informations personnelles collectées sur ce site. Les données personnelles collectées sont celles fournies volontairement par les utilisateurs lors de l'utilisation des services proposés sur ce site, notamment lors de la création d'un compte, de la passation de commande ou de la souscription à la newsletter. Ces données peuvent inclure le nom, l'adresse e-mail, l'adresse postale, le numéro de téléphone, etc.</p>

                        <h2>2. Droits des Utilisateurs :</h2>
                        <p>Conformément à la législation en vigueur, les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition aux données les concernant. Ils peuvent exercer ces droits en contactant Soft Transports par e-mail à l'adresse suivante : <a href="mailto:soft.transports@gmail.com">soft.transports@gmail.com</a>.</p>

                        <h2>3. Sécurité des Données :</h2>
                        <p>Soft Transports s'engage à mettre en place toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité des données personnelles collectées et traitées sur ce site, afin d'empêcher toute perte, altération ou accès non autorisé à ces données.</p>

                        <h2>4. Cookies :</h2>
                        <p>Ce site utilise des cookies pour améliorer la navigation et l'expérience utilisateur. Les cookies sont de petits fichiers texte qui sont stockés sur l'ordinateur ou le périphérique mobile de l'utilisateur lorsque celui-ci visite un site web. Les cookies utilisés sur ce site peuvent être des cookies de session, qui sont effacés dès que l'utilisateur ferme son navigateur, ou des cookies persistants, qui restent sur l'appareil de l'utilisateur pendant une période déterminée. Les utilisateurs ont la possibilité de refuser l'utilisation de cookies en configurant leur navigateur, mais cela pourrait limiter certaines fonctionnalités du site.</p>

                        <h2>5. Consentement :</h2>
                        <p>En utilisant ce site, les utilisateurs consentent à la collecte et à l'utilisation de leurs données personnelles telles que décrites dans la présente politique de confidentialité.</p>

                        <h2>6. Modifications de la Politique de Confidentialité :</h2>
                        <p>Soft Transports se réserve le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page et entrera en vigueur dès sa publication.</p>

                        <p>Pour toute question ou réclamation concernant cette politique de confidentialité, veuillez contacter notre service clientèle à l'adresse e-mail mentionnée ci-dessus ou par téléphone au numéro indiqué.</p>
                    </div> */}

    

                </div>

            </main>
            <Footer/>
        </div>

    )
}

export default Mentions