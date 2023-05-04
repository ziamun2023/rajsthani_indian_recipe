import React, { useContext } from 'react';
import './login.css'

import { useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Home from '../home/Home';
import { Link } from 'react-router-dom';
// import LoadingSpinner from '../../Spinner/LoadingSpinner';
const Login = () => {
    // const loginwithgoogle=()=>{
const [emailerror,setEmailerror]=useState("")
const [succesemail,setsuccesemail]=useState('')
    // }
    // const [pass,setPass]=useState(false)
const [succes,setSucce]=useState('')
  
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

    //    setError('')
        console.log(email,password)
        setError('')
        // section 2
       
      
  
     
       
        signin(email,password)
        .then(result=>{
        
            const loggesuser=result.user
            form.reset()
            console.log(loggesuser)
            navigate(from,{replace: true} || Home)
        })
        .catch(error=>{
            setError("Password didnt match the email")
            console.log()
            
        })
    }
    const passchange=(e)=>{
        const chang=e.target.value
        if(chang.length===0){
         setError('Please enter password')
  
setSucce('')
        }
        else{
            setSucce('pass recieved')
            setError('')
        }
     }

     const emailonchange=(e)=>{
const emailchange=e.target.value
console.log(emailchange)
if(emailchange.length===0){
    setError('please enter email')
}
else{
    setError('')
}
     }

   


    return (
     <div>
           <div className='form-container w-96 mx-auto'>
            <h2 className='form-title text-5xl text-black text-center'>login</h2>
            <form onSubmit={handlelogin} action="">
                <div className="form-control">
                    <label htmlFor="">email</label>
                    <input type="email" name='email' id='' required onChange={emailonchange} />
                </div>
                <div className="form-control">
                    <label password="">password</label>
                    <input type="password" name='password' id='' required  onChange={passchange}/>
                </div>
                <input className='btn-submit bg-orange-400 hover:bg-orange-600' type="submit" value="login" />
            </form>
            <p className='text-red-500 text-3xl'>{error}</p>
            <p className='text-green-200'>{succes}</p>
            <p className='text-yellow-900'>{succesemail}</p>
           {/* {pass&& <p>no password</p>} */}
        </div>
        <p className='text-center text-2xl my-5'>New to <b>Rajsthani Delights </b> ? <Link  to='/register'><p className='text-blue-800'>create a new account </p></Link> </p>
     </div>
    );
};

export default Login;





    // navigate(from,{replace:true})