import React from 'react';

import {BiBed,BiBath,BiArea} from 'react-icons/bi'

const House = ({house}) => {
  const {image,type,country,address,bedrooms,bathrooms,surface,price}=house;

  return (
  <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition ' >
    <img className='mb-8'src={image} alt=''></img>
    <div className='mb-4 flex-gap-x-2 text-sm'>
      <div>{type}</div>
      <div>{country}</div>
      

    </div>
    <div>{address}</div>
    <div className='flex gap-x-4 my-4'>
      
    </div>
    <div className='flex items-center gap-1'>
      <div>
      <BiBed/>
      </div>
      <div>{bedrooms}</div>
    </div>
    <div className='flex items-center gap-1'>
      <div>
      <BiBath/>
      </div>
      <div>{bathrooms}</div>
    </div>
    <div className='flex items-center gap-1'>
      <div>
      <BiArea/>
      </div>
      <div>{surface}</div>
    </div>
    <div>{price}</div>
  </div>);
};

export default House;
