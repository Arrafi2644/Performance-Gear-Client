import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <div className='my-16'>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-bold mb-4 text-center md:text-left'>Marketplace News</h2>
                <Link className='underline text-primary font-medium'>View All Articles</Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className="card card-compact bg-base-100 shadow-xl border rounded-lg">
                    <figure className='p-4'>
                        <img
                        className='w-full h-52 object-cover rounded-lg'
                            src="https://i.ibb.co.com/dbBSxKb/Untitled.jpg"
                            alt="article" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Top 5 Essential Sports Accessories for Every Athlete</h2>
                        <p className='font-medium'>Every athlete needs reliable accessories to enhance their performance and ensure safety. Here are the top 5 must-have sports accessories for all sports enthusiasts.</p>
                         <h3 className='font-bold'>key points</h3>
                         <ol className='font-semibold'>
                            <li>1. Sports Shoes</li>
                            <li>2. Fitness Tracker</li>
                            <li>3. Water Bottle</li>
                            <li>4. Compression Gear</li>
                            <li>5. Protective Equipment</li>
                         </ol>
                         <h3 className='font-bold'>Conclusion:</h3>
                         <p className='font-medium'>Having the right accessories can elevate your game. Explore these essentials at <span className='font-bold'>Performance Gear</span> and perform at your best!</p>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl border rounded-lg">
                    <figure className='p-4'>
                        <img
                        className='w-full h-52 object-cover rounded-lg'
                            src="https://i.ibb.co.com/X3KW8J6/Untitled.jpg"
                            alt="article" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">How to Choose the Right Equipment for Your Sport</h2>
                        <p className='font-medium'>The right gear can make or break your performance. Here’s a guide to selecting the best equipment for your sport.</p>
                         <h3 className='font-bold'>key points</h3>
                         <ol className='font-semibold'>
                            <li>1. Understand Your Needs</li>
                            <li>2. Focus on Quality</li>
                            <li>3. Check Sizing and Fit</li>
                            <li>4. Consider Your Budget</li>
                            <li>5. Seek Expert Advice</li>
                         </ol>
                         <h3 className='font-bold'>Conclusion:</h3>
                         <p className='font-medium'>Make informed choices and invest in the right equipment for long-term benefits. Shop quality gear now at <span className='font-bold'>Performance Gear</span>!</p>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl border rounded-lg">
                    <figure className='p-4'>
                        <img
                        className='w-full h-52 object-cover rounded-lg'
                            src="https://i.ibb.co.com/vXZjdXD/Untitled.jpg"
                            alt="article" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Benefits of Investing in High-Quality Sports Accessories</h2>
                        <p className='font-medium'>Why settle for less when your performance depends on quality? Here are the benefits of investing in premium sports accessories.</p>
                         <h3 className='font-bold'>key points</h3>
                         <ol className='font-semibold'>
                            <li>1. Enhanced Performance</li>
                            <li>2. Injury Prevention</li>
                            <li>3. Long-Term Value</li>
                            <li>4. Boosted Confidence</li>
                            <li>5. Better Aesthetics</li>
                         </ol>
                         <h3 className='font-bold'>Conclusion:</h3>
                         <p className='font-medium'>Upgrade your performance and safety with top-tier accessories. Find the best options today at <span className='font-bold'>Performance Gear</span>!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Articles;