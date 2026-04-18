import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    // value share
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser,updatedData);
    }

    const googleSignin = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubSignin = () =>{
        return signInWithPopup(auth,githubProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    },[])

    const authData = {
      user,
      setUser,
      createUser,
      logOut,
      signIn,
      loading,
      setLoading,
      updateUser,
      googleSignin,
      githubSignin
    };

    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>;
   
};

export default AuthProvider; 