import React, { useState } from "react";
import DatosPersonales from "../components/Reserva/DatosPersonales";
import Confirmacion from "../components/Reserva/Confirmacion";
import Finalizacion from "../components/Reserva/Finalizacion";

import "../styles/Reserva/Reserva.css";
import Banner from "../components/Reserva/Banner";
import Step from "../components/Reserva/Step";

const Reserva = () => {
  const [paso, setPaso] = useState(1);
  const [datos, setDatos] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    celular: "",
  });

  const avanzar = () => setPaso(paso + 1);
  const retroceder = () => setPaso(paso - 1);
  const actualizarDatos = (nuevosDatos) =>
    setDatos({ ...datos, ...nuevosDatos });

  return (
    <>
      <Banner />
      <Step paso={paso} />
      <div className="reserva-container">
        {paso === 1 && (
          <DatosPersonales
            avanzar={avanzar}
            actualizarDatos={actualizarDatos}
            datos={datos}
          />
        )}

        {paso === 2 && (
          <Confirmacion
            datos={datos}
            avanzar={avanzar}
            retroceder={retroceder}
          />
        )}

        {paso === 3 && <Finalizacion datos={datos} />}
      </div>
    </>
  );
};

export default Reserva;
