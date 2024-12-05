import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://performance-gear-server.vercel.app/equipments')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // console.log(products);
    return (
        <div className='my-16'>
            <h2 className='text-3xl text-center font-bold'>Featured Products</h2>
            <p className='w-full md:w-4/5 mx-auto text-center mb-8'>Discover our top-rated sports accessories and gear, handpicked to help you achieve your best performance in every activity</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductCard product={product} key={product._id} ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;