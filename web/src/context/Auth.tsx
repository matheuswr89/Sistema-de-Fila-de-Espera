import { onAuthStateChanged, UserCredential } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { getUserInfo, loginFirebase, logoutFirebase } from "../database/auth";
import { firebaseAuth } from "../database/firebaseConfig";
import { ERRO_LOGIN, FAZENDO_LOGIN } from "../helpers/const";
import { LoginInterface } from "../helpers/interfaces";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) setUser(JSON.parse(recoveredUser));
    setLoading(false);
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

  const login = async (values: LoginInterface) => {
      const data: UserCredential = await toast.promise(loginFirebase(values), {
        pending: FAZENDO_LOGIN,
        error: ERRO_LOGIN,
      });
      
      if (data) {
        const loggedUser: any = {
          id: data.user.uid,
          type: await getUserInfo(data.user.uid),
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));
        setUser(loggedUser);
        navigate("/");
      }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    logoutFirebase();
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
