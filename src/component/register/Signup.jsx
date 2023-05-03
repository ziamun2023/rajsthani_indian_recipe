import React, { useContext } from 'react';
// import './signup.css'
import {Link} from "react-router-dom"
import { useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
const Signup = () => {
 
    const {createuser}=useContext(AuthContext)
    // createuser receives an object as it was sent in object form(destructuring)} 
    const  [error,setError]=useState('')
    const handlesignup=(event)=>{
        // section 1
        event.preventDefault()
        const form=event.target;
        const email=form.email.value
        const password=form.password.value
        const confirm=form.confirm.value
        console.log(email,password,confirm)
        setError('')
        // section 2
        if (password!==confirm){
            setError('password didnt match')
            return
        }
        else if(password.length<6){
            setError('password minimum greater then 6 character')
            return
        }
        createuser(email,password)
        .then(result=>{
            const loggesuser=result.user
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
     <div>
           <div className='form-container w-96 mx-auto'>
        <h2 className='form-title'>signup</h2>
        <form onSubmit={handlesignup} action="">
            <div className="form-control">
                <label htmlFor="email">email</label>
                <input type="email" name='email' id='' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">password</label>
                <input type="password" name='password' id='' required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">confirm password</label>
                <input type="password" name='confirm' id='' required />
            </div>
            <input className='btn-submit bg-orange-400 hover:bg-orange-600' type="submit" value="sign up" />
        </form>
        <p><small>already have an account? <Link to='/login'> log in</Link>link</small></p>
        <p style={{color:"red"}}>{error}</p>
       
    </div>
     </div>
    );
};

export default Signup;