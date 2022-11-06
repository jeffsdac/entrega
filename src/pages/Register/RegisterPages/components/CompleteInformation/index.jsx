import React from 'react';

import Styles from './completeInformation.module.scss'
// import PersonalInformation from './PersonalInformation';
import Form from './forms';

function CompleteInformation() {
    return (
        <div className={Styles.complete_infomation}>
            <h2>Complete suas informações</h2>
            <Form/>
        </div>
    );
}

export default CompleteInformation;