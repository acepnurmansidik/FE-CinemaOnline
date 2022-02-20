import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/organism/LandingPage/LandingPage";
import DetailFilm from "./pages/organism/DetailFilm/DetailFilm";
import MyList from "./pages/organism/MyList/MyList";
import MyProfile from "./pages/organism/MyProfile/MyProfile";
import CreateFilm from "./pages/organism/CreateFilm/CreateFilm";
import Transactions from "./pages/organism/Transactions/Transactions";
import PageNotFound from "./pages/organism/PageNotFound/PageNotFound";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/film/:id" element={<DetailFilm />} />
          <Route exact path="/my-film" element={<MyList />} />
          <Route exact path="/profile" element={<MyProfile />} />
          <Route exact path="/film" element={<CreateFilm />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
