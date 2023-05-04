import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
// import LoadingSpinner from '../Spinner/LoadingSpinner';
// import { ColorRing } from  'react-loader-spinner'

const Main = () => {

    const navigation=useNavigation()
    return (
        <>
            <Header></Header>
       <Outlet></Outlet>
            <Footer></Footer>

        </>
    );
};

export default Main;