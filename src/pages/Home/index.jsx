import React, { useState } from 'react';
import { useRef } from 'react';

import Styles from './home.module.scss'

import NavBar from '../../components/NavBar';
import CardWorkshop from './components/CardWorkshop';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useEffect } from 'react';
import api from '../../services/api';

function Home() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    const [problem, setProblem] = useState({
        desProblem: '',
        dtHorarioInicio: '',
        dtHorarioFim: '',
        cdOficina: '',
        cdUsuario: user.id
    })
    const [hors, setHors] = useState({
        start: '',
        end: ''
    })
    const [workShops, setWorkShops] = useState([])

    const modalRef = useRef()

    const handleChange = (e) =>{
        setProblem({...problem, [e.target.id]: e.target.value})
        
    }
    
    const closeModal = () =>{
        modalRef.current.close()
        clearInputs()
    }
    
    const clearInputs = () =>{
        setProblem({
            ...problem,
            desProblem: '',
            dtHorarioInicio: '',
            dtHorarioFim: '',
            cdOficina: '',
        })
        setHors({
            start: '',
            end: ''
        })
    }

    const openModal = (idWorkshop) =>{
        setProblem({...problem, cdOficina: idWorkshop})
        // sessionStorage.setItem('worksho_id', idWorkshop)
        modalRef.current.showModal()
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(problem.desProblem === '' || problem.dtHorarioInicio === '' || hors.start === '' || hors.end === ''){
            alert('Preencha todos os campos')
        }else{
            const scheduling = problem

            scheduling.dtHorarioFim = `${scheduling.dtHorarioInicio}T${hors.end}`
            scheduling.dtHorarioInicio = `${scheduling.dtHorarioInicio}T${hors.end}`
            await api
                .post('/marcarAgendamento', scheduling)
                .then(resp => {
                        closeModal()
                    })
                .catch(err => console.log(err))
        }
    }
        
    useEffect(() =>{
        const getAllWorkShops = async () => (
            await api
                .get('/oficina')
                .then(resp => {
                    setWorkShops(resp.data)
                })
                .catch(err=> console.log(err))
        )
        getAllWorkShops()
    },[])

    return (
        <>
        <NavBar isCalendarPage= {false} isCarPage= {false}/>
        <main className={Styles.home}>
            <dialog className={Styles.modal_container} ref={modalRef}>
                <button className={Styles.close_button} onClick ={() => closeModal()}>X</button>
                <form className={Styles.form_modal} onSubmit={e => handleSubmit(e)}>
                    <h2>Descreva sobre o seu problema</h2>
                    <textarea name="" id="desProblem" cols="30" rows="10" value={problem.desProblem} onChange={e => handleChange(e)}></textarea>
                    <h2>Informe a data que deseja ser atendido</h2>
                    <div className={Styles.dates_container}>
                        <Input id='dtHorarioInicio' type="date" value={problem.dtHorarioInicio} placeholder='Inicio' onChange={e => handleChange(e)}/>
                        {/* <p>de</p>
                        <Input id='dtHorarioFim' type="date" value={problem.dtHorarioFim} placeholder='Fim' onChange={e => handleChange(e)}/> */}
                        <div className={Styles.hours_container}>
                            <Input id='start' type="time" value={hors.start} onChange={e => setHors({...hors, start: e.target.value})}/>
                            <p>de</p>
                            <Input id='end' type="time" value={hors.end} onChange={e => setHors({...hors, end: e.target.value})}/>
                        </div>
                    </div>
                    <Button placeholder='Enviar'/>
                </form>
            </dialog>

            <h1 className={Styles.title_home}>Oficinas</h1>
            <div className={Styles.card_container}>
                {
                    workShops.map((workShop, key) =>(
                        <CardWorkshop key={key} titleCard={workShop.nome} localWorkshop={workShop.descricao} onClick={() => (openModal(workShop.id))}/>
                        ))
                    }
            </div>
        </main>
        </>
    );
}

export default Home;