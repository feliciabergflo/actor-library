import React from 'react';
import {Link} from 'react-router-dom'

export default function Favorite(props) {
    return (
        <li className="list-group-item">
            <Link to='/' className="link-dark">{ props.item.name }</Link>
            <button className="btn-close float-end" onClick={() => {props.deleteFavorite(props.item.id)}}></button>
        </li>
    )
}