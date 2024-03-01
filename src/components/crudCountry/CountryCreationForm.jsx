import React, { useState } from "react";
import "./CountryCreationForm.css";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const CountryForm = () => {
  const [inputData, setInputData] = useState({
    countryCode: "",
  });

  const [countryData, setCountryData] = useState({
    countryCode: "",
    countryName: "",
    language: "",
    continent: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleClear = () => {
    setInputData({
      countryCode: "",
    });
    setCountryData({
      countryCode: "",
      countryName: "",
      language: "",
      continent: "",
    });
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post("http://localhost:3002/country", {
        code: countryData.countryCode,
        name: countryData.countryName,
        continent: countryData.continent,
        capital: "", // Asegúrate de proporcionar este dato si es necesario
        language: countryData.language,
        currency: "", // Asegúrate de proporcionar este dato si es necesario
        flag: "", // Asegúrate de proporcionar este dato si es necesario
        photos: [], // Asegúrate de proporcionar este dato si es necesario
      });
      console.log(response.data.message);
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: response.data.message,
      });
    } catch (error) {
      console.error("Error al crear el país:", error);
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Hubo un error al crear el país. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };

  const handleQuery = async () => {
    try {
      setLoading(true);

      console.log("Realizando solicitud GET a la API...");
      const response = await axios.post(
        "https://countries.trevorblades.com/",
        {
          query: `
            query GetCountryByCode($code: ID!) {
              country(code: $code) {
                code
                name
                languages {
                  name
                }
                continent {
                  name
                }
              }
            }
          `,
          variables: {
            code: inputData.countryCode,
          },
        }
      );

      console.log("Respuesta de la API:", response.data);

      setCountryData({
        countryCode: response.data.data.country.code,
        countryName: response.data.data.country.name,
        language: response.data.data.country.languages[0]?.name || "",
        continent: response.data.data.country.continent.name || "",
      });
    } catch (error) {
      console.error("Error al consultar el país:", error);
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Hubo un error al consultar el país. Por favor, inténtalo de nuevo más tarde.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="creation--country">
      <form action="" className="form--country--code">
        <div>
          {/* Input para el código del país */}
          <label>Código país </label>
          <input
            type="text"
            name="countryCode"
            value={inputData.countryCode}
            onChange={handleInputChange}
          />
          <button className="btn-consult" onClick={handleQuery} disabled={loading}>
            Consultar
          </button>
        </div>
      </form>

      <div className="obtain-information">
        <label>Código </label>
        <input
          type="text"
          name="outcountryCode"
          value={countryData.countryCode}
          onChange={handleInputChange}
        />
        <label>Nombre </label>
        <input
          type="text"
          name="countryName"
          value={countryData.countryName}
          onChange={handleInputChange}
        />
        <label>Lengua </label>{" "}
        <input
          type="text"
          name="language"
          value={countryData.language}
          onChange={handleInputChange}
        />
        <label>Continente </label>{" "}
        <input
          type="text"
          name="continent"
          value={countryData.continent}
          onChange={handleInputChange}
        />
      </div>

      <div className="btn-tow">
        <button className="btn--clear" onClick={handleClear}>
          Limpiar
        </button>
        <button className="btn--create" onClick={handleCreate}>
          Crear
        </button>
      </div>
    </div>
  );
};

export default CountryForm;
