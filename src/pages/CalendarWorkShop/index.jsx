import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

import Calendar from '../../components/Calendar';
import NavWorkShop from '../../components/NavWorkShop';
import api from '../../services/api';
import Styles from './calendarWorkSpace.module.scss'

function CalendarWorkSpace() {
    const [car,setCar] = useState({})
    const modalRef = useRef()

    const closeModal = () =>{
        modalRef.current.close()
        setCar({})
    }

    const openModal = async (id) => {
        modalRef.current.showModal()
        await api
            .get(`/cliente/${id}/carros`)
            .then(resp => setCar(resp.data[0]))
            .catch(err => console.log(err))
    }
    
    return (
        <>
        <main className={Styles.workSpace_container}>
            <dialog className={Styles.modal_container} ref={modalRef}>
                <button className={Styles.close_button} onClick ={() => closeModal()}>X</button>
                <p className={Styles.car_img}>🚗</p>
                <h2>{car.marca}</h2>
                <div className={Styles.desc_scheduling}>
                    <p>Informações do Carro</p>
                    <div className={Styles.description_container}>
                        <p><strong>Ano Fabricação: </strong> {car.anoFabricacao}</p>
                        <p><strong>Ano Modelo: </strong> {car.anoModelo}</p>
                        <p><strong>Chassi: </strong> {car.chassi}</p>
                        <p><strong>Cilindradas: </strong> {car.cilindradas}</p>
                        <p><strong>Km Rodado: </strong> {car.kmRodado}</p>
                        <p><strong>Motor: </strong> {car.motor}</p>
                        <p><strong>Portas: </strong> {car.portas}</p>
                        <p><strong>Potência: </strong> {car.potencia}</p>
                        <p><strong>Tipo Câmbio: </strong> {car.tipoCambio}</p>
                        <p><strong>Tipo Combustível: </strong> {car.tipoCombustivel}</p>
                    </div>
                    <p>Descrição do Problema</p>
                    <div className={Styles.description_container}>
                        <p>{car.descricaoProblema}</p>
                    </div>
                </div>
            </dialog>
            <NavWorkShop isCalendarPage={true}/>
            <div className={Styles.calendar_container}>
                <Calendar urlUser='oficina' openModal={(e) => openModal(e)}/>
            </div>
        </main>
        </>
    );
}

export default CalendarWorkSpace;