import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoriesDetails = () => {
    const {_id, img,title} = useLoaderData();
    console.log(_id);
    return (
        <div>
            <h1>this is categories details page</h1>
        </div>
    );
};

export default CategoriesDetails;