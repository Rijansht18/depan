import React from 'react'
import { one } from '../Data'

function One() {
  return (
    <>
      <section className='py-5'>
        <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="row">
                  {one.slice(0,2).map((a)=>(
                    <div key={a.id} className="col-lg-12">
                      <div className="card mb-4">
                          <div className="image-wrapper">
                              <img src={a.image} alt="" className="card-img-top" />
                              <div className="overlay"></div>
                          </div>
                          <div className="card-body text-white z-3">
                            <div className="type-card">{a.type}</div>
                          <h5 className="card-title">{a.title}</h5>
                          <p className="card-text">{a.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div><div className="col-lg-6">
                <div className="row">
                  {one.slice(2,3).map((a)=>(
                    <div key={a.id} className="col-lg-12">
                      <div className="card mb-4">
                          <div className="image-wrapper">
                              <img src={a.image} alt="" className="card-img-top" />
                              <div className="overlay"></div>
                          </div>
                          <div className="card-body text-white z-3">
                            <div className="type-card">{a.type}</div>
                          <h5 className="card-title">{a.title}</h5>
                          <p className="card-text">{a.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row">
                  {one.slice(3,5).map((a)=>(
                    <div key={a.id} className="col-lg-12">
                      <div className="card mb-4">
                          <div className="image-wrapper">
                              <img src={a.image} alt="" className="card-img-top" />
                              <div className="overlay"></div>
                          </div>
                          <div className="card-body text-white z-3">
                            <div className="type-card">{a.type}</div>
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

export default One
