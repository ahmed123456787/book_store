import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./../firebase/firebase.config";
import { Provider } from "react-redux";

const authContext = createContext();

export const userAuth = () => {
  return useContext(authContext);
};

const googleProvider = new GoogleAuthProvider();

// auth provider.

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = async ({ email, password }) => {
    return await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
  };

  const loginUser = async ({ email, password }) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // Sing up with google

  const signInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider);
  };

  const value = {
    currentUser,
    registerUser,
    loginUser,
    signInWithGoogle,
  };

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
};
