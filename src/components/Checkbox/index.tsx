import React, { InputHTMLAttributes } from 'react';
import './styles.css';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, label, ...rest }) => {
    return (
        <div className="checkbox-block">
            <label htmlFor={name} className="checkbox-label">{label}
                <input type="checkbox" id={name} {...rest} />
                <span className="checkbox-custom"></span>
            </label>
        </div>
    );
}

export default CheckBox;