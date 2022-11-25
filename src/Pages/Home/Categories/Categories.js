import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (   
      <>
      <h1 className='text-3xl font-semibold text-center'>All Categories</h1>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
        {
          categories.map(category => <CategoriesCard
            key={category._id}
            category={category}
          ></CategoriesCard>)
        }
      </div>           
      </>
    );
};

export default Categories;