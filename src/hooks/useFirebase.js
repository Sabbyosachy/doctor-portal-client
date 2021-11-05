import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();
const useFirebase=()=>{
    const[user,setUser]=useState({})
    const auth = getAuth();
   //Create account 
    const registerUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });

    }
  
    //Login user
    
    const loginUser=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    
    //obser user state

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              
            } else {
             setUser({});
            }
          });
         return()=> unSubscribe; 
    },[])

    const logOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
    

    return{
        user,
        logOut,
        registerUser,
        loginUser
    }
}
export default useFirebase;