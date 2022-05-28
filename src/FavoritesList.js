import React, { useState, useRef} from 'react';
import $ from 'jquery';
import Favorite from './Favorite';

export default function Header() {
    const [favorites, setFavorites] = useState([{
        id: 1, 
        name: "Johnny Depp"
    }]);
    const inputRef = useRef();

    function deleteFavorite(id) {
        setFavorites(favorites.filter((item) => item.id !== id));
    }

    return (
        <div>
            <h1>Favoriter</h1>
            <ul className="list-group">
                { favorites.map(favorite => <Favorite key={favorite.id} item={favorite} deleteFavorite={deleteFavorite} />) }
            </ul>
        </div>
    )
}
