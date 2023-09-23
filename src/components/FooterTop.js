import React from 'react'
//import { Router } from 'react-router-dom'
import {Link} from 'react-router-dom';

 const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
        <div className="w-full border-t-[1px] border-b-[1px] py-8">
            <div className='w-64 mx-auto text-center'>
                <p className="text-sm">See personilised recommendation</p>
            <Link to="/Signin">
            <button className="w-full bg-yellow-600 rounded-md py-1 font-semibold cursor-pointer hover:bs-yellow-600 active:bg-yellow-400 ">SignIn</button>
            </Link>
           <p className="text-xs mt-1">
            New Customer?<span className='text-blue-600 ml-1 cursor-pointer'>Start here</span>
           </p>
            </div>
        </div>
    </div>
  )
}
export default FooterTop;