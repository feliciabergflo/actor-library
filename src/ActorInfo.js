import React from 'react';

const ActorInfo = (show) => {
  console.log(show.show)
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{show.show.name}</h5>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-4">
                  <img src={show.show.image} className='w-100'></img>
                </div>
                <div className="col-6">
                  <p>{show.show.biography}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Add to favorite</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ActorInfo;