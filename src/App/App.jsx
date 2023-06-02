import './App.css';
import {useState} from 'react'
import QuizCard from '../QuizCard/QuizCard'
import Button from '@mui/material/Button';
import Result from '../Result/Result';
import * as questions from '../Data/quiz-qustions'

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [genres, setGenres] = useState({})
  const [movies, setMovies] = useState([])
  const [pg, setPg] = useState(1)

  function resetQuiz() {
    setShowQuiz(false)
    setShowResult(false)
  }

  async function getMovieData(genreData, page) {
    const data = await questions.getMovies(genreData,page)
    setMovies(data.results)
  }

  return (
    <div className="App">
      {!showQuiz && !showResult && 
        <div className='quiz-title-container'>
          <div className="quiz-title">Build your dream house and we'll give you 5 movies to watch this week!</div>
          <Button 
            onClick={() => setShowQuiz(true)} 
            variant="contained"
            // className="quiz-title-btn"
          >Start Quiz!</Button>
        </div>
      }
      {showQuiz && <QuizCard setShowResult={setShowResult} setShowQuiz={setShowQuiz} setGenres={setGenres} getMovieData={getMovieData} pg={pg}/>}
      {showResult &&
        <>
          <Result genres={genres} movies={movies} getMovieData={getMovieData} pg={pg} setPg={setPg}/>
          <Button 
            id="reset-btn"
            variant="contained"
            onClick={resetQuiz}
          >
            Take the Quiz
          </Button>
        </>
      }
    </div>
  );
}