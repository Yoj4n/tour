import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "../../styles/VistaDetalle/PackageHeader.css";

const PackageHeader = ({title, rating}) => {
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
      
      <div className="package-price">
        <span className="price">$750</span>
        <span className="per-person">/ per person</span>
      </div>
    </div>
  );
};

export default PackageHeader;

