import React from "react";
import { FaRegImage } from "react-icons/fa";
import "../../styles/About/FeatureItem.css"; 

const FeatureItem = ({ title }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <FaRegImage className="icon" />
      </div>
      <div className="feature-text">
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy eirmod.
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;

