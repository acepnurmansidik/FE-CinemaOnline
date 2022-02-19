import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/organism/LandingPage/LandingPage";
import DetailFilm from "./pages/organism/DetailFilm/DetailFilm";
import MyList from "./pages/organism/MyList/MyList";
import MyProfile from "./pages/organism/MyProfile/MyProfile";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/film-detail/:id" element={<DetailFilm />} />
          <Route exact path="/my-list" element={<MyList />} />
          <Route exact path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
