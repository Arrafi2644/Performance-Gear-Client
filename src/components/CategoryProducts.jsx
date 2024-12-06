import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProducts = ({showProducts, setShowProducts, categories}) => {
    // const products = useLoaderData()
    console.log(categories);
    const [products, setProducts] = useState([])
    const firstCategory = categories[0]
    // const location = useLocation()
    console.log(firstCategory);
 

    // console.log(showProducts)
    // console.log(products)
    // if(showProducts.length < 1) {
       
    // }

    //  useEffect(()=>{
    //     fetch(`http://localhost:5000/equipments/category/${firstCategory}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setShowProducts(data)
    //     })
    //  }, [firstCategory, location])


   

    return (
        <div>
            product : {showProducts.length}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {/* {
                showProducts.length < 1 ?
                products.map(product => <ProductCard product={product}></ProductCard>):
                showProducts.map(product => <ProductCard product={product}></ProductCard>)
            } */}
            {
               
                showProducts.map(product => <ProductCard product={product}></ProductCard>) 
            }
            </div>
        </div>
    );
};

export default CategoryProducts;