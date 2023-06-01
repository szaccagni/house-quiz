import MovieRecommendations from "../Movies/MovieRecommendations"

export default function ResultCard({movie}) {
    const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    
    return (
        <div className="result-card">
            <div className="result-img-container">
                {/* <img alt={movie.original_title} src={poster} className="result-img"></img> */}
                <MovieRecommendations 
                    title={movie.original_title} 
                    imgPath={poster}
                    description={movie.overview}
                    rating={movie.vote_average}
                     />
            </div>
        </div>
    )
}