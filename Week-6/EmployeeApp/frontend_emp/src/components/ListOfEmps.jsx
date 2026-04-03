import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getEmps = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:4000/emp/read");
      if (res.status === 200) {
        setEmps(res.data.payload || []);
      }
    } catch (err) {
      console.error("Error fetching employees:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getEmps();
  }, [getEmps]);

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  const deleteEmpByEmail = async (email) => {
    try {
      const res = await axios.delete(`http://localhost:4000/emp/${email}`);
      if (res.status === 200) {
        // Refresh the list immediately after successful deletion
        getEmps();
      }
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl text-center mb-6 font-bold">List of Employees</h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {emps.map((empObj) => (
          <div
            key={empObj._id || empObj.email}
            className="bg-gray-200 p-5 border shadow-sm rounded-2xl"
          >
            <p className="text-sm text-gray-700">{empObj.email}</p>
            <p className="text-lg font-medium mb-4">{empObj.name}</p>
            
            <div className="flex justify-between gap-2">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-green-500 hover:bg-green-600 rounded-xl px-3 py-2 text-white text-sm"
              >
                View
              </button>
              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-yellow-500 hover:bg-yellow-600 rounded-xl px-3 py-2 text-white text-sm"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteEmpByEmail(empObj.email)} 
                className="bg-red-500 hover:bg-red-600 rounded-xl px-3 py-2 text-white text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;