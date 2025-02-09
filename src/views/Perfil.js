import React from "react";
import FormularioPerfil from "../components/Perfil/FormularioPerfil";
import Banner from '../components/Perfil/Banner';

function Perfil() {
  return (
    <>
    <Banner/>
      <div>
        <FormularioPerfil />
      </div>
    </>
  );
}

export default Perfil;
