//const { Component } = require("react")

import React, {useState, useEffect} from 'react';
import './Hooks.css'

// class Hooks extends React.Component {
//     state ={
//         nilai: 0
//     }

//     onUpdate = () => {
//         this.setState ({
//             nilai : this.state.nilai + 1
//         })
//     }

//     componentDidMount(){
//         document.title = `Title change: ${this.state.nilai}`
//     }

//     componentDidUpdate(){
//         document.title = `Title change: ${this.state.nilai}`
//     }

//     componentWillUnmount(){
//         document.title = `React JS Sanbercode`;
//     }

//     render(){
//         return(
//             <div className="p-hooks">
//                 <p>Nilai saat ini : {this.state.nilai}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }



const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `Title change: ${count}`
        return() => {
            document.title = `React JS Sanbercode`
        }
    })

    return(
            <div className="p-hooks">
                <p>Nilai saat ini : {count} </p>
                <button onClick={() => setCount(count+1)}>Update Nilai</button><br/>
                <p><i>Perubahan nilai tampil di title</i></p>
            </div>
    )
}

export default Hooks;

