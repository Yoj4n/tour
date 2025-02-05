import React from "react";
import "../../styles/Reserva/Step.css";


const Step = ({ paso }) => {
  return (
    <div className="step-container">
      <div className={`step ${paso === 1 ? "active" : ""}`}>
        <div className="circle">{paso >= 1 ? "1" : ""}</div>
        <p>DATOS PERSONALES</p>
      </div>
      <div className={`line ${paso >= 2 ? "active" : ""}`}></div>
      <div className={`step ${paso === 2 ? "active" : ""}`}>
        <div className="circle">{paso >= 2 ? "2" : ""}</div>
        <p>CONFIRMACIÓN</p>
      </div>
      <div className={`line ${paso >= 3 ? "active" : ""}`}></div>
      <div className={`step ${paso === 3 ? "active" : ""}`}>
        <div className="circle">{paso >= 3 ? "3" : ""}</div>
        <p>LISTO</p>
      </div>
    </div>
  );
};

export default Step;
