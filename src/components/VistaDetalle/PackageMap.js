import React from "react";
import "../../styles/VistaDetalle/PackageMap.css";

function PackageMap  ({destination})  {
  return (
    <div className="package-map">
       <iframe src={destination.map} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default PackageMap;
