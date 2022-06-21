import React from 'react';

const ActorInfo = ({actor, addToFavorite}) => {
  return (
    <div className="modal fade" id="actorModal" tabIndex="-1" aria-labelledby="actorModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="actorModalLabel">{actor.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-4">
                  <img src={actor.image} className='w-100' alt={actor.name}></img>
                </div>
                <div className="col-7">
                  <p className='fs-3'>Biography</p>
                  <p>{actor.biography}</p>
                  <p><strong>Known for:</strong></p>
                  <div className='d-flex align-content-stretch flex-nowrap overflow-auto'>
                    {actor.moviesArr && actor.moviesArr.slice(0, 10).map( img => (
                      <div className='m-2'>
                        <img className='rounded' src={img} alt='movie img' width={150}></img>
                      </div>

                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={addToFavorite}>Add to favorite</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ActorInfo;