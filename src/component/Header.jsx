import React, { useEffect } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Login from '../component/login/Login';
import Home from '../pages/Home';
import Politics from '../pages/Politics';
import Business from '../pages/Business';
import Tech from '../pages/Tech';
import Sports from '../pages/Sports';
import Culture from '../pages/Culture';
import Video from '../pages/Video';
import News from '../pages/News';

function Header() {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                document.querySelector('.top').classList.add('hidden');
                document.querySelector('.maintop').classList.add('fixed-top');
            } else {
                document.querySelector('.top').classList.remove('hidden');
                document.querySelector('.maintop').classList.remove('fixed-top');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <section className='top py-2'>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 d-flex justify-content-between">
                            <h4 className='texthead'>Breaking News:</h4>
                            <marquee className='w-75' behavior="linear" direction="left">Entertainment activists started again a few months later </marquee>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end gap-3">
                            <select className='language'>
                                <option value="english">English</option>
                                <option value="nepali">Nepali</option>
                            </select>

                            <Link to='/login' className='btn'><i className="bi bi-person" /> Login</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='maintop bg-body-tertiary'>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <a href="#"><img className='w-100' src={'./image/logo-1.png'} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold fs-4">
                                <li className="nav-item">
                                    <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/politics" activeClassName="active" className="nav-link">Politics</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/business" activeClassName="active" className="nav-link">Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/tech" activeClassName="active" className="nav-link">Tech</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/sports" activeClassName="active" className="nav-link">Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/culture" activeClassName="active" className="nav-link">Culture</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/video" activeClassName="active" className="nav-link">Video</NavLink>
                                </li>
                            </ul>
                            <form className="search-box">
                                <input className="form-control me-2" type="search" placeholder="Search for.." aria-label="Search" />
                                <button type="submit">
                                    <i className="bi bi-search" />
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>

            </section>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/politics' element={<Politics />} />
                <Route path='/business' element={<Business />} />
                <Route path='/tech' element={<Tech />} />
                <Route path='/sports' element={<Sports />} />
                <Route path='/culture' element={<Culture />} />
                <Route path='/video' element={<Video />} />
                <Route path='/news' element={<News />} />
            </Routes>
        </>
    )
}

export default Header;
