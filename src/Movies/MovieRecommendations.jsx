import React, { useState, useEffect } from 'react';
import './MovieRecommendations.css';

const MovieRecommendations = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchedMovies = [
      {
        title: 'Movie 1',
        imdbRating: 7.5,
        link: 'https://www.imdb.com/movie1',
        thumbnail: '/logo192.png',
        genres: ['Action', 'Adventure'],
      },
      {
        title: 'Movie 2',
        imdbRating: 8.2,
        link: 'https://www.imdb.com/movie2',
        thumbnail: 'https://example.com/thumbnail2.jpg',
        genres: ['Drama', 'Romance'],
      },
    ];

    setMovies(fetchedMovies);
  }, []);

  return (
    <div className="movie-recommendations">
      <h1 className="title">Movie Recommendations</h1>
      <ul className="movie-list">
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <div className="thumbnail-container">
              <img src={movie.thumbnail} alt={`Thumbnail for ${movie.title}`} className="thumbnail" />
            </div>
            <div className="movie-details">
              <div>
                <h3 className="movie-title">{movie.title}</h3>
                <p className="imdb-rating">IMDb Rating: {movie.imdbRating}</p>
                <p className="genres">Genres: {movie.genres.join(', ')}</p>
                <a href={movie.link} className="imdb-link" target="_blank" rel="noopener noreferrer">
                  View on IMDb
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieRecommendations;
