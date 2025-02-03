import '../styles/PopularDestinations.css';
import { Link } from "react-router-dom";

function PopularDestinations() {
  return (
    <section className="popular-destinations">
      <div className="container">
        <h3 className="section-subtitle">UNCOVER PLACE</h3>
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-description">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
        </p>
        <div className="destinations-grid">
          <Link to="/packageDetail" className="destination-card">
            <div className="card-image">500x570</div>
            <div className="card-content">
              <span className="destination-country">ITALY</span>
              <h4 className="destination-name">San Miguel</h4>
              <p className="destination-description">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              <div className="destination-rating">★★★★★</div>
            </div>
          </Link>
          <Link to="/destinations" className="destination-card">
            <div className="card-image">500x570</div>
            <div className="card-content">
              <span className="destination-country">DUBAI</span>
              <h4 className="destination-name">Burj Khalifa</h4>
              <p className="destination-description">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              <div className="destination-rating">★★★★★</div>
            </div>
          </Link>
          <Link to="/destinations" className="destination-card">
            <div className="card-image">500x570</div>
            <div className="card-content">
              <span className="destination-country">JAPAN</span>
              <h4 className="destination-name">Kyoto Temple</h4>
              <p className="destination-description">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              <div className="destination-rating">★★★★★</div>
            </div>
          </Link>
        </div>
        <Link to="/destinations">
          <button className="btn-more">More Destinations</button>
        </Link>
      </div>
    </section>
  );
}

export default PopularDestinations;
