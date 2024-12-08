import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CategoryWrapper from './CategoryWrapper';
import Card from '../../components/Card';
import axios from 'axios';

const CategoryPage = () => {
  const { category } = useParams(); // Correct usage of `useParams`
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);

      try {
        // Correct the API URL structure and ensure it matches your backend route.
        const response = await axios.get(`https://reasype-backend.vercel.app/api/categories/${category}`);
        setItems(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.response?.data?.message || "Error loading category");
        setItems([]); // Reset items on error
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchCategoryData();
  }, [category]); // Correct the dependency name

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
        {category}
      </h1>

      {loading && <p className='text-center'>Loading...</p>} {/* Show loading indicator */}
      {error && <p className="text-red-500 text-center">{error}</p>} {/* Show error message */}
      {!loading && !error && items.length === 0 && (
        <p className="text-center">No items found in this category.</p>
      )}

      <CategoryWrapper />

      <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {items && items.map((item) => (
            <Card item={item} key={item._id} /> // Display category items
          ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
