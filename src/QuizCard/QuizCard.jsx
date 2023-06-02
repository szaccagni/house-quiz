import ResponseCard from "../ResponseCard/ResponseCard"
import Button from '@mui/material/Button';
import { useState } from "react"
import * as questions from '../Data/quiz-qustions'
import { LinearProgress } from '@mui/material';

export default function QuizCard({ setShowResult, setShowQuiz, setGenres, getMovieData, pg }) {
    const data = questions.getData()
    const [curQuestion, setCurQuestion] = useState(0)
    const [responses, setResponses] = useState({})
    const [selected, setSelected] = useState('')
    const [question, setQuestion] = useState(data[curQuestion])

    const disabled = curQuestion === 0 ? true : false

    function handleBack() {
        setCurQuestion(curQuestion - 1)
        setSelected(responses[curQuestion - 1])
        setQuestion('')
        setQuestion(data[curQuestion - 1])
    }

    function handleNext() {
        if (curQuestion + 1 < data.length) {
            setCurQuestion(curQuestion + 1)
            setQuestion('')
            setQuestion(data[curQuestion + 1])
            responses[curQuestion + 1] ? setSelected(responses[curQuestion + 1]) : setSelected('')
        } else {
            setSelected('')
            setShowResult(true)
            setShowQuiz(false)
            setCurQuestion(0)
            getResponseTotals()
        }
    }

    function getResponseTotals() {
        const frequencyMap = Object.values(responses).reduce((acc, value) => {
            acc[value] = (acc[value] || 0) + 1
            return acc
        }, {});
        const mostFrequentValue = Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b)
        const genres = questions.getGenres(mostFrequentValue)
        setGenres(genres)
        getMovieData(genres, pg)
    }
    const progress = (curQuestion / data.length) * 100;

    return (
        <div className='quiz'>
            <div className="question-container"><div>{question.question}</div></div>
            <LinearProgress variant="determinate" value={progress} id="progress-bar"/>
            <div className="response-container">
                {question.response.map((option, idx) => (
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
                            onClick={handleNext}
                            variant="contained"
                        >
                            next
                        </Button>}
                </div>
            </div>
        </div>
)

}