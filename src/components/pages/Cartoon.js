import React, { useEffect, useState} from "react";
import Movie from '../Movie';

const Featured_API = "https://api.themoviedb.org/3/discover/movie?api_key=bee8ae0e180f15cce41dace403016b99&with_genres=16";

export default function Consulting () {
    const [ movies, setMovies] = useState([]);


 useEffect(()=> {
  getMovies (Featured_API); }, []);

 const getMovies = (API) => {
  fetch (API)
  .then ((res) => res.json())
  .then ((data) => {
      console.log(data);
      setMovies(data.results);
  });
 }

 return (
    <>
<h1 className="cartoon">Cartoon Movie </h1>
<div className="movie-container">
  {movies.length > 0 && movies.map((movie) =>
 <Movie key={movie.id} {...movie} />)};
 </div>
    </>
);
}