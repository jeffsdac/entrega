import React from 'react';
import { AiFillCalendar, AiFillShop, AiOutlineCalendar, AiOutlineShop } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import Styles from './navWorkShop.module.scss'

const NavWorkShop = ({isCalendarPage = true}) => {
    const logOut = () =>{
        sessionStorage.removeItem('user')
        window.location = '/'
    }

    return (
        <div className={Styles.nav_work_shop_container}>
            <nav className={Styles.nav_container}>
                <img src="./imgs/LogoSemTexto.png" alt="" />
                <button>
                    <Link to='../calendarWorkShop'>
                    {isCalendarPage 
                        ? <AiFillCalendar className={Styles.fill_icon}/> 
                        : <AiOutlineCalendar />} 
                    </Link>
                </button>
                <button>
                    <Link to='../profileWorkShop'>
                    {isCalendarPage 
                        ? <AiOutlineShop />
                        : <AiFillShop className={Styles.fill_icon}/>} 
                    </Link>
                </button>
                <span className={Styles.log_out} onClick={() => logOut()}><h4>Log Out</h4></span>
            </nav>
        </div>
    );
}

export default NavWorkShop;