import React, { useState, useRef, useEffect } from 'react';
import Favorite from './Favorite';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function addFavorite(name) {

    }

    function deleteFavorite(id) {
        setFavorites(favorites.filter((item) => item.id !== id));
    }



    /*
    const [favorites, setFavorites] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
      }, []);

    function deleteFavorite(id) {
        setFavorites(favorites.filter((item) => item.id !== id));
        */
    

    return (
        <div>
            <h1 className="mb-3">Favoriter</h1>
            <ul className="list-group">
                <li className="list-group-item">Exempel
                <button className="btn-close float-end"></button>
                </li>
                { favorites.map(favorite => <Favorite key={favorite.id} item={favorite} deleteFavorite={deleteFavorite} />) }
            </ul>
        </div>
    )
}
