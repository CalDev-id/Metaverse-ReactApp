import React, { useState } from 'react';

// import video

// import icons
import {BsPlayCircleFill} from 'react-icons/bs'

const Video = () => {

  const [isOpen, setIsOpen] = useState(false);

  return <div className='bg-[#524686] w-full md:w-[90%] py-10 z-20 translate-y-32 clip'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:justify-between' data-aos='fade-right' data-aos-delay='300'>
        <h3 className='text-2xl font-semibold mb-8 lg:mb-0'>
          Awesome experiences with <br/> virtual reality world
        </h3>
        {/* VIDEO MODAL */}
        
        {/* VIDEO */}
        <div className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center'>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer '>
            <BsPlayCircleFill className='text-4xl text-white/80 hover:text-white hover:scale-110 transition' />
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Video;
