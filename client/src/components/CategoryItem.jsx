import React from "react";

const CategoryItem = ({ details }) => {
  return (
    <div>
      <img src={details.imageUrl} alt={details.name} />
      <h1>{details.name}</h1>
      <p>{details.itemsCount} items</p>
    </div>
  );
};

export default CategoryItem;
