import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';

const Home = () => {
    return (
        <div className='max-w-7xl w-11/12 mx-auto'>
          <Banner></Banner>
          <Products></Products>
        </div>
    );
};

export default Home;