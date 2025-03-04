import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/shopifySlice";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10 text-xl">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <img className="w-80 h-96 object-contain" src={product.image} alt={product.title} />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-lg font-semibold text-yellow-600">${product.price}</p>
          <p className="text-gray-700 mt-2">{product.description}</p>

          {/* Add to Cart Button */}
          <Link to="/Cart">
          <button
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
            className="mt-4 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Add to Cart
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
