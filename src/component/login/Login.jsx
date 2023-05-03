import React, { useContext } from 'react';
import './login.css'

import { useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const {signin}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/';
   
    // createuser receives an object as it was sent in object form(destructuring)} 
    const  [error,setError]=useState('')
    const handlelogin=(event)=>{
        // section 1
        event.preventDefault()
        const form=event.target;
        const email=form.email.value
        const password=form.password.value
       
        console.log(email,password)
        // setError('')
        // section 2
       
         if(password.length<6){
            setError('password minimum greater then 6 character')
            return
        }
        signin(email,password)
        .then(result=>{
            const loggesuser=result.user
            form.reset()
            console.log(loggesuser)
            navigate(from,{replace: true})
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
     <div>
           <div className='form-container w-96 mx-auto'>
            <h2 className='form-title text-5xl text-black'>login</h2>
            <form onSubmit={handlelogin} action="">
                <div className="form-control">
                    <label htmlFor="">email</label>
                    <input type="email" name='email' id='' required />
                </div>
                <div className="form-control">
                    <label password="">password</label>
                    <input type="password" name='password' id='' required />
                </div>
                <input className='btn-submit bg-orange-400 hover:bg-orange-600' type="submit" value="login" />
            </form>
           
        </div>
     </div>
    );
};

export default Login;





    // navigate(from,{replace:true})