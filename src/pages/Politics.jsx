import React from 'react'
import Latest from '../component/Latest'
import Popular from '../component/Popular'
import Stay from '../component/Stay'
import Subscribe from '../component/Subscribe'
import Share from '../component/Share'
import { Link, Route, Routes } from 'react-router-dom'
import { politics, Politics1 } from '../Data'

function Politics() {
  return (
    <>
      <section className='py-5'>
        <section className='border-bottom py-3'>
          <div className="container d-flex justify-content-between align-items-center">
            <div><h1>Politics</h1></div>
            <div className='d-flex gap-2 fs-5'>
              <Link to="/" className='gohome'>Home</Link>
              <p className='hometopic'>| Politics</p>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
              {Politics1.map((a)=>(
                            <div key={a.id} className="col-lg-6">
                               <div className="popularbox ">
                               <div className='overflow-hidden'><img className='w-100' src={a.image} alt="" /></div>
                               <p className='mt-3 populartype'>{a.type}</p>
                               <h5 className='popularhead pb-2'>{a.title}</h5>
                              <div className='d-flex gap-2 mt-2'> <p className='popularauther'>{a.auther}</p> <span>/</span> <span>{a.date}</span> </div>
                               </div>
                            </div>
                        ))}
              </div>
              <div className="row">
                {politics.map((a)=>(
                  <div key={a.id} className="col-lg-12 mt-3 popularbox overflow-hidden">
                  <div className="row">
                      <div className="col-lg-4">
                      <div className='overflow-hidden'> <img className='w-100' src={a.image} alt="" /></div>
                      </div>
                      <div className="col-lg-8 py-3">
                          <p className='politicstype'>Politics</p>
                          <h4 className='popularhead'>{a.title}</h4>
                          <p>{a.desc}</p>
                          <p>{a.date}</p>
                      </div>
                  </div>
              </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <Latest/>
              <Popular/>
              <Stay/>
              <Subscribe/>
              <Share/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Politics
