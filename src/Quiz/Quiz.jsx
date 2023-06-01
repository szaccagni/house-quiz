import { useState } from 'react'
import * as questions from '../Data/quiz-qustions'
import QuizCard from '../QuizCard/QuizCard'

export default function Quiz({setShowResult, setShowQuiz}) {
    const [curQuestion, setCurQuestion] = useState(0)
    const data = questions.getData()

    function getNextQuestion() {
        if (curQuestion+1 < data.length) {
            setCurQuestion(curQuestion+1)
        } else {
            setShowResult(true)
            setShowQuiz(false)
            setCurQuestion(0)
        }
        
    }
    
    return (
        <div className='quiz'>
            <QuizCard question={data[curQuestion]} getNextQuestion={getNextQuestion}/>
        </div>
    )
}