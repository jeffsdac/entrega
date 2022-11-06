import React, {useRef, useState} from 'react';

import Styles from './confirmEmail.module.scss'
import Button from '../../../../../../components/Button';
import InputNumber from '../../../../../../components/InputNumber';
import { useNavigate } from 'react-router-dom';

function ConfirmEmail() {
    const [numbers,setNumbers] = useState(new Array(4).fill(""))
    const divRef = useRef()
    const navigation = useNavigate('')
    const session = sessionStorage.getItem("email-valido")

    const changeFocus = (idElement) =>{
        idElement !== 3 
            ? divRef.current.children[idElement + 1].focus()
            : divRef.current.children[0].focus()
    }

    const handleChange = (e) =>{
        const result = e.target.value.replace(/\D/g, '');
        const oldNumbers = [...numbers]
        const idElement = parseInt(e.target.id.slice('')[e.target.id.length - 1])
        oldNumbers[idElement] = result
        setNumbers(oldNumbers)
        if(result !== ""){
            changeFocus(idElement)
        }
    }
        
    const handleSubmit = (e) =>{
        e.preventDefault()
        const cod = JSON.parse(session).confirmCod
        const email = JSON.parse(session).email
        console.log(session)
        if(numbers.join('') === cod){
            const user = {'email': email}
            sessionStorage.setItem("register-usuer", JSON.stringify(user))
            sessionStorage.removeItem("email-valido")
            navigation('../completeInformation')
        }else{
            alert("O Codigo esta errado!")
        }
    }

    return (
        <>
            <form className={Styles.register_form} action="" onSubmit={e => handleSubmit(e)}>
                <div className={Styles.text_form}>
                    <h2>Coloque o codigo de 4 digitos que enviamos para:</h2>
                    <p>{JSON.parse(session).email}</p>
                </div>
                <div className={Styles.inputs} ref={divRef}>
                    <InputNumber id='numberInputId0'type='number' placeholder='0' maxLength='1' value={numbers[0]} onChange={e => handleChange(e)}/>
                    <InputNumber id='numberInputId1'type='number' placeholder='0' maxLength='1' value={numbers[1]} onChange={e => handleChange(e)}/>
                    <InputNumber id='numberInputId2'type='number' placeholder='0' maxLength='1' value={numbers[2]} onChange={e => handleChange(e)}/>
                    <InputNumber id='numberInputId3'type='number' placeholder='0' maxLength='1' value={numbers[3]} onChange={e => handleChange(e)}/>
                </div>
                <Button placeholder='Enviar'/>
                <span className={Styles.resend_email}>Não recebi meu codigo</span>
            </form>
        </>
    );
}

export default ConfirmEmail;