import { NavLink } from "react-router-dom";

function Header() {
  const baseClasses =
    "px-4 py-2 rounded-lg transition-colors duration-300 font-semibold";
  const activeClasses = "bg-blue-600 text-white shadow-md";
  const inactiveClasses =
    "text-gray-700 hover:bg-blue-100 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-end gap-6 p-4">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="create-emp"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Create Employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="list"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Employee List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
