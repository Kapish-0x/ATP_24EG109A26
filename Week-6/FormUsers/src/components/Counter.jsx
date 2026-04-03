import { useState } from "react";

function Counter() {
    //usestate 
    const {count , setCount} = useState(0);

    //functions to modify the state
    const increament = () =>{
        setCount(count+1);
    };
    const decreament = () =>{
        setCount(count-1);
    };

    console.log("counter component");

    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">Count: [count]</h1>
            <button className="bg-green-400 px-6 py-3 mr-10" onClick={increament}></button>
            <button className="bg-red-500 px-6 py-3 mr-10" onClick={decreament}></button>
        </div>
    )
}



export default Counter;