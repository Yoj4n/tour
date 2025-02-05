import React, { useState } from "react";
import '../../styles/Reserva/Confirmacion.css';
const Confirmacion = ({ avanzar, regresar, datos }) => {
  const [reserva, setReserva] = useState({
    fechaReserva: datos.fechaReserva || "",
    adultos: datos.adultos || 1,
    niños: datos.niños || 0,
  });

  const manejarCambio = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const confirmarDatos = () => {
    avanzar();
  };

  return (
    <div className="formulario">
      <input type="date" name="fechaReserva" value={reserva.fechaReserva} onChange={manejarCambio} />
      <label>Adultos</label>
      <select name="adultos" value={reserva.adultos} onChange={manejarCambio}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <label>Niños</label>
      <select name="niños" value={reserva.niños} onChange={manejarCambio}>
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>

      <div className="resumen">
        <h3>Resumen</h3>
        <p>Valor del servicio: $1.350.000</p>
        <p>Guía turístico: $150.000</p>
        <p>Seguro obligatorio: $60.000</p>
        <p>Costo total: <strong>$1.675.000</strong></p>
      </div>

      <button onClick={regresar}>Regresar</button>
      <button onClick={confirmarDatos}>Confirmar</button>
    </div>
  );
};

export default Confirmacion;
