import React, { useState } from "react";
import './App.css';

const App = () => {
    const [count, setCount] = useState(0)

    // const helloWorld = () => {
    //     setCount(3000);
    // }
 
    // helloWorld();
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}

// import React from 'react';
// class App extends React.Component {
//     state = {
//         persons: [
//             {name: "Dan", age: 34},
//             {name: "Ben", age: 21}
//             ]
//     } 
//     render() {
//      return (
//      <div>
//         <h1>I'm a class component</h1>
//         <Person />
//         <Person />
//      </div>
//      );
//     }
// }

export default App;