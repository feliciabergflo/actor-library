import React from 'react';

export default function Favorite(props) {
    return (
        <li className="list-group-item list-group-item-secondary mt-1 mb-3">
            { props.item.title }
            <button className="btn-close btn-sm float-end" onClick={() => {props.deleteItem(props.item.id)}}></button>
        </li>
    )
}