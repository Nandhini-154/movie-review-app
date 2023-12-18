import React from 'react'
import {useEffect, useState} from 'react';
import MovieCard from './MovieCard.js'
 function MoviesHome() {
    const [movies,setMovies]=useState([]);
const [term,setTerm]=useState('');

  const API_URL="https://api.themoviedb.org/3/discover/movie?api_key=28b3bd89b675893ce3a50b27f82dec30";
  const Api_search= "https://api.themoviedb.org/3/search/movie?api_key=28b3bd89b675893ce3a50b27f82dec30&query="  ;
  useEffect(()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  },[])
  console.log(movies);
  const handleSearch = (e) =>{
    e.preventDefault()
    if (!term.trim()) {
        // Empty query
        alert('Please enter a search query.');
        return;
      }
    fetch(Api_search + term)
     .then(res =>res.json())
     .then((data) => {
        if (data.results && data.results.length > 0) {
          setMovies(data.results);
        } else {
          // No results
          alert('No movies found for the given query.');
          setMovies([]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }
  return (
    <div className='div'>
    <div className="search_nav">
      <div className='left'>
        <h1>CineGrade</h1>
     </div>
     <div className='right'>
       <form onSubmit={handleSearch}>  
        <input onChange={(e)=>setTerm(e.target.value)}/>
        <button>Search</button>
       </form>
     </div>  </div>
     <div className="movies">
         {movies.map((movie)=>{
             return <MovieCard key={movie.id} {...movie} />
         })}
     </div>
     </div>
  )
}
export default MoviesHome;