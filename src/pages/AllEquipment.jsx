import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const loadedEquipments = useLoaderData()
    // const {_id, name, category, price, available} = loadedEquipment;

        return (
        <div className='max-w-7xl w-11/12 mx-auto my-10'>
            <h2 className='text-3xl text-center font-bold'>Explore All Equipment {loadedEquipments.length}</h2>
            <p className='w-full md:w-4/5 mx-auto text-center'>Browse our complete collection of premium sports equipment, designed to enhance performance and meet the needs of every athlete</p>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Available quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        loadedEquipments?.map(equipment => <tr className='border'>
            <th>{loadedEquipments.indexOf(equipment) + 1}</th>
            <td>{equipment?.name}</td>
            <td>{equipment?.category}</td>
            <td>{equipment?.price} Taka</td>
            <td>{equipment?.available}</td>
            <td>
                <Link className='btn bg-accent text-xl'><FaEye></FaEye></Link>
            </td>
          </tr>
           )
      }
   
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllEquipment;