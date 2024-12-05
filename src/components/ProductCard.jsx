import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    console.log(product);
    const {_id, name, category, price, description, available, rating, customization, image, deliveryTime } = product
    return (
        <div className="card card-compact p-6 border w-full rounded-lg">
            <figure>
                <img
                    className='w-full max-h-60 h-52 object-cover rounded-lg'
                    src={image}
                    alt="product" />
            </figure>
            <div className="mt-6 space-y-4 grow " >
                <div className='flex justify-between items-center w-full gap-4'>
                    <h2 className='font-medium '>Name: {name}</h2>
                    <p className='font-medium '>Price: {price} Taka</p>
                </div>
                <div className='flex justify-between items-center w-full gap-4'>
                    <p className='font-medium '>Category: {category}</p>
                    <p className='font-medium '>Available: {available}</p>
                </div>
                <div className='flex justify-between items-center w-full gap-4'>
                    <div className="rating rating-sm items-center">
                    <p className='font-medium mr-2'>Rating: </p>
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                             />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>

                
            </div>
            <div>
            <div className="card-actions justify-center mt-6">
                    <Link to={`/details/${_id}`} className="btn bg-accent w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;