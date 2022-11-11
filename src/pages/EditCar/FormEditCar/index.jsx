import React from 'react';
import { useState } from 'react';
import api from '../../../services/api'

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Styles from './formEditCar.module.scss'
import { useNavigate } from 'react-router-dom';

function FormEditCar() {
    const [car, setCar] = useState({
        anoFabricacao: "",
        anoModelo: "",
        chassi: "",
        cilindradas: "",
        descricaoProblema: " ",
        kmRodado: "",
        marca: "",
        motor: "",
        passageiros: "",
        placa: "",
        portas: "",
        potencia: "",
        tipoCambio: "",
        tipoCombustivel: ""
    })
    const userId = JSON.parse(sessionStorage.getItem('user')).id
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setCar({...car, [e.target.id]: e.target.value})
    }
    
    const handleChangeNumber = (e) =>{
        const result = e.target.value.replace(/\D/g, '');
        setCar({...car, [e.target.id]: result})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await api
            .post(`/cliente/${userId}/carros`, car)
            .then(resp => {
                alert('Carro adicionado com Sucesso!')
                navigate('/home')
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className={Styles.edit_car_form}>
            <div className={Styles.input_label}>
                <label htmlFor="anoFabricacao">Ano de Fabricação</label>
                <Input type='date' id='anoFabricacao' value={car.anoFabricacao} onChange={e => handleChange(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="anoModelo">Ano de Modelo</label>
                <Input type='date' id='anoModelo' value={car.anoModelo} onChange={e => handleChange(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="chassi">Chassi</label>
                <Input type='text' id='chassi' value={car.chassi} onChange={e => handleChange(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="cilindradas">Cilindradas</label>
                <Input type='text' id='cilindradas' value={car.cilindradas} onChange={e => handleChangeNumber(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="kmRodado">Km Rodados</label>
                <Input type='text' id='kmRodado' value={car.kmRodado} onChange={e => handleChangeNumber(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="">Marca</label>
                <Input type='text' id='marca' value={car.marca} onChange={e => handleChange(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="motor">Motor</label>
                <Input type='text' id='motor' value={car.motor} onChange={e => handleChangeNumber(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="passageiros">Passageiros</label>
                <Input type='text' id='passageiros' value={car.passageiros} onChange={e => handleChangeNumber(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="placa">Placa</label>
                <Input type='text' id='placa' value={car.placa} onChange={e => handleChange(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="portas">Portas</label>
                <Input type='text' id='portas' value={car.portas} onChange={e => handleChangeNumber(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="potencia">Potência</label>
                <Input type='text' id='potencia' value={car.potencia} onChange={e => handleChangeNumber(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="tipoCambio">Tipo Câmbio</label>
                <Input type='text' id='tipoCambio' value={car.tipoCambio} onChange={e => handleChange(e)}/>
            </div>
            <div className={Styles.input_label}>
                <label htmlFor="tipoCombustivel">Tipo Combustivel</label>
                <Input type='text' id='tipoCombustivel' value={car.tipoCombustivel} onChange={e => handleChange(e)}/>
            </div>
            <Button placeholder='Salvar Carro'/>
        </form>
    );
}

export default FormEditCar;