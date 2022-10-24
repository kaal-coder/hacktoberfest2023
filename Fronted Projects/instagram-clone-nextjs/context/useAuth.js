import React, { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const modal = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  const onSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Logged in Successfully");
      })
      .catch(console.warn);
  };

  const onSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch(() => {
        toast.error("Error logging out");
      });
  };

  return (
    <AuthContext.Provider value={{ user, onSignin, onSignout, modal }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
