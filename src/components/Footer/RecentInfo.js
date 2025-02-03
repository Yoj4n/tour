import React from "react";
import '../../styles/Footer/RecentInfo.css'; 

const RecentInfo = () => {
  return (
    <div className="recent-info-container">
      <h3 className="recent-info-title">INFORMACIÓN RECIENTE</h3>
      <div className="info-item">
        <div className="thumbnail"></div>
        <div className="info-text">
          <strong>Mejores destinos 2024</strong><br />Febrero 17, 2024
        </div>
      </div>
      <div className="info-item">
        <div className="thumbnail"></div>
        <div className="info-text">
          <strong>Aventura en la montaña</strong><br />Marzo 10, 2024
        </div>
      </div>
    </div>
  );
};

export default RecentInfo;