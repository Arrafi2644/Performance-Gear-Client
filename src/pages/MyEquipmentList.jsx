import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../provider/AuthProvider';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { TbCurrencyTaka } from 'react-icons/tb';

const MyEquipmentList = () => {
    // const myEquipments = useLoaderData()
    const [equipments, setEquipments] = useState([]);
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    // console.log(user);
    const email = user?.email;
    // console.log(email);

    useEffect(() => {
        fetch(`http://localhost:5000/equipments/user/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setEquipments(data);
                setLoading(false)
            })
    }, [])

     const handleDelete = (_id) => {
            // console.log(_id)
    
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
                            // console.log(data);
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
                                // console.log(remainingEquipments);
                            }
    
                        })
    
                }
            });
    
    
    
        }



    return (
        <div className='max-w-7xl w-11/12 mx-auto my-10'>
            {/* <h2 className='text-3xl text-center font-bold mb-2'>My Equipment List</h2>
            <p className='w-full md:w-4/5 mx-auto text-center'>View and manage all available sports equipment in our collection. Find the perfect gear to elevate your performance.</p> */}

            <div className='flex justify-center items-center'>
                {
                    loading && <span className="loading loading-ring loading-lg"></span>

                }
            </div>

            <Fade direction='left'>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
           {
                equipments.map(equipment => <EquipmentCard key={equipment._id} equipment={equipment}
                    equipments={equipments} setEquipments={setEquipments}
                ></EquipmentCard>)
            }
           </div> */}

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className='border text-base'>
                                <th>Sl</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Available quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                equipments?.map(equipment => <tr key={equipment._id} className='border font-medium'>
                                    <th>{equipments.indexOf(equipment) + 1}</th>
                                    <td><img className='w-12 h-12 object-cover rounded-lg' src={equipment?.image} alt="equipment" /></td>
                                    <td>{equipment?.name}</td>
                                    <td>{equipment?.category}</td>
                                    <td >  <p className='flex items-center'><TbCurrencyTaka className='text-lg'></TbCurrencyTaka> {equipment.price}</p> </td>
                                    <td>{equipment?.available}</td>
                                    <td>
                                        <div className='grid grid-cols-2 gap-6'>
                                                       <Link to={`/update/${equipment._id}`} className=" btn min-h-0 h-auto  bg-accent"><FaEdit></FaEdit></Link>
                                                       <button onClick={() => handleDelete(equipment._id)} className="btn bg-accent"><FaTrashAlt></FaTrashAlt></button>
                                                   </div>
                                    </td>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
            </Fade>
        </div>
    );
};

export default MyEquipmentList;