import React from "react";

function MyFavorite (props) {
    return (
        <main className="row mt-5">
            <h1 className="text-center mb-5">My favorites</h1>
            <div className="row g-2">
                {props.favorites && props.favorites.map( actor => (
                    <div className="shadow col-6 col-md-3 border-0 bg-light">
                        <img src={'https://image.tmdb.org/t/p/w235_and_h235_face' + actor.image} className="card-img-top" alt={actor.name}></img>
                        <h5 className="card-title mt-2">{actor.name}</h5>
                        <button className="btn btn-dark float-end" onClick={(e) => { props.deleteFavorite(e, actor.name) }}>Delete</button>
                    </div>

                ))}
            </div>
        </main>

    )
}

export default MyFavorite;
