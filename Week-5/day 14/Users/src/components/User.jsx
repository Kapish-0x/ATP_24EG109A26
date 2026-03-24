function Usercom(props) {  
    const {userObj} = props;    
    return(
        <div>
            <div className="shadow-lg shadow-gray-700 p-6 border-3 border-gray-700 rounded-xl">
                <img src={userObj.image} alt="" className="rounded-full"/>
                <h2 className="text-2xl text-amber-800">{userObj.name}</h2>
                <p className="font-bold">{userObj.email}</p>
            </div>
        </div>
    );
}


export default Usercom;