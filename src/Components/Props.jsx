//props short form of properties are used to pass data from one component to another.
//we can use props to pass data from parent to child component.


import React from "react";
//child component
function Greeting(props){
    return <h1>Hello, {props.name}!</h1>
}

//parents component
function App(){
    return(
      <div>
        <Greeting name = "Abhishek"/>
        <Greeting name = "sardar"/>
        <Greeting name = "sajana"/>
      </div>  
    );
}
export default App