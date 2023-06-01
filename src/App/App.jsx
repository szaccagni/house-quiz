import './App.css';
import {useState} from 'react'
import Quiz from '../Quiz/Quiz';
import Button from '@mui/material/Button';

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showResult, setShowResult] = useState(false)

  function resetQuiz() {
    setShowQuiz(false)
    setShowResult(false)
  }

  return (
    <div className="App">
      {!showQuiz && !showResult && 
        <div className='quiz-title-container'>
          <div className="quiz-title">Build your dream house and we'll give <br></br> you 5 movies to watch this week!</div>
          <Button 
            onClick={() => setShowQuiz(true)} 
            variant="contained"
            // className="quiz-title-btn"
          >Start Quiz!</Button>
        </div>
      }
      {showQuiz && <Quiz setShowResult={setShowResult} setShowQuiz={setShowQuiz}/>}
      {showResult &&
        <>
          <div>result</div>
          <button onClick={resetQuiz}>start over</button>
        </>
      }
    </div>
  );
}