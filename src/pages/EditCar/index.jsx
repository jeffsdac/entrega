import React from 'react';

import FormEditCar from './FormEditCar';
import NavBar from '../../components/NavBar';
import Styles from './editCar.module.scss'

function EditCar() {

    return (
        <>
        <NavBar isCalendarPage={false}/>
        <main>
            <h1 className={Styles.title_edit_car}>Cadastrar carro</h1>
            <FormEditCar />
        </main>
        </>
    );
}

export default EditCar;