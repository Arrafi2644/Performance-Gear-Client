import React from 'react';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const CartCard = ({ product, handleDelete }) => {
    // console.log(product);
    return (
        <div className='flex flex-col md:flex-row gap-6 border rounded-md p-6 justify-between'>
            <div>
                <img className='w-28 h-24 object-cover rounded-md' src={product.image} alt="" />
            </div>
                <div className='flex-grow'>
                    <h2 className='text-xl font-bold'>{product.name}</h2>
                    <p>{product.shortDescription}</p>
                </div>
                <div className='flex flex-row md:flex-col '>
                    <p className='font-bold flex gap-1 flex-grow items-start'><TbCurrencyTaka className='text-xl'></TbCurrencyTaka> {product.price}</p>

                    <div className='flex items-center gap-4'>
                    <Link><FaHeart className='text-green-500 hover:text-green-700 text-lg'></FaHeart></Link>
                    <Link onClick={()=>handleDelete(product._id)}><FaTrashAlt className='text-red-500 hover:text-red-700'></FaTrashAlt></Link>
                    </div>
                </div>

        </div>
    );
};

export default CartCard;