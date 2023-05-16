import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import IndexPage from '../pages/IndexPage';
import Login from '../pages/auth/Login';
import Registarrion from '../pages/auth/Registration';



const CustomRouter: React.FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<IndexPage/>} />
            <Route path={"auth/login"} element={<Login/>} />
            <Route path={"auth/registration"} element={<Registarrion/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}

export default CustomRouter;