import { useState } from "react";

function Counter() {
  const users = [
    {
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "Vivaan Patel",
      email: "vivaan.patel@example.com",
      image: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      name: "Aditya Singh",
      email: "aditya.singh@example.com",
      image: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      name: "Sai Kumar",
      email: "sai.kumar@example.com",
      image: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
      name: "Rohan Reddy",
      email: "rohan.reddy@example.com",
      image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      name: "Ananya Gupta",
      email: "ananya.gupta@example.com",
      image: "https://randomuser.me/api/portraits/women/11.jpg"
    }
  ];

  const [count, setCount] = useState(0);

  return (
    <div className="p-6">
      
      {/* Counter */}
      <h1 className="text-2xl font-bold mb-6">
        Selected Users: {count}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl shadow-md text-center"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>

            <button
              onClick={() => setCount(count + 1)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;