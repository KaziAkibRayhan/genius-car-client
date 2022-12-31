import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { product_name, price, img } = product;
  return (
    <div className="card p-6 w-96 bg-base-100 shadow-xl">
      <div className="w-80 bg-slate-200 h-52 rounded-xl">
        <img src={img} alt="Shoes" className="w-full h-full" />
      </div>
      <div className="card-body items-center text-center">
        <div className='flex'>
          <BsFillStarFill className='text-orange-600 ml-1 text-xl' />
          <BsFillStarFill className='text-orange-600 ml-1 text-xl' />
          <BsFillStarFill className='text-orange-600 ml-1 text-xl' />
          <BsFillStarFill className='text-orange-600 ml-1 text-xl' />
        </div>
        <h2 className="card-title">{product_name}</h2>
        <p className="text-orange-600 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
