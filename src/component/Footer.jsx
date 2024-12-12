import React from 'react'
import { footerpost, links } from '../Data'

function Footer() {
  return (
    <>
      <section className='bg-dark py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="row text-white">
                            <div className="col-lg-12">
                                <img className='w-100' src={'./image/logo-3.png'} alt="" />
                            </div>
                            <div className="col-lg-12 mt-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <div className='d-flex gap-4'>
                                    <i className="bi bi-facebook bordericon" />
                                    <i className="bi bi-instagram bordericon" />
                                    <i className="bi bi-linkedin bordericon" />
                                    <i className="bi bi-twitter bordericon" />
                                    <i className="bi bi-youtube bordericon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-white">
                        <h3 >Recent post</h3>
                        <div className="row">
                            {footerpost.map((a)=>(
                                <div key={a.id} className="row footerbox">
                                    <div className="col-lg-4 mt-4">
                                        <img className='w-100' src={a.image} alt="" />
                                    </div>
                                    <div className="col-lg-8 mt-4">
                                        <p className='footertitle'>{a.title}</p>
                                        <span className='footerdate'>{a.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3 text-white">
                        <h4>Useful links  </h4>
                        <div className="row">
                        {links.map((a)=>(
                                <div key={a.id} className="col-lg-12 mt-3">
                                    <a href="#" className='footerlink'>{a}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3 text-white">
                        <h4>Subscribe</h4>
                        <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <input type="text" placeholder="Enter your email" className='footerform mt-4'  />
                        <button className='btn footerbtn mt-4'>Subscribe</button>
    
                    </div>
                </div>
            </div>
      </section>
    </>
) 
}

export default Footer
