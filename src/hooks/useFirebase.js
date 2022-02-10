import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
import initializeAuthentication from "./../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  };

  //observed user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

 // LogOut function
  const logOut = () => {
    signOut(auth).then(() => setUser({}))
  }


  // Create a new user  with email and password 
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
 
   }
 
   // add user display name 
   const updateUserName = (name) => {
     updateProfile(auth.currentUser, {
       displayName: name
     }).then(() => { })
       .catch(err => setError(err.message));
   }
 
   // login with email and password 
   const loginWithEmail = (email, password) => {
     return signInWithEmailAndPassword(auth,email, password )
   }

  return {
    user,
    setUser,
    error,
    setError,
    googleSignIn,
    logOut,
    isLoading,
    setIsLoading,
    createNewUser,
    updateUserName,
    loginWithEmail
  };
};

export default useFirebase;
