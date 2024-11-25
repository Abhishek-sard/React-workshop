//useEffect is used for side effects like data fetching,
// subscriptions,and manually changing the DOM in react
//  components.

//example: fetching data with useEffect

import React, {useState, useEffect} from 'react'

function DataFetching(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        //fetching data from an API
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) =>{
            setData(data);
            setLoading(false); //set loading is false after data is loading

        });
    }, []); //empty array as dependency means it runs once after initial render
    if(loading){
        return <p>Loading....</p>;
    }
    return(
        <ul>
            {data.slice(0, 5).map((post) =>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}
export default DataFetching;


