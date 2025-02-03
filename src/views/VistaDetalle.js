import React from "react";
import { useParams } from 'react-router-dom';
import RelatedImages from "../components/VistaDetalle/RelatedImages";
import PackageMap from "../components/VistaDetalle/PackageMap";
import MorePackages from "../components/VistaDetalle/MorePackages";
import BookingForm from "../components/VistaDetalle/BookingForm";
import destinations from "../Data/destinationsData";
import "../../src/styles/VistaDetalle/VistaDetalle.css";
import PackageDetail from "../components/VistaDetalle/PackageDetail";

const VistaDetalle = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const destination = destinations[id]; // Busca el destino en el array
  if (!destination) {
    return <h2>Destino no encontrado</h2>; // Manejo de error si el ID no existe
  }
  return (
    <div className="vista-detalle">
      <header className="vista-detalle-header">
        <h1>{destination.title}</h1>
      </header>
      <div className="container">
        <div className="vista-detalle-container">
          <PackageDetail destination={destination}/>
          <div className="vista-detalle-sidebar">
            <BookingForm />
            <RelatedImages />
            <PackageMap destination={destination} />
            <MorePackages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaDetalle;
