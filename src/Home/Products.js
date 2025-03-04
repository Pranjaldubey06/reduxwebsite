// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { BsFillCartPlusFill } from "react-icons/bs";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/shopifySlice";

// const Products = () => {
//   const dispatch = useDispatch();
//   const data = useLoaderData();
//   const productData = data.data;
//   const [addedToCart, setAddedToCart] = useState({});

//   const handleAddToCart = (item) => {
//     dispatch(addToCart({ ...item, quantity: 1 }));
//     setAddedToCart((prev) => ({ ...prev, [item.id]: true }));

//     setTimeout(() => {
//       setAddedToCart((prev) => ({ ...prev, [item.id]: false }));
//     }, 1500);
//   };

//   return (
//     <div className="max-w-screen-2xl mt-20 mx-auto grid grid-cols-1  md:grid-cols-2  xl:grid-cols-4 gap-6 xl:gap-10 px-4">
//       {productData.map((item) => (
//         <div
//           key={item.id}
//           className="border rounded-xl bg-white shadow-lg hover:shadow-xl transition-all py-6 flex flex-col relative"
//         >
//           <div className="w-full flex items-center justify-center">
//             <img
//               className="w-52 h-64 object-contain"
//               src={item.image}
//               alt="ProductImg"
//             />
//             <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
//               {item.category}
//             </span>
//           </div>
//           <div className="px-4 mt-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               {item.title.substring(0, 20)}
//             </h2>
//             <p className="text-lg font-bold text-yellow-600">${item.price}</p>
//           </div>
//           <p className="text-sm text-gray-600 px-4 mt-2">
//             {item.description.substring(0, 100)}...
//           </p>

//           {/* Add to Cart Button */}
//           <div className="flex justify-center mt-4 px-4">
//             <button
//               onClick={() => handleAddToCart(item)}
//               className="flex items-center gap-2 bg-yellow-400 text-black  font-semibold py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg"
//             >
//               {addedToCart[item.id] ? (
//                 <span className="animate-pulse">Added!</span>
//               ) : (
//                 <>
//                   <BsFillCartPlusFill size={20} />
//                   Add to Cart
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;

import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopifySlice";

const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productData = data.data;
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    setAddedToCart((prev) => ({ ...prev, [item.id]: true }));

    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <div className="max-w-screen-2xl mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4">
      {productData.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl bg-white shadow-lg hover:shadow-xl transition-all py-6 flex flex-col relative"
        >
          {/* Wrap Image and Title with Link */}
          <Link to={`/product/${item.id}`} className="w-full flex items-center justify-center">
            <img
              className="w-52 h-64 object-contain cursor-pointer"
              src={item.image}
              alt={item.title}
            />
          </Link>
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>

          <div className="px-4 mt-4">
            {/* Wrap Title with Link */}
            <Link to={`/product/${item.id}`} className="hover:underline">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title.substring(0, 20)}
              </h2>
            </Link>
            <p className="text-lg font-bold text-yellow-600">${item.price}</p>
          </div>
          <p className="text-sm text-gray-600 px-4 mt-2">
            {item.description.substring(0, 100)}...
          </p>

          {/* Add to Cart Button */}
          <div className="flex justify-center mt-4 px-4">
            <button
              onClick={() => handleAddToCart(item)}
              className="flex items-center gap-2 bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              {addedToCart[item.id] ? (
                <span className="animate-pulse">Added!</span>
              ) : (
                <>
                  <BsFillCartPlusFill size={20} />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

