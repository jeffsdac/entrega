import React from 'react';
import RegisterPages from './RegisterPages';

import Styles from './register.module.scss'


function Register() {

    return (
        <div className={Styles.register}>
            <div className={Styles.slides}/>
            <RegisterPages/>
        </div>
    );
}

export default Register;