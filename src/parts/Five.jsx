import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules';
import Stay from '../component/Stay'
import Latest from '../component/Latest'
import Popular from '../component/Popular'
import Subscribe from '../component/Subscribe'
import FiveOne from './FiveOne';
import FiveTwo from './FiveTwo';
import FiveThree from './FiveThree';

function Five() {
  return (
    <>
      <section>
       <div className="container">
       <div className="row">
            <div className="col-lg-8">
                <FiveOne/>
                <FiveTwo/>
                <FiveThree/>
            </div>
            <div className="col-lg-4">
                <div className="row">
                        <div className="col-lg-12">
                            <Stay/>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <Latest/>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <Popular/>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <Subscribe/>
                            </div>
                            
                </div> 
            </div>
        </div>
       </div>
      </section>
    </>
  )
}

export default Five
