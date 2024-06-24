import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?apikey=707f112d';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        console.log(`Searching for ${title}`);
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            console.log(data); // Log the response data
            setMovies(data.Search || []); // Handle case where data.Search is undefined
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);

    return (
        <div className="app">
            <h1>MovieNet</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;
