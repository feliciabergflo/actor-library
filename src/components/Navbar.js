import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark shadow mb-4">
        <div className="container">
            <a className="navbar-brand">ActorLibrary</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link">Favorites</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input id="search-fied" className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"></input>
                    <button className="btn btn-secondary" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;