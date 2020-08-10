import React from 'react';
import './styles.css';
import successBackgroundImg from '../../assets/images/success-background.svg';
import logoImg from '../../assets/images/logo.svg';

function Sigin() {
    return (
        <div id="page-sigin">
            <div id="page-sigin-background">
                <img src={successBackgroundImg}
                    alt="Imagem inicial"
                    id="background-image" />
                <div id="logo-image">
                    <img
                        src={logoImg}
                        alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2> 
                </div>
            </div>

            <div id="page-sigin-form">
                <h1>Fazer login</h1>
            </div>
        </div>
    );
}

export default Sigin;