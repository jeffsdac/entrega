import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from './locationInformation.module.scss'
import Progress from '../../components/Progress';
import Input from '../../../../../../../components/Input';
import Button from '../../../../../../../components/Button';

function LocationInformation() {
    const [location, setLocation] = useState({
        cep: '',
        numero: '',
        complemento: '',
        cidade: '',
        bairro: '',
    }) 
    const navigation = useNavigate('')

    const handleChange = (e) =>{
        setLocation({...location, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(location.cep === '' || location.numero === '' || location.complemento === '' || location.cidade === '' || location.bairro === ''){
            alert("Preencha todos os campos!")
        }else{
            const session = Object.assign(JSON.parse(sessionStorage.getItem("register-usuer")), location)
            sessionStorage.setItem("register-usuer", JSON.stringify(session))

            navigation('../confirmInformations')
        }
    }

    return (
        <>
            <Progress/>
            <form onSubmit={e => handleSubmit(e)} className={Styles.form_location}>
                <Input id='cep' type='text' placeholder='CEP' value = {location.cep} onChange = { e => handleChange(e)}/>
                <div className={Styles.two_inputs}>
                    <Input id='numero' type='text' placeholder='Numero' value = {location.numero} onChange = { e => handleChange(e)}/>
                    <Input id='complemento' type='text' placeholder='Complemento' value = {location.complemento} onChange = { e => handleChange(e)}/>
                </div>
                <Input id='cidade' type='text' placeholder='Cidade' value = {location.cidade} onChange = { e => handleChange(e)}/>
                <Input id='bairro' type='text' placeholder='Bairro' value = {location.bairro} onChange = { e => handleChange(e)}/>
                <Button placeholder='Próximo'/>
            </form>
        </>
    );
}

export default LocationInformation;