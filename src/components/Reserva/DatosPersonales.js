import React, { useState } from 'react';
import '../../styles/Reserva/DatosPersonales.css';

const DatosPersonales = ({ onContinue, onCancel }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    celular: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== '')) {
      onContinue(formData);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>NOMBRES</label>
            <input type="text" name="nombres" placeholder="Nombre" value={formData.nombres} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>APELLIDOS</label>
            <input type="text" name="apellidos" placeholder="Apellido" value={formData.apellidos} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>CORREO ELECTRÓNICO</label>
            <input type="email" name="correo" placeholder="Email" value={formData.correo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>CELULAR</label>
            <input type="tel" name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} required />
          </div>
        </div>

        <div className="button-group">
          <button type="button" className="cancelar" onClick={onCancel}>Cancelar</button>
          <button type="submit" className="continuar">Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default DatosPersonales;
