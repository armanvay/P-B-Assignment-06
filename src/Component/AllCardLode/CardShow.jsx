import React, { useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { toast } from 'react-toastify';


const CardShow = ({ card, cards, setCard }) => {
  // console.log(card)

  const [buy, setBuy] = useState(false);

  const henledBayButton = () => {

    setBuy(true);
    setCard([...cards,card])
    toast.success(`${card.name} add`)
  };

  return (
    <div className="border border-gray-200 rounded-3xl p-6 hover:shadow-xl transition-all">
      <div className="flex justify-end mb-4">
        <span
          className={`text-xs font-semibold px-4 py-1.5 rounded-2xl 
              ${card.tagType === "new" ? "bg-green-100 text-green-700" : ""}
              ${card.tagType === "popular" ? "bg-orange-100 text-orange-700" : ""}
              ${card.tagType === "best seller" ? "bg-purple-100 text-purple-700" : ""}
            `}
        >
          {card.tagType.toUpperCase()}
        </span>
      </div>
      <div>
        <span className='p-5 '>
          <img className="h-20 w-20 rounded-full border-gray-300 border p-4" src={card.icon} alt="" />
        </span>
      </div>

      <h3 className="text-2xl  font-semibold mb-1">{card.name}</h3>
      <p className="text-gray-500 text-sm mb-4">{card.description}</p>

      <div className="text-2xl font-bold mb-6 flex items-center gap-1">
        {card.price === 0 ? (
          <span className="text-4xl font-bold text-emerald-600">Free</span>
        ) : (
          <>
            <span className="text-3xl font-bold">
              <span className="flex items-center">
                <span className="text-3xl">
                  <FaDollarSign></FaDollarSign>
                </span>
                <span className="text-4xl mb-1">{card.price}</span>
              </span>
            </span>
            <span className="text-base font-normal text-gray-500">
              /{card.period}
            </span>
          </>
        )}
      </div>

      <ul className="space-y-3 mb-8 text-sm">
        {card.features.map((features, i) => (
          <li key={i} className="flex items-center gap-2">
            <GoCheckCircle className="text-green-500" />
            {features}
          </li>
        ))}
      </ul>

      <button
        onClick={henledBayButton}
        className={`w-full cursor-pointer ${buy === true ? " bg-green-500 text-white" : "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white"}  py-4 rounded-2xl font-semibold transition `}
      >
        {buy ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default CardShow;