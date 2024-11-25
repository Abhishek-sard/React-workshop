//state build in a object which store a proper value that belong to the components.
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [subtract, setSubtract] = useState(0);

    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
            <div>
                <p>You subtracted {subtract} times</p>
                <button onClick={() => setSubtract(subtract - 1)}>Decrease</button>
            </div>
        </div>
    );
}

export default Counter;
