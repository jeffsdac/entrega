import React, { useState } from 'react';

import Styles from './personalInformation.module.scss'
import Progress from '../../components/Progress';
import Input from '../../../../../../../components/Input';
import Button from '../../../../../../../components/Button';
import { useNavigate } from 'react-router-dom';

function PersonalInformation (){
    const [user, setUser] = useState({
        nome: '',
        telefone : '',
        genero: '',
        data: ''
    })
    const navigation = useNavigate('')

    const handleChange = (e) =>{
        setUser({...user, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(user.nome === "" || user.telefone === "" || user.genero === "" || user.data === ""){
            alert("Preencha todos os campos!")
        }else{
            const session = Object.assign(JSON.parse(sessionStorage.getItem("register-usuer")), user)
            sessionStorage.setItem("register-usuer", JSON.stringify(session))

            navigation('locationInformartion')
        }
    }

    return (
        <>
            <Progress/>
            <form className={Styles.personalInformation_form} onSubmit={e => handleSubmit(e)}>
                <Input id='nome' type='text' placeholder='Nome' value = {user.nome} onChange = { e => handleChange(e)}/>
                <Input id='telefone' type='tel' placeholder='Telefone' value = {user.telefone} onChange = { e => handleChange(e)}/>
                <div className={Styles.two_inputs}>
                    <Input id='genero' type='text' placeholder='Genero' value = {user.genero} onChange = { e => handleChange(e)}/>
                    <Input id='data' type='date' placeholder='Data de Nascimento' value = {user.data} onChange = { e => handleChange(e)}/>
                </div>
                <Button placeholder='Próximo'/>
            </form>
        </>
    );
}

export default PersonalInformation;