import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card p-5 card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="rounded-xl" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className='flex justify-between'>
          <p className="text-2xl font-semibold text-orange-600">
            Price: ${price}
          </p>
          <button>
            <FaArrowRight className='text-orange-600 font-bold text-lg' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
