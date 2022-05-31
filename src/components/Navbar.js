import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ({title}) =>{
 
        return (
            <nav className="navbar navbar-dark bg-dark shadow mb-4">
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
                                <Link to='/' className="nav-link">Hem</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/favorites' className="nav-link">Favoriter</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Sök..." aria-label="Sök"></input>
                            <button className="btn btn-secondary" type="submit">Sök</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    
}
 Navbar.defaultProps={
  title:'ActorLibrary'
};

export default Navbar