import React from 'react'
//import Navbar from '../components/Navbar';
import Banner from '../Home/Banner';
import Products from '../Home/Products';
import DefaultLayout from './DefaultLayout';

const Home1 = () => {
  return (
    <DefaultLayout>
    <div>
     {/* <Navbar/>*/}
     <Banner/>
     <div className='w-full -mt-14 xl:-mt-36 py-10'>
     <Products/>
     </div>
     </div>
     </DefaultLayout>
    
  )
}

export default Home1
