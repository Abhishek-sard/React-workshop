// allow to extract and reuse logic between components. they are regular javascript function that use hooks internally, but their name must start with "use"

// useMEMO Hook = is used to memoize expensive calculation and prevent them from running on every render unless dependencies change.
import React, {useState, useMemo} from "react";

function ExpensiveCalculation(){
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');

    //memoizing the calculation to avoid re-calculating on every render

    const ExpensiveCalculation = useMemo(()=>{
        console.log('Calculating.....');
        return number * 2;

    }, [number]);//recalculating only when 'number' changes

    return(
        <div>
            <h2>Expensive Calculation</h2>
            <p>Result: {ExpensiveCalculation}</p>
            <input type="number" value={number} onChange={(e)=> setNumber(parseInt(e.target.value))} />
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
    )
}
export default ExpensiveCalculation