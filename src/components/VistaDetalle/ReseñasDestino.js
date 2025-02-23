import React, { useEffect, useState } from "react";
import "../../styles/VistaDetalle/reseñasDestino.css";
import reseñasData from "../../Data/reseñasData";

const ReseñasDestino = ({ nombreDestino }) => {
  const [reseñas, setReseñas] = useState([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("reseñas");
    let reseñasGuardadas = {};

    try {
      reseñasGuardadas = JSON.parse(datosGuardados) || {};
    } catch (error) {
      console.error("Error al leer reseñas del localStorage:", error);
    }
    //   let reseñasDestino =
    //     reseñasGuardadas[nombreDestino] || reseñasData[nombreDestino] || [];

    //   setReseñas(reseñasDestino.slice(-4));
    // }, [nombreDestino]);
    const reseñasUsuario = reseñasGuardadas[nombreDestino] || [];
    const reseñasBase = reseñasData[nombreDestino] || [];

    // Obtener máximo 3 reseñas base y las más recientes del usuario
    const cantidadReseñasUsuario = Math.min(reseñasUsuario.length, 4); // Máximo 2 del usuario
    const cantidadReseñasBase = 4 - cantidadReseñasUsuario; // Se ajusta para mantener 4 reseñas

    const ultimasReseñasUsuario = reseñasUsuario.slice(-cantidadReseñasUsuario);
    const reseñasFinales = [
      ...reseñasBase.slice(0, cantidadReseñasBase),
      ...ultimasReseñasUsuario,
    ];

    setReseñas(reseñasFinales);
  }, [nombreDestino]);

  return (
    <div className="reseñas-container">
      <h2 className="titulo-reseñas">TESTIMONIALS</h2>
      <p className="descripcion-reseñas">
        ¡Lee las opiniones de otros viajeros sobre su experiencia en{" "}
        {nombreDestino}!
      </p>
      <div className="reseñas-grid">
        {reseñas.length > 0 ? (
          reseñas.map((reseña, index) => {
            let usuarioObj = {};

            try {
              usuarioObj = JSON.parse(reseña.usuario);
            } catch (error) {
              console.error("Error al parsear usuario:", error);
            }

            return (
              <div key={index} className="reseña-card">
                <div className="avatar"></div>
                <h3 className="h3-review">
                  {usuarioObj.username} {usuarioObj.lastname}
                </h3>
                <div className="estrellas">
                  {"★".repeat(reseña.rating)}
                  {"☆".repeat(5 - reseña.rating)}
                </div>
                <p className="comentario">{reseña.comentario}</p>
              </div>
            );
          })
        ) : (
          <p className="sin-reseñas">Aún no hay reseñas para este destino.</p>
        )}
      </div>
    </div>
  );
};

export default ReseñasDestino;
