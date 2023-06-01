import { useEffect } from 'react'
import * as questions from '../Data/quiz-qustions'

export default function Result({genres}) {
    const movies = []
    useEffect(function() {
        async function getIds() {
            const ids = await questions.getMovies(genres)
            // ids.forEach(id => movies.push(id))
        }    
        getIds()
    })

    
    return (
        <div>RESULT!!!</div>
    )
}