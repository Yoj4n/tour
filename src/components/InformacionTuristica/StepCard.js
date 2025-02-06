import React from "react";
import "../../styles/InfoTuristica/StepCard.css";

const StepCard = ({ title, description }) => {
  return (
    <div className="step-card">
      <div className="step-image"></div>
      <div className="step-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn">Leer Más</button>
      </div>
    </div>
  );
};

export default StepCard;
