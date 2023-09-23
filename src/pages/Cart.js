import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import { deleteItem } from "../redux/shopifySlice";
import { useDispatch } from "react-redux";
import { resetCart } from  "../redux/shopifySlice";
import { incrementQuantity } from "../redux/shopifySlice";
import { decrementQuantity } from "../redux/shopifySlice";
import DefaultLayout from "./DefaultLayout";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shopify.products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let Total = 0;
    products.map(
      (item) => {
        Total += item.price * item.quantity;
        return setTotalPrice(Total.toFixed(2));
      }
    );
  },[products]);
  return( 
    <DefaultLayout>
      <div className="w-full bg-gray-100 p-4">
      { products.length > 0 ? 
    <div className="container mx-auto h-96 grid grid-cols-5 gap-8">
        <div className="w-full h-full bg-white px-4 col-span-4">
          <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
            <h2 className="text-3xl font-medium">Shopping Cart</h2>
            <h4 className="text-xl font-normal">Subtitle</h4>
          </div>
          <div>
            {products.map((item) => (
              <div className="w-full border-b-[1px] border-b-gray-300 p-4 flex gap-6">
                <div className="w-1/5">
                  <img
                    className="w-full h-44 object-contain"
                    src={item.image}
                    alt="ProductImg"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="pr-10 text-sm">
                    {item.description.substring(0, 106)}...
                  </p>
                  <br></br>
                  <p className="text-base">
                    Price:
                    <span className="font-semibold">${item.price}</span>
                  </p>
                  <button
                    onClick={() => dispatch(deleteItem(item.id))}
                    className=" bg-red-500 cursor-point px-1 rounded-lg text-white mt-2 hover:bg-gray-400 duration-300"
                  >
                    Delete item
                  </button>
                </div>
                <p>Qty:</p>
                <p onClick={()=>dispatch(decrementQuantity(item.id))} className="h-7 cursor-pointer bg-gray-200 px-1 py-1 rounded-md hover:bg-gray-400 duration-300">
                  -
                </p>
                <p>{item.quantity}</p>
                <p onClick={()=>dispatch(incrementQuantity(item.id))} className="h-7 cursor-pointer bg-gray-200 px-1 py-1 rounded-md hover:bg-gray-400 duration-300">
                  +
                </p>
              </div>
            ))}
            <div onClick={() => dispatch(resetCart())} className="w-full py-2">
              <button className=" bg-red-500 cursor-point px-1 rounded-lg text-white mt-2 hover:bg-gray-400 duration-300">
                Clear Cart
              </button>


            </div>
          </div>
        </div>
        <div className="w-full h-full  bg-white col-span-2 flex flex-col items-center p-4">
          <p className="">
            <AiFillCheckCircle className="bg-white text-green-500 rounded-full" />

            <span className="ml-2">
              Your order qualifies for free SHIPPING choose the next option for
              checkout & see Details
            </span>
            <p className="font-semibold px-10 py-1 flex items-center gap-1 justify-between">
              Total:<span className="text-lg font-bold">${totalPrice}</span>
            </p>
            <button
              className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-600 to-yellow-600 border hover:from-yellow-300 hover:to-yellow border-yellow-500 hover:border-yello-700 active:bg-gradient-to-bl
        active:from-yellow-400 active:to-yellow-600 duration-200 py-1.5 rounded-md mt-3"
            >
              Proceed To Pay
            </button>
          </p>
        </div>
      </div>
    :<div>
<h1 className="text-3xl font-bold">  We SORRY!..Your cart is empty<br></br><p className="text-xl">Please continue shopping...</p></h1>
    </div>
}
     </div>
    </DefaultLayout>
  
)}

export default Cart;
