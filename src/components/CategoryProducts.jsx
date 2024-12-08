import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProducts = ({showProducts, setShowProducts, categories}) => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>

            {
               
                showProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>) 
            }
            </div>
        </div>
    );
};

export default CategoryProducts;