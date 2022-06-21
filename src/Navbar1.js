import React from "react";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <header className="row bg-dark py-4">
            <div className="col">
                <Link className="btn btn-dark me-2" to="/">Actor Library</Link>
                <Link className="btn btn-light" to="/Favorites">My favorites</Link>
            </div>
        </header>
    )
}

export default Nav;
