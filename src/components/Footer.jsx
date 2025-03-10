import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-third py-16 text-secondary'>
            <section className='max-w-7xl w-11/12 mx-auto '>
            <footer className="footer grid grid-cols-1 md:grid-cols-4 gap-8 ">
                <aside className='col-span-1 md:col-span-2'>
                    <Link to='/' className='text-3xl font-bold'>Performance Gear</Link>
                    <p className='text-sm font-semibold'>
                        Your go-to store for premium sports accessories. Gear up with high-quality equipment to enhance your performance and achieve your fitness goals.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title font-bold text-lg ">Contact Info</h6>
                    <a className="link link-hover flex items-center gap-2 font-semibold text-sm"><span><FaPhone></FaPhone></span> 01751166818</a>
                    <a className="link link-hover flex items-center gap-2 font-semibold text-sm"><span><MdMail></MdMail></span> useremail@gmail.com</a>
                    <a className="link link-hover flex items-center gap-2 font-semibold text-sm"><span><FaLocationDot></FaLocationDot></span> 1230 Sports Avenue, Dhaka, Bangladesh</a>

                </nav>
                <nav className=''>
                    <h6 className="footer-title font-bold text-lg ">Follow Us</h6>
                    <div className='flex gap-3 items-center font-bold text-lg'>
                        <Link to='https://www.facebook.com/arrafi.rafi.1238' className="link link-hover"><FaFacebook></FaFacebook></Link>
                        <Link to='https://www.linkedin.com/in/md-ar-rafi-fayez-joy-06a9b5289/?originalSubdomain=bd' className="link link-hover"><FaInstagram></FaInstagram></Link>
                        <Link to='https://www.instagram.com/arrafi9214/?hl=en' className="link link-hover"><FaLinkedin></FaLinkedin></Link>
                        
                    </div>
                </nav>
            </footer>
            <div className="divider"></div>
            <p className='text-center font-medium'>&copy; 2025 Performance Gear | All rights reserved</p>
        </section>
        </div>
    );
};

export default Footer;