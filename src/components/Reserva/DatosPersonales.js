import React, { useState } from 'react';
import '../../styles/Reserva/DatosPersonales.css';

import { useLocation } from "react-router-dom"; // Importamos useLocation
import "../../styles/Reserva/DatosPersonales.css";

const DatosPersonales = () => {
  const location = useLocation();
  const { nombre, email } = location.state || {}; 

  const [formData, setFormData] = useState({
    nombres: nombre || "",
    apellidos: "",
    correo: email || "",
    celular: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== "")) {
      alert("Datos enviados correctamente.");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const handleCancel = () => {
    setFormData({ nombres: '', apellidos: '', correo: '', celular: '' });
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-row">
          <div className="form-group">
            <label className='label-dataP'>NOMBRES</label>
            <input type="text" name="nombres" placeholder="Nombre" value={formData.nombres} onChange={handleChange} required className='input-dataP'/>
          </div>
          <div className="form-group">
            <label className='label-dataP'>APELLIDOS</label>
            <input type="text" name="apellidos" placeholder="Apellido" value={formData.apellidos} onChange={handleChange} required className='input-dataP' />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className='label-dataP'>CORREO ELECTRÓNICO</label>
            <input type="email" name="correo" placeholder="Email" value={formData.correo} onChange={handleChange} required  className='input-dataP'/>
          </div>
          <div className="form-group">
            <label className='label-dataP'>CELULAR</label>
            <input type="tel" name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} required className='input-dataP' />
          </div>
        </div>

        <div className="button-group">
          <button type="button" className="btnData cancelar" onClick={handleCancel}>Cancelar</button>
          <button type="button" className="btnData continuar" onClick={handleContinue}>Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default DatosPersonales;
