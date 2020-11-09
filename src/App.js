import React, { useEffect, useState} from "react";
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Catergories from "./components/pages/Catergories";
import ContactUs from "./components/pages/ContactUs";
import Comedy from "./components/pages/Comedy";
import Cartoon from "./components/pages/Cartoon";
import SignUp from "./components/pages/SignUp";
import Thriller from "./components/pages/Thriller";
import Home from "./components/pages/Home";
import Action from "./components/pages/Action";
import Footer from "./Footer";


const Featured_API = "https://api.themoviedb.org/3/discover/movie?api_key=bee8ae0e180f15cce41dace403016b99&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

const Search_API = "https://api.themoviedb.org/3/search/movie?api_key=bee8ae0e180f15cce41dace403016b99&query=";


function App() {
 const [ movies, setMovies] = useState([]);
 const [ searchTerm, setSearchTerm] = useState('');

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

  
 const handleOnSubmit = (e) => {
   e.preventDefault();

   if(searchTerm) {
     getMovies(Search_API + searchTerm);

   setSearchTerm('');
  }
 };

 const handleOnChange = (e) => {
   setSearchTerm(e.target.value);
 };


 return (
  <>
<Router>
 <Navbar />
<Switch>
  <Route path='/' exact component={Home} />
  <Route path='/catergories' exact component={Catergories} />
  <Route path='/contactUs' exact component={ContactUs} />
  <Route path='/SignUp.' exact component={SignUp} />
  <Route path='/comedy' exact component={Comedy} />
  <Route path='/action' exact component={Action} />
  <Route path='/thriller' exact component={Thriller} />
  <Route path='/cartoon' exact component={Cartoon} />



</Switch>



  </Router>

    <header>
      <form onSubmit={handleOnSubmit}>
      <input 
      className="search" 
      type="search" 
      placeholder="Search..."
      value= {searchTerm}
      onChange={handleOnChange}
      
      />
      </form>
    </header>

    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) =>
     <Movie key={movie.id} {...movie} />)};
     </div>


     <Footer />
  
     </>
  );

}

export default App;
