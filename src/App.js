import React, { useState, useEffect} from "react";
import{BrowserRouter, Routes, Route,} from "react-router-dom";
import ActorList from "./ActorList";
import ActorInfo from "./ActorInfo";
import Footer from "./Footer";
import Search from "./search1";
import Nav from "./Navbar1";
import MyFavorite from "./MyFaviorits";


function App() {
  const [actors, setActors] = useState([]);
  const [actor, setActor] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect ( () => {
      const mostPopularActors = async () => {
        const apiKey = '9595bac57a62b5ff9e1564b3b85150f5';
        const url = 'https://api.themoviedb.org/3/person/popular?api_key=' + apiKey;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.results) {
          setActors(responseJson.results);
        }
      };

      mostPopularActors();
    }, []);
    
    async function getActor(e , id) {
      e.preventDefault();
      const apiKey = '9595bac57a62b5ff9e1564b3b85150f5';
      
      const url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`;
      const response = await fetch(url);
      const details = await response.json();

      const urlMovies = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}`;
      const responsemovies = await fetch(urlMovies);
      const movies = await responsemovies.json();
    
      if (details && movies) {
        const moviesArr = [];
        movies.cast.map( movie =>
          moviesArr.push(`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`)
        );

        setActor({
          name : details.name,
          biography : details.biography,
          birthday : details.birthday,
          moviesArr : moviesArr,
          image : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${details.profile_path}`,
        });
      }
    }
    const setActorAfterSearchResult = async (query) => {
      if (query.length >= 3) {
        const apiKey = '9595bac57a62b5ff9e1564b3b85150f5';
        const url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}`;
        const response = await fetch(url);
        const result = await response.json();

        setActors(result.results);
      } else if (query.length === 0) {
        const mostPopularActors = async () => {
          const apiKey = '9595bac57a62b5ff9e1564b3b85150f5';
          const url = 'https://api.themoviedb.org/3/person/popular?api_key=' + apiKey;

          const response = await fetch(url);
          const responseJson = await response.json();

          if (responseJson.results) {
            setActors(responseJson.results);
          }

        };

        mostPopularActors();
      }
    }

    useEffect ( () => {
      const favStorage1 = localStorage.getItem('favStorage');
      let favList1 = JSON.parse(favStorage1) || [];

      setFavorites(favList1);
    }, []);

    const addToFavorite = () => {
      const favStorage = localStorage.getItem('favStorage');
      let favList = JSON.parse(favStorage) || [];
      favList.push(actor);
      localStorage.setItem("favStorage", JSON.stringify(favList));

      setFavorites(favList);
    }

    const deleteFavorite = (e, actorname) => {
      e.preventDefault();
      let favoritesFilter = favorites.filter((fav)=> {
        return fav.name !== actorname
      });
      localStorage.setItem('favStorage', JSON.stringify(favoritesFilter));

      setFavorites(favoritesFilter);
    }


  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<>
            <Search setActorAfterSearchResult={setActorAfterSearchResult} />
            <ActorList actors={actors} getActor={getActor} />
            <ActorInfo key={actor.id} actor={actor} addToFavorite={addToFavorite} />
          </>}/>
          <Route path="/favorites" element={<MyFavorite favorites={favorites} deleteFavorite={deleteFavorite} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
