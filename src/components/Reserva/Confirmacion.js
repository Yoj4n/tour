import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Reserva/Confirmacion.css";

const Confirmacion = ({ avanzar, regresar }) => {
  const location = useLocation();
  const datos = location.state || {};  // Obtiene los datos de `location.state`
  const precioPaquete = datos.precioPaquete ? Number(datos.precioPaquete) : 0;

  const [reserva, setReserva] = useState({
    fechaReserva: datos.fechaReserva || "",
    adultos: datos.adultos || 1,
    niños: datos.niños || 0,
  });

  const tarifaGuia = 150000;
  const seguro = 60000;
  const impuestoAlcaldia = 37500;
  const impuestoParques = 50000;
  const impuestoCoormacarena = 27500;

  const costoTotal = 
    precioPaquete * reserva.adultos +
    (precioPaquete * 0.5 * reserva.niños) +
    tarifaGuia +
    seguro +
    impuestoAlcaldia +
    impuestoParques +
    impuestoCoormacarena;

  const manejarCambio = (e) => {
    setReserva({ ...reserva, [e.target.name]: Number(e.target.value) });
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
            defaultValue={reserva.fechaReserva}
            onChange={manejarCambio}
            className="input-reservaDate"
          />

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
        </div>

        <div className="resumen-container">
          <h3>Resumen</h3>
          <div className="resumen">
            <p>Valor neto del servicio <span>${((precioPaquete*reserva.adultos)+(precioPaquete * 0.5 * reserva.niños)).toLocaleString('es-CO')}</span></p>
            <p>Guía turístico <span>${tarifaGuia.toLocaleString('es-CO')}</span></p>
            <p>Seguro obligatorio <span>${seguro.toLocaleString('es-CO')}</span></p>
            <p>Impuesto Alcaldía <span>${impuestoAlcaldia.toLocaleString('es-CO')}</span></p>
            <p>Impuesto Parques Nacionales de Colombia <span>${impuestoParques.toLocaleString('es-CO')}</span></p>
            <p>Impuesto Coormacarena <span>${impuestoCoormacarena.toLocaleString('es-CO')}</span></p>
            <p className="total">Costo total <span><strong>${costoTotal.toLocaleString('es-CO')}</strong></span></p>
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
