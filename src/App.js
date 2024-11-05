import React, { useState } from 'react';
import cardData from './data/CardData.json';  
import './App.css';  
import SearchBar from './components/SearchBar.js';  
import CardGrid from './components/CardGrid.js';    

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");  // State for search term

  // Function to handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter cards based on search term
  const filteredCards = cardData.Cards.filter((card) =>
    card.Name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>One Piece Database</h1>

      {/* SearchBar Component */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      {/* CardGrid Component */}
      <CardGrid cards={filteredCards} />
    </div>
  );
};

export default App;
