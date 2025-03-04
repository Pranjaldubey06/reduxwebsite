import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../Home/Banner';
import Products from '../Home/Products';
import DefaultLayout from './DefaultLayout';
import Footer from "../components/Footer"
import FooterTop from "../components/FooterTop"

const Home1 = () => {
  return (
    <DefaultLayout>
    <div className='pb-32 mt'>
      <Navbar/>
     <Banner/>
     </div>
     <div className='w-full  xl:-mt-36 py-10'>
     <Products/>
     <FooterTop/>
     <Footer/>
     </div>
    
     </DefaultLayout>
    
  )
}

export default Home1
