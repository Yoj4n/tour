import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Reserva/Finalizacion.css';
import comprobadoImg from "../../images/comprobado.png";


const Finalizacion = () => {
  const navigate = useNavigate();

  return (
    <div className="finalizacion">
      <img src={comprobadoImg} />
      <h2 className="finalizacion-titulo">¡Gracias por reservar con Tour El Caminante!</h2>
      <p className="finalizacion-parrafo">
        Si en algún momento necesitas cancelar o modificar tu reserva, puedes hacerlo fácilmente desde tu perfil de usuario en nuestra plataforma.
      </p>
      <p className="finalizacion-parrafo" >
        En las próximas 24 horas, nuestro equipo se pondrá en contacto contigo para brindarte más detalles y asegurarse de que tengas todo listo para tu experiencia.
      </p>
      <button onClick={() => navigate("/") } className="btn-finalizarReserva">Finalizar</button>
    </div>
  );
};

export default Finalizacion;
