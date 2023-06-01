import ResponseCard from "../ResponseCard/ResponseCard"
import {useState} from "react"

export default function QuizCard({question}) {
    const [selected, setSelected] = useState('')
    return (
        <>
            <div>{question.question}</div>
            <div className="response-container">
                {question.response.map((option, idx) => (
                    <ResponseCard key={idx} option={option} selected={selected} setSelected={setSelected}/>
                ))}
            </div>
        </>
    )
}