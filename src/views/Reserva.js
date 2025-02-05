import React, { useState } from "react";
import DatosPersonales from "../components/Reserva/DatosPersonales";
import Confirmacion from "../components/Reserva/Confirmacion";
import Finalizacion from "../components/Reserva/Finalizacion";

import "../styles/Reserva/Reserva.css";
import Banner from "../components/Reserva/Banner";

const Reserva = () => {
  const [paso, setPaso] = useState(1);
  const [datos, setDatos] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    celular: "",
    fechaReserva: "",
    adultos: 1,
    niños: 0,
  });

  const actualizarDatos = (nuevoDato) => {
    setDatos({ ...datos, ...nuevoDato });
  };

  const irAPaso = (numeroPaso) => {
    if (numeroPaso <= paso) {
      setPaso(numeroPaso);
    }
  };

  return (
    <>
      <Banner />
      <div className="reserva-container">
        <div className="pasos">
          <span
            className={`paso ${paso === 1 ? "activo" : ""}`}
            onClick={() => irAPaso(1)}
          >
            1 <br /> DATOS PERSONALES
          </span>
          <span
            className={`paso ${paso === 2 ? "activo" : ""}`}
            onClick={() => irAPaso(2)}
          >
            2 <br /> CONFIRMACIÓN
          </span>
          <span className={`paso ${paso === 3 ? "activo" : ""}`}>
            3 <br /> LISTO
          </span>
        </div>

        {paso === 1 && (
          <DatosPersonales
            avanzar={() => setPaso(2)}
            actualizarDatos={actualizarDatos}
            datos={datos}
          />
        )}
        {paso === 2 && (
          <Confirmacion
            avanzar={() => setPaso(3)}
            regresar={() => setPaso(1)}
            datos={datos}
          />
        )}
        {paso === 3 && <Finalizacion />}
      </div>
    </>
  );
};

export default Reserva;