import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopifySlice";
//import {Cart}from"../pages/Cart";
const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productData = data.data;
  
  
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4">
      {productData.map((item) => (
        <div
          key={item.id}
          className=" border-white border-2 rounded-xl bg-white shadow-xl hover:shadow-blue-500 py-6 z-30 flex flex-col relative"
          >
          <div className="w-full h-auto flex items-center justify-center">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            />
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">{item.category}</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">{item.title.substring(0, 20)}</h2>
            <p>${item.price}</p>
          </div>
          <div>
            <p className="text-sm">{item.description.substring(0, 100)}....</p>

          <div className=" flex justify-center items-center text-black w-12 h-12">
            <button onClick={()=>dispatch(addToCart({
              id:item.id,
              title:item.title,
              description:item.description,
              price:item.price,
              category:item.category,
              image:item.image,
              quantity:1,

            }))}>
            <BsFillCartPlusFill className="bg-yellow-600"size={36}/>
            </button>
           
            </div>
          </div>
        </div>
      ))}
   </div>
  );
}
export default Products;
