import { useState, useEffect } from 'react'
import * as questions from '../Data/quiz-qustions'
import ResultCard from '../ResultCard/ResultCard'

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
        <div className="result-container">
            {movies.map((movie, idx) => (
                <ResultCard key={idx} movie={movie} />
            ))}
        </div>
    )
}