

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import star from '../../assets/images/star.png';
import { BsArrowRight } from 'react-icons/bs';

const DoctorCard = ({ doctor, insideAdmin }) => {
  const { id, name, specialty, avgRating, photo, totalRating, hospital } = doctor;
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className='p-3 lg:p-5 bg-white shadow-lg rounded-lg text-center'>
      <div className='w-full h-56 overflow-hidden rounded-md'>
        <img src={photo} className='w-full h-full object-cover' alt={name} />
      </div>

      <h2 className='text-[18px] font-semibold mt-3'>{name}</h2>
      <div className='flex justify-between items-center mt-2'>
        <span className='bg-[#CCF0F3] px-3 py-1 rounded-md text-sm'>{specialty}</span>
        <div className='flex items-center gap-1'>
          <img src={star} className='w-4 h-4' alt='rating' />
          <span className='text-sm font-medium'>{avgRating}</span>
        </div>
      </div>

      <div className='mt-2'>
        <span className='text-gray-600 text-sm'>{hospital}</span>
        <div className='flex justify-center gap-4 mt-3'>
          <Link
            to={`/doctors/${id}`}
            className='w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center group hover:bg-blue-600'
          >
            <BsArrowRight className='group-hover:text-white w-5 h-5' />
          </Link>

          {isAdminPage &&
          <button className='btn btn-outline border border-red-500 px-3 py-1 text-sm text-red-500 rounded-md hover:bg-red-500 hover:text-white'>
            DELETE
          </button>
}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
