import React, { useState } from 'react';
import { AiFillCar, AiOutlineCar, AiFillCalendar, AiOutlineCalendar, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import Styles from './navBar.module.scss'

const NavBar = ({isCalendarPage = true, isCarPage = true}) => {
    const [styleMenu, setStyleMenu] = useState('')
    
    const toggleMenu = () =>{
        styleMenu === ''
            ?setStyleMenu(Styles.nav_mobile)
            :setStyleMenu('')
    }

    const logOut = () =>{
        sessionStorage.removeItem('user')
        window.location = '/'
    }

    return (
        <div className={`${Styles.nav_container} ${styleMenu}`}>
            <button className={Styles.options_button} onClick= {() => toggleMenu()}>
                <AiOutlineMenu/>
            </button>

            <nav className={Styles.nav_content}>
                <button className={Styles.img_logo}>
                    <Link to='/home'>
                        <img src="/imgs/Logo.png" alt="" />
                    </Link>
                </button>
                <div className={Styles.icons_buttons}>
                    <button className={Styles.car}><Link to='../editCar'>{ isCarPage ? <AiFillCar className={Styles.fill_icon}/> : <AiOutlineCar />} </Link></button>
                    <button className={Styles.calendar}><Link to='../calendarUser'>{ isCalendarPage ? <AiFillCalendar className={Styles.fill_icon}/> : <AiOutlineCalendar />} </Link></button>
                    <span className={Styles.log_out} onClick={() => logOut()}>Log Out</span>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;