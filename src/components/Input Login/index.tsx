import React, { InputHTMLAttributes, useState } from 'react';
import eyeImg from '../../assets/images/icons/eye.svg';
import eyeDisableImg from '../../assets/images/icons/eye-disable.svg';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    password?: boolean;
}

const InputLogin: React.FC<InputProps> = ({ name, password, ...rest }) => {
    const [handlePasswordValue, setHandlePasswordValue] = useState(false);

    function pressEyePassword(): void {
        setHandlePasswordValue(!handlePasswordValue);
    }

    return (
        <div className="input-login">
            <input className={name} style={password ? { paddingRight: 55 } : {} } type={password && !handlePasswordValue ? "password" : "text"} {...rest} />
            <div id="input-password-img">
                <img onClick={pressEyePassword} src={eyeImg} hidden={!password || handlePasswordValue} />
                <img onClick={pressEyePassword} src={eyeDisableImg} hidden={!password || !handlePasswordValue} />
            </div>
        </div>
    );
}

export default InputLogin;