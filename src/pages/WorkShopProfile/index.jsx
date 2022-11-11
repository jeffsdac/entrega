import React from 'react';

import NavWorkShop from '../../components/NavWorkShop';
import ProfileForm from './ProfileForm';
import Styles from './workShopProfile.module.scss'

function WorkShopProfile() {

    return (
        <main className={Styles.workSpace_container}>
            <NavWorkShop isCalendarPage={false}/>
            <ProfileForm />
        </main>
    );
}

export default WorkShopProfile;