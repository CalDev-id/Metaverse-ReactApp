import React from 'react';

// import components
import Nav from './Nav';

// import icons
import { HiMenu } from 'react-icons/hi';

const Header = ({setNavMobile}) => {
  return (
    <header className='py-6' data-aos='fade-down' data-aos-duration='2000' data-aos-delay='900'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* LOGO */}
          <a href='#'>
            <h1 className='text-3xl'>verse</h1>
          </a>
          {/* NAV */}
          <Nav />
          {/* NAV MOBILE BTN */}
          <HiMenu onClick={() => setNavMobile(true)} className='lg:hidden text-3xl text-white cursor-pointer' />
        </div>
      </div>
    </header>
  )
};

export default Header;
