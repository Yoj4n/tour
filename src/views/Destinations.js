import React from 'react';
// import '../styles/Destinations.css';
import DestinationGrid from '../components/Destinations/DestinationGrid';
import Banner from '../components/Destinations/Banner';


function Destinations() {
  return (
    <>
    <Banner />
    <div className="container">
      <DestinationGrid />
    </div>
  </>
   
  );
}

export default Destinations;
