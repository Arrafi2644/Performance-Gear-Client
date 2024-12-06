import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import SportsCategories from '../components/SportsCategories';
import { Outlet } from 'react-router-dom';
import ServiceHighlights from '../components/ServiceHighlights';
import Articles from '../components/Articles';
import BrandPartner from '../components/BrandPartner';

const Home = () => {
    return (
        <div className='max-w-7xl w-11/12 mx-auto'>
          <Banner></Banner>
          <Products></Products>
          <Outlet></Outlet>
          {/* <SportsCategories></SportsCategories> */}
          <ServiceHighlights></ServiceHighlights>
          <Articles></Articles>
          <BrandPartner></BrandPartner>
        </div>
    );
};

export default Home;