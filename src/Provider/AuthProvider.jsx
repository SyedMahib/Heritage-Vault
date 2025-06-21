import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import axios from "axios";


const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const Provider = new GoogleAuthProvider()

  const axiosSecure = axios.create({
    baseURL: "https://a-11-server-side-peach.vercel.app",
    withCredentials: true,
  });

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

 const signInWithGoogle = () => {
  setLoading(true)
  return signInWithPopup(auth, Provider)
 }

  const signOutUser = () => {
    setLoading(true);
    return axiosSecure
      .post("/logout", { email: user?.email })
      .then(() => {
        return signOut(auth);
      })
      .catch((err) => {
        alert(err.message);
        return signOut(auth);
      });
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosSecure
          .post("/jwt", userInfo)
          .then((res) => {
            console.log("JWT response", res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      setLoading(false);
      console.log("user in the auth state change", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    setLoading,
    user,
    createUser,
    signOutUser,
    updateUser,
    setUser,
    signInWithGoogle,
    signInUser,
    axiosSecure
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
