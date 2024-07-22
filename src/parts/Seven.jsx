import React from 'react'
import { sevenone, seventwo } from '../Data'

import Share from '../component/Share'
import Tages from '../component/Tages'

function Seven() {
  return (
    <>
      <section>
        <div className="container">
           
           <div className="row">
            <div className="col-lg-8">
            <h3 className='border-bottom-pop py-2 mb-4'>Business</h3>
            <div className="row">
                            {sevenone.map((a)=>(
                            <div key={a.id} className="col-lg-6">
                                    <div className="popularbox1 position-relative ">
                                        <div className='overflow-hidden'><img className='w-100' src={a.image} alt="" /></div>
                                        <div className="popularbox1card">
                                        <p className='mt-3 populartype text-white'>{a.type}</p>
                                        <h5 className='popularhead pb-2'>{a.title}</h5>
                                        <div className='d-flex gap-2 mt-1'> <p className='popularauther'>{a.auther}</p> <span>/</span> <span>{a.date}</span> </div>
                                        </div>
                                    </div>
                            </div>
                            ))}
            </div>
            <div className="row mt-4">
            {seventwo.map((a)=>(
                            <div key={a.id} className="col-lg-12 mb-3 popularbox overflow-hidden">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className='overflow-hidden'> <img className='w-100' src={a.image} alt="" /></div>
                                    </div>
                                    <div className="col-lg-8 py-3">
                                        <p className='populartype'>{a.type}</p>
                                        <h6 className='popularhead'>{a.title}</h6>
                                        <p>{a.sub}</p>
                                        <p>{a.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
            </div>
            <div className="col-lg-4">
                <Share/>
                <Tages/>
            </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default Seven
