import React, { useState } from 'react';

import Styles from './confirmInfo.module.scss'
import Progress from '../../components/Progress';
import Input from '../../../../../../../components/Input';
import Button from '../../../../../../../components/Button';

function ConfirmInfo() {
    const [password, setPassword] = useState({
        password: '',
        confirmPassword: '' 
    })
    const email = JSON.parse(sessionStorage.getItem("register-usuer")).email

    const handleChange = (e) =>{
        setPassword({...password, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(password.password === '' || password.confirmPassword === ''){
            alert("Preencha todos os campos!")
        }else if(password.password !== password.confirmPassword){
            alert("As senhas não estão iguais")
        }else{
            const session = Object.assign(JSON.parse(sessionStorage.getItem("register-usuer")), {password: password.password})
            sessionStorage.setItem("register-usuer", JSON.stringify(session))

            console.log(sessionStorage.getItem("register-usuer"))
            // navigation('../confirmInformations')
        }
    }

    return (
        <>
            <Progress />
            <form className={Styles.form_confirm} onSubmit={e => handleSubmit(e)}>
                <Input type='text' isEditable={false} placeholder={email}/>
                <Input id='password' type='password' placeholder='Crie uma Senha' value={password.password} onChange={e => handleChange(e)}/>
                <Input id='confirmPassword' type='password' placeholder='Confirme a Senha digitada' value={password.confirmPassword} onChange={e => handleChange(e)}/>
                <Button placeholder='Cadastrar'></Button>
            </form>
        </>
    );
}

export default ConfirmInfo;