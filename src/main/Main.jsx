import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </Container>
    );
};

export default Main;