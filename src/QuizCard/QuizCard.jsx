import ResponseCard from "../ResponseCard/ResponseCard"
import {useState} from "react"

export default function QuizCard({question, getNextQuestion}) {
    const [selected, setSelected] = useState('')

    function handleClick() {
        setSelected('')
        getNextQuestion()
    }
    return (
        <>
            <div>{question.question}</div>
            <div className="response-container">
                {question.response.map((option, idx) => (
                    <ResponseCard key={idx} option={option} selected={selected} setSelected={setSelected}/>
                ))}
                {selected !== '' && <div className="next-btn-container"><button onClick={handleClick}>next</button></div> }
            </div>
        </>
    )
}