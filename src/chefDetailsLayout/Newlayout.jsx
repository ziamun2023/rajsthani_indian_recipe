import React from 'react';
import Header from '../component/header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Rightnav from './Rightnav';
import { Outlet } from 'react-router-dom';
import Footer from '../component/footer/Footer';

const Newlayout = () => {
    return (<Container>
            <Header></Header>
      <Row>
      
        <Col lg={9}><Outlet></Outlet></Col>
        <Col lg={3}><Rightnav></Rightnav></Col>
      </Row>
      

            <Footer></Footer>
            </Container>
       
    );
};

export default Newlayout;