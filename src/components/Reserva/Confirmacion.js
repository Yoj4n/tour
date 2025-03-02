import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Reserva/Confirmacion.css";

const Confirmacion = ({ avanzar, regresar }) => {
  const location = useLocation();
  // const datos = location.state || {};

  const bookingData = JSON.parse(sessionStorage.getItem("bookingData")) || {};
  const precioPaquete = bookingData.precioPaquete ? Number(bookingData.precioPaquete) : 0;
  const nombreDestino = bookingData.nombreDestino || "Destino Desconocido"; 



  const [reserva, setReserva] = useState({
    fechaReserva: bookingData.fechaReserva || "",
    adultos: bookingData.adultos || 1,
    ninos: bookingData.ninos || 0,
  });

  const tarifaGuia = 150000;
  const seguro = 60000;
  const impuestoAlcaldia = 37500;
  const impuestoParques = 50000;
  const impuestoCoormacarena = 27500;

  const costoTotal =
    precioPaquete * reserva.adultos +
    (precioPaquete * 0.5 * reserva.ninos) +
    tarifaGuia +
    seguro +
    impuestoAlcaldia +
    impuestoParques +
    impuestoCoormacarena;

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setReserva((prevReserva) => ({
      ...prevReserva,
      [name]: value,
    }));
  };

  const confirmarDatos = () => {
    const userEmail = sessionStorage.getItem("user");
    if (!userEmail) {
      alert("No hay usuario activo. Inicie sesión para continuar.");
      return;
    }
    if (reserva.fechaReserva && reserva.adultos > 0 && reserva.ninos >= 0) {
      const nuevaReserva = {
        fechaReserva: reserva.fechaReserva,
        adultos: reserva.adultos,
        ninos: reserva.ninos,
        valorNeto: (precioPaquete * reserva.adultos) + (precioPaquete * 0.5 * reserva.ninos),
        tarifaGuia,
        seguro,
        impuestoAlcaldia,
        impuestoParques,
        impuestoCoormacarena,
        costoTotal,
        nombreDestino,
        estado: "PENDIENTE", // Se inicia con estado "PENDIENTE"
        calificado: false, // Se usará en ReviewTable
      };

      // Obtener las reservas almacenadas en localStorage
      const reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || {};

      // Si el usuario ya tiene reservas, se agregan, si no, se crea un nuevo array
      if (!reservasGuardadas[userEmail]) {
        reservasGuardadas[userEmail] = [];
      }

      reservasGuardadas[userEmail].push(nuevaReserva);

      // Guardar en localStorage
      localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

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
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>

          <label>Niños</label>
          <select name="ninos" value={reserva.ninos} onChange={manejarCambio}>
          {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="resumen-container">
          <h3>Resumen</h3>
          <div className="resumen">
            <p>Destino: <span>{nombreDestino}</span></p>
            <p>Valor neto del servicio <span>${((precioPaquete*reserva.adultos)+(precioPaquete * 0.5 * reserva.ninos)).toLocaleString('es-CO')}</span></p>
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
