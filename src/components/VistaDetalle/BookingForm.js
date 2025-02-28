import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/VistaDetalle/BookingForm.css";

function BookingForm({ precioPaquete, nombreDestino }) {
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    checkIn: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.checkIn) {
      const sessionUser = sessionStorage.getItem("user");

      if (sessionUser) {
        navigate("/reserva", { state: { username: formData.username, lastname: formData.lastname, email: formData.email, precioPaquete, nombreDestino, } });
      } else {
        navigate("/login", { 
          state: { 
            username: formData.username, 
            lastname: formData.lastname,
            email: formData.email, 
            fromBooking: true, 
            precioPaquete,
            nombreDestino,
          } 
        });
      }
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="booking-form">
      <h3 className="form-title">BOOKING FORM</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="username" placeholder="Your Name..." value={formData.username} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <input type="email" name="email" placeholder="Your Email..." value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Check-in Date</label>
          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Check-out Date</label>
          <input type="date" name="checkOut" required />
        </div>
        <button type="submit" className="submit-btn">RESERVA AQUI</button>
      </form>
    </div>
  );
}

export default BookingForm;