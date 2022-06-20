import React from "react";

export default function ActorList(props) {
    return (
        <main className="mt-5">
            <div className="row g-2">
                {props.actors.map( actor => (
                    <button key={actor.id} onClick={(e) => { props.getActor(e, actor.id) }} className="shadow col-6 col-md-3 mb-3 border-0 bg-light" data-bs-toggle="modal" data-bs-target="#actorModal">
                    <img src={'https://image.tmdb.org/t/p/w235_and_h235_face' + actor.profile_path} className="card-img-top" alt={actor.name}></img>
                        <h5 className="card-title">{actor.name}</h5>
                    </button>
                ))}
            </div>
        </main>
    )
}
