import React from 'react';
import { Link } from 'react-router-dom';
import FeatureImg from "../../assets/featured.webp";

const FeatureSection = () => {
  const recipe = {
    id: "6753ecfbb877ca925af8375a",
    name: "Pineapple + Smoked Jackfruit Pizza",
    description: "A quick and easy recipe for the best pizza in the word.",
    prep_time: "20 mins",
    servings: "2",
    difficulty: "Easy",
    image: FeatureImg,
  };

  return (
    <div className="overflow-hidden flex flex-col md:flex-row justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Recipe Details Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{recipe.name}</h2>
        <p className="text-gray-600 text-lg mb-6">{recipe.description}</p>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm bg-green-100 text-green-800 py-1 px-3 rounded-full">
            Prep Time: {recipe.prep_time}
          </span>
          <span className="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">
            Servings: {recipe.servings}
          </span>
          <span className="text-sm bg-purple-100 text-purple-800 py-1 px-3 rounded-full">
            Difficulty: {recipe.difficulty}
          </span>
        </div>
      <button className="px-6 py-3 hover:bg-btnColor hover:text-white text-secondary transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btnColor rounded-lg">
        View Recipe
      </button>
      </div>
    </div>
  );
};

export default FeatureSection;
