import React, { useEffect, useState } from "react";
import "../../styles/Review/reviewTable.css";

const ReviewTable = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const userEmail = sessionStorage.getItem("user"); // Obtiene el usuario actual
    if (userEmail) {
      const todasReservas = JSON.parse(localStorage.getItem("reservas")) || {}; 
      setReservas(todasReservas[userEmail] || []); // Filtra solo las reservas del usuario logueado
    }
  }, []);

  return (
    <div className="review-container">
      <h2>Mis Reservas</h2>
      <table className="review-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>SERVICIO</th>
            <th>ADULTOS</th>
            <th>NIÑOS</th>
          </tr>
        </thead>
        <tbody>
          {reservas.length > 0 ? (
            reservas.map((reserva, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{reserva.nombreDestino}</td>
                <td>{reserva.adultos}</td>
                <td>{reserva.ninos}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No tienes reservas registradas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
