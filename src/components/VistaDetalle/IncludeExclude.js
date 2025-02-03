import React from "react";
import "../../styles/VistaDetalle/IncludeExclude.css";

function IncludeExclude() {
  return (
    <div className="include-exclude">
      <h3>INCLUDE & EXCLUDE :</h3>
      <ul>
        <li>
          <i className="fas fa-check"></i> Specialized bilingual guide
        </li>
        <li>
          <i className="fas fa-times"></i> Guide Service Fee
        </li>
      </ul>
    </div>
  );
}

export default IncludeExclude;
