import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p> {/* Corrected to movie.Year */}
            </div>
            <div>
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
                    alt={movie.Title} 
                /> {/* Corrected URL and movie.Poster */}
            </div>
            <div>
                <span>{movie.Type}</span> {/* Corrected movie.Type */}
                <h3>{movie.Title}</h3> {/* Corrected movie.Title */}
            </div>
        </div>
    );
}

export default MovieCard;
