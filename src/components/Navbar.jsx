import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { BiLogoShopify, BiSolidDownArrow } from 'react-icons/bi'
import { BsFillCartFill, BsSearch } from 'react-icons/bs'
import HeaderBottom from './HeaderBottom'
import { Link } from 'react-router-dom'
//import DefaultLayout from '../pages/DefaultLayout';
import {FiLogOut} from "react-icons/fi"
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from '../redux/shopifySlice';

  const Navbar =()=>{
  const auth = getAuth();
  const dispatch=useDispatch()
 //const[showAll,setShowAll]=useState(false)
  const products = useSelector((state)=>state.shopify.products);
 const userInfo=useSelector((state)=> state.shopify.userInfo)
 
 const handleLogout=()=>{
  signOut(auth).then(() => {
    console.log("Sign Out Successfully")
 dispatch(userSignOut())

    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
    // An error happened.
  });
 }
 
  // console.log(products)
  
  return (
   
    <div className='w-full sticky top-0 z-50'>
     <header className=" bg-yellow-600 h-[70px]">
      <div className="max-w-container mx-auto text-black  flex items-center justify-between h-full  font-bold ">
      <Link to="/">
        <BiLogoShopify className="text-2xl" size={120} />
        </Link>
        <div className="font-weight=50px mr-5 p-3 lg-mr-7"></div>
        <div className="h-8 rounded-md flex flex-grow relative">
          <span>
            All-Items<span></span>
            <BiSolidDownArrow />
          </span>
          <input
            className="w-20 h-full text-base text-black flex-grow outlined-rounded border-none px-2"
            type="text "
          />
          <span className="w-12 h-full flex items-center justify-center bg-gray-600 text-black cursor-pointer rounded-tr-md rounded-br-md">
            <BsSearch />
          </span>
        </div>
         <Link to="/SignIn" className="text-xm text- font-semibold p-5">
            <div className="flex flex-col items-start justify-center headerHover">
              {
                userInfo ?( <p className='text-m text-lightText font-bold'>{userInfo.userName}</p>):(
                  <p className='text-1 text-xl font-semibold'>Hello,signIn</p>
                )
              }
          </div>   
        </Link> 
          <Link to="/Profile">userProfile</Link>
          <div className="flex flex-col items-start justify-center p-6 headerHover">
          <p className="text-xs text-lightText font-medium"> Returns </p>
          <p className="text-sm text-whiteText font-semibold">&Orders</p>
        </div>
        
        <Link to ="/Cart" >
        <div className="cursor-pointer flex relative max-w-[50px]"
        >
          <BsFillCartFill className="text-3xl mr-4 " size={32} />
          <span className="bg-red-600 absolute -right-2-bottom-2 text-[12px] w-[18px] h-[20px] text-white rounded-full flex justify-center items-center">
           {products.length > 0 ?products.length:0}
          </span>
          </div>
          </Link>
        {
          userInfo &&(
            <div onClick={handleLogout} className="flex flex-col justify-center items-center headerHover relative">
              <FiLogOut/>
             
              <p className='inline-flex text-xs font-semibold text-black'>
                Logout
              </p>
            </div>
          )
        }
         
      </div>
     </header>
       <HeaderBottom/>
   </div>
)
}

export default Navbar;
