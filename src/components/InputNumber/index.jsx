import React from 'react';

import Styles from './inputNumber.module.scss'

const InputNumber = ({maxLength = '', value = 0, onChange = () =>{}, placeholder= 0, id = null}) => {
    return (
        <input
        className={Styles.input_number}
        type="text"
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        placeholder= {placeholder}
        id={id}
        />
    );
}

export default InputNumber;