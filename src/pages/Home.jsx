import React, { useContext } from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import SportsCategories from '../components/SportsCategories';
import { Outlet } from 'react-router-dom';
import ServiceHighlights from '../components/ServiceHighlights';
import Articles from '../components/Articles';
import BrandPartner from '../components/BrandPartner';
import { Fade, Zoom } from 'react-awesome-reveal';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
  const {loading} = useContext(AuthContext)
  // console.log(loading);
  return (
    <div className='max-w-7xl w-11/12 mx-auto'>
    
    <div className='flex justify-center items-center'>
            {
               loading && <span className="loading loading-ring loading-lg"></span>
                
            }
          </div>

      <Zoom cascade duration={1500} >
      <Banner></Banner>
      </Zoom>
      <Fade duration={1500} direction='right'>
        <Products></Products>
      </Fade>
      <Fade cascade direction='left'>
      <Outlet></Outlet>
      </Fade>
      {/* <SportsCategories></SportsCategories> */}
      <Fade direction='right'>
      <ServiceHighlights></ServiceHighlights>
      </Fade>
     <Fade direction='left'>
     <Articles></Articles>
     </Fade>
     <Zoom>
     <BrandPartner></BrandPartner>
     </Zoom>

    </div>
  );
};

export default Home;