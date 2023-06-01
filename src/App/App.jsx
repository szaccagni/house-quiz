import './App.css';
import {useState} from 'react'
import Quiz from '../Quiz/Quiz';

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showResult, setShowResult] = useState(false)

  function resetQuiz() {
    setShowQuiz(true)
    setShowResult(false)
  }

  return (
    <div className="App">
      <div>Build your dream house and we'll give you 5 movies to watch this week!</div>
      {!showQuiz && !showResult && <button onClick={() => setShowQuiz(true)}>Start Quiz!</button>}
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