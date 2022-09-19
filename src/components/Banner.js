import React from 'react';

// import components
import Users from '../components/Users'

// import image
import Hero from '../assets/img/hero.png';


const Banner = () => {
  return <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left mb-10 lg:mb-20'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* Text */}
        <div>
          <h1 className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug' data-aos='fade-down' data-aos-delay='500'>
            Let's Explore <br /> The New Metaverse World.
          </h1>
          <p className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0' data-aos='fade-down' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipsicing elit. Iste doloribus inventore harum cumque blanditiis minima. </p>
          {/* btn */}
          <div data-aos='fade-down' data-aos-delay='700' className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'>
            <button className='btn'>Get it now</button>
            <a href='#' className='border-b-2 border-transparent hover:border-white transition ease-out'>Explore Device</a>
          </div>
          <Users />
        </div>
        {/* IMG */}
        <div data-aos='fade-up' data-aos-delay='300' className='bg-hero bg-cover pt-10 mt-16 lg:pt-0 lg:mt-0 pb-4 lg:pb-20'>
          <img data-aos='fade-up' data-aos-delay='300' src={Hero} className='animate-bounce duration-1000' />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
