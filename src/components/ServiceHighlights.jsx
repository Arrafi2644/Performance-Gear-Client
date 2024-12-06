import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";



const ServiceHighlights = () => {
    return (
        <div className='grid grid-cols-2 gap-6 md:gap-0 md:grid-cols-4 my-10 py-6 pl-2 shadow-lg'>
            <div className='flex gap-2 border-r mr-1'>
                <div className='text-5xl font-bold text-primary'>
                    <TbTruckDelivery></TbTruckDelivery>
                </div>
                <div>
                    <h2 className='text-xl font-bold '>Free Delivery</h2>
                    <span className='text-sm'>For any product</span>
                </div>
            </div>
            <div className='flex gap-2 border-r mr-1'>
                <div className='text-5xl font-bold text-primary'>
                 <FaPeopleRoof></FaPeopleRoof>
                </div>
                <div>
                    <h2 className='text-xl font-bold '>99% Customer </h2>
                    <span className='text-sm'>Feedbacks</span>
                </div>
            </div> 
            <div className='flex gap-2 border-r mr-1'>
                <div className='text-5xl font-bold text-primary'>
                 <BsArrowReturnLeft></BsArrowReturnLeft>
                </div>
                <div>
                    <h2 className='text-xl font-bold '>8 Days</h2>
                    <span className='text-sm'>Returns</span>
                </div>
            </div>
            <div className='flex gap-2 '>
                <div className='text-5xl font-bold text-primary'>
                 <BiSupport></BiSupport>
                </div>
                <div>
                    <h2 className='text-xl font-bold '>24/7</h2>
                    <span className='text-sm'>Online support</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceHighlights;