import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules';
import { fiveone } from '../Data';

function FiveOne() {
  return (
    <>
      <section>
      <div>
            <h3 className='border-bottom-pop py-2 mb-4'>Business</h3>
            <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={2}
        spaceBetween={5}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {fiveone.map((a)=>(
             <SwiperSlide key={a.id}>
                     <div className="popularbox ">
                            <div className='overflow-hidden'><img className='w-100' src={a.image} alt="" /></div>
                            <p className='mt-3 populartype'>{a.type}</p>
                             <h5 className='popularhead pb-2'>{a.title}</h5>
                            <div className='d-flex gap-2 mt-2'> <p className='popularauther'>{a.auther}</p> <span>/</span> <span>{a.date}</span> </div>
                     </div>
             </SwiperSlide>
         ))}
      </Swiper>
            </div>
      </section>
    </>
  )
}

export default FiveOne
