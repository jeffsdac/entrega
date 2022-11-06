import React from 'react';

import Styles from './button.module.scss'

const Button = ({placeholder = "Enviar", functionButton = function() {} }) => {
  return (
    <button className={Styles.button} onClick={functionButton}>
        {placeholder}
    </button>
  );
}

export default Button;