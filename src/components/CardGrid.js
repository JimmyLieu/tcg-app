import React, { useState } from 'react';
import Cards from '../data/CardData.json'; 
import '../App.css'; 

const CardGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="card-grid">
      {Cards.Cards.map((card, index) => ( // Access Cards array within the JSON
        <div
          key={index}
          className="card-container"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={card.Img} alt={card.Name} className="card-image" />
          {hoveredIndex === index && (
            <div className="card-info">
              <h3>{card.Name}</h3>
              <p>Rarity: {card.Rarity}</p>
              <p>Power: {card.Power}</p>
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
