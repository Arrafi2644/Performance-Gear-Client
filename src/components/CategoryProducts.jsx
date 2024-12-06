import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProducts = ({showProducts, setShowProducts, categories}) => {
    // const products = useLoaderData()
    console.log(categories);
    // const [products, setProducts] = useState([])
    // const firstCategory = categories[0]
    // const location = useLocation()
    // console.log(firstCategory);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>

            {
               
                showProducts.map(product => <ProductCard product={product}></ProductCard>) 
            }
            </div>
        </div>
    );
};

export default CategoryProducts;