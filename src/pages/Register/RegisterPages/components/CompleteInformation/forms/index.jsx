import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PersonalInformation from './PersonalInformation';
import LocationInformation from './LocationInformation';
import ConfirmInfo from './ConfirmInfo';

function Form() {
    return (
        <Routes>
            <Route path = "/" element ={<PersonalInformation/>} />
            <Route path = "/locationInformartion" element ={<LocationInformation/>} />
            <Route path = "/confirmInformations" element ={<ConfirmInfo/>} />
        </Routes>
    );
}

export default Form;