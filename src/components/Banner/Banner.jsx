import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url(/banner-img-1.png)] bg-cover bg-center px-20 py-50 text-center w-10/12 mx-auto rounded-2xl mt-10'>
            <h1 className='text-[48px] font-bold text-white'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
            <p className='font-light text-white'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>
    );
};

export default Banner;