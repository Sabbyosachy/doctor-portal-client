import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,onAuthStateChanged,signOut,signInWithEmailAndPassword,GoogleAuthProvider,updateProfile,getIdToken  } from "firebase/auth";

initializeAuthentication();
const useFirebase=()=>{
    const[user,setUser]=useState({});
    const[isLoading,setIsLoading]=useState(true);
    const[authError,setAuthError]=useState('');
    const[admin,setAdmin]=useState(false);
    const [token,setToken]=useState('');
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
   //Create account 
    const registerUser=(email,password,name,location,navigate)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         const destination=location?.state?.from || '/';
         navigate(destination);
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
        

         navigate.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
            // ..
          })
          .finally(()=>setIsLoading(false));

    }
  
    //Login user
    
    const loginUser=(email,password,location,navigate)=>{
      setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //to set login to specific location
    const destination=location?.state?.from || '/';
    navigate(destination);

    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=>setIsLoading(false));
    }

    //signin using google

    const signInUsingGoogle=(location,navigate)=>{
      setIsLoading(true);
      signInWithPopup(auth, googleprovider)
  .then((result) => {
    const user = result.user;
    putUser(user.email,user.displayName);
    setAuthError('');
    const destination=location?.state?.from || '/';
    navigate(destination);
  }).catch((error) => {
    setAuthError(error.message);
  })
  .finally(()=>setIsLoading(false));
    }
    
    //obser user state uaser login or logout observe

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken)
              })
              
            } else {
             setUser({});
            }
            setIsLoading(false);
          });
         return()=> unSubscribe; 
    },[auth])

    useEffect(()=>{
        fetch(`https://protected-mesa-07765.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
          setAdmin(data.admin)
        })
    },[user.email])

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
      fetch('https://protected-mesa-07765.herokuapp.com/users',{
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
      fetch('https://protected-mesa-07765.herokuapp.com/users',{
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
        admin,
        isLoading,
        token,
        registerUser,
        signInUsingGoogle,
        loginUser,
        authError
    }
}
export default useFirebase;