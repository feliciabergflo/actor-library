import React from "react";

export default function ActorList(props) {
    return (
        <main className="row mt-5">
            <h1 className="text-center mb-5">Most popular actors and actresses</h1>
            <div className="row g-2">
                {props.actors && props.actors.map( actor => (
                    actor.profile_path &&
                    <button key={actor.id} onClick={(e) => { props.getActor(e, actor.id) }} className="shadow col-6 col-md-3 mb-3 border-0 bg-light" data-bs-toggle="modal" data-bs-target="#actorModal">
                        <img src={'https://image.tmdb.org/t/p/w235_and_h235_face' + actor.profile_path} className="card-img-top" alt={actor.name}></img>
                        <h5 className="card-title mt-2">{actor.name}</h5>
                    </button>
                ))}

            </div>
        </main>
    )
}
