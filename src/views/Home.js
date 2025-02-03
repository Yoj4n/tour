import React from 'react';

import HeroCarousel from '../components/HeroCarousel.js';
import SearchBar from '../components/SearchBar.js';
import PopularDestinations from '../components/PopularDestinations.js';


function Home() {
  return (
    <div>
      <HeroCarousel />
      <SearchBar />
      <PopularDestinations />
    </div>
  );
}

export default Home;