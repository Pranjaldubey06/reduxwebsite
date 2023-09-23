import React,{useState} from 'react'
import Slider from "react-slick";
import BannerImgThree from"../assets/bannerImgThree.jpg";
import BannerImgFour from"../assets/bannerImgFour.jpg";
import BannerImgFive from"../assets/bannerImgFive.jpg";



const Banner = () => {
  const[dotActive,setDocActive]=useState(0);
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        beforeChange:(prev,next)=>{
          setDocActive(next);
        },
      
        appendDots: (dots) => (
          <div
            style={{
              position:"absolute",
              top:"70%",
              left:"45%",
              transform:"tanslate(-50%,-50%)",
              width:"210px",
          }}
          >
            <ul style={{width:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between" }}>{" "}{dots}{" "} 
            </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
              i===dotActive
              ?{
              width: "30px",
              height:"30px",
              borderRadius:"50%",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              color:"white",
              background:"#131921",
              padding:"8px 0",
              cursor:"pointer",
              border:"1px solid #f3a847"
              }:{
                width: "30px",
              height:"30px",
              borderRadius:"50%",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              color:"white",
              background:"#131921",
              padding:"8px 0",
              cursor:"pointer",
              border:"1px solid #f3a847"

              }
            }
          >
            {i + 1}
          </div>
        ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      };
  return (
    <div className='w-full'>
      <div className='w-full h-full relative'>
        <Slider {...settings}>
         <div>
          <img src={BannerImgThree} alt="bannerImgThree"/>
          </div>
        <div>
          <img src={BannerImgFour} alt="bannerImgFour"/>
          </div>
          <div>
          <img  src={BannerImgFive} alt="bannerImgFive"/>
          </div>
         {/* <div>
          <img className='align-items:center' src={bannerImageFive} alt="bannerImgOne"/>
  </div>*/}
          
        </Slider>
</div>
</div>
  )
}

export default Banner
