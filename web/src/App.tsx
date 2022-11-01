import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { firebaseAuth } from "./database/firebaseConfig";
import Home from "./pages/Home";

function App() {
  let authenticated = false;
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const uid = user.uid;
        authenticated = true;
        navigate("/");
      } else {
        navigate("/login");
        authenticated = false;
      }
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
