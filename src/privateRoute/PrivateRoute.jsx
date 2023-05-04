import React, { useContext } from 'react';
import { ColorRing } from  'react-loader-spinner'

import {Navigate, useLocation} from "react-router-dom"
import { AuthContext } from '../provider/Authprovider';
const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
       return <div className=''><div className='mx-auto w-96'><ColorRing
       visible={true}
       height="210"
       width="210"
       ariaLabel="blocks-loading"
       wrapperStyle={{}}
       wrapperClass="blocks-wrapper"
       colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
     /></div></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;