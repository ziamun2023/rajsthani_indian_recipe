import React, { useContext } from 'react';
// import './signup.css'
import {Link, useLocation, useNavigate} from "react-router-dom"
import { useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
const auth = getAuth(app);
const Signup = () => {

   
    const  [error,setError]=useState('')
    // const [error, setError] = useState(false);

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
        // setError('')
        // section 2
        if (password!==confirm){
            setError('password didnt match')
            return
        }
        else if (email===""){
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
            console.log(error)
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

    //  const handleEmailChange=(e)=>{
    //     setEmail2(e.target.value);
    //     console.log(e.target.value)
    //  }
    return (
     <div>
           <div className='form-container w-96 mx-auto'>
        <h2 className='form-title'>signup</h2>
        <form onSubmit={handlesignup} action="">
            <div className="form-control">
                <label htmlFor="email">email</label>
                <input type="email" name='email'  id=''  required />
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
      <p className='text-red-800'>{error}</p>
        <div className='text-center'>
    <button onClick={handleGoogleSignup} className='btn-submit bg-blue-600 hover:bg-blue-900'>Sign up with google</button>
    </div>  
    <div className='text-center'>
    <button onClick={handlesignupwithgithub}  className='btn-submit bg-gray-600 hover:bg-gray-700'>Sign up with github</button>
    </div>
      
    </div> 


     </div>
    );
};

export default Signup;