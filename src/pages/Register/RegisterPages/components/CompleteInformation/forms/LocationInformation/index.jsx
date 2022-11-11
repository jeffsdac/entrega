import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from './locationInformation.module.scss'
import Progress from '../../components/Progress';
import Input from '../../../../../../../components/Input';
import Button from '../../../../../../../components/Button';

function LocationInformation() {
    const [location, setLocation] = useState({
        bairro: '',
        cidade: '',
        complemento: '',
        estado: '',  
        logradouro: '',
        numero: '',
    }) 
    const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',]
    const navigation = useNavigate('')

    const handleChange = (e) =>{
        if(e.target.id === 'numero'){
            let number = e.target.value.replace(/\D/g, '');
            setLocation({...location, [e.target.id]: number !== '' ? parseInt(number) : number})
        }else{
            setLocation({...location, [e.target.id]: e.target.value})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(location.numero === '' || location.estado === ''||location.complemento === '' || location.cidade === '' || location.bairro === '' || location.logradouro === ''){
            alert("Preencha todos os campos!")
        }else{
            const session = Object.assign(JSON.parse(sessionStorage.getItem("register-usuer")), {"endereco": location})
            sessionStorage.setItem("register-usuer", JSON.stringify(session))

            navigation('../confirmInformations')
        }
    }

    return (
        <>
            <Progress/>
            <form onSubmit={e => handleSubmit(e)} className={Styles.form_location}>
                <Input id='logradouro' type='text' placeholder='Logradouro' value = {location.logradouro} onChange = { e => handleChange(e)}/>
                <select className={Styles.select} id='estado' name="" value = {location.estado} onChange = { e => handleChange(e)}>
                    <optgroup>
                        {estados.map((estado) =>(
                            <option value={estado}>{estado}</option>
                        ))}
                    </optgroup>
                </select>
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