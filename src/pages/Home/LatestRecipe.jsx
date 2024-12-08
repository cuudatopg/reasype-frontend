import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const LatestRecipe = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getLatestItems = async () => {
            try {
                const response = await axios.get("https://reasype-backend.vercel.app/api/all-items");
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        getLatestItems();
    }, []);

    return (
        <div className="px-5 xl:-px-10 py-16">
            <h2 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
                Latest recipes
            </h2>

            {/* Display items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {items.length > 0 ? (
                    items
                        .slice(0, 4)
                        .map((item, index) => <Card key={item._id} item={item} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Link to="/recipes">
                <div className="flex justify-center items-center mt-5" >
                    <button className="px-8 py-4 hover:bg-btnColor hover:text-white text-secondary transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btnColor rounded-lg">
                        View All Recipes
                    </button>
                </div>
            </Link>


        </div>
    );
};

export default LatestRecipe;
