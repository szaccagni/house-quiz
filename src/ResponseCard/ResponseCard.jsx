export default function ResponseCard({option, selected, setSelected, responses, setResponses, curQuestion}) {
    const responseCardClass = selected === option.title ? "reponse-card selected" : "reponse-card"

    function handleClick() {
        const newResponses = {...responses}
        newResponses[curQuestion] = option.title
        setResponses(newResponses)
        setSelected(option.title)
    }
    return (
        <button onClick={handleClick} className={responseCardClass}>
            <div className="img-container">
                <img alt={option.title} src={option.img} className="response-img"></img>
            </div>
        </button>
    )
}