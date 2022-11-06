import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Styles from './registerPage.module.scss'
import RegisterEmail from './components/RegisterEmail'
import ConfirmEmail from './components/RegisterEmail/confirmEmail';

function RegisterPage() {
    return (
        <div className={Styles.form_container}>
            <Routes>
                <Route path = "/" element ={<RegisterEmail/>} />
                <Route path = "/confirmEmail" element ={<ConfirmEmail/>} />
            </Routes>
        </div>
    );
}

export default RegisterPage;