import React from 'react';

// import images
import Avatar1 from '../assets/img/avatar1.png';
import Avatar2 from '../assets/img/avatar2.png';
import Avatar3 from '../assets/img/avatar3.png';

// import icons
import {BsFillCircleFill} from 'react-icons/bs';

const Users = () => {
  return (
  <div data-aos='fade-down' data-aos-delay='700' className='flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start'>
    <div className='flex -space-x-2'>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avatar2} />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avatar3} />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avatar1} />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avatar2} />
      </div>
    </div>
    <div className='flex items-center space-x-2 font-secondary font-medium'>
      <BsFillCircleFill className='text-xs text-green-500 animate-pulse' />
      <div>400K people online</div>
    </div>
  </div>
  )
};

export default Users;
