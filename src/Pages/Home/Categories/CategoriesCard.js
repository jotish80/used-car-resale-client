import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    const {_id, title, img } = category;
  
    return (
        <div className="card lg:h-[400px] w-full bg-base-100 shadow-xl">
            <figure className="">
                <img src={img} alt="" className='lg:w-full lg:h-[300px] w-[300px] h-[250px]' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-black">{title}</h2>
                <div className="card-actions">
                    <Link to={`categories/${_id}`} className="">
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;