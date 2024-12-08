import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
  const item = useLoaderData();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const extractNumber = (timeString) => {
    if (!timeString) return 0; // Handle undefined or null values
    const timeArray = timeString.split(' ');
    return parseInt(timeArray[0], 10) || 0; // Ensure it returns a valid number
  };

  const prepTimeMinutes = extractNumber(item.more?.prep_time);
  const cookTimeMinutes = extractNumber(item.more?.cook_time);

  const totalMinutes = prepTimeMinutes + cookTimeMinutes;

  return (
    <div>
      <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
        <article>
          <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
            <picture>
              <img
                src={item.thumbnail_image}
                alt={item.name}
                className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto"
              />
            </picture>

            <div className="px-8">
              <h1 className="text-4xl mt-12 text-secondary">{item.name}</h1>
              <p className="mt-6">{item.description || 'No description available.'}</p>

              <article className="bg-rose-50 mt-6 p-5 rounded-xl">
                <h2 className="text-xl font-semibold ml-2">Preparation Time</h2>
                <ul className="list-disc mt-3 ml-8 text-lg marker:text-orange-300">
                  <li className="pl-3">
                    <p>
                      <span>Total:</span> <span>{totalMinutes} Minutes</span>
                    </p>
                  </li>
                  <li className="pl-3 mt-3">
                    <p>
                      <span>Preparation Time:</span> <span>{item.more?.prep_time}</span>
                    </p>
                  </li>
                  <li className="pl-3 mt-3">
                    <p>
                      <span>Cooking Time:</span> <span>{item.more?.cook_time}</span>
                    </p>
                  </li>
                </ul>
              </article>
              <div className='mt-5'>
              <h3 className=' text-xl font-semibold ml-2'>Ingredients</h3>
              <ul className=' list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle'>
                {
                  item?.ingredients.map((ingredients, index) => (
                    <li key={index}>
                        <span>{ingredients.name}: </span>
                        <span>{ingredients.quantity}</span>

                    </li>
                  ))
                }
              </ul>
              <h3 className=' text-xl font-semibold ml-2 mt-5'>Instruction</h3>
              <ol className=' list-decimal marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle'>
                {
                  item?.instruction.map((instruction, index) => (
                    <li key={index}>
                        <span className=' font-semibold'>{instruction.step}: </span>
                        <span>{instruction.step_detail}</span>

                    </li>
                  ))
                }
              </ol>
          </div>
            </div>
          </div>
          
        </article>
      </section>
    </div>
  );
};

export default SingleProduct;
