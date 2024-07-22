import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Latest from '../component/Latest';
import Popular from '../component/Popular';
import Stay from '../component/Stay';
import Subscribe from '../component/Subscribe';
import Share from '../component/Share';
import { culture1, fiveone, Politics1, sport1, tech1 } from '../Data';

function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleModalClose = () => {
      const iframe = videoRef.current;
      if (iframe) {
        const src = iframe.src;
        iframe.src = src;
      }
    };

    const modal = document.getElementById('exampleModal');
    modal.addEventListener('hidden.bs.modal', handleModalClose);

    return () => {
      modal.removeEventListener('hidden.bs.modal', handleModalClose);
    };
  }, []);

  return (
    <>
      <section>
        <section className='border-bottom py-3'>
          <div className="container d-flex justify-content-between align-items-center">
            <div><h1>Videos</h1></div>
            <div className='d-flex gap-2 fs-5'>
              <Link to="/" className='gohome'>Home</Link>
              <p className='hometopic'>| Videos</p>
            </div>
          </div>
        </section>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {Politics1.map((a) => (
                  <div key={a.id} className="col-lg-6">
                    <div className="popularbox">
                      <div className='overflow-hidden position-relative'>
                        <img className='w-100' src={a.image} alt="" />
                        <button type="button" className="btn center-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i className="bi bi-play-fill" />
                        </button>
                      </div>
                      <p className='mt-3 populartype'>{a.type}</p>
                      <h5 className='popularhead pb-2'>{a.title}</h5>
                      <div className='d-flex gap-2 mt-2'>
                        <p className='popularauther'>{a.auther}</p>
                        <span>/</span>
                        <span>{a.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {fiveone.slice(1,3).map((a) => (
                  <div key={a.id} className="col-lg-6">
                    <div className="popularbox">
                      <div className='overflow-hidden position-relative'>
                        <img className='w-100' src={a.image} alt="" />
                        <button type="button" className="btn center-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i className="bi bi-play-fill" />
                        </button>
                      </div>
                      <p className='mt-3 populartype'>{a.type}</p>
                      <h5 className='popularhead pb-2'>{a.title}</h5>
                      <div className='d-flex gap-2 mt-2'>
                        <p className='popularauther'>{a.auther}</p>
                        <span>/</span>
                        <span>{a.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {tech1.map((a) => (
                  <div key={a.id} className="col-lg-6">
                    <div className="popularbox">
                      <div className='overflow-hidden position-relative'>
                        <img className='w-100' src={a.image} alt="" />
                        <button type="button" className="btn center-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i className="bi bi-play-fill" />
                        </button>
                      </div>
                      <p className='mt-3 populartype'>{a.type}</p>
                      <h5 className='popularhead pb-2'>{a.title}</h5>
                      <div className='d-flex gap-2 mt-2'>
                        <p className='popularauther'>{a.auther}</p>
                        <span>/</span>
                        <span>{a.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {sport1.map((a) => (
                  <div key={a.id} className="col-lg-6">
                    <div className="popularbox">
                      <div className='overflow-hidden position-relative'>
                        <img className='w-100' src={a.image} alt="" />
                        <button type="button" className="btn center-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i className="bi bi-play-fill" />
                        </button>
                      </div>
                      <p className='mt-3 populartype'>{a.type}</p>
                      <h5 className='popularhead pb-2'>{a.title}</h5>
                      <div className='d-flex gap-2 mt-2'>
                        <p className='popularauther'>{a.auther}</p>
                        <span>/</span>
                        <span>{a.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {culture1.map((a) => (
                  <div key={a.id} className="col-lg-6">
                    <div className="popularbox">
                      <div className='overflow-hidden position-relative'>
                        <img className='w-100' src={a.image} alt="" />
                        <button type="button" className="btn center-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i className="bi bi-play-fill" />
                        </button>
                      </div>
                      <p className='mt-3 populartype'>{a.type}</p>
                      <h5 className='popularhead pb-2'>{a.title}</h5>
                      <div className='d-flex gap-2 mt-2'>
                        <p className='popularauther'>{a.auther}</p>
                        <span>/</span>
                        <span>{a.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Video</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <iframe
                        ref={videoRef}
                        className='w-100'
                        height={500}
                        src="https://www.youtube.com/embed/mmei6O0wuNY?si=C_dat8dkBVRGBUj9"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Latest />
              <Popular />
              <Stay />
              <Subscribe />
              <Share />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;
