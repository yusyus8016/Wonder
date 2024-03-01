import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CountryForm from "./components/crudCountry/CountryCreationForm.jsx";
import CountryManagementForm from "./components/crudCountry/CountryManagementForm.jsx";
import SideBar from "./components/sideBar/SideBar.jsx";
// import Countries from "./components/urls/Countries.jsx";
import CountryList from "./components/countryList/CountryList.jsx";
// import SearchBar from "./components/serchBar/SearchBar.jsx";

export default function App() {
  return (
    <Router>
      <div className="container-app">
        <SideBar />
        <div className="app--container--two">
          <div className="routes">
            <Routes>
              <Route path="/" element={<CountryList/>}/>
              <Route path="/crear" element={<CountryForm />} />
              <Route path="/gestionar" element={<CountryManagementForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
