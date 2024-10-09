import React from "react";

function Card() {
  return (
    <div className="bg-transparent mx-2 my-2 border-1 border-white">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-lg font-bold">Card</h2>
        <p className="text-gray-500">This is a card</p>
      </div>
    </div>
  );
}

export default Card;
