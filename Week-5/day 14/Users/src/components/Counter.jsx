import { userState } from "reac";
import { useState } from "react";

function Counter() {
    //usestate 
    const {count , setCount} = useState(0);

    //functions to modify the state
    const increament = () =>{
        setCount(count+1);
    };

    const decreament = () =>{
        setCount(count+1);
    };

    return(
        <div className="bg-green-500 text-center p-10" ></div>
    )
}