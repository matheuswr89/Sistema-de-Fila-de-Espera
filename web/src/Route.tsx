import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Loading from "./components/Loading";
import { AuthContext, AuthProvider } from "./context/Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Senhas from "./pages/Senhas";

const AppRoute = () => {
  const Private = ({ children }: any) => {
    const { authenticated, loading }: any = useContext(AuthContext);

    if (loading) return <Loading />;

    if (!authenticated) return <Navigate to="/login" />;

    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/senhas" element={<Senhas />} />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoute;
