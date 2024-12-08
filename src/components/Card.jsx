import React from "react";
import { Link } from "react-router-dom";
import { GoClock } from "react-icons/go";

const Card = ({ item }) => {
  return (
    <div className="container mx-auto flex justify-center md:justify-start">
      <div className="max-w-sm">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          {/* Thumbnail Image */}
          <img
            src={item?.thumbnail_image || "https://via.placeholder.com/150"}
            alt="thumbnail_image"
            className="rounded-t-lg"
          />

          <div className="py-6 px-5 rounded-lg bg-white">
            {/* Item Name */}
            <Link to={`/items/${item?._id || "#"}`}>
              <h1 className="text-lg font-semibold">
                {item?.name || "Unnamed Item"}
              </h1>
            </Link>

            {/* Category and reading items */}
            <div className="flex justify-between items-center flex-wrap">
              <button className="mt-6 py-2 px-4 font-medium rounded-full shadow-md hover:shadow-lg transition duration-300 bg-red-100">
                {item?.category || "Unknown Category"}
              </button>
              <div className="flex items-center py-2 mt-6">
                <GoClock />
                <span className="ml-1">
                  {item?.more.prep_time || "Prep time not available"}
                </span>
                <div className=" absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="font-medium">{item?.more.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
