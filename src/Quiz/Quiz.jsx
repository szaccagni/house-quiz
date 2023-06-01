import * as questions from '../Data/quiz-qustions'
import QuizCard from '../QuizCard/QuizCard'

export default function Quiz() {
    const data = questions.getData()
    
    return (
        <div className='quiz'>
            {data.map((question, idx) => (
                <QuizCard key={idx} question={question}/>
            ))}
        </div>
    )
}