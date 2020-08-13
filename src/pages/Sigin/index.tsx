import React, { FormEvent } from 'react';
import './styles.css';
import successBackgroundImg from '../../assets/images/success-background.svg';
import logoImg from '../../assets/images/logo.svg';
import InputLogin from '../../components/Input Login';
import CheckBox from '../../components/Checkbox';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Sigin() {
    function login(e: FormEvent) {
        let a = 1;
    }

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
                    <form onSubmit={login}>
                        <h1>Fazer login</h1>
                        <InputLogin name="login-form-email" placeholder="E-mail" />
                        <InputLogin name="login-form-password" password={true} placeholder="Senha" />
                        <div id="page-signin-options">
                            <CheckBox name="login-form-remember" label="Lembrar-me" />
                            <a href="#">Esqueci minha senha</a>
                        </div>
                        <button type="submit">
                            Entrar
                        </button>
                        <footer>
                            <div id="page-signin-footer">
                                <div id="footer-right">
                                    <p>Não tem conta?</p>
                                    <a href="#">Cadastre-se</a>
                                </div>
                                <div id="footer-left">
                                    <p>É de graça</p>
                                    <img src={purpleHeartIcon} />
                                </div>
                            </div>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sigin;