import React, { useState } from 'react';
import './CountryManagementForm.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const CountryManagementForm = () => {
  const [inputData, setInputData] = useState({
    code: '',
  });

  const [countryData, setCountryData] = useState({
    code: '',
    name: '',
    language: '',
    continent: '',
    capital: '',
    currency: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value.toUpperCase(), // Convertir a mayúsculas
    });
  };

  const handleClear = () => {
    setInputData({
      code: '',
    });
    setCountryData({
      code: '',
      name: '',
      language: '',
      continent: '',
      capital: '',
      currency: '',
    });
  };

  const handleUpdate = async () => {
    try {
      console.log('Realizando solicitud PUT a la API...');
      const response = await axios.put(`http://localhost:3002/country/${countryData.code}`, countryData);
      console.log('Respuesta de la API:', response.data);
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'El país ha sido actualizado correctamente.',
      });
    } catch (error) {
      console.error('Error al actualizar el país:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al actualizar el país. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };

  const handleQuery = async (e) => {
    e.preventDefault();
    try {
      console.log('Realizando solicitud GET a la API...');
      const response = await axios.get(`http://localhost:3002/country/${inputData.code}`);

      if (response.data.country) {
        console.log('Respuesta de la API:', response.data);
        setCountryData(response.data.country);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El país no se encuentra en la base de datos!',
        });
      }
    } catch (error) {
      console.error('Error al consultar el país:', error);
      // Puedes mostrar otro SweetAlert aquí si hay un error en la solicitud.
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setCountryData({
      ...countryData,
      [name]: value,
    });
  };

  const handleDelete = async () => {
    try {
      console.log('Realizando solicitud DELETE a la API...');
      const response = await axios.delete(`http://localhost:3002/country/${countryData.code}`);
      console.log('Respuesta de la API:', response.data);
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'El país ha sido eliminado correctamente.',
      });
      // Limpia los datos después de eliminar
      handleClear();
    } catch (error) {
      console.error('Error al eliminar el país:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al eliminar el país. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };

  return (
    <div className='managment--country'>
      <form action="" className="consul--country">
        <div>
          <label>Código país </label>
          <input type="text" name="code" value={inputData.code} onChange={handleInputChange} />
          <button className="btn-consult" onClick={handleQuery}>Consultar</button>
        </div>
      </form>

      <div className="modification--info">
        <label>Código país </label>
        <input type="text" name="code" value={countryData.code} readOnly />

        <label>Nombre </label>
        <input type="text" name="name" value={countryData.name} onChange={handleFieldChange} />

        <label>Lengua </label>
        <input type="text" name="language" value={countryData.language} onChange={handleFieldChange} />

        <label>Continente </label>
        <input type="text" name="continent" value={countryData.continent} onChange={handleFieldChange} />

        <label>Capital:</label>
        <input type="text" name="capital" value={countryData.capital} onChange={handleFieldChange} />

        <label>Moneda:</label>
        <input type="text" name="currency" value={countryData.currency} onChange={handleFieldChange} />
      </div>

      <div className="btn-tow">
        <button className='btn--delete' onClick={handleDelete}>Eliminar</button>
        <button className='btn--update' onClick={handleUpdate}>Actualizar</button>
      </div>
    </div>
  );
};

export default CountryManagementForm;