import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </>
    );
};

export default Main;