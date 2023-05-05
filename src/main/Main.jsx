import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router-dom';


const Main = () => {


    return (
        <>


    <div className=' mx-5'>
    <Header></Header>
    </div>
        
  <div className='z-30 mx-10' >
  <Outlet></Outlet>
  </div>
            <Footer></Footer>
          

  
        </>
    );
};

export default Main;