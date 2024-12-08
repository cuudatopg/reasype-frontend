import React from 'react'
import { Link } from "react-router-dom";

function CategoryItem ({name, href}) {
    return (
        <div>
            <Link to={href} className='rounded-full'>
                <div className=' uppercase px-6 py-2 text-center rounded-full mt-6 font-medium shadow-md hover:shadow-lg transition duration-300 bg-red-100'>
                    {name}
                </div>
            </Link>
        </div>
    )
}

function CategoryList () {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name="entrees" href ="/categories/entrees"/>
            <CategoryItem name="breakfast" href ="/categories/breakfast"/>
            <CategoryItem name="lunch" href ="/categories/lunch"/>
            <CategoryItem name="desserts" href ="/categories/desserts"/>
            <CategoryItem name="sides" href ="/categories/sides"/>
            <CategoryItem name="drinks" href ="/categories/drinks"/>

        </div>
    )
}

const CategoryWrapper = () => {
  return (
    <div>
        <CategoryList/>
    </div>
  )
}

export default CategoryWrapper
