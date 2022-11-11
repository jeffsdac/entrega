import React from 'react';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Styles from './profileForm.module.scss';
import { useState } from 'react';
import api from '../../../services/api';

function ProfileForm() {
    const dddBrasil = ["11","12","13","14","15","16","17","18","19","21","22","24","27","28","31","32","33","34","35","37","38","41","42","43","44","45","46","47","48","49","51","53","54","55","61","62","63","64","65","66","67","68","69","71","73","74","75","77","79","81","82","83","84","85","86","87","88","89","91","92","93","94","95","96","97","98","99"]
    const [workShop, setWorkShop] = useState(JSON.parse(sessionStorage.getItem('user')))

    const handleChange = (e) =>{
        if(e.target.id === 'telefone'){
            setWorkShop({...workShop, [e.target.id]: e.target.value.replace(/\D/g, '')})
        }else{
            setWorkShop({...workShop, [e.target.id]: e.target.value})
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await api
            .put(`/oficina/${workShop.id}`, workShop)
            .then(resp => {
                sessionStorage.removeItem('user')
                sessionStorage.setItem('user', JSON.stringify(resp.data))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={Styles.form_contaienr}>
            <h3>Editar informações oficina</h3>
            <form onSubmit={e => handleSubmit(e)} className={Styles.form}>
                <textarea id='descricao' className={Styles.desc_textarea} value = {workShop.descricao} onChange ={e => handleChange(e)} rows="5"></textarea>
                <div className={Styles.telefone_container}>
                    <select className={Styles.select} id='ddd' name="" value = {workShop.ddd} onChange = { e => handleChange(e)}>
                        <optgroup>
                            {dddBrasil.map((ddd, key) =>(
                                <option key={key} value={ddd}>{ddd}</option>
                            ))}
                        </optgroup>
                    </select>
                    <Input id='telefone' value={workShop.telefone} onChange ={e => handleChange(e)}/>
                </div>
                <Input value={workShop.cnpj} isEditable={false}/>  
                <Input value={workShop.email} isEditable={false}/>  
                <Input value={workShop.nome} isEditable={false}/>  
                <Input value={workShop.senha} isEditable={false}/>
                <Button placeholder='Editar'/>
            </form>
        </div>
    );
}

export default ProfileForm;