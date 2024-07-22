import React from 'react'
import { fivetwo, fivetwo2 } from '../Data'

function FiveTwo() {
  return (
    <>
      <section>
      <h3 className='border-bottom-pop py-2 mb-4'>Sports</h3>
      <div className="row">
        <div className="col-lg-6">
        {fivetwo.map((a)=>(
                            <div key={a.id} className="">
                               <div className="popularbox ">
                               <div className='overflow-hidden'><img className='w-100' src={a.image} alt="" /></div>
                               <p className='mt-3 populartype'>{a.type}</p>
                               <h5 className='popularhead pb-2'>{a.title}</h5>
                              <div className='d-flex gap-2 mt-2'> <p className='popularauther'>{a.auther}</p> <span>/</span> <span>{a.date}</span> </div>
                               </div>
                            </div>
                        ))}
        </div>
        <div className="col-lg-6">
                    <div className="row">
                        {fivetwo2.map((a)=>(
                            <div key={a.id} className="col-lg-12 mb-3 popularbox overflow-hidden">
                                <div className="row">
                                    <div className="col-lg-4">
                                    <div className='overflow-hidden'> <img className='w-100' src={a.image} alt="" /></div>
                                    </div>
                                    <div className="col-lg-8 py-3">
                                        <p className='populartype'>{a.type}</p>
                                        <h6 className='popularhead'>{a.title}</h6>
                                        <p>{a.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
      </div>
      </section>
    </>
  )
}

export default FiveTwo