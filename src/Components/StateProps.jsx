import React, {useState} from 'react'

//child Component
function Greeting(props){
    return <h1>Hello, {props.name}!</h1>;
}

//parent Component
function App(){
    const [name, setName] = useState('Alice');
    return(
        <div>
            <Greeting name = {name}/> 
            <button onClick={()=> setName('Bob')}>Change Name</button>
        </div>
    );
}
export default App;