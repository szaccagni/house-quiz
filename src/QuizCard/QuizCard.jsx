import ResponseCard from "../ResponseCard/ResponseCard"

export default function({question}) {
    return (
        <>
            <div>{question.question}</div>
            <div className="response-container">
                {question.response.map((option, idx) => (
                    <ResponseCard key={idx} option={option}/>
                ))}
            </div>
        </>
    )
}