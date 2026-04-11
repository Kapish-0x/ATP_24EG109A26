import { useState } from "react";

function TestRefTypes() {
    //state
    const [user,setUser] = useState({username: "Kapish" , age:"20" , city: "hyd"}); //object
    const[marks,setMarks] = useState([10,20,30]); //array

    //update user state
    const updateUser = () => {
        setUser({...user,username:"Rawat", age: "21" , city: "uk"});
    };

    //update marks
    const updateMarks = () => {
        setMarks([...marks,40]);
    };

    return(
        <div>
            <p>username: {user.username}</p>
            <p>age: {user.age}</p>
            <p>city: {user.city}</p>
             <button className="p-5 bg-amber-500" onClick={updateUser}>
                Update User
            </button>

            {
                marks.map((mark) => (
                    <p className="text-3xl" key={mark}>
                    {mark}
                    </p>
                ))
            }
            <button className="p-5 bg-amber-500" onClick={updateMarks}>
                Update Marks
            </button>
        </div>
    )
}


export default TestRefTypes;