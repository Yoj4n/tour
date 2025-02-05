import React, { useState } from "react";
import "../../styles/Reserva/Confirmacion.css";

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
    if (reserva.fechaReserva && reserva.adultos > 0 && reserva.niños >= 0) {
      avanzar();
    } else {
      alert("Por favor, complete todos los campos antes de continuar.");
    }
  };

  return (
    <div className="confirmacion-container">
      <h2 className="h2-confirmacion">Confirmación de Reserva</h2>

      <div className="form-resumen-container">
        <div className="confirmacion-form">
          <label>Fecha de Reserva</label>
          <input
            type="date"
            name="fechaReserva"
            value={reserva.fechaReserva}
            onChange={manejarCambio}
            className="input-reservaDate"
          />

          <label>Adultos</label>
          <select name="adultos" value={reserva.adultos} onChange={manejarCambio}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <label>Niños</label>
          <select name="niños" value={reserva.niños} onChange={manejarCambio}>
            {[0, 1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="resumen-container">
          <h3>Resumen</h3>
          <div className="resumen">
            <p>Valor neto del servicio <span>$1.350.000</span></p>
            <p>Guía turístico <span>$150.000</span></p>
            <p>Seguro obligatorio <span>$60.000</span></p>
            <p>Impuesto Alcaldía <span>$37.500</span></p>
            <p>Impuesto Parques Nacionales de Colombia <span>$50.000</span></p>
            <p>Impuesto Coormacarena <span>$27.500</span></p>
            <p className="total">Costo total <span><strong>$1.675.000</strong></span></p>
          </div>
        </div>
      </div>

      <div className="botones">
        <button className="cancelar" onClick={regresar}>Cancelar</button>
        <button className="continuar" onClick={confirmarDatos}>Continuar</button>
      </div>
    </div>
  );
};

export default Confirmacion;
