import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,onAuthStateChanged,signOut,signInWithEmailAndPassword,GoogleAuthProvider,updateProfile  } from "firebase/auth";

initializeAuthentication();
const useFirebase=()=>{
    const[user,setUser]=useState({});
    const[isLoading,setIsLoading]=useState(true);
    const[authError,setAuthError]=useState('');
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
   //Create account 
    const registerUser=(email,password,name,location,history)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         const destination=location?.state?.from || '/';
         history.replace(destination);
         setAuthError('');
         const newUser={email,displayName:name};
         setUser(newUser);
         saveUser(email,name);
         
         updateProfile(auth.currentUser, {
          displayName:name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        

         history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
            // ..
          })
          .finally(()=>setIsLoading(false));

    }
  
    //Login user
    
    const loginUser=(email,password,location,history)=>{
      setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //to set login to specific location
    const destination=location?.state?.from || '/';
    history.replace(destination);

    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=>setIsLoading(false));
    }

    //signin using google

    const signInUsingGoogle=(location,history)=>{
      setIsLoading(true);
      signInWithPopup(auth, googleprovider)
  .then((result) => {
    const user = result.user;
    putUser(user.email,user.displayName);
    setAuthError('');
    const destination=location?.state?.from || '/';
    history.replace(destination);
  }).catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=>setIsLoading(false));
    }
    
    //obser user state

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              
            } else {
             setUser({});
            }
            setIsLoading(false);
          });
         return()=> unSubscribe; 
    },[])

    const logOut=()=>{
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
          
    }

    const saveUser=(email,displayName)=>{
      const user={email,displayName};
      fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()

    }
    const putUser=(email,displayName)=>{
      const user={email,displayName};
      fetch('http://localhost:5000/users',{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()

    }
    

    return{
        user,
        logOut,
        isLoading,
        registerUser,
        signInUsingGoogle,
        loginUser,
        authError
    }
}
export default useFirebase;