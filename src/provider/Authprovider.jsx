import React, {  createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const signin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     
    
    }
 
    // const user ={displayName:'al katra'}
    const createuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            return unsubscribe
        }
    },[])
   const authinfo={
    user,
    loading,
    createuser,
    signin,
    logout,
    
   }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;