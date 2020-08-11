import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const InputLogin: React.FC<InputProps> = ({ name, ...rest }) => {
    return (
        <div className="input-login">
            <input id={name} {...rest} />
        </div>
    );
}

export default InputLogin;