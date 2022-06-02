import React, { useState, useEffect} from "react";
import ActorList from "./ActorList";
import ActorInfo from "./ActorInfo";


function App() {
  const [actors, setActors] = useState([]);

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

  return (
    <div className="container">
      <ActorList actors={actors} />
      <ActorInfo />
    </div>
  );
}

export default App;
