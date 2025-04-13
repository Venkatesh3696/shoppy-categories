import React from "react";

const CategoryItem = ({ details }) => {
  return (
    <div className="w-full h-70 aspect-3/2 flex flex-col items-start justify-center text-start p-4 bg-white shadow-md rounded-lg m-2">
      <img className="h-4/5 w-full" src={details.imageUrl} alt={details.name} />
      <h1>{details.name}</h1>
      <p>{details.itemsCount} items</p>
    </div>
  );
};

export default CategoryItem;
