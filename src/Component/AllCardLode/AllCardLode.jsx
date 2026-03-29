import React, { use } from 'react';
import CardShow from './CardShow';

const AllCardLode = ({ data, cards, setCard }) => {
  const card = use(data);
//   console.log(card);

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-4 gap-10">
      {card.map((card) => (
        <CardShow key={card.id} card={card} cards={cards} setCard={setCard}></CardShow>
      ))}
    </div>
  );
};

export default AllCardLode;