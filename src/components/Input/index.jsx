import React from 'react';

import Styles from './input.module.scss'

const Input = ({placeholder = "", type = "text", value = '', onChange = () =>{}, id='', isEditable = true}) => {
  return (
    <input className={`${Styles.input} ${isEditable ? '' : Styles.not_editable}`} type={type} placeholder={placeholder} value = {value} onChange={onChange} id = {id} readOnly={!isEditable}/>
  );
}

export default Input;