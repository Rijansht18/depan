import React from 'react'
import { stay } from '../Data'

function Stay() {
  return (
    <>
      <section>
        <div className="">
        <h3 className='border-bottom-pop py-2 mb-4'>Stay Connected</h3>
        <div className="row">
        {stay.map((a) => (
            <div className="col-lg-6 " key={a.id}>
                <div className={`bg-${a.bg} mt-2 text-white staybox` }>
                    <div className="row w-100 pt-2 px-1 d-flex align-item-center">
                        <div className="col-lg-1">
                            <i className={`bi bi-${a.icon} custom-font-size`} />
                        </div>
                        <div className="col-lg-4">
                            <p className="custom-font-size">{a.number}</p>
                        </div>
                        <div className="col-lg-4">
                        <h6 className="custom-font-size">{a.title}</h6>
                        </div>
                    </div>
                </div>
            </div>
        ))}


        </div>
        </div>
      </section>
    </>
  )
}

export default Stay
