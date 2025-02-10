import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "../../styles/VistaDetalle/PackageHeader.css";

const PackageHeader = ({title, rating, price}) => {
  return (
    <div className="package-header">
      <div className="package-title">
        <h2>{title}</h2>
        <div className="rating-stars">
          {[...Array(rating.length)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
      </div>
      
      <div className="package-price-header">
        <span className="price">${price.toLocaleString('es-CO')}</span>
        <span className="per-person">/ por persona</span>
      </div>
    </div>
  );
};

export default PackageHeader;

