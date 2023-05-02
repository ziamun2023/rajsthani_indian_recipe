import React from 'react';
import Header from '../component/header/Header';
// import { Col, Container, Row } from 'react-bootstrap';
import Rightnav from './Rightnav';
import { Outlet } from 'react-router-dom';
import Footer from '../component/footer/Footer';

const Newlayout = () => {
    return (<div>
            <Header></Header>
      
       <Outlet></Outlet>
       <Rightnav></Rightnav>
     
      

            <Footer></Footer>
            </div>
       
    );
};

export default Newlayout;