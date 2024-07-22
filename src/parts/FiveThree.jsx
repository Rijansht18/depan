import React from 'react'
import { fivethree } from '../Data'

function FiveThree() {
  return (
    <>
      <section>
      <h3 className='border-bottom-pop py-2 mb-4'>Tech</h3>
      <div className="row">
                  {fivethree.map((a)=>(
                    <div key={a.id} className="col-lg-4">
                      <div className="card mb-4">
                          <div className="image-wrapper">
                              <img src={a.image} alt="" className="card-img-top" />
                              <div className="overlay"></div>
                          </div>
                          <div className="card-body text-white z-3">
                          <h6 className="card-title">{a.title}</h6>
                          <p className="card-text">{a.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
      </section>
    </>
  )
}

export default FiveThree
