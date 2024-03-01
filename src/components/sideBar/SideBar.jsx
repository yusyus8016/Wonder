import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="SideBar debug">
      <section className="Logo">
        <img src={process.env.PUBLIC_URL + '/Logo@0.75x.png'} alt="Logo App" />
      </section>
      <nav className="content-sideBar">
        <ul className="nav-list">
          <li className="list">
            <Link to="/">
              <button
                className={`link-button ${selectedButton === "home" ? "selected" : ""}`}
                onClick={() => handleButtonClick("home")}
              >
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/crear">
              <button
                className={`link-button ${selectedButton === "crear" ? "selected" : ""}`}
                onClick={() => handleButtonClick("crear")}
              >
                Crear pais
              </button>
            </Link>
          </li>
          <li>
            <Link to="/gestionar">
              <button
                className={`link-button ${selectedButton === "gestionar" ? "selected" : ""}`}
                onClick={() => handleButtonClick("gestionar")}
              >
                Gestionar pais
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;