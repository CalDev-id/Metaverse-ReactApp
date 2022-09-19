import React from 'react';

// import img
import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png';

const Experience = () => {
  return(
    <section className='mb-12 lg:mb-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
          <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
            {/* IMAGES */}
            <div className='self-start relative' data-aos='fade-down' data-aos-delay='300'>
              <img src={Img1} />
              <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[50px] md:p-6 p-1 px-3'>
                <h4 className='font-semibold text-sm mb-2'>Metaverse</h4>
                <p className='text-xs'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className='self-end relative' data-aos='fade-up' data-aos-delay='300'>
              <img src={Img2} />
              <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[50px] md:p-6 p-1 px-3'>
                <h4 className='font-semibold text-sm mb-2'>Metaverse</h4>
                <p className='text-xs'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          {/* TEXT */}
          <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0' data-aos='fade-left' data-aos-delay='300'>
            <h2 className='text-3xl font-bold mb-6 '>New Experience In Playing Games</h2>
            <p className='font-secondary mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure ratione facere nihil corporis aperiam excepturi ab fugiat id magni?
            </p>
            <button className='btn'>Get it now</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Experience;
