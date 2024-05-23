import React from 'react';
import Header from "../../layouts/Header/index";

import { Link } from "react-router-dom";

function Mentions () {
    return (

        <div>
            <Header/>
            <main>
                <div className='erreur'>
                    <h1 className='erreur__h1'>Une erreur s'est produite</h1>
                    <h2 className='erreur__h2'>Veuillez retourner sur <Link className='erreur__link' to='/'>la page d'accueil</Link></h2>
            
                </div>

            </main>
            
        </div>

    )
}

export default Mentions