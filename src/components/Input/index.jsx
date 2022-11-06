import React from 'react';

import Styles from './input.module.scss'

const Input = ({placeholder = "", type = "text", value = '', onChange = () =>{}}) => {
  return (
    <input className={Styles.input} type={type} placeholder={placeholder} value = {value} onChange={onChange}/>
  );
}

export default Input;