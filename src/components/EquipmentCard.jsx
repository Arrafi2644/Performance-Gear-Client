import React from 'react';

const EquipmentCard = ({ equipment }) => {
    const { _id, name, image, category, price, rating, customization, details, deliveryTime, available } = equipment;

    return (
        <div className='border p-6 rounded-lg space-y-6'>
            <div>
                <img className='w-full h-52 object-cover rounded-lg' src={image} alt="" />
            </div>
            <div className='font-medium space-y-4 grow'>
                <div className='flex justify-between items-center gap-6'>
                    <h2>Name: {name}</h2>
                    <p>Category: {category}</p>
                </div>
                <div className='flex justify-between items-center gap-6'>
                    <p>Price: {price} Taka</p>
                    <p>Available: {available}</p>
                </div>
                <div className='flex justify-between items-center gap-6'>
                    <p>Rating: {rating}</p>
                    <p>Details: {details}</p>
                </div>
                <div className='flex justify-between items-center gap-6'>
                    <p>Customization: {customization}</p>
                    <p>Delivery Time: {deliveryTime} Day</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <button className="btn ">Update</button>
                <button className="btn ">Delete</button>
            </div>
        </div>
    );
};

export default EquipmentCard;