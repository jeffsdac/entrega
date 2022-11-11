import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import Styles from './calendar.module.scss'

const Calendar = ({openModal = () =>{}, urlUser = ''}) => {
    const [numberMounth, setNumberMounth] = useState(0)
    // const [isCommitted, setIsCommitted] = useState(false)
    const [commitments, setCommitments] = useState({
        mounths: [],
        days: [],
        cdUser: [],
        cdAgendamento: []
    })
    const mounths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const id = JSON.parse(sessionStorage.getItem('user')).id

    const daysInMonth = (year, month) => 32 - new Date(year, month, 32).getDate() // Date(year, month, 32).getDate() => o 32 faz retornar quantos dias faltam para o próximo mes
    const allDays = new Array(daysInMonth(2022, numberMounth)).fill(0).map((e, i) => e = i+1)
    let daysInWeek = 0

    const handleChange = (e) =>{
        setNumberMounth(parseInt(e.target.value))
    }

    useEffect(() =>{
        const getCommitment = async () =>{
            await api
                .get(`/${urlUser}/${id}/agendamentos`)
                .then(resp => (
                    resp.data.map((commitment)=>{
                        const commitmentMounth = parseInt(commitment.dtHorarioFim.split('-')[1])
                        const commitmentDay = parseInt(commitment.dtHorarioFim.split('-')[2])
                        return setCommitments(c => ({...c, 'mounths': [...c.mounths, commitmentMounth], 'days': [...c.days, commitmentDay], 'cdUser': [...c.cdUser, urlUser === 'oficina' ? commitment.cdUsuario : commitment.cdOficina], 'cdAgendamento': [...c.cdAgendamento, commitment.cdAgendamento]}))
                    })
                ))
                .catch(err => console.log(err))
        }
        getCommitment()
    },[id, urlUser]);

    return (
        <div className={Styles.calendar_container}>
            <select className={Styles.select_mounth} name="" id="" onChange={(e) => handleChange(e)}>
                <optgroup>
                    {
                        mounths.map((mounth, index) =>(
                            <option key={index} value={index} className={Styles.mounth_option}>{mounth}</option>
                        ))
                    }
                </optgroup>
            </select>
            <table className={Styles.table_calender}>
                <tbody>
                    {new Array(5).fill({}).map((e,i) =>{
                        const days = allDays.slice(daysInWeek, daysInWeek + 7)
                        daysInWeek+= 7
                        return(
                            
                            <tr key={i}>
                            {days.map((numberDay,i)=>{
                                const index = commitments.days.indexOf(numberDay)
                                return(
                                    <th key={i} onClick={commitments.days.includes(numberDay) && commitments.mounths[index] === numberMounth + 1 ? () => openModal(commitments.cdUser[index], commitments.cdAgendamento[index]) : ()=>{}}>
                                        <div className={Styles.day_container}>
                                            <h4 className={commitments.days.includes(numberDay) && commitments.mounths[index] === numberMounth + 1 ? Styles.is_comitted : ''}>{numberDay}</h4>
                                        </div>
                                    </th>
                                )
                            })}
                          </tr>  
                        )
                    })}
                </tbody> 
            </table>
        </div>
    );
}

export default Calendar;