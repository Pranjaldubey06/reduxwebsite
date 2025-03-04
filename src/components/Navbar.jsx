// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { BiLogoShopify, BiSolidDownArrow } from 'react-icons/bi';
// import { BsFillCartFill, BsSearch } from 'react-icons/bs';
// import { FiLogOut } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import { getAuth, signOut } from 'firebase/auth';
// import { userSignOut } from '../redux/shopifySlice';
// import HeaderBottom from './HeaderBottom';

// const Navbar = () => {
//   const auth = getAuth();
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.shopify.products);
//   const userInfo = useSelector((state) => state.shopify.userInfo);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         console.log('Sign Out Successfully');
//         dispatch(userSignOut());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="w-full sticky top-0 z-50 bg-yellow-600 shadow-md">
//       <header className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
//         {/* Logo */}
//         <Link to="/" className="flex items-center text-black">
//           <BiLogoShopify className="text-4xl" size={48} />
//           <span className="text-xl font-bold ml-2 hidden md:block">Shopify</span>
//         </Link>

//         {/* Search Bar */}
//         <div className="flex items-center bg-white rounded-lg shadow-md px-2 w-full max-w-md relative">
//           <input
//             type="text"
//             placeholder="Search for products..."
//             className="w-full py-2 px-3 text-black outline-none"
//           />
//           <button className="bg-gray-600 p-2 rounded-md text-white">
//             <BsSearch />
//           </button>
//         </div>

//         {/* Navigation Links */}
//         {/* <div className="hidden md:flex items-center gap-6 text-black font-semibold">
//           <Link to="/profile" className="hover:text-white">Profile</Link>
//           <Link to="/orders" className="hover:text-white">Orders</Link>
//         </div> */}

//         {/* Cart & User */}            
//         <div className="flex items-center gap-6">
//           <Link to="/cart" className="relative">
//             <BsFillCartFill className="text-3xl text-black" />
//             {products.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {products.length}
//               </span>
//             )}
//           </Link>

//           {userInfo ? (
//             <div className="flex items-center gap-4">
//               <p className="text-black font-medium">{userInfo.userName}</p>
//               <button onClick={handleLogout} className="flex items-center text-black hover:text-white">
//                 <FiLogOut className="text-xl" />
//                 <span className="ml-1 text-sm">Logout</span>
//               </button>
//             </div>
//           ) : (
//             <Link to="/signin" className="text-black font-medium hover:text-white">Sign In</Link>
//           )}
//         </div>
//       </header>
//       <HeaderBottom />
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { BiLogoShopify, BiSolidDownArrow } from 'react-icons/bi';
// import { BsFillCartFill, BsSearch } from 'react-icons/bs';
// import { FiLogOut, FiMenu } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import { getAuth, signOut } from 'firebase/auth';
// import { userSignOut } from '../redux/shopifySlice';
// import HeaderBottom from './HeaderBottom';

// const Navbar = () => {
//   const auth = getAuth();
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.shopify.products);
//   const userInfo = useSelector((state) => state.shopify.userInfo);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         console.log('Sign Out Successfully');
//         dispatch(userSignOut());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="w-full sticky top-0 z-50 bg-yellow-600 shadow-md">
//       {/* Top Navbar */}
//       <header className="max-w-7xl mx-auto flex items-center justify-between md:px-8">
//       <Link to="/" className="flex items-center text-black">
//            <img src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png?f=webp" className='h-20  w-52' alt=''/>
//           </Link>
//         <div className="flex items-center gap-4">
//           <button
//             className="md:hidden text-black text-2xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <FiMenu />
//           </button>
         
//         </div>

//         {/* Search Bar */}
//         <div className="hidden md:flex items-center bg-white rounded-lg shadow-md px-2 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search for products..."
//             className="w-full py-2 px-3 text-black outline-none"
//           />
//           <button className="bg-gray-600 p-2 rounded-md text-white">
//             <BsSearch />
//           </button>
//         </div>

//         {/* Cart & User */}
//         <div className="flex items-center gap-6">
//           <Link to="/cart" className="relative">
//             <BsFillCartFill className="text-3xl text-black" />
//             {products.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {products.length}
//               </span>
//             )}
//           </Link>

//           {userInfo ? (
//             <div className="flex items-center gap-4">
//               <p className="text-black font-medium">{userInfo.userName}</p>
//               <button onClick={handleLogout} className="flex items-center text-black hover:text-white">
//                 <FiLogOut className="text-xl" />
//                 <span className="ml-1 text-sm">Logout</span>
//               </button>
//             </div>
//           ) : (
//             <Link to="/signin" className="text-black font-medium hover:text-white">Sign In</Link>
//           )}
//         </div>
//       </header>

//       {/* Category Menu (HeaderBottom) */}
//       {/* <div className="bg-yellow-700 text-white text-sm py-2 px-4 flex justify-between items-center">
//         <div className="flex gap-4">
//           <button className="flex items-center gap-1">
//             <FiMenu className="text-lg" />
//             <span className="font-semibold">All</span>
//           </button>
//           <Link to="/deals" className="hover:underline">Today's Deals</Link>
//           <Link to="/customer-service" className="hover:underline">Customer Service</Link>
//           <Link to="/gift-cards" className="hover:underline">Gift Cards</Link>
//         </div>
//       </div> */}

