import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProducts = ({showProducts}) => {
    // const products = useLoaderData()

    return (
        <div>
            product : {showProducts.length}
        </div>
    );
};

export default CategoryProducts;