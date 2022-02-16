import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { fetchMe } from "./services/Api";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Accueil from "./pages/Accueil";
import ContactUs from "./pages/ContactUs";
import Place from "./pages/Place";
import Equipe from "./pages/Equipe";
import MyProfile from "./pages/Myprofile";
import Editprofil from "./pages/Editprofil";
import Navbar from "./components/Navbar";

import PrivateLayout from "./pages/PrivateLayout";

import Inscription from "./pages/Inscription";
import InscriptionCard from "./pages/InscriptionCard";
import Login from "./pages/Login";
import UserContext from "./components/Context/UserContext";

function App() {
  const [user, setUser] = useState();

  const setUserSession = (data) => {
    setUser(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUser(await fetchMe());
      } catch (e) {
        setUser();
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <UserContext.Provider
        value={{ user: user, setUser: setUser, setUserSession: setUserSession }}
      >
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Accueil />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/lieu/:id" element={<Place />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contactez-nous" element={<ContactUs />} />
          <Route path="/mon-profil" element={<MyProfile user={user} />}>
            <Route path="" element={<PrivateLayout user={user} />} />
          </Route>
          <Route path="/edit-profil" element={<Editprofil user={user} />}>
            <Route path="" element={<PrivateLayout user={user} />} />
          </Route>
          <Route path="/choix" element={<InscriptionCard user={user} />}>
            <Route path="" element={<PrivateLayout user={user} />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
