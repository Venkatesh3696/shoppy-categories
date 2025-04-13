import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ details }) => {
  console.log(details);
  const navigate = useNavigate();
  const onEdit = () => {
    navigate(`/edit-category/${details._id}`);
  };

  return (
    <div className="w-full h-70 aspect-3/2 flex flex-col items-start justify-center text-start p-4 bg-white shadow-md rounded-lg m-2">
      <img className="h-4/5 w-full" src={details.imageUrl} alt={details.name} />
      <div className="w-full flex  justify-between items-center">
        <div>
          <h1>{details.name}</h1>
          <p>{details.itemsCount} items</p>
        </div>
        <button
          className="cursor-pointer border border-gray-300 px-3 rounded"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
