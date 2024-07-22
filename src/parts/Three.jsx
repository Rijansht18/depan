import React from 'react'
import { politics, three1 } from '../Data'

function Three() {
  return (
    <>
      <section className='py-5'>
        <div className="container">
        <h3 className='border-bottom-pop py-2 mb-4'>Most popular</h3>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        {three1.map((a)=>(
                           <div key={a.id} className="col-lg-12">
                                <div className="popularbox ">
                                    <div className='overflow-hidden'><img className='w-100' src={a.image} alt="" /></div>
                                    <p className='mt-3 populartype'>{a.type}</p>
                                    <h5 className='popularhead pb-2'>{a.title}</h5>
                                    <div className='d-flex gap-2 mt-2'> <p className='popularauther'>{a.auther}</p> <span>/</span> <span>{a.date}</span> </div>
                                </div>
                           </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="row">
                  {politics.slice(0,4).map((a)=>(
                    <div key={a.id} className="col-lg-6">
                      <div className="card mb-4">
                          <div className="image-wrapper">
                              <img src={a.image} alt="" className="card-img-top" />
                              <div className="overlay"></div>
                          </div>
                          <div className="card-body text-white z-3">
                          <h5 className="card-title">{a.title}</h5>
                          <p className="card-text">{a.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Three
