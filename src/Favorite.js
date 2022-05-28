import React from 'react';

export default function Favorite(props) {

    return (
        <li className="list-group-item">
            { props.item.name }
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteFavorite(props.item.id)}}>X</button>
        </li>
    )
}