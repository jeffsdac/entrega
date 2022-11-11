import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Styles from './form.module.scss'
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import api from '../../../../services/api'

const Form = () => {
    const [user,setUser] = useState({
        email: '',
        senha: ''
    })
    const navigation = useNavigate('')

    const handleChange = e =>{
        setUser({...user, [e.target.id] : e.target.value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        if(user.email === '' || user.senha === ''){
            alert('Preencha todos os campos')
        }else{
            await api
                .post('/cliente/login', user)
                .then(resp => {
                    sessionStorage.setItem('user', JSON.stringify(resp.data))
                    navigation('/home')
                })            
                .catch(err=> console.log(err))
        }
    }

    return (
        <div className={Styles.form_container}>
            <div className={Styles.text_form}>
                <h1 className={Styles.title}>Olá Novamente</h1>
                <p className={Styles.sub_title}>Vamos zerar esse possante?😉</p>
            </div>
            <form className={Styles.form} action="" onSubmit={(e) => handleSubmit(e)}>
                <Input id='email' type='text' placeholder='Email' value={user.email} onChange={e => handleChange(e)}/>
                <Input id='senha' type='password' placeholder='Senha' value={user.senha} onChange={e => handleChange(e)}/>
                <Button placeholder='Entrar'/>
            </form>
            <Link className={Styles.link_register} to='/register'>Não tenho conta</Link>
        </div>
    );
}

export default Form;