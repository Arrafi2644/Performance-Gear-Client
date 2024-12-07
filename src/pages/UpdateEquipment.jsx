import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Zoom } from 'react-awesome-reveal';

const UpdateEquipment = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const equipment = useLoaderData()
    const { _id, name, category, price, description, available, rating, customization, image, deliveryTime } = equipment

    const handleUpdateEquipment = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value.toLowerCase();
        const price = form.price.value;
        const available = form.available.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const image = form.image.value;
        const deliveryTime = form.deliveryTime.value;
        const description = form.description.value;
        const userEmail = user.email;
        const userName = user.displayName;

        console.log(description);

        const equipment = { name, category, price, available, rating, customization, image, deliveryTime, description, userEmail, userName }
        console.log(equipment);

        fetch(`https://performance-gear-server.vercel.app/equipments/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(equipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Equipment updated successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });

                    navigate(-1)
                }
            })
    }
    return (
        <Zoom>
            <div className='max-w-7xl w-11/12 mx-auto my-10'>
                <div className="hero bg-third min-h-screen rounded-lg">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold">Update Equipment</h1>
                            <p className="py-6 w-11/12 md:w-4/5 lg:w-3/5 mx-auto" >
                                Modify and update information for your sports equipment to ensure accurate listings and provide the best experience for your customers.
                            </p>
                        </div>

                        <div className="card bg-base-100 w-full md:w-4/5 shrink-0 shadow-2xl">
                            <form onSubmit={handleUpdateEquipment} className="card-body grid grid-cols-1 md:grid-cols-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Equipment Name</span>
                                    </label>
                                    <input defaultValue={name} name='name' type="text" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input defaultValue={category} name='category' type="text" placeholder="category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input defaultValue={image} name='image' type="text" placeholder="image url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input defaultValue={price} name='price' type="text" placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input defaultValue={rating} name='rating' type="text" placeholder="rating" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Customization</span>
                                    </label>
                                    <input defaultValue={customization} name='customization' type="text" placeholder="customization" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Delivery Time</span>
                                    </label>
                                    <input defaultValue={deliveryTime} name='deliveryTime' type="text" placeholder="delivery time" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input defaultValue={available} name='available' type="text" placeholder="available quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input defaultValue={user.displayName} readOnly name='userName' type="text" placeholder="available quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input defaultValue={user.email} readOnly name='userEmail' type="text" placeholder="available quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control col-span-1 md:col-span-2">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    {/* <input type="text"  className="input input-bordered" required /> */}
                                    <textarea defaultValue={description} name='description' className="textarea  resize-none border-gray-300
                             " placeholder="description" required></textarea>
                                </div>

                                <div className="form-control mt-6 col-span-1 md:col-span-2">
                                    <input className='btn bg-accent' type="submit" value="Update Equipment" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default UpdateEquipment;