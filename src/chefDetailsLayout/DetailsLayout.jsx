import React from 'react';
import Header from '../component/header/Header';
import ChefProfile from './ChefProfile';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router-dom';

const DetailsLayout = () => {
    return (
        <div>
             <Header></Header>
            <Container>
      <Row>
      
        
        <ChefProfile></ChefProfile>
      </Row>
      
    </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default DetailsLayout;