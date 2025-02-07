// Esta libreria va a manejar el estado del indice abierto
import { useState } from "react";

const useFAQ = () => {
    //Si openIndex es null, el FQA NO está abierto
    // openIndex tiene un numero 0,1,2.. para saber cual es el FQA abierto
  const [openIndex, setOpenIndex] = useState(null);


  // Esta funcion es la que nos va a ayudar a alternar la visibilidad de los FQA
  const toggleFAQ = (index) => {
    //Si el FQA  está abierto o desplegago (openIndex === index), la cierra (null)
    //Si el FQA esta cerrado (null) el openIndex va a abrirse (index) 

    //para que sea mas entendible:
    //Si openIndex es null y haces toggleFAQ(1), openIndex ahora es 1 (abre el FQA 1)
    //Si openIndex es 1 y haces toggleFAQ(1), se vuelve null (cierra la pregunta 1).

    setOpenIndex(openIndex === index ? null : index);
  };

  return { openIndex, toggleFAQ };
};

export default useFAQ;
