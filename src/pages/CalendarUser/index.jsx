import React, { useRef } from 'react';
import api from '../../services/api';

import Styles from './calendarUser.module.scss'
import NavBar from '../../components/NavBar';
import Calendar from '../../components/Calendar';
import CardOficina from '../Home/components/CardWorkshop';
import { useState } from 'react';

function CalendarUser() {
    const [workShop, setWorkShop] = useState({
        name: '',
        desc: ''
    })
    const [commitment, setCommitment] = useState()
    const modalRef = useRef()

    const openModal = async (userId, modalId) =>{
        await api
            .get(`/oficina/${userId}`)
            .then(resp => setWorkShop({name: resp.data.nome, desc: resp.data.descricao}))
            .catch(err => console.log(err))
        modalRef.current.showModal()

        setCommitment(modalId)
    }

    const deletCommitment = async () =>{
        await api
            .delete(`/marcarAgendamento/${commitment}`)
            .then(resp => console.log(resp.data))
            .catch(err => console.log(err.message))
        modalRef.current.close()
        window.location.reload(true)
    }

    return (
        <>
            <NavBar isCarPage={false}/>
            <main>
                <dialog className={Styles.modal_container} ref={modalRef}>
                    <button className={Styles.close_button} onClick ={() => modalRef.current.close()}>X</button>
                    <CardOficina titleCard= {workShop.name} localWorkshop={workShop.desc}/>
                    <button className={Styles.delet_commitment} onClick={() => deletCommitment()}>
                        Cancelar Compromisso 
                    </button>
                </dialog>
                <Calendar openModal= {(e, a) =>{ openModal(e, a) }} urlUser= 'cliente'/>
            </main>
        </>
    );
}

export default CalendarUser;