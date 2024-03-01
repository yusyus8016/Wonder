import React, { useState } from "react";
import "./SearchBar.css";
import ContinentItems from "./Continents";

const SearchBar = ({ handleSearch, filtrarPorContinente }) => {
  const [showContinents, setShowContinents] = useState(false);
  const [Continentfilter, setContinentfilter] = useState("");
  

  const handleClick = (name) => {
    setContinentfilter(name);
    setShowContinents((prev) => !prev);
    filtrarPorContinente(name);
  };

  const handleFocus = () => {
    setShowContinents((prev) => !prev);
  };

  return (
    <div className="Search">
      <div className="inputContainer">
        <div>
          <label>País </label>
          <input
            className="InputSearch"
            name="quey"
            type="text"
            placeholder="Escribe el pais que deseas ver"
            onChange={handleSearch} // Aquí se utiliza la función handleSearch para manejar los cambios en el campo de búsqueda
            onFocus={handleFocus}
          />
        </div>
        <button className="ButtonSearch">Search</button>
        {showContinents ? (
          <div className="ContinentsBox">
            <div className="ContinentsBoxHeader">
              <h4>Filtrar por continentes</h4>
              <button>Limpiar</button>
            </div>
            <div className="ContinentsBoxList">
              <ContinentItems
                handleClick={handleClick}
                name="South America"
                src={
                  "https://cdn.pixabay.com/photo/2018/03/14/18/35/americas-3225976_1280.png"
                }
              />
              <ContinentItems
                handleClick={handleClick}
                name="Europe"
                src={
                  "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/659.png"
                }
              />
              <ContinentItems
                handleClick={handleClick}
                name="Asia"
                src={
                  "https://www.pngmart.com/files/15/Asia-Map-Transparent-PNG.png"
                }
              />
              <ContinentItems
                handleClick={handleClick}
                name="Oceania"
                src={"https://svgsilh.com/svg/151644.svg"}
              />
              <ContinentItems
                handleClick={handleClick}
                name="Africa"
                src={"https://svgsilh.com/png-1024/720920.png"}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};


export default SearchBar;

