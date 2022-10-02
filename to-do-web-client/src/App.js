import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
    const [counts, setCounts] = useState(0);
    const [text, setText] = useState('FirstTask')
    function inc() {
        setCounts(counts + 1)
    }
    function dec() {
        setCounts(counts - 1)
    }

    return (
        <div className="App">
            <Counter/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>{text}</label>
            <input
                name="newText"
                onInput={event => setText(event.target.value)}
                value={text}
            ></input>
        </div>
    );
}

export default App;
