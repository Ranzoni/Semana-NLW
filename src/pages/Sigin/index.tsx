import React from 'react';
import './styles.css';
import successBackgroundImg from '../../assets/images/success-background.svg';
import logoImg from '../../assets/images/logo.svg';
import InputLogin from '../../components/Input Login';
import CheckBox from '../../components/Checkbox';

function Sigin() {
    return (
        <div id="page-signin">
            <div id="page-signin-background">
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

            <div id="page-signin-login">
                <div id="page-signin-login-form">
                    <h1>Fazer login</h1>
                    <InputLogin type="email" name="login-form-email" placeholder="E-mail"></InputLogin>
                    <InputLogin type="password" name="login-form-password" placeholder="Senha"></InputLogin>
                    <CheckBox name="login-form-remember" label="Lembrar-me" />
                </div>
            </div>
        </div>
    );
}

export default Sigin;