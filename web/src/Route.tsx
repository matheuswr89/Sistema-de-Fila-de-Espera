import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/Auth";

const AppRoute = () => {
  const Private = ({ children }: any) => {
    const { authenticated, loading }: any = useContext(AuthContext);

    if (loading) return <div className="loading">Carregando...</div>;

    if (!authenticated) return <Navigate to="/login" />;

    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
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
