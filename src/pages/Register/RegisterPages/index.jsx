import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Styles from './registerPage.module.scss'
import RegisterEmail from './components/RegisterEmail'
import ConfirmEmail from './components/RegisterEmail/confirmEmail';
import CompleteInformation from './components/CompleteInformation'

function RegisterPage() {
    return (
        <div className={Styles.form_container}>
            <Routes>
                <Route path = "/" element ={<RegisterEmail/>} />
                <Route path = "/confirmEmail" element ={<ConfirmEmail/>} />
                <Route path = "/completeInformation/*" element ={<CompleteInformation/>} />
            </Routes>
        </div>
    );
}

export default RegisterPage;