import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
// import { Container } from './styles';

function CreateRoutes () {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login/>}/> 
            <Route exact path='/register/*' element={<Register/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default CreateRoutes;