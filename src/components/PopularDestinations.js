import '../styles/PopularDestinations.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import destinationsData from '../Data/destinationsData';

function PopularDestinations({ searchQuery }) {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const storedDestinations = JSON.parse(localStorage.getItem("destinations")) || [];
    setDestinations([...destinationsData, ...storedDestinations]);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedDestinations = JSON.parse(localStorage.getItem("destinations")) || [];
      setDestinations([...destinationsData, ...storedDestinations]);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const filteredDestinations = destinations.filter((destination) =>
    destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.price.toString().includes(searchQuery)

  );

  const featuredDestinations = filteredDestinations.slice(0, 3);

  return (
    <section className="popular-destinations">
      <div className="container">
        <h3 className="section-subtitle">SENDEROS</h3>
        <h2 className="section-title">MÁS POPULARES</h2>
        <p className="section-description">
          Descubre algunos de los destinos más impresionantes que tenemos para ti.
        </p>
        <div className="destinations-grid">
          {featuredDestinations.length > 0 ? (
            featuredDestinations.map((destination, index) => (
              <Link to={`/detalle/${index}`} key={index} className="destination-card">
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
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
        <Link to="/destinations">
          <button className="btn-more">VER MÁS</button>
        </Link>
      </div>
    </section>
  );
}

export default PopularDestinations;

