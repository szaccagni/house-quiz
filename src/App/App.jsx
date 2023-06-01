import './App.css';
import {useState} from 'react'
import Quiz from '../Quiz/Quiz';

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  return (
    <div className="App">
      <h1>Build your dream house and we'll give you 5 movies to watch this week!</h1>
      {!showQuiz && <button onClick={() => setShowQuiz(true)}>Start Quiz!</button>}
      {showQuiz && <Quiz/>}
    </div>
  );
}