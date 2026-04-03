function Navbar() {
    return(
        <div className="flex justify-between items-center px-8 py-4 bg-gray-700 text-white">
            Logo
            <div className="flex gap-6 font-medium">
                <ul className="flex gap-6">
                    <li><a href="">Home</a></li>
                    <li><a href="">Signup</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </div>
    );
}


export default Navbar;