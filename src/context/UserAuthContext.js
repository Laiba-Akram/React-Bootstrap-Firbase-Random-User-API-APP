import { createContext, useEffect, useState , useContext} from "react";
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
}  from 'firebase/auth';
import {auth} from '../firebase';
import { useNavigate } from "react-router-dom";
const userAuthContext  = createContext();

export function UserAuthContextProvider({children}){
  const navigate = useNavigate();
const [user,setUser]=useState("");
     function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
     }
     function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
     }
     function logOut(){
      return signOut(auth);
     }

      function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider
     return signInWithPopup(auth,googleAuthProvider)
      }
      
      

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          navigate("/Home");
        });
        return () => {
            unsubscribe();
        }
      }, []);
    return  <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>{children}</userAuthContext.Provider>
    
}
export function useUserAuth(){
    return useContext(userAuthContext);
}