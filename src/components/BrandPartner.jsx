import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const BrandPartner = () => {
    return (
        <div className='my-16'>
            <h2 className='text-3xl font-bold mb-4'>Our Brand Partners</h2>
            <div>
                {
                    <Swiper
                    modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        // slidesPerView={5}
                        breakpoints={{
                            0: {
                                slidesPerView: 1, // Show 1 slide for mobile devices
                            },
                            640: {
                                slidesPerView: 3, // Show 2 slides for small screens
                            },
                            1024: {
                                slidesPerView: 5, // Show 5 slides for larger screens
                            },
                        }}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className='shadow-lg bg-white'
                    >
                        <SwiperSlide className='flex justify-center items-center grayscale-0'>
                            <img className='w-20 mt-3 mx-auto grayscale' src="https://i.ibb.co.com/2SThpjV/image.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <img className='w-[112px] mx-auto grayscale' src="https://i.ibb.co.com/VBz422r/image.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <img className='w-16 mt-[22px] mx-auto grayscale' src="https://i.ibb.co.com/PxGSHbq/image.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <img className='w-[110px] mx-auto grayscale' src="https://i.ibb.co.com/k9xTdG9/image.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <img className='w-20 mt-[18px] mx-auto grayscale' src="https://i.ibb.co.com/xSLWksQ/image.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <img className='w-24 mt-2 mx-auto grayscale' src="https://i.ibb.co.com/848R8rx/image.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center'>
                            <img className='w-[100px] mt-[30px] mx-auto grayscale' src="https://i.ibb.co.com/2SPcnMc/image.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center grayscale'>
                            <img className='w-[100px] mx-auto' src="https://i.ibb.co.com/XJc9NxF/image.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                }
            </div>
        </div>
    );
};

export default BrandPartner;