import React from "react";
import StepCard from "../components/InformacionTuristica/StepCard";

import Sidebar from "../components/InformacionTuristica/Sidebar";
import "../styles/InfoTuristica/InfoTuristica.css";
import Banner from "../components/InformacionTuristica/Banner";
// import Banner from "../components/InformacionTuristica/Banner";

const MainLayout = () => {
  const steps = [
    {
      title: "Cerros de Mavicure",
      description:
        "Montañas icónicas de roca negra. Requiere permiso especial para visita y un guía certificado.",
    },
    {
      title: "Puerta de Orión",
      description:
        "Formación rocosa con una vista espectacular del cielo. Ideal para fotografía nocturna.",
    },
    {
      title: "Caño Lajas",
      description:
        "Río con cascadas cristalinas. Mejor época de visita: entre mayo y noviembre.",
    },
    {
      title: "Pinturas Rupestres",
      description:
        "Arte prehistórico de más de 10,000 años de antigüedad. Accesible con caminatas guiadas.",
    },
    {
      title: "Ciudad de Piedra",
      description:
        "Formaciones rocosas con formas únicas. Llevar protector solar y zapatos cómodos.",
    },
    {
      title: "Río Guaviare",
      description:
        "Navegación con delfines rosados. Evita la visita en época de lluvias intensas.",
    },
  ];

  return (
    <>
      <Banner />
      <div className="container-info">
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
