import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
import { useEffect } from "react";


initializeAuthentication();

const FirebaseAuth = () =>{
    const [user, setUser] = useState({})
    const [error, seterror] = useState('')
    const [isLoading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const signinWithGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        // .then(result=>{
        //     const user = result.user;
        //     setUser(user)
        // })
        .catch(error=>{
            seterror(error.message)
        })
        .finally(()=>{
            setLoading(false);
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
            setLoading(false)
        })
    },[])
     //Logout
     const logout = () =>{
        signOut(auth).then(()=>{
            setUser({})
        })
        .finally(()=> setLoading(false))
        .catch(error=>{
            seterror(error.message)
        })
       
    }
    return {user, error, signinWithGoogle, logout, isLoading}
}

export default FirebaseAuth;
