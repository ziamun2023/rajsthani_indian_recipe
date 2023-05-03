import React, { useContext } from 'react';

import {Navigate, useLocation} from "react-router-dom"
import { AuthContext } from '../provider/Authprovider';
const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
       return <p>Loading...</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;