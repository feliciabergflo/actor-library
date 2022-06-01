import React from "react";

export default function ActorList(props) {
    return (
        <main className="mt-5">
            <h1 className="text-center mb-5">Most popular actors and actresses</h1>
            <div className="row g-2">
                {props.actors.map(actor => (
                    <div key={actor.id} className="shadow col-6 col-md-3 mb-3">
                        <img src={'https://image.tmdb.org/t/p/w235_and_h235_face' + actor.profile_path} className="card-img-top" alt={actor.name}></img>
                        <h5 className="card-title">{actor.name}</h5>
                    </div>
                ))}

            </div>
        </main>
    )
}

