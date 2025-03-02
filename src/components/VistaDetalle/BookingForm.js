import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/VistaDetalle/BookingForm.css";

function BookingForm({ precioPaquete, nombreDestino }) {
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    celular: "",
    fechaReserva: "",
    adultos: "1",
    ninos: "0",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.lastname && formData.email && formData.celular && formData.fechaReserva) {
      const sessionUser = sessionStorage.getItem("user");
      if (sessionUser) {
        sessionStorage.setItem("bookingData", JSON.stringify({ ...formData, precioPaquete, nombreDestino }));
        // navigate("/reserva", { state: { ...formData, precioPaquete, nombreDestino } });
        navigate("/reserva");
      } else {
        navigate("/login", { state: { ...formData, fromBooking: true, precioPaquete, nombreDestino } });
      }
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="booking-form">
      <h3 className="form-title">RESERVAR</h3>
      <p className="form-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>NOMBRES</label>
          <input type="text" name="username" placeholder="Nombre" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>APELLIDOS</label>
          <input type="text" name="lastname" placeholder="Apellidos" value={formData.lastname} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>CORREO ELECTRÓNICO</label>
          <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>CELULAR</label>
          <input type="tel" name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>FECHA DE RESERVA</label>
          <input type="date" name="fechaReserva" value={formData.fechaReserva} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>ADULTOS</label>
          <select name="adultos" value={formData.adultos} onChange={handleChange}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>NIÑOS</label>
          <select name="ninos" value={formData.ninos} onChange={handleChange}>
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-btn">RESERVAR</button>
      </form>
    </div>
  );
}

export default BookingForm;
