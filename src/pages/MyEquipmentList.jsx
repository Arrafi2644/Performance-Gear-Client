import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../provider/AuthProvider';

const MyEquipmentList = () => {
    // const myEquipments = useLoaderData()
    const [equipments, setEquipments] = useState([]);
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    // console.log(user);
    const email = user?.email;
    // console.log(email);

    useEffect(()=>{
        fetch(`https://performance-gear-server.vercel.app/equipments/user/${email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setEquipments(data);
            setLoading(false)
        })
    }, [])



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
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
           {
                equipments.map(equipment => <EquipmentCard key={equipment._id} equipment={equipment}
                    equipments={equipments} setEquipments={setEquipments}
                ></EquipmentCard>)
            }
           </div>
         </Fade>
        </div>
    );
};

export default MyEquipmentList;