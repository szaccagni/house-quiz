import './MovieRecommendations.css';
import Button from '@mui/material/Button';

export default function MovieRecommendations({movie, setSimilar, getSimilarMovieData}) {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  async function handleClick() {
    await getSimilarMovieData(movie.id, 1)
    setSimilar({id: movie.id, name: movie.original_title})
  }

  const customStyle = {
    fontWeight: 'bold',
  };

  return (
    <div className="result-card">
      <div className="result-img-container">
        <div className="movie-recommendations">
          <div className="thumbnail-container">
          <img src={poster} alt={`Thumbnail for ${movie.original_title}`} className="thumbnail" />
          </div>
          <div className="movie-details">
              <div>
                <h3 className="movie-title">{movie.original_title}</h3>
                <p className="imdb-rating"><span style={customStyle}>IMDb Rating:</span> {movie.vote_average}</p>
                <p><span style={customStyle}>Description: </span>{movie.overview}</p>
              </div>
              <Button onClick={handleClick}>view similar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};