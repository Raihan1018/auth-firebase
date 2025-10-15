import  { createContext } from "react";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success("registration done");
      })
      .catch((error) => {
        toast.error("Registration Fail");
        console.log(error.message);
      })
      .finally();
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success("Login Done");
      })
      .catch((error) => {
        toast.error("Login Fail");
        console.log(error.message);
      })
      .finally();
  };

  const authInfo = {
    registerUser,
    loginUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
