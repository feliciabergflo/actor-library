import React, { useState } from 'react';
import Favorite from "./Favorite";

const Favorites = () => {
    const [favorites, setFavorites] = useState([{
        id: 1,
        name: "Mila Kunis"
    }]);

    function deleteFavorite(id) {
        setFavorites(favorites.filter((item) => item.id !== id));
    }

    return (
        <div className="container">
            <h1>Favorites</h1>
            <ul className="list-group">
                { favorites.map(favorite => <Favorite key={favorite.id} item={favorite} deleteFavorite={deleteFavorite} />) }
            </ul>
        </div>
    )
};

export default Favorites;