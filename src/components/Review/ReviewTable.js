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

  const cancelarReserva = (index) => {
    const userEmail = sessionStorage.getItem("user");
    if (userEmail) {
      let reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || {};
      let reservasUsuario = reservasGuardadas[userEmail] || [];

      // Eliminar la reserva seleccionada
      reservasUsuario.splice(index, 1);
      reservasGuardadas[userEmail] = reservasUsuario;

      // Actualizar localStorage
      localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

      // Actualizar estado
      setReservas(reservasUsuario);
    }
  };

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
            <th>ESTADO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {reservas.length > 0 ? (
            reservas.map((reserva, index) => {
              const fechaReserva = new Date(reserva.fechaReserva);
              const fechaActual = new Date();

              // Normalizar la hora para comparar solo día, mes y año
              fechaReserva.setHours(0, 0, 0, 0);
              fechaActual.setHours(0, 0, 0, 0);

              // Comparación correcta de fechas
              const estado = fechaReserva < fechaActual ? "FINALIZADO" : "PENDIENTE";

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{reserva.nombreDestino}</td>
                  <td>{reserva.adultos}</td>
                  <td>{reserva.ninos}</td>
                  <td className={estado === "FINALIZADO" ? "estado-finalizado" : "estado-pedida"}>
                    {estado}
                  </td>
                  <td>
                    {estado === "FINALIZADO" ? (
                      <button className="btn-calificar">Calificar</button>
                    ) : (
                      <button className="btn-cancelar" onClick={() => cancelarReserva(index)}>Cancelar</button>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="6">No tienes reservas registradas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
