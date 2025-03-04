import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsTrash, BsPlus, BsDash } from "react-icons/bs";
import {
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/shopifySlice";
import DefaultLayout from "./DefaultLayout";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shopify.products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let Total = products.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(Total.toFixed(2));
  }, [products]);

  return (
    <DefaultLayout>
      <div className="w-full bg-gray-100 p-6">
        {products.length > 0 ? (
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-3 bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-3xl font-semibold border-b pb-3 mb-4">
                Shopping Cart
              </h2>

              {products.map((item) => (
                <div
                  key={item.id}
                  className="border-b pb-4 mb-4 flex gap-6 items-center"
                >
                    <Link to={`/product/${item.id}`} className="w-full flex items-center justify-center">
                  <img
                    className="w-48 h-48 object-contain"
                    src={item.image}
                    alt={item.title}
                  />
</Link>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">
                      {item.title.substring(0, 40)}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {item.description.substring(0, 100)}...
                    </p>
                    <p className="text-lg font-bold text-yellow-600">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                      >
                        <BsDash size={18} />
                      </button>
                      <p className="text-lg font-semibold">{item.quantity}</p>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                      >
                        <BsPlus size={18} />
                      </button>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 ml-auto"
                      >
                        <BsTrash size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => dispatch(resetCart())}
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 mt-4"
              >
                Clear Cart
              </button>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <AiFillCheckCircle className="text-green-500" size={24} />
                <span className="text-sm text-gray-600">
                  Your order qualifies for **Free Shipping**. Select at
                  checkout.
                </span>
              </div>

              <div className="flex justify-between text-lg font-bold border-b pb-3">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>

              <button className="w-72 mt-4 bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-full font-semibold text-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center  py-20">
            <h1 className="text-2xl font-bold text-gray-700">
              Your Cart is Empty
            </h1>
            <p className="text-gray-500">
              Continue shopping to add items to your cart.
            </p>
            <Link to="/" className=" text-black">
              <button className=" mt-6  bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Cart;
