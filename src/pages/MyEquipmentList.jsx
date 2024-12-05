import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';

const MyEquipmentList = () => {
    const myEquipments = useLoaderData()
    const [equipments, setEquipments] = useState(myEquipments);
    // console.log(myEquipments);
    return (
        <div className='max-w-7xl w-11/12 mx-auto my-10'>
            <h2 className='text-3xl text-center font-bold mb-2'>My Equipment List</h2>
            <p className='w-full md:w-4/5 mx-auto text-center'>View and manage all available sports equipment in our collection. Find the perfect gear to elevate your performance.</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
           {
                equipments.map(equipment => <EquipmentCard key={equipment._id} equipment={equipment}
                    equipments={equipments} setEquipments={setEquipments}
                ></EquipmentCard>)
            }
           </div>
        </div>
    );
};

export default MyEquipmentList;