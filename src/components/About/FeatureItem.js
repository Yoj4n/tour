import React from "react";
import { FaRegImage } from "react-icons/fa";
import "../../styles/About/FeatureItem.css";

const FeatureItem = ({ title, conten }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <FaRegImage className="icon" />
      </div>
      <div className="feature-text">
        <h4>{title}</h4>
        <p>{conten}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