//       {/* Responsive Mobile Menu */}
//       {/* {menuOpen && (
//         <div className="md:hidden bg-yellow-700 text-white text-sm py-3 px-4 absolute top-16 left-0 w-full shadow-lg">
//           <div className="flex flex-col gap-2">
//             <Link to="/deals" className="hover:underline">Today's Deals</Link>
//             <Link to="/customer-service" className="hover:underline">Customer Service</Link>
//             <Link to="/gift-cards" className="hover:underline">Gift Cards</Link>
//             <Link to="/signin" className="hover:underline">{userInfo ? "Sign Out" : "Sign In"}</Link>
//           </div>
//         </div>
//       )} */}

//       {/* HeaderBottom (Optional) */}
//       <HeaderBottom />
//     </div>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import { BsSearch, BsCart2 } from "react-icons/bs";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const cartItems = useSelector((state) => state.shopify.products);

//   return (
//     <nav className="w-full bg-gray-900 text-white px-6 py-2 flex items-center justify-between">
//       {/* Logo & Location */}
//       <div className="flex items-center gap-4">
//         <Link to="/" className="text-2xl font-bold text-orange-500">
//           amazon<span className="text-white">.in</span>
//         </Link>
//         <div className="hidden md:flex items-center text-sm">
//           <FaLocationDot className="text-lg" />
//           <div className="ml-1">
//             <p className="text-gray-400 text-xs">Delivering to Bengaluru 562130</p>
//             <p className="font-semibold">Update location</p>
//           </div>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="flex flex-grow max-w-2xl bg-white rounded-md overflow-hidden">
//         <select className="bg-gray-200 px-3 py-2 text-black">
//           <option>All</option>
//           <option>Home & Kitchen</option>
//           <option>Electronics</option>
//           <option>Fashion</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Search Amazon.in"
//           className="w-full px-3 py-2 text-black outline-none"
//         />
//         <button className="bg-yellow-500 px-4 flex items-center justify-center">
//           <BsSearch className="text-black text-lg" />
//         </button>
//       </div>

//       {/* Account & Orders */}
//       <div className="hidden md:flex items-center gap-6 text-sm">
//         <div className="flex flex-col cursor-pointer">
//           <p className="text-gray-400">Hello, sign in</p>
//           <p className="font-semibold flex items-center">
//             Account & Lists <IoMdArrowDropdown />
//           </p>
//         </div>
//         <div className="flex flex-col cursor-pointer">
//           <p className="text-gray-400">Returns</p>
//           <p className="font-semibold">& Orders</p>
//         </div>
//       </div>

//       {/* Cart */}
//       <Link to="/cart" className="relative flex items-center text-white">
//         <BsCart2 className="text-3xl" />
//         {cartItems.length > 0 && (
//           <span className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//             {cartItems.length}
//           </span>
//         )}
//         <p className="ml-2 hidden md:block font-semibold">Cart</p>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { FaLocationDot, FaBars } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.shopify.products);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
      {/* Left Section: Logo & Location */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
        <Link to="/" className="text-2xl font-bold text-orange-500">
          amazon<span className="text-white">.in</span>
        </Link>
        <div className="hidden lg:flex items-center text-sm">
          <FaLocationDot className="text-lg" />
          <div className="ml-1">
            <p className="text-gray-400 text-xs">Delivering to Bengaluru 562130</p>
            <p className="font-semibold">Update location</p>
          </div>
        </div>
      </div>

      {/* Search Bar (Hidden on Small Screens) */}
      <div className="hidden md:flex flex-grow max-w-2xl bg-white rounded-md overflow-hidden">
        <select className="bg-gray-200 px-3 py-2 text-black">
          <option>All</option>
          <option>Home & Kitchen</option>
          <option>Electronics</option>
          <option>Fashion</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="w-full px-3 py-2 text-black outline-none"
        />
        <button className="bg-yellow-500 px-4 flex items-center justify-center">
          <BsSearch className="text-black text-lg" />
        </button>
      </div>

      {/* Right Section: Account, Orders, Cart */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        <div className="flex flex-col cursor-pointer">
          <p className="text-gray-400">Hello, sign in</p>
          <p className="font-semibold flex items-center">
            Account & Lists <IoMdArrowDropdown />
          </p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <p className="text-gray-400">Returns</p>
          <p className="font-semibold">& Orders</p>
        </div>
      </div>

      {/* Cart & Mobile Search Button */}
      <div className="flex items-center gap-4">
        {/* Search Button (Mobile) */}
        <button className="md:hidden text-xl" onClick={() => setSearchOpen(!searchOpen)}>
          <BsSearch />
        </button>

        {/* Cart */}
        <Link to="/cart" className="relative flex items-center text-white">
          <BsCart2 className="text-3xl" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
          <p className="ml-2 hidden md:block font-semibold">Cart</p>
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-800 p-4 flex flex-col gap-3 md:hidden">
          <Link to="/" className="block text-white">Home</Link>
          <Link to="/account" className="block text-white">Account & Lists</Link>
          <Link to="/orders" className="block text-white">Returns & Orders</Link>
        </div>
      )}

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-900 p-3 md:hidden">
          <div className="flex bg-white rounded-md overflow-hidden">
            <select className="bg-gray-200 px-3 py-2 text-black">
              <option>All</option>
              <option>Home & Kitchen</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="w-full px-3 py-2 text-black outline-none"
            />
            <button className="bg-yellow-500 px-4 flex items-center justify-center">
              <BsSearch className="text-black text-lg" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

