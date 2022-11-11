import React, { useState } from 'react';
import api from '../../../services/api';

import Styles from './registerPage.module.scss'
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [workShop, setWorkShop] = useState({
        ddd: '',
        email: '',
        nome: '',
        senha: '',
        telefone: '',
        cnpj: '',
        descricao: ''
    })
    const navigation = useNavigate('')

    const handleChange = (e) =>[
        setWorkShop({...workShop, [e.target.id]: e.target.value})
    ]

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await api
            .post('/oficina',workShop)
            .then(resp => navigation('/loginWorkShop'))
            .catch(err => console.log(err))
    }

    return (
        <div className={Styles.form_container}>
            <h2 className={Styles.title}>Registrar Oficina</h2>
            <form onSubmit={e => handleSubmit(e)} className={Styles.form_content}>
                <Input type='text' placeholder='email@email.com' id='email' value={workShop.email} onChange={(e) => handleChange(e)}/>
                <Input type='text' placeholder='Nome da sua Oficina' id='nome' value={workShop.nome} onChange={(e) => handleChange(e)}/>
                <Input type='text' placeholder='CNPJ' id='cnpj' value={workShop.cnpj} onChange={(e) => handleChange(e)}/>
                <div className={Styles.two_inputs}>
                    <Input type='text' placeholder='ddd' id='ddd' value={workShop.ddd} onChange={(e) => handleChange(e)}/>
                    <Input type='text' placeholder='telefone' id='telefone' value={workShop.telefone} onChange={(e) => handleChange(e)}/>
                </div>
                <Input type='password' placeholder='****' id='senha' value={workShop.senha} onChange={(e) => handleChange(e)}/>
                <textarea rows={5} placeholder='Descrição da sua oficina' id='descricao' value={workShop.descricao} onChange={(e) => handleChange(e)}></textarea>
                <Button placeholder='Cadastrar'/>
            </form>
        </div>
    );
}

export default RegisterPage;