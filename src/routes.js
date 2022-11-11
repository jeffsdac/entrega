import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import LoginWorkShop from './pages/LoginWorkShop';
import Register from './pages/Register';
import Home from './pages/Home'
import EditCar from './pages/EditCar';
import CalendarUser from './pages/CalendarUser';
import CalendarWorkShop from './pages/CalendarWorkShop';
import FirstPage from './pages/FirstPage'
import RegisterWorkShop from './pages/RegisterWorkShop'
import WorkShopProfile from './pages/WorkShopProfile';
// import { Container } from './styles';

function CreateRoutes () {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<FirstPage/>}/> 
            <Route exact path='/login' element={<Login/>}/> 
            <Route exact path='/loginWorkShop' element={<LoginWorkShop/>}/> 
            <Route exact path='/register/*' element={<Register/>}/> 
            <Route exact path='/home' element={<Home/>}/> 
            <Route exact path='/editCar' element={<EditCar/>}/> 
            <Route exact path='/calendarUser' element={<CalendarUser/>}/> 
            <Route exact path='/calendarWorkShop' element={<CalendarWorkShop/>}/> 
            <Route exact path='/registerWorkshop' element={<RegisterWorkShop/>}/> 
            <Route exact path='/profileWorkShop' element={<WorkShopProfile/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default CreateRoutes;