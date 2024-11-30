import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContex = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    
    const registerUser =(email, password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword (auth, email, password)
    }

    const updateUser = (name, imgPath)=>{
       return updateProfile (auth.currentUser, {displayName:name, photoURL:imgPath})
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn =()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
           setUser(currentUser)
           setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[]);
    
    const LogOutUser =()=>{
       return signOut(auth)
    }


    const authInfo = {
       user, 
       loading,
       registerUser,
       updateUser,
       loginUser,
       googleLogIn,
       LogOutUser
       
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;