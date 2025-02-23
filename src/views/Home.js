import React, { useState } from 'react';
import HeroCarousel from '../components/HeroCarousel.js';
import SearchBar from '../components/SearchBar.js';
import PopularDestinations from '../components/PopularDestinations.js';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <HeroCarousel />
      <SearchBar onSearch={setSearchQuery} />
      <PopularDestinations searchQuery={searchQuery} />
    </div>
  );
}

export default Home;
