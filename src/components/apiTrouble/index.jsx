import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
import './App.css'
import { useEffect, useState } from "react";

const App = () => {
  const apiKey = "be071941";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch(e){
      console.error(e)
    }
  };
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
     <Form moviesearch={getMovie}/> 
     <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App