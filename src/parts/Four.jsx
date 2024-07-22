import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules';
import { four } from '../Data';
function Four() {
  return (
    <>
      <section className='pb-5'>
        <div className="container">
        <h3 className='border-bottom-pop py-2 mb-4'>Top Video</h3>
        <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
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
       {four.map((a)=>(
         <SwiperSlide key={a.id}>
            <div className="videobox">
                <div>
                <img className='w-100' src={a.image} alt="" />
                <div className="overlay"></div>
                </div>
                <div className="videocard">
                    <h5>{a.title}</h5>
                    <p>{a.date}</p>
                </div>
            </div>
         </SwiperSlide>
       ))}
      </Swiper>
        </div>
      </section>
    </>
  )
}

export default Four
