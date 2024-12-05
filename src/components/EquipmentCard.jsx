import React from 'react';
import Swal from 'sweetalert2';

const EquipmentCard = ({ equipment , equipments, setEquipments}) => {
    const { _id, name, image, category, price, rating, customization, details, deliveryTime, available } = equipment;
    console.log(equipments);

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/equipments/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your equipment has been deleted.",
                                icon: "success"
                            });
                            // const remainingEquipments = equipments.filter(equipment => equipment._id !== _id)
                            // setEquipments(remainingEquipments)
                            const remainingEquipments = equipments.filter(equipment => equipment._id !== _id)
                            setEquipments(remainingEquipments)
                            console.log(remainingEquipments);
                        }

                    })

            }
        });



    }

    return (
        <div className='border p-6 rounded-lg space-y-6 flex flex-col'>
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
                    <p>Delivery Time: {deliveryTime} Day</p>
                </div>
                <div className='flex justify-between items-center gap-6'>
                    <p>Customization: {customization}</p>
                    <p>Details: {details}</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <button className="btn ">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn ">Delete</button>
            </div>
        </div>
    );
};

export default EquipmentCard;