import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const googleprovider = new GoogleAuthProvider();
    const [user,setUSer]=useState(null)
    const name="asif"
    const creatuserWithEmailAndPass=(email, password)=>{
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    const userLoginWithmailpass=( email, password)=>{
   
        return signInWithEmailAndPassword(auth, email, password)
       
    }
 
    const signinWithGoogle=()=>{
        signInWithPopup(auth, googleprovider)
    }
    const userlogOut=()=>{
        signOut(auth)
    }
    const authInfu={
        name,creatuserWithEmailAndPass,userlogOut,userLoginWithmailpass,signinWithGoogle

    }
    useEffect(()=>{
 const unsubsCribe=onAuthStateChanged(auth,(currentuser)=>{
    console.log(currentuser)
  
 })
 return ()=>unsubsCribe()
    },)
    return (
       <AuthContext.Provider value={authInfu}>
{children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;