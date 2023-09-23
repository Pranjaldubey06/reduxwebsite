import React,{useState,useRef,useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import{RiAccountCircleLine} from'react-icons/ri'
import {BsFillArrowLeftSquareFill} from'react-icons/bs'
import {motion} from 'framer-motion';

const HeaderBottom = () => {  
    const ref=useRef()
    const [sidebar,setSidebar]=useState(false)
    useEffect(()=>{
document.body.addEventListener("click",(e)=>{
  if(e.target.contains(ref.current)){
    setSidebar(false)
  }
})
    },[])
  return (
    <div className ='w-full px-4 h-[36px] bg-gray-700 text-white flex items-center'>
     <ul className='flex items-center gap-5 text-sm tracking-wide'>
        
     <li onClick={()=>setSidebar(true)} className=' hover:bg-blue-200 cursor-pointer flex items-center gap-2   '><AiOutlineMenu/>All </li>
     <li className='hover:bg-blue-200 cursor-pointer'> Today's Deal</li>
     <li className='hover:bg-blue-200 cursor-pointer'>Customer Service </li>
     <li className='hover:bg-blue-200 cursor-pointer'>Your Favourite </li>
     <li className='hover:bg-blue-200 cursor-pointer'>sell </li>

    </ul>
{
sidebar &&(
        <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
           <div className='w-full h-full relative'>
            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}} className="w-[250px] h-full bg-white border  border-black">
                <div className='w-full bg-gray-700 text-white py-2 px-6 flex items-center gap-4'>
              <RiAccountCircleLine/>
            <h1>Your Shopify</h1>
            </div>
            <div className="">
                <h2 className='text font-bold my-9'>My Account</h2>
                <h2 className='text font-bold my-9'>My wishList</h2>
                <h2 className='text font-bold my-9'>My orders</h2>
               </div>
               <span className ="cursor-pointer absolute top-0 left-[360px]w-10 h-5 text-black flexitems-center justify-center border bg-gray-200 hover:bg-red-500 hover :text-white duration-300"><BsFillArrowLeftSquareFill/></span>                                                                                        
             </motion.div>
             </div>
          </div>
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}
</div>
 )
}     
export default HeaderBottom;                                                                                                                                                                                                                                                                                                                                     















