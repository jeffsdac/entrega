import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './form.module.scss'
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const Form = () => {
    const handleSubmit = e =>{
        e.preventDefault()
    }

    return (
        <div className={Styles.form_container}>
            <div className={Styles.text_form}>
                <h1 className={Styles.title}>Ola Novamente</h1>
                <p className={Styles.sub_title}>Vamos zerar esse possante?😉</p>
            </div>
            <form className={Styles.form} action="" onSubmit={(e) => handleSubmit(e)}>
                <Input type='text' placeholder='Email'/>
                <Input type='password' placeholder='Senha'/>
                <Button placeholder='Entrar'/>
            </form>
            <Link className={Styles.link_register} to='/register'>Não tenho conta</Link>
        </div>
    );
}

export default Form;