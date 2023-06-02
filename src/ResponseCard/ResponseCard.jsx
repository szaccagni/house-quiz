import { useState, useEffect } from "react"

export default function ResponseCard({option, selected, setSelected, responses, setResponses, curQuestion}) {
    // const [responseCardClass, setResponseCardClass] = useState( selected === option.rId ? "reponse-card selected" : "reponse-card" ) 
    const [imgClass, setImgClass] = useState('zero-height')
    const [isLoading, setIsLoading] = useState(true);
    const responseCardClass = selected === option.rId ? "reponse-card selected" : "reponse-card"

    useEffect(function() {
        setImgClass('zero-height')
    }, [option])

    // function ResponseCardClassLogic() {
    //     if (!isLoading) {
    //         return selected === option.rId ? "reponse-card selected" : "reponse-card"
    //     } else {
    //         return 'loading'
    //     }
    // }

    function handleImageLoad() {
        console.log('Image loaded!');
        setIsLoading(false);
        setImgClass('img-container')
    };


    function handleImageError() {
        console.log('Image failed to load!');
    };

    function handleClick() {
        const newResponses = {...responses}
        newResponses[curQuestion] = option.rId
        setResponses(newResponses)
        setSelected(option.rId)
    }
    return (
        <>
        <button onClick={handleClick} className={responseCardClass}>
            <div className={imgClass}>
                <img alt={option.title} src={option.img} className="response-img" onLoad={() => handleImageLoad()}  onError={handleImageError}></img>
            </div>
            {isLoading && <div>{option.title} Image Loading...</div>}
        </button> 
        </>
    )
}