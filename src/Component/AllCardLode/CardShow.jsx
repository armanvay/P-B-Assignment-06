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
    <div className="border border-gray-200 rounded-3xl p-4 sm:p-5 md:p-6 min-h-[580px] sm:min-h-[600px] md:min-h-[620px] hover:shadow-xl transition-all">
  <div className="flex justify-end mb-4">
    <span
      className={`text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-2xl 
          ${card.tagType === "new" ? "bg-green-100 text-green-700" : ""}
          ${card.tagType === "popular" ? "bg-orange-100 text-orange-700" : ""}
          ${card.tagType === "best seller" ? "bg-purple-100 text-purple-700" : ""}
        `}
    >
      {card.tagType.toUpperCase()}
    </span>
  </div>

  <div>
    <span className="p-3 sm:p-5">
      <img
        className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 rounded-full border-gray-300 border p-3 sm:p-4"
        src={card.icon}
        alt=""
      />
    </span>
  </div>

  <h3 className="text-xl sm:text-2xl font-semibold mb-1">
    {card.name}
  </h3>

  <p className="text-gray-500 text-sm sm:text-base mb-4">
    {card.description}
  </p>

  <div className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-1 flex-wrap">
    {card.price === 0 ? (
      <span className="text-3xl sm:text-4xl font-bold text-emerald-600">
        Free
      </span>
    ) : (
      <>
        <span className="text-2xl sm:text-3xl font-bold">
          <span className="flex items-center">
            <span className="text-2xl sm:text-3xl">
              <FaDollarSign />
            </span>
            <span className="text-3xl sm:text-4xl mb-1">
              {card.price}
            </span>
          </span>
        </span>
        <span className="text-sm sm:text-base font-normal text-gray-500">
          /{card.period}
        </span>
      </>
    )}
  </div>

  <ul className="space-y-3 mb-8 text-sm sm:text-base">
    {card.features.map((features, i) => (
      <li key={i} className="flex items-center gap-2">
        <GoCheckCircle className="text-green-500 shrink-0" />
        {features}
      </li>
    ))}
  </ul>

  <button
    onClick={henledBayButton}
    className={`w-full cursor-pointer ${
      buy === true
        ? "bg-green-500 text-white"
        : "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white"
    } py-3 sm:py-4 rounded-2xl font-semibold transition text-sm sm:text-base`}
  >
    {buy ? "Added to Cart" : "Buy Now"}
  </button>
</div>
  );
};

export default CardShow;