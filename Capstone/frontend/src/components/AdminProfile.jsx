import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";


export default function AdminProfile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/admin-api/details", {
        withCredentials: true,
      });
      setUsers(res.data.payload);
      setError("");
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Block/activate user
  const toggleUserStatus = async (id, currentStatus) => {
    try {
      await axios.patch(
        `http://localhost:4000/admin-api/block/${id}`,
        { isUserActive: !currentStatus },
        { withCredentials: true }
      );
      fetchUsers(); // refresh list
    } catch (err) {
      setError("Failed to update user");
    }
  };

  // Logout handler
  const onLogout = async () => {
    await logout();
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          className="bg-[#ff3b30] text-white px-4 py-2 rounded hover:bg-[#d62c23] transition"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td className="border border-gray-300 px-4 py-2">{u.email}</td>
              <td className="border border-gray-300 px-4 py-2">{u.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className={`px-3 py-1 rounded ${
                    u.isUserActive
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                  onClick={() => toggleUserStatus(u._id, u.isUserActive)}
                >
                  {u.isUserActive ? "Block" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
