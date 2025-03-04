import React, { useState } from 'react';
import Slider from "react-slick";
import BannerImgThree from "../assets/bannerImgThree.jpg";
import BannerImgFour from "../assets/bannerImgFour.jpg";
import BannerImgFive from "../assets/bannerImgFive.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  
  const CustomPrevArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-80 transition"
    >
      <FaChevronLeft size={20} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-80 transition"
    >
      <FaChevronRight size={20} />
    </button>
  );

  const settings = {
    
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (prev, next) => setDotActive(next),
   
  };

  return (
    <div className="w-full h-[500px] relative ">
      <Slider {...settings}>
        {[BannerImgThree, BannerImgFour, BannerImgFive].map((img, index) => (
          <div key={index} className="relative w-full h-[600px] ">
            <img src={img} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Store</h2>
              <p className="text-lg md:text-xl mb-6">Discover amazing deals and new arrivals every day.</p>
              <Link to="/" className="flex items-center text-black">
              <button className="bg-yellow-500 text-black px-6 py-2 text-lg font-semibold rounded-full hover:bg-yellow-600 transition">
                Shop Now
              </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
