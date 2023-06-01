import { useState, useEffect } from 'react'
import * as questions from '../Data/quiz-qustions'
import MovieRecommendations from "../Movies/MovieRecommendations"

export default function Result({genres}) {
    const [movies, setMovies] = useState([])

    useEffect(function() {
        async function getIds() {
            const ids = await questions.getMovies(genres)
            setMovies(ids.results.slice(0,5))
        }    
        getIds()
    })


    return (
        <div>
            <h1 className="result-title">Here are some movies chosen for you!</h1>
            <div className="result-container">
            
            {movies.map((movie, idx) => (
                // <ResultCard key={idx} movie={movie} />
                <MovieRecommendations key={idx} movie={movie} />
            ))}
        </div>
        </div>
        
    )
}