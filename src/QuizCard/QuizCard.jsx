import ResponseCard from "../ResponseCard/ResponseCard"
import Button from '@mui/material/Button';
import { useState } from "react"
import * as questions from '../Data/quiz-qustions'

export default function QuizCard({setShowResult, setShowQuiz}) {
    const data = questions.getData()
    const [curQuestion, setCurQuestion] = useState(0)
    const [responses, setResponses] = useState ({})
    const [selected, setSelected] = useState('')
    
    const disabled = curQuestion === 0 ? true : false

    function getNextQuestion(num) {
        if (curQuestion+1 < data.length) {
            setCurQuestion(curQuestion+num)
        } else {
            setShowResult(true)
            setShowQuiz(false)
            setCurQuestion(0)
        }
        
    }

    function handleBack() {
        getNextQuestion(-1)
    }

    function handleClick() {
        setSelected('')
        getNextQuestion(1)
    }
    return (
        <div className='quiz'>
            <div className="question-container"><div>{data[curQuestion].question}</div></div>
            <div className="response-container">
                {data[curQuestion].response.map((option, idx) => (
                    <ResponseCard 
                        key={idx} 
                        option={option} 
                        selected={selected} 
                        setSelected={setSelected}
                        responses={responses}
                        setResponses={setResponses}
                        curQuestion={curQuestion}
                    />
                ))}
                 
                    <div className="next-btn-container">
                        <Button 
                            id="back-btn"
                            variant="outlined" 
                            onClick={handleBack}
                            disabled={disabled}
                        >
                            Back
                        </Button>
                        {selected !== '' &&
                        <Button 
                            id="next-btn"
                            onClick={handleClick}
                            variant="contained"
                        >
                            next
                        </Button>}
                    </div> 
            </div>
        </div>
    )
}