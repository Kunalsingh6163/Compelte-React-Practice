import React, { useState, useEffect } from 'react';

interface CardData {
  id: number;
  title: string;
  value: number;
}

const LAzyLoadingStateCads: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([
    { id: 1, title: 'Card One', value: 0 },
    { id: 2, title: 'Card Two', value: 0 },
    { id: 3, title: 'Card Three', value: 0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prevCards =>
        prevCards.map(card => ({
          ...card,
          value: Math.floor(Math.random() * 100) + 1, // Random 1 to 100
        }))
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {cards.map(card => (
        <div
          key={card.id}
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '10px',
            width: '150px',
            textAlign: 'center',
          }}
        >
          <h3>{card.title}</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default LAzyLoadingStateCads;
