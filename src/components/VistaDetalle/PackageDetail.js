import React from "react";
import PackageMeta from "./PackageMeta";
import PackageOverview from "./PackageOverview";
import PackageInclude from "./IncludeExclude";
import PackageItinerary from "./Itinerary";
import "../../styles/VistaDetalle/PackageDetail.css";
import PackageHeader from "./PackageHeader";

function PackageDetail({destination}) {
  return (
    <div className="single-packge-wrap">
      <div className="single-package-head d-flex align-items-center">
      <PackageHeader title={destination.title} rating={destination.rating} />
      </div>
      <PackageMeta location={destination.location}/>
      <div className="vista-detalle-image-placeholder">
        <img src={destination.imgSrc}></img>
      </div>
      <div className="package-content-detail">
        <PackageOverview />
        <PackageInclude />
        <PackageItinerary />
      </div>
    </div>
  );
}

export default PackageDetail;
