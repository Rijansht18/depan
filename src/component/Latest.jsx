import React from 'react'
import { latest } from '../Data'

function Latest() {
  return (
    <>
      <section>
      <h3 className='border-bottom-pop py-2 mb-4'>Latest news</h3>
      <div >
        {latest.map((a)=>(
           <div key={a.id} className="row latestbox mt-1">
             <div className="col-lg-3">
                <img className='w-100' src={a.image} alt="" />
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

export default Latest
