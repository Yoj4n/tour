import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Destinations/DestinationGrid.css';
import destinations from '../../Data/destinationsData'; 

function DestinationGrid() {
  return (
    <section className="popular-destinations">
      <div className="container">
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <Link to={`/detalle/${index}`} key={index} className="destination-card">
              {/* <div className="destination-card" key={index}> */}
                <img src={destination.imgSrc} alt={destination.title} />
                <div className="card-content">
                  <span className="destination-country">{destination.location}</span>
                  <h3 className="destination-name">{destination.title}</h3>
                  <p className="destination-description">{destination.description}</p>
                  <span className="destination-rating">{destination.rating}</span>
                </div>
              {/* </div> */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationGrid;
