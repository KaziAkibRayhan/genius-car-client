import React from "react";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card p-6 card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className='rounded-xl' src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>
        <p className='text-2xl font-semibold text-orange-600'>Price: ${price}</p>
        <button></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
