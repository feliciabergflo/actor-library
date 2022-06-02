import React, { useState, useEffect} from "react";
import ActorList from "./ActorList";
import ActorInfo from "./ActorInfo";


function App() {
  const [actors, setActors] = useState([]);
  const [show, setShow] = useState({});

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
    
    async function getActor(e , id, actor) {
      e.preventDefault();
      const apiKey = '9595bac57a62b5ff9e1564b3b85150f5';
      const url = 'https://api.themoviedb.org/3/person/' + id + '?api_key=' + apiKey;
  
      const response = await fetch(url);
      const details = await response.json();
  
      if (details && actor) {
        setShow({
          name : details.name,
          biography : details.biography,
          birthday : details.birthday,
          image : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${details.profile_path}`,
          known_for : actor.known_for
  
        });
      }
    }

  return (
    <div className="container">
      <ActorList actors={actors} getActor={getActor}/>
      <ActorInfo show={show} />
    </div>
    
  );
}

export default App;
