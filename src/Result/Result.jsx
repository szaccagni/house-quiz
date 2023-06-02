import { useState, useEffect } from 'react'
import MovieRecommendations from "../Movies/MovieRecommendations"
import Button from '@mui/material/Button';

export default function Result({genres, movies, getMovieData, pg, setPg}) {
    const [recommendations, setRecommendations] = useState([])
    const [start, setStart] = useState(0)

    useEffect(function() {
        const newMovies = movies.slice(start,start+5)
        if(newMovies.length > 0) setRecommendations(newMovies)
    }, [movies, start])

    async function getMoreResults() {
        if (start < 15) {
            setStart(start+5)
        } else {
            setPg(pg+1)
            await getMovieData(genres, pg+1)
            setStart(0)
        }
    }

    return (
        <div>
            <div className="result-container">
                {recommendations.map((movie, idx) => (
                    // <ResultCard key={idx} movie={movie} />
                    <MovieRecommendations key={idx} movie={movie} />
                ))}
            </div>
            <Button
                id="more-results"
                variant="contained"
                onClick={getMoreResults}
            >
                Show Me More Options!
            </Button>
        </div>
        
    )
}