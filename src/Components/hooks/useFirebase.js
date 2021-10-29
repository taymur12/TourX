import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
import { useEffect } from "react";


initializeAuthentication();

const FirebaseAuth = () =>{
    const [user, setUser] = useState({})
    const [error, seterror] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const signinWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user;
            setUser(user)
        })
        .catch(error=>{
            seterror(error.message)
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser('')
            }
        })
    },[])
     //Logout
     const logout = () =>{
        signOut(auth).then(()=>{
            setUser({})
        })
        .catch(error=>{
            seterror(error.message)
        })
    }
    return {user, error, signinWithGoogle, logout}
}

export default FirebaseAuth;
