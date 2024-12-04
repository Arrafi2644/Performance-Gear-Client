import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Banner = () => {
    
    return (
        <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
    >
      <SwiperSlide>
        <div className='bg-slide1 bg-cover bg-center h-[500px] flex items-center justify-center text-center pl-10 md:pl-16 lg:pl-20'>
           <div className='space-y-2'>
            <h2 className=' text-3xl md:text-4xl text-primary font-bold'>Top Picks for Champions</h2>
            <h4 className='text-base font-medium text-third '>Explore our best-selling sports accessories designed for peak performance.</h4>
            <button className="btn font-semibold bg-accent">Shop Now</button>
           </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-slide3 bg-cover bg-center h-[500px] flex items-center justify-center text-center pl-10 md:pl-16 lg:pl-20'>
           <div className='space-y-2'>
            <h2 className=' text-3xl md:text-4xl text-primary font-bold'>Stay Warm, Perform Better</h2>
            <h4 className='text-base font-medium text-third '>Discover premium winter sports gear for skiing, snowboarding, and more.</h4>
            <button className="btn font-semibold bg-accent">Explore Collection</button>
           </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-slide4 bg-cover bg-center h-[500px] flex items-center justify-center text-center pl-10 md:pl-16 lg:pl-20'>
           <div className='space-y-2'>
            <h2 className=' text-3xl md:text-4xl text-primary font-bold'>Top Picks for Champions</h2>
            <h4 className='text-base font-medium text-third '>Explore our best-selling sports accessories designed for peak performance.</h4>
            <button className="btn font-semibold bg-accent">Shop Now</button>
           </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-slide2 bg-cover bg-center h-[500px] flex items-center justify-center text-center pl-10 md:pl-16 lg:pl-20'>
           <div className='space-y-2'>
            <h2 className=' text-3xl md:text-4xl text-primary font-bold'>Stay Warm, Perform Better</h2>
            <h4 className='text-base font-medium text-third '>Discover premium winter sports gear for skiing, snowboarding, and more.</h4>
            <button className="btn font-semibold bg-accent">Explore Collection</button>
           </div>
        </div>
        </SwiperSlide>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
    </Swiper>
    );
};

export default Banner;