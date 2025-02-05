import React, { useState } from 'react';
import '../../styles/Reserva/DatosPersonales.css';

const DatosPersonales = ({ avanzar, actualizarDatos }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    celular: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field.trim() !== '')) {
      actualizarDatos(formData);
      avanzar();
    } else {
      alert('Por favor, completa todos los campos.');
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
            <label>NOMBRES</label>
            <input type="text" name="nombres" placeholder="Nombre" value={formData.nombres} onChange={handleChange} required className='input-dataP'/>
          </div>
          <div className="form-group">
            <label>APELLIDOS</label>
            <input type="text" name="apellidos" placeholder="Apellido" value={formData.apellidos} onChange={handleChange} required className='input-dataP' />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>CORREO ELECTRÓNICO</label>
            <input type="email" name="correo" placeholder="Email" value={formData.correo} onChange={handleChange} required  className='input-dataP'/>
          </div>
          <div className="form-group">
            <label>CELULAR</label>
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
