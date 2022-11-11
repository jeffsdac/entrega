import React, { useState } from 'react';

import Styles from './personalInformation.module.scss'
import Progress from '../../components/Progress';
import Input from '../../../../../../../components/Input';
import Button from '../../../../../../../components/Button';
import { useNavigate } from 'react-router-dom';

function PersonalInformation (){
    const dddBrasil = ["11","12","13","14","15","16","17","18","19","21","22","24","27","28","31","32","33","34","35","37","38","41","42","43","44","45","46","47","48","49","51","53","54","55","61","62","63","64","65","66","67","68","69","71","73","74","75","77","79","81","82","83","84","85","86","87","88","89","91","92","93","94","95","96","97","98","99"]
    const [user, setUser] = useState({
        nome: '',
        ddd: '11',
        telefone : '',
        sexo: 'F',
        dataNasc: '',
        cpf: ''
    })
    const navigation = useNavigate('')

    const handleChange = (e) =>{
        if(e.target.id === 'telefone' || e.target.id === 'cpf'){
            setUser({...user, [e.target.id]: e.target.value.replace(/\D/g, '')})
        }else{
            setUser({...user, [e.target.id]: e.target.value})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)

        if(user.nome === "" || user.telefone === "" || user.sexo === "" || user.dataNasc === "" || user.ddd === "" || user.cpf === ""){
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
                <Input id='cpf' type='text' placeholder='CPF' value = {user.cpf} onChange = { e => handleChange(e)}/>
                <div className={Styles.two_inputs}>
                    <select className={Styles.select} id='ddd' name="" value = {user.ddd} onChange = { e => handleChange(e)}>
                        <optgroup>
                            {dddBrasil.map((ddd) =>(
                                <option value={ddd}>{ddd}</option>
                            ))}
                        </optgroup>
                    </select>
                    <Input id='telefone' type='tel' placeholder='Telefone' value = {user.telefone} onChange = { e => handleChange(e)}/>
                </div>
                <div className={Styles.two_inputs}>
                    <select className={Styles.select} id='sexo' name="" value = {user.sexo} onChange = { e => handleChange(e)}>
                        <optgroup>
                            <option value="F">F</option>
                            <option value="M">M</option>
                            <option value="NB">NB</option>
                        </optgroup>
                    </select>
                    <Input id='dataNasc' type='date' placeholder='Data de Nascimento' value = {user.dataNasc} onChange = { e => handleChange(e)}/>
                </div>
                <Button placeholder='Próximo'/>
            </form>
        </>
    );
}

export default PersonalInformation;