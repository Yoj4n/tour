import React, { useEffect, useState } from "react";
import RatingModal from "./RatingModal";
import "../../styles/Review/reviewTable.css";

const ReviewTable = () => {
  const [reservas, setReservas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);

  useEffect(() => {
    const userEmail = sessionStorage.getItem("user");
    if (userEmail) {
      const todasReservas = JSON.parse(localStorage.getItem("reservas")) || {}; 
      setReservas(todasReservas[userEmail] || []);
    }
  }, []);

  const cancelarReserva = (index) => {
    const userEmail = sessionStorage.getItem("user");
    if (userEmail) {
      let reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || {};
      let reservasUsuario = reservasGuardadas[userEmail] || [];

      reservasUsuario.splice(index, 1);
      reservasGuardadas[userEmail] = reservasUsuario;
      localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

      setReservas(reservasUsuario);
    }
  };

  const abrirModalCalificar = (index) => {
    setReservaSeleccionada(index);
    setModalOpen(true);
  };

  const enviarCalificacion = (rating, comment) => {
    if (reservaSeleccionada !== null) {
      const userEmail = sessionStorage.getItem("user");
      let reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || {};
      let reservasUsuario = reservasGuardadas[userEmail] || [];

      const reserva = reservasUsuario[reservaSeleccionada];

      // Marcar la reserva como calificada
      reservasUsuario[reservaSeleccionada] = {
        ...reserva,
        calificado: true,
        rating,
        comentario: comment,
      };

      reservasGuardadas[userEmail] = reservasUsuario;
      localStorage.setItem("reservas", JSON.stringify(reservasGuardadas));

      // Guardar la reseña en localStorage
      let reseñasGuardadas = JSON.parse(localStorage.getItem("reseñas")) || {};
      
      if (!reseñasGuardadas[reserva.nombreDestino]) {
        reseñasGuardadas[reserva.nombreDestino] = [];
      }

      reseñasGuardadas[reserva.nombreDestino].push({
        usuario: userEmail,
        rating,
        comentario: comment,
      });

      localStorage.setItem("reseñas", JSON.stringify(reseñasGuardadas));

      setReservas(reservasUsuario);
      setModalOpen(false);
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
              fechaReserva.setHours(0, 0, 0, 0);
              fechaActual.setHours(0, 0, 0, 0);

              const estado = fechaReserva < fechaActual ? "FINALIZADO" : "PEDIDA";

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{reserva.nombreDestino}</td>
                  <td>{reserva.adultos}</td>
                  <td>{reserva.niños}</td>
                  <td className={estado === "FINALIZADO" ? "estado-finalizado" : "estado-pedida"}>
                    {estado}
                  </td>
                  <td>
                    {estado === "FINALIZADO" ? (
                      <button 
                        className={`btn-calificar ${reserva.calificado ? "disabled" : ""}`} 
                        onClick={() => abrirModalCalificar(index)}
                        disabled={reserva.calificado}
                      >
                        {reserva.calificado ? "Calificado" : "Calificar"}
                      </button>
                    ) : (
                      <button className="btn-cancelar" onClick={() => cancelarReserva(index)}>
                        Cancelar
                      </button>
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

      <RatingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={enviarCalificacion}
      />
    </div>
  );
};

export default ReviewTable;
