import React, { useState } from "react";
import "../../styles/Reserva/DatosPersonales.css";

const DatosPersonales = ({ avanzar, actualizarDatos, datos }) => {
  const [formulario, setFormulario] = useState(datos);

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formulario.nombres && formulario.apellidos && formulario.email && formulario.celular) {
      actualizarDatos(formulario);
      avanzar();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <form className="datos-personales-form" onSubmit={manejarEnvio}>
      <div className="input-group-dataPerson">
        <label htmlFor="nombres">Nombres</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          placeholder="Nombre"
          value={formulario.nombres}
          onChange={manejarCambio}
          required
        />
      </div>
      <div className="input-group-dataPerson">
        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          placeholder="Apellido"
          value={formulario.apellidos}
          onChange={manejarCambio}
          required
        />
      </div>
      <div className="input-group-dataPerson">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formulario.email}
          onChange={manejarCambio}
          required
        />
      </div>
      <div className="input-group-dataPerson">
        <label htmlFor="celular">Celular</label>
        <input type="text" id="celular"  name="celular" placeholder="Confirmar Email" value={formulario.celular} onChange={manejarCambio} required/>
      </div>
      <div className="botones">
        <button type="button" className="cancelar">
          Cancelar
        </button>
        <button type="submit" className="continuar">
          Continuar
        </button>
      </div>
    </form>
  );
};

export default DatosPersonales;
