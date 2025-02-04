import '../styles/PopularDestinations.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import destinationsData from '../Data/destinationsData';

function PopularDestinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    
    const storedDestinations = JSON.parse(localStorage.getItem("destinations")) || [];
    const updatedDestinations = [...destinationsData, ...storedDestinations];
    
    // Actualizar el estado con los destinos
    setDestinations(updatedDestinations);
  }, []); 

  useEffect(() => {
    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      const storedDestinations = JSON.parse(localStorage.getItem("destinations")) || [];
      setDestinations([...destinationsData, ...storedDestinations]);
    };

    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const featuredDestinations = destinations.slice(0, 3);

  return (
    <section className="popular-destinations">
      <div className="container">
        <h3 className="section-subtitle">SENDEROS</h3>
        <h2 className="section-title">MÁS POPULARES</h2>
        <p className="section-description">
          Descubre algunos de los destinos más impresionantes que tenemos para ti.
        </p>
        <div className="destinations-grid">
          {featuredDestinations.map((destination, index) => (
            <Link to="/packageDetail" key={index} className="destination-card">
              <div className="card-image">
                <img src={destination.imgSrc} alt={destination.title} />
              </div>
              <div className="card-content">
                <span className="destination-country">{destination.location}</span>
                <h4 className="destination-name">{destination.title}</h4>
                <p className="destination-description">{destination.description}</p>
                <div className="destination-rating">{destination.rating}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/destinations">
          <button className="btn-more">VER MÁS</button>
        </Link>
      </div>
    </section>
  );
}

export default PopularDestinations;
