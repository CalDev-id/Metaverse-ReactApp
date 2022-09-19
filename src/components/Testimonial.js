import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return <section className='mb-16 lg:mb-20 -translate-y-44'>
    <div className='container mx-auto'>
      <div className='bg-[#524686] max-h-[400px] p-12 rounded-lg'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-6' data-aos='fade-up' data-aos-delay='300' data-aos-offset='300'>What our clients say</h2>
          <p className='text-sm max-w-2xl mx-auto mb-12 lg:mb-24' data-aos='fade-up' data-aos-delay='300' data-aos-offset='300'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur deleniti aliquam rem reiciendis cumque dolores.
          </p>
        </div>
        {/* SLIDER */}
        <div className='' data-aos='fade-up' data-aos-delay='300' data-aos-offset='300'>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  </section>;
};

export default Testimonial;
