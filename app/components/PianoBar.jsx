import React, { useState } from 'react';

function PianoBar({ id, text, img, keyword, title }) {

    const [pianoInput, setPianoInput] = useState('');
    const [displayP, setDisplayP] = useState(false);
    const [inputResponse, setInputResponse] = useState('')
    const [showFeedBack, setShowFeedback] = useState(false)

    function handleChange(event) {
        setPianoInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setDisplayP(true)
        pianoInput.length > 10
            ? setInputResponse('We are glad to see another piano affocianado.')
            : setInputResponse('You say you like piano?')
    }

    return (
        <div id={`piano-bar-${id}`} className="piano-bar">
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={img} />
            <div id="button-flex">
                { !showFeedBack &&
                    <div id="feedback-button" onClick={() => setShowFeedback(!showFeedBack)}>Click if you like piano</div>
                }
            </div>
            {
                showFeedBack &&
                <form onSubmit={handleSubmit}>
                    <h3>{`What do you like about ${keyword}?`}</h3>
                    <label htmlFor={`piano-bar-${id}`}>
                        <input id={`piano-input-${id}`} onChange={handleChange} value={pianoInput} />
                    </label>
                    <button type="submit">Submit Statement</button>
                </form>
            }
            {displayP && <p>{inputResponse}</p>}
        </div>
    )
}

export default PianoBar;