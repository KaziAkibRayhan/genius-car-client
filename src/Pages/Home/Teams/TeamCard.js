import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import {AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';

const TeamCard = ({ team }) => {
  const { title, car_skill, img } = team;
  return (
    <div className="card p-6 w-96 bg-base-100 shadow-xl">
      <div className="w-80 h-52">
        <img src={img} alt="Shoes" className="w-full rounded-xl h-full" />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-600 font-bold">{car_skill}</p>
        <div className='flex'>
          <BsFacebook className='text-slate-800 ml-1 text-2xl' />
          <AiFillTwitterCircle className='text-blue-500 ml-1 text-2xl' />
          <BsLinkedin className='text-blue-600 rounded-lg ml-1 text-2xl' />
          <AiFillInstagram className='text-orange-400 ml-1 text-2xl' />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
