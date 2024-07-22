import React from 'react'

function Subscribe() {
  return (
    <>
      <section className='bg-body-secondary py-3 px-4'>
        <div className="row text-center">
            <div className="col-lg-12">
                <h3>Subscribe to our newsletter</h3>
            </div>
            <div className="col-lg-12 mt-2">
                <p>Subscribe to our newsletter to get the new updates!</p>
            </div>
            <div className="col-lg-12 mt-2">
                <input className='w-100 subinput' type="email" placeholder='Enter your email' />
            </div>
            <div className="col-lg-12 mt-2">
                <button className='btn subbtn w-100 '>Subscribe</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe
