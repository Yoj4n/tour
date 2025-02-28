import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Reserva/Finalizacion.css';
import comprobadoImg from "../../images/comprobado.png";

const Finalizacion = () => {
  const navigate = useNavigate();

  const handleFinalizarReserva = () => {
    const datosReserva = JSON.parse(sessionStorage.getItem("datosReserva"));

    if (datosReserva) {
      const reservasGuardadas = JSON.parse(localStorage.getItem("reservas")) || [];
      const nuevasReservas = [...reservasGuardadas, datosReserva];
      localStorage.setItem("reservas", JSON.stringify(nuevasReservas));
      sessionStorage.removeItem("datosReserva");
    }

    navigate("/");
  };

  return (
    <div className="finalizacion">
      <img src={comprobadoImg} alt="Confirmación" />
      <h2 className="finalizacion-titulo">¡Gracias por reservar con Tour El Caminante!</h2>
      <p className="finalizacion-parrafo">
        Si en algún momento necesitas cancelar o modificar tu reserva, puedes hacerlo fácilmente desde tu perfil de usuario en nuestra plataforma.
      </p>
      <p className="finalizacion-parrafo">
        En las próximas 24 horas, nuestro equipo se pondrá en contacto contigo para brindarte más detalles y asegurarse de que tengas todo listo para tu experiencia.
      </p>
      <button onClick={handleFinalizarReserva} className="btn-finalizarReserva">Finalizar</button>
    </div>
  );
};

export default Finalizacion;
