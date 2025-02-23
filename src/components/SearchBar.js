import '../styles/SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); 
  };

  return (
    <section className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar Destino..."
          className="search-input"
          value={query}
          onChange={handleChange}
        />
        <button className="search-btn">
          <FaSearch className="search-icon" />
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
