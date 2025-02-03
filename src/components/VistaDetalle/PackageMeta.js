import React from "react";
import { FaClock, FaUsers, FaMapMarkerAlt, FaSwimmer } from "react-icons/fa";
import "../../styles/VistaDetalle/PackageMeta.css";

function PackageMeta({location}) {
  return (
    <div className="package-meta">
      <ul>
        <li>
          <FaClock className="icon" /> <span>7D/6N</span>
        </li>
        <li>
          <FaUsers className="icon" /> <span>pax: 10</span>
        </li>
        <li>
          <FaSwimmer className="icon" /> <span>Category: Hangout</span>
        </li>
        <li>
          <FaMapMarkerAlt className="icon" /> <span>{location}</span>
        </li>
      </ul>
    </div>
  );
}

export default PackageMeta;

