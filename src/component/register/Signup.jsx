import React, { useContext } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "/src/70640-floating-magic-link-login.json";
// import './signup.css'
import {Link, useLocation, useNavigate} from "react-router-dom"
import { useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const auth = getAuth(app);
const Signup = () => {

   
    const  [error,setError]=useState('')
    const [eerror, setEerror] = useState("");
    

    const location=useLocation()
    const from=location.state?.from?.pathname || '/';
    const navigate=useNavigate()
    const githubProvider=new GithubAuthProvider()
    const googleProvider= new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const {createuser}=useContext(AuthContext)
    // createuser receives an object as it was sent in object form(destructuring)} 
   
    const handlesignup=(event)=>{
        
        // section 1
        event.preventDefault()
        const form=event.target;
        const email=form.email.value
        console.log(email)
        const password=form.password.value
        const confirm=form.confirm.value
        console.log(email,password,confirm)
        setError('')
        // section 2
        if (password!==confirm){
            setError('password didnt match')
            return
        }
        else if(email===""){
            setError('Empty Email ! please enter your email id')
            return
        }
        else if(password.length<6){
            setError('password minimum greater then 6 character')
            return
        }
        
        
    
    
        createuser(email,password)
        .then(result=>{
            const loggesuser=result.user
      
            navigate(from,{replace: true} )
    
            

        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const handlesignupwithgithub=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const loggeduserGithub=result.user
            console.log(loggeduserGithub)
            setUser(loggeduserGithub)
            navigate(from,{replace: true} )

        })
        .catch(error=>{
            console.log(error)
        })
    }
     const handleGoogleSignup=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loggedwithgoogle=result.user
            console.log(loggedwithgoogle)
            setUser(loggedwithgoogle)
            navigate(from,{replace: true} )
        })
        .catch(error=>{
            console.log(error)
        })
     }
     const emailsignchange=(e)=>{
const signupemailchange=e.target.value
if(signupemailchange.length===0){
    setEerror("please enter email")
}else{
    setEerror("email received")
}
     }


    return (
   <div>
  
      <div className='grid lg:grid-cols-2'>
         <div className='my-auto mx-auto'>
         <div className='form-container   h-full my-auto '>
        <h2 className='form-title text-center text-6xl font-bold my-10 text-gray-600'>signup</h2>
        <form onSubmit={handlesignup} action="">
            <div className="form-control">
                <label htmlFor="email">email</label>
                <input type="email" name='email'  id=''  required  onChange={emailsignchange}/>
            </div>
            <div className="form-control">
                <label htmlFor="password">password</label>
                <input type="password" name='password' id='' required  />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">confirm password</label>
                <input type="password" name='confirm' id='' required />
            </div>
            <input className='btn-submit  bg-orange-400 hover:bg-orange-600' type="submit" value="sign up" />
        </form>
       
   
        <p className='text-center font-base text-black mt-5'><small>already have an account? <Link to='/login'><b>log in</b></Link></small></p>
      <p className='text-red-800 text-3xl'> {error}</p>
      <p className='text-green-500 text-3xl'> {eerror}</p>
      
        <div className='mb-5'>
    <button onClick={handleGoogleSignup} className=' bg-blue-500 hover:bg-blue-900 ms-5  rounded-md px-3 py-2  text-black font-semibold '>Sign up with google</button><button onClick={handlesignupwithgithub}  className=' bg-gray-600 hover:bg-gray-700  rounded-md px-3 py-2 ms-4 '>Sign up with github</button>
    
    </div>  
    
   
      
    </div> 


         </div>
         <div className=' w-full h-full my-auto'>
         <Lottie style={{width:400}} className='mx-auto my-auto ' animationData={groovyWalkAnimation} loop={true} /> 
         </div>
     </div>
   </div>
    );
};

export default Signup;