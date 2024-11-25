//it is used for focusing elements, managing timers, and storing previous values.

//example : Accessing DOM Elements with useRef

import React, {useRef} from 'react';

function FocusInput(){
    const inputref = useRef (null);// initialize useRef with null

    const handleFoucs = () =>{
        inputref.current.focus();
    };
    return(
        <div>
            <input ref={inputref} type="text" placeholder='click the botton to foucs '/>
            <button onClick={handleFoucs}>Focus Input</button>
        </div>
    )
}
export default FocusInput