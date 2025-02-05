import React from "react";
import { FaClock, FaUsers, FaMapMarkerAlt, FaSwimmer } from "react-icons/fa";
import "../../styles/VistaDetalle/PackageMeta.css";

function PackageMeta({location}) {
  return (
    <div className="package-meta">
      <ul className="ul-Meta">
        <li className="li-Meta">
          <FaClock className="icon" /> <span>7D/6N</span>
        </li>
        <li className="li-Meta">
          <FaUsers className="icon" /> <span>pax: 10</span>
        </li>
        <li className="li-Meta">
          <FaSwimmer className="icon" /> <span>Category: Hangout</span>
        </li>
        <li className="li-Meta">
          <FaMapMarkerAlt className="icon" /> <span>{location}</span>
        </li>
      </ul>
    </div>
  );
}

export default PackageMeta;

