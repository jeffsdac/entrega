import React, { useState } from 'react';

import Styles from './registerEmail.module.scss'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import { useNavigate } from 'react-router-dom';

function RegisterEmail() {
    const [email,setEmail] = useState('')
    const navigate = useNavigate('')

    const randomNumbers = (quantidade) =>{
        const numbers = new Array(quantidade).fill(0).map(e => ( e = Math.floor(Math.random() * 10).toString() ))
        return numbers.join('')
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email !== ''){
            const user = {'email': email, 'confirmCod': randomNumbers(4)}  
            sessionStorage.setItem("email-valido", JSON.stringify(user))
            navigate('confirmEmail')
        }
    }

    return (
        <>
            <form className={Styles.register_form} action="" onSubmit={e => handleSubmit(e)}>
                <h2>Informe o seu Email para continuar</h2>
                <Input type='email' placeholder='Email' value = {email} onChange = { e => setEmail(e.target.value)}/>
                <Button placeholder='Enviar'/>
            </form>
        </>
    );
}

export default RegisterEmail;