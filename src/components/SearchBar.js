import '../styles/SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      alert(`Searching for: ${query}`);
    }
  };

  return (
    <section className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar Destino..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaSearch className="search-icon" />
        </button>
      </div>
    </section>
  );
}

export default SearchBar;

