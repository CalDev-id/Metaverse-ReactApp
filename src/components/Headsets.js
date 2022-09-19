import React from 'react';

// import img
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';


const Headsets = () => {
  return <section className='py-12 lg:py-24 bg-[#362f55]'>
    <div className='container mx-auto'>
      {/* TITLE */}
      <h2 className='text-2xl font-bold mb-6 lg:mt-28 md:mt-44 mt-40' data-aos='fade-down' data-aos-delay='300'>
        Mixed Reality Headsets
      </h2>
      {/* GRID */}
      <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9 pb-52 md:pb-52'>
        {/* items */}
        <div className='relative' data-aos='zoom-in' data-aos-delay='300' data-aos-offset='300'>
          <img src={Headset1} />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
            <p className='text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic saepe rerum dolorem temporibus debitis commodi?
            </p>
          </div>
        </div>
        <div className='relative' data-aos='zoom-in' data-aos-delay='300' data-aos-offset='300'>
          <img src={Headset2} />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[100px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
            <p className='text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic saepe rerum dolorem temporibus debitis commodi?
            </p>
          </div>
        </div>
        <div className='relative' data-aos='zoom-in' data-aos-delay='300' data-aos-offset='300'>
          <img src={Headset3} />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[100px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
            <p className='text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic saepe rerum dolorem temporibus debitis commodi?
            </p>
          </div>
        </div>
        <div className='relative' data-aos='zoom-in' data-aos-delay='300' data-aos-offset='300'>
          <img src={Headset4} />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[100px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
            <p className='text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic saepe rerum dolorem temporibus debitis commodi?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Headsets;
