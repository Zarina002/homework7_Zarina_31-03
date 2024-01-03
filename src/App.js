import React, { useState, useMemo, useCallback } from 'react';

const SimpleMemoCallbackExample = () => {
    const [text, setText] = useState('')
    const [length, setLength] = useState(0);


    const reversedText = useMemo(() => {
        console.log('Calculating reversed text...')
        return text.split('').reverse().join('')
    }, [text]);


    const handleInputChange = useCallback((e) => {
        const inputText = e.target.value
        setText(inputText)
        setLength(inputText.length)
    }, []);

    return (
        <div>
            <div>
                <label>
                    Type something:
                    <input type="text" value={text} onChange={handleInputChange} />
                </label>
            </div>
            <div>
                <p>Reversed Text: {reversedText}</p>
                <p>Length: {length}</p>
            </div>
        </div>
    )
};

export default SimpleMemoCallbackExample;