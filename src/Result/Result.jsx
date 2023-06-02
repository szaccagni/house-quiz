import { useState, useEffect } from 'react'
import MovieRecommendations from "../Movies/MovieRecommendations"
import Button from '@mui/material/Button';

export default function Result({genres, movies, getMovieData, pg, setPg, getSimilarMovieData}) {
    const [recommendations, setRecommendations] = useState([])
    const [start, setStart] = useState(0)
    const [similar, setSimilar] = useState({
        name:'',
        id:''
    })

    useEffect(function() {
        const newMovies = movies.slice(start,start+5)
        setRecommendations(newMovies)
    }, [movies, start])

    async function getMoreResults() {
        if (start < 15) {
            setStart(start+5)
        } else {
            if (similar.id !== '') {
                console.log('1')
                await getMovieData(genres, pg+1)
            } else {
                console.log('2')
                await getSimilarMovieData(similar.id, pg+1)
            }
            setPg(pg+1)
            setStart(0)
        }
    }

    async function showOriginalResults() {
        await getMovieData(genres, 1)
        setPg(1)
        setStart(0)
        setSimilar('')
    }

    return (
        <div>
            {recommendations.length > 0 ? 
            <>
                <div className="result-container">
                    {recommendations.map((movie, idx) => (
                        <MovieRecommendations key={idx} movie={movie} setSimilar={setSimilar} getSimilarMovieData={getSimilarMovieData}/>
                    ))}
                </div>
                <div>
                    <Button
                        id="more-results"
                        variant="contained"
                        onClick={getMoreResults}
                    >
                        Show Me More Options {similar.name && <span>&nbsp;SIMILAR to {similar.name}&nbsp;</span>} !
                    </Button>
                </div>
                {similar.name &&   
                <div>     
                <Button
                    id="more-results"
                    variant="contained"
                    onClick={showOriginalResults}
                >
                    Show Me Original Results !
                </Button>
                </div>}
            </>
            :
            <>
                <div><img alt="no results" src="https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?compress=1&resize=800x600&vertical=top"></img></div>
                <Button
                    id="more-results"
                    variant="contained"
                    onClick={showOriginalResults}
                >
                    Show Me Original Results !
                </Button>
            </>
            }
        </div>
        
    )
}