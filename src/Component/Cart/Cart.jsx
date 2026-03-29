import React from 'react';
import logos from '../../assets/image copy 2.png'
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";

const Cart = ({ cards ,setCard}) => {
    // console.log(cards)
   const totlePriec =cards.reduce((sum,card)=>sum +card.price,0)


   const allCardEmty=()=>{
    toast.success("Pament success")
    setCard([])
   }
     const hendelDelete = (card) => {
        // console.log(card)
       const filteredArray = cards.filter((c) => c.id !== card.id);
       toast.warning(`${card.name} is Remove`)
       setCard(filteredArray);
     };


  return (
    <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-10">
      <div className="px-6 py-5  ">
        <h2 className="text-2xl font-semibold">Your Cart</h2>
      </div>

      {cards.length === 0 ? (
        <div>
            <div className='flex justify-center  h-40'>
                <img src={logos} alt="" />
            </div>
            <p className='text-center font-bold m-3 text-5xl mb-10'>Your Card Empty</p>
        </div>
      ) : (
        <>
          <div className="p-6 space-y-4">
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 rounded-2xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    <img className="h-10" src={card.icon} alt="" />
                  </div>
                  <div>
                    <h4 className="font-medium">{card.name}</h4>
                    <p className="text-gray-600 font-bold text-sm">
                      ${card.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => hendelDelete(card)}
                  className="text-red-500 btn hover:text-red-600 text-sm font-bold"
                >
                  <MdDelete></MdDelete>Remove
                </button>
              </div>
            ))}
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">Total</span>
              <span className="text-3xl font-bold">${totlePriec}</span>
            </div>

            <button
              onClick={allCardEmty}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;