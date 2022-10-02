
import React, { useState } from 'react';

const Counter = function () {
    const [counts, setCounts] = useState(0);

    function inc() {
        setCounts(counts + 1)
    }
    function dec() {
        setCounts(counts - 1)
    }

    return (
        <div>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
            <label>{counts}</label>
        </div>
    )
}

export default Counter;