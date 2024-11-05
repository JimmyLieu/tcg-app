import React from 'react';

const CardGrid = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <div key={index} className="card-image">
            <img src={card.Img} alt={card.Name} />
          </div>
        ))
      ) : (
        <p>No cards found matching your search.</p>
      )}
    </div>
  );
};

export default CardGrid;
