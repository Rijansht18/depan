import React from 'react'
import { popular } from '../Data'

function Popular() {
  return (
    <>
      <section>
      <h3 className='border-bottom-pop py-2 mb-4'>Popular Posts</h3>
      <div >
        {popular.map((a)=>(
           <div key={a.id} className="row latestbox mt-1">
             <div className="col-lg-3">
                <img className='w-100 h-75' src={a.image} alt="" />
            </div>
            <div className="col-lg-9">
                <h6>{a.title}</h6>
                <p>{a.date}</p>
            </div>
           </div>
            
        ))}
      </div>
      </section>
    </>
  )
}

export default Popular
