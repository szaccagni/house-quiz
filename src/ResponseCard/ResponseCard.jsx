export default function ResponseCard({option}) {
    return (
        <div className='reponse-card'>
            <div>{option.title}</div>
            <div className="img-container">
                <img src={option.img} className='response-img'></img>
            </div>
        </div>
    )
}