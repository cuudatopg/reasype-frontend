import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryWrapper from '../category/CategoryWrapper';
import Card from '../../components/Card';

const Recipes = () => {
    // State to store the fetched recipes/items
    const [items, setItems] = useState([]);

    // Fetching items from the API
    useEffect(() => {
        const getAllItems = async () => {
            try {
                const response = await axios.get("https://reasype-backend.vercel.app/api/all-items");
                setItems(response.data); // Set the response data to the state
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        getAllItems();
    }, []); // Empty dependency array to run this effect once when the component mounts

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className=' text-center text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>All recipes</h1>
            <CategoryWrapper />

            <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    items.map((item) => (
                        <Card key={item._id} item={item} />
                    ))
                }
            </ul>
        </div>
    );
}

export default Recipes;
