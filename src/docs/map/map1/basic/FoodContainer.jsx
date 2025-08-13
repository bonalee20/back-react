import React from 'react';

const FoodContainer = () => {
  const foods = [
    {
      id: 1,
      name : "마라탕"
    },
    {
      id: 2,
      name : "육개장"
    },
    {
      id: 3,
      name : "라면"
    },
    {
      id: 4,
      name : "뚝불"
    }
  ]

  const foodlist=foods.map((food, i) => <Food key = {i} food ={food} />) 

  return (
    <div>
      {foodlist}
    </div>
  );
};

export default FoodContainer;