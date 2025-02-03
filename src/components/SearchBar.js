import '../styles/SearchBar.css';
import { FaSearch, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { useRef } from 'react';

function SearchBar() {
  // Referencias para los inputs de tipo date
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  // Función para abrir el calendario al hacer clic en el ícono
  const handleCalendarClick = (inputRef) => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Abre el calendario nativo
    }
  };

  return (
    <section className="search-bar">
      <div className="container">
        <div className="input-group">
          <FaSearch className="input-icon" />
          <input type="text" placeholder="Search Destination" className="input-field" />
        </div>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="number" placeholder="Number of People" className="input-field" />
        </div>
        <div className="input-group">
          <FaCalendarAlt
            className="input-icon"
            onClick={() => handleCalendarClick(startDateRef)} // Abre el calendario al hacer clic en el ícono
            style={{ cursor: 'pointer' }} // Cambia el cursor para indicar que es clickeable
          />
          <input
            type="date"
            className="input-field date-input"
            ref={startDateRef} // Referencia para el input de tipo date
          />
        </div>
        <div className="input-group">
          <FaCalendarAlt
            className="input-icon"
            onClick={() => handleCalendarClick(endDateRef)} // Abre el calendario al hacer clic en el ícono
            style={{ cursor: 'pointer' }} // Cambia el cursor para indicar que es clickeable
          />
          <input
            type="date"
            className="input-field date-input"
            ref={endDateRef} // Referencia para el input de tipo date
          />
        </div>
        
        <button className="btn-inquire">Inquire Now</button>
      </div>
    </section>
  );
}

export default SearchBar;