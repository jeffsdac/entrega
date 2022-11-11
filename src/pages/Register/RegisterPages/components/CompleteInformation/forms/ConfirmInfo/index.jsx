import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../../../../../services/api';

import Styles from './confirmInfo.module.scss'
import Progress from '../../components/Progress';
import Input from '../../../../../../../components/Input';
import Button from '../../../../../../../components/Button';

function ConfirmInfo() {
    const [password, setPassword] = useState({
        senha: '',
        confirmSenha: '' 
    })
    const email = JSON.parse(sessionStorage.getItem("register-usuer")).email
    const navigation = useNavigate('')

    const handleChange = (e) =>{
        setPassword({...password, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(password.senha === '' || password.confirmSenha === ''){
            alert("Preencha todos os campos!")
        }else if(password.senha !== password.confirmSenha){
            alert("As senhas não estão iguais")
        }else if(password.senha.length < 9){
            alert("A Senha é muito fraca")
        }
        else{
            const session = Object.assign(JSON.parse(sessionStorage.getItem("register-usuer")), {senha: password.senha})
            sessionStorage.setItem("register-user", JSON.stringify(session))

            await api
                .post('/cliente', session)
                .then(resp =>{
                    sessionStorage.removeItem("register-usuer")
                    navigation('/login')
                })
                .catch(err => console.log(err))

            console.log(sessionStorage.getItem("register-usuer"))
        }
    }

    return (
        <>
            <Progress />
            <form className={Styles.form_confirm} onSubmit={e => handleSubmit(e)}>
                <Input type='text' isEditable={false} placeholder={email}/>
                <Input id='senha' type='password' placeholder='Crie uma Senha' value={password.senha} onChange={e => handleChange(e)}/>
                <Input id='confirmSenha' type='password' placeholder='Confirme a Senha digitada' value={password.confirmSenha} onChange={e => handleChange(e)}/>
                <Button placeholder='Cadastrar'></Button>
            </form>
        </>
    );
}

export default ConfirmInfo;