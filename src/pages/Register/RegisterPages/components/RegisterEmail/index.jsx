import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'

import Styles from './registerEmail.module.scss'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'

function RegisterEmail() {
    const [email,setEmail] = useState('')
    const navigate = useNavigate('')
    
    const randomNumbers = (quantidade) =>{
        const numbers = new Array(quantidade).fill(0).map(e => ( e = Math.floor(Math.random() * 10).toString() ))
        return numbers.join('')
    }

    const sendEmail = (cod, email) =>{
        const emailTemplate = {
            verificationCod: cod,
            email: email
        }

        emailjs.send("sendEmailSpaceCar","template_4z82z72",emailTemplate, "4d3b3jJxLmKL1mbNH")
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(email !== ''){
            const verificationCode = randomNumbers(4)
            const user = {'email': email, 'confirmCod': verificationCode}  
            sessionStorage.setItem("email-valido", JSON.stringify(user))
            sendEmail(verificationCode, email)
            navigate('confirmEmail')
        }
    }

    return (
        <>
            <form className={Styles.register_form} action="" onSubmit={e => handleSubmit(e)}>
                <h2>Informe o seu email para continuar</h2>
                <Input type='email' placeholder='Email' value = {email} onChange = { e => setEmail(e.target.value)}/>
                <Button placeholder='Enviar'/>
            </form>
        </>
    );
}

export default RegisterEmail;