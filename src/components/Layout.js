import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark shadow mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">ActorLibrary</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/favorites">Favorites</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>   

            <Outlet />
            <footer className="bg-secondary text-white">
                <div className="container p-4">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="">Multi-platform applications with web technicians course spring 2022</h5>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ms-auto">
                        <p className="text-center">
                        The website uses MTDB Api
                        <img className="ms-auto" src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" width="50" hight="50" alt="The Movie Database (TMDB)"></img>
                        </p>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Layout;