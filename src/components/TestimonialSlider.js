import React from 'react';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';
// import data 
import { slider } from '../data';


const TestimonialSlider = () => {
  return <Swiper 
    breakpoints={{
      320: {
        slidesPerView: 1,spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,spaceBetween: 30,
      },
    }}
  >
    {slider.map((slide, index)=> {
      //slide
      const {message, image, name, email} = slide;
      return(
        <SwiperSlide className='cursor-pointer rounded-lg p-4 lg:p-6 min-h-[240px] bg-white/20 backdrop-blur-md' key={index}>
          <p className='mb-8 min-h-[100px] text-[15px]'>{message}</p>
          <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
            <div className='w-14'>
              <img className='mb-3 md:mb-0' src={image} />
            </div>
            <div>
              <div className='font-medium text-base'>{name}</div>
              <div className='font-medium text-slate-500'>{email}</div>
            </div>
          </div>
        </SwiperSlide>
      ) 
    })}
  </Swiper>;
};

export default TestimonialSlider;
