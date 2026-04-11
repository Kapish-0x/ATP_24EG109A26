import './App.css';
import Navbar from './components/Navbar.jsx';
import Usercom from './components/User.jsx';
import Footer from './components/Footer.jsx';
import Counter from './components/Counter.jsx';
import TestRefTypes from './components/TestRefTypes.jsx';
import APIDemo from './components/APIDemo.jsx'
import FormDemo from './components/FormDemo.jsx';
import ListOfUsers from './components/ListOfUsers.jsx';

// function App() {
//   const users=[
//     {
//     name: "Aarav Sharma",
//     email: "aarav.sharma@example.com",
//     image: "https://randomuser.me/api/portraits/men/11.jpg"
//   },
//   {
//     name: "Vivaan Patel",
//     email: "vivaan.patel@example.com",
//     image: "https://randomuser.me/api/portraits/men/12.jpg"
//   },
//   {
//     name: "Aditya Singh",
//     email: "aditya.singh@example.com",
//     image: "https://randomuser.me/api/portraits/men/13.jpg"
//   },
//   {
//     name: "Sai Kumar",
//     email: "sai.kumar@example.com",
//     image: "https://randomuser.me/api/portraits/men/14.jpg"
//   },
//   {
//     name: "Rohan Reddy",
//     email: "rohan.reddy@example.com",
//     image: "https://randomuser.me/api/portraits/men/15.jpg"
//   },
//   {
//     name: "Ananya Gupta",
//     email: "ananya.gupta@example.com",
//     image: "https://randomuser.me/api/portraits/women/11.jpg"
//   },
//   {
//     name: "Isha Verma",
//     email: "isha.verma@example.com",
//     image: "https://randomuser.me/api/portraits/women/12.jpg"
//   },
//   {
//     name: "Priya Nair",
//     email: "priya.nair@example.com",
//     image: "https://randomuser.me/api/portraits/women/13.jpg"
//   },
//   {
//     name: "Sneha Das",
//     email: "sneha.das@example.com",
//     image: "https://randomuser.me/api/portraits/women/14.jpg"
//   },
//   {
//     name: "Kavya Iyer",
//     email: "kavya.iyer@example.com",
//     image: "https://randomuser.me/api/portraits/women/15.jpg"
//   }
//   ];
// return (
//     <div>
//       <Navbar />
//       <p className='text-center text-4xl py-7 border-4 mx-5 my-4 border-blue-600'>List of Users</p>
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 min-h-screen">
//         {users.map((user) => (
//           <Usercom userObj={user} key={user.name} />
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return(
//     <div>
//       <Navbar />
//       <APIDemo />
//       <Footer />
//     </div>
//   );
// }


// export default App; 



function App() {
  return(
    <div>
      <ListOfUsers />
    </div>
  );
}


export default App; 
