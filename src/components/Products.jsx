import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { FaRightLong } from 'react-icons/fa6';

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
            <h2 className='text-3xl font-bold mb-4 text-center md:text-left'>Featured Products</h2>
            {/* <p className='w-full md:w-4/5 mx-auto text-center mb-8'>Discover our top-rated sports accessories and gear, handpicked to help you achieve your best performance in every activity</p> */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    products.map(product => <ProductCard product={product} key={product._id} ></ProductCard>)
                }
            </div>
            <div className='text-center md:text-right mt-4'>
                
            <Link to='/allSportsEquipment' className='btn bg-accent  '>Explore all products <span><FaRightLong></FaRightLong></span></Link>
            </div>
        </div>
    );
};

export default Products;