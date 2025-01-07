import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import CartCard from '../components/CartCard';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const MyCarts = () => {
    const [carts, setCarts] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(user);

    useEffect(() => {

        fetch(`https://performance-gear-server.vercel.app/carts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCarts(data)
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

                fetch(`https://performance-gear-server.vercel.app/carts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This equipment has been deleted from your cart list.",
                                icon: "success"
                            });
                            // const remainingEquipments = equipments.filter(equipment => equipment._id !== _id)
                            // setEquipments(remainingEquipments)
                            const remainingEquipments = carts.filter(equipment => equipment._id !== _id)
                            setCarts(remainingEquipments)
                            // console.log(remainingEquipments);
                        }

                    })

            }
        });



    }

    // console.log(carts);
    return (
       <Fade direction='right'>
         <div className='max-w-7xl w-11/12 mx-auto my-10'>
            <div><h2 className='font-bold text-3xl'>Total Product: {carts.length}</h2></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
                {
                    carts.map(product => <CartCard
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}

                    ></CartCard>)
                }
            </div>
        </div>
       </Fade>
    );
};

export default MyCarts;