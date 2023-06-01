import ResponseCard from "../ResponseCard/ResponseCard"
import Button from '@mui/material/Button';
import {useState} from "react"

export default function QuizCard({question, getNextQuestion}) {
    const [selected, setSelected] = useState('')

    function handleClick() {
        setSelected('')
        getNextQuestion()
    }
    return (
        <>
            <div className="question-container"><div>{question.question}</div></div>
            <div className="response-container">
                {question.response.map((option, idx) => (
                    <ResponseCard key={idx} option={option} selected={selected} setSelected={setSelected}/>
                ))}
                {selected !== '' && 
                    <div className="next-btn-container">
                        <Button 
                            className="next-btn"
                            onClick={handleClick}
                            variant="contained"
                        >
                            next
                        </Button>
                    </div> }
            </div>
        </>
    )
}