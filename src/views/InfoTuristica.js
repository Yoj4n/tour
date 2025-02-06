import React from "react";
import StepCard from "../components/InformacionTuristica/StepCard";

import Sidebar from "../components/InformacionTuristica/Sidebar";
import "../styles/InfoTuristica/InfoTuristica.css";
import Banner from "../components/InformacionTuristica/Banner";

const MainLayout = () => {
  const steps = [
    {
      title: "Cerros de Mavicure",
      description:
        "Descubre los imponentes cerros de Mavicure, formaciones rocosas ancestrales con una vista espectacular.",
    },
    {
      title: "Puerta de Orión",
      description:
        "Un enorme arco natural de piedra con una impresionante vista nocturna del cielo estrellado.",
    },
    {
      title: "Caño Lajas",
      description:
        "Un río con aguas cristalinas y cascadas perfectas para disfrutar de la naturaleza.",
    },
    {
      title: "Pinturas Rupestres",
      description:
        "Maravíllate con los antiguos petroglifos dejados por las culturas indígenas en las rocas del Guaviare.",
    },
  ];

  return (
    <>
    <Banner />
      <div className="container-infoturistica">
        <div className="steps-grid">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default MainLayout;
