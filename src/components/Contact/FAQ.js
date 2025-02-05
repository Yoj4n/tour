import React, { useState } from "react";
import "../../styles/Contact/FAQ.css";
import faqData from "../../Data/faqData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>PREGUNTAS Y RESPUESTAS FRECUENTES</h2>
      <p className="faq-intro">
      En esta sección encontrarás respuestas a las preguntas más comunes sobre nuestros servicios y el destino turístico del Guaviare.
      </p>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
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
