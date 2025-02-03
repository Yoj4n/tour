import React from "react";
import "../../styles/VistaDetalle/RelatedImages.css";


const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

function RelatedImages  () {
  return (
    <div className="related-images">
      <h3>RELATED IMAGES</h3>
      <div className="image-grid">
        <img src="assets/images/img1.jpg" alt="Related 1" />
        <img src="assets/images/img2.jpg" alt="Related 2" />
      </div>
    </div>
  );
};

export default RelatedImages;