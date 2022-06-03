import React from 'react';

export default function Favorite(props) {
    return (
        <li className="list-group-item">
            { props.item.name }
            <button className="btn-close float-end" onClick={() => {props.deleteFavorite(props.item.id)}}></button>
        </li>
    )
}