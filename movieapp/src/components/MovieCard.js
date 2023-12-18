import React from 'react'
import { useState} from 'react';
 function MovieCard(props) {
 const Api_img="https://image.tmdb.org/t/p/w500/";
 
    const [isHovered, setIsHovered] = useState(false);
    const getReleaseYear = (releaseDate) => {
        return releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
      };
    
  return (
    <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="poster">
        {props.poster_path ? (
            <img src={Api_img + props.poster_path} alt={props.title}/>
            ) : (
                <div className="default-poster">No Image</div>
              )}
            {isHovered && (
          <div className="overlay">
            <p>{props.overview}</p>
          </div>
        )}

        </div>
        <div className="info">
            <p className="title">Title: {props.title}</p>
            <p className="vote">Rating: {props.vote_average}</p>
            <p className="vote">Released Year: {getReleaseYear(props.release_date)}</p>
        </div>
    </div>

  )
}
export default MovieCard;