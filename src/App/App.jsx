import './App.css';
import {useState} from 'react'
import QuizCard from '../QuizCard/QuizCard'
import Button from '@mui/material/Button';
import Result from '../Result/Result';

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [genres, setGenres] = useState({})

  function resetQuiz() {
    setShowQuiz(false)
    setShowResult(false)
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
      {showQuiz && <QuizCard setShowResult={setShowResult} setShowQuiz={setShowQuiz} setGenres={setGenres}/>}
      {showResult &&
        <>
          <Result genres={genres}/>
          <Button 
            id="reset-btn"
            variant="contained"
            onClick={resetQuiz}
          >
            Start Over
          </Button>
        </>
      }
    </div>
  );
}