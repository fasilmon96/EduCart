import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./pages/Home";
import Panel from "./pages/Form";
import { Fragment, useEffect } from "react";
import { useContext } from "react";
import { FirebaseContext } from "./components/Context/FirebaseContext";
import { AuthContext } from "./components/Context/FirebaseContext";
import Product from "./pages/Prodec";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div className="App">
        <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Panel />} />
        <Route path="/prodec" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
