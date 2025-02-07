import React from "react";
import "../../styles/Contact/FAQ.css";
import faqData from "../../Data/faqData";
import useFAQ from '../../hooks/useFAQ';

const FAQ = () => {
  const { openIndex, toggleFAQ } = useFAQ();
//   openIndex: guarda la pregunta actualmente abierta.
// toggleFAQ(index): maneja la apertura/cierre de preguntas.

  return (
    <div className="faq-container">
      <h2 className="h2-fqa">PREGUNTAS Y RESPUESTAS FRECUENTES</h2>
      <p className="faq-intro">
        En esta sección encontrarás respuestas a las preguntas más comunes 
        sobre nuestros servicios y el destino turístico del Guaviare.
      </p>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          {/* Si se hace clic en un botón nos va a llamar al hook (explicacion en el hook)*/}
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>&#9662;</span>
          </button>
          {openIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
