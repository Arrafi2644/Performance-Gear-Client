import React from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ProductCard = ({ product }) => {
    // console.log(product);
    const {_id, name, category, price, description, shortDescription, available, rating, customization, image, deliveryTime } = product
    return (
        <div className="card card-compact p-6 border w-full rounded-lg">
            <figure>
                <img
                    className='w-full h-60 object-cover rounded-lg'
                    src={image}
                    alt="product" />
            </figure>
            <div className="mt-6 space-y-4 grow " >
                <h2>{product?.shortDescription}</h2>
                <div className='flex justify-between items-center w-full gap-4'>
                    {/* <h2 className='font-medium '> {name[0].toUpperCase() + name.slice(1)}</h2> */}
                    <p className='font-medium flex items-center text-xl text-primary'> <TbCurrencyTaka className='text-lg'></TbCurrencyTaka> {price}</p>
                </div>
                {/* <div className='flex justify-between items-center w-full gap-4'>
                    <p className='font-medium '>Category: {category[0].toUpperCase() + category.slice(1)}</p>
                    <p className='font-medium '>Available: {available}</p>
                </div> */}
                <div className='flex justify-between items-center w-full gap-4'>
                    {/* <div className="rating rating-sm items-center">
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
                    </div> */}

                       <Rating className='text-center mx-auto'
                            style={{ maxWidth: 90, margin: 0, marginLeft:0,  marginRight: '4px' }}
                            value={rating}
                            readOnly
                        />
                </div>

                
            </div>
            <div>
            <div className="card-actions justify-center mt-6">
                    <Link to={`/details/${_id}`} className="btn bg-accent w-full min-h-0 h-auto py-2">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;