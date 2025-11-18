import { NavLink } from "react-router-dom";
import { MdDashboard, MdLogout, MdAnalytics, MdHome } from "react-icons/md";

export default function Sidebar() {
  return (
    <div
      className="w-64 bg-white dark:bg-gray-800 dark:text-gray-200 
      shadow-2xl p-6 h-screen fixed left-0 top-0 pt-24 
      transition-all border-r border-gray-300 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold mb-10 text-gray-800 dark:text-gray-200">
        Menu
      </h2>

      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 
          dark:bg-gray-700 hover:bg-pink-200 dark:hover:bg-gray-600 
          transition-all font-medium"
        >
          <MdHome size={22} /> Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 
          dark:bg-gray-700 hover:bg-purple-200 dark:hover:bg-gray-600 
          transition-all font-medium"
        >
          <MdDashboard size={22} /> Dashboard
        </NavLink>

        <NavLink
          to="/analytics"
          className="flex items-center gap-3 p-3 rounded-xl bg-gray-100
          dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600 
          transition-all font-medium"
        >
          <MdAnalytics size={22} /> Analytics
        </NavLink>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="flex items-center gap-3 p-3 rounded-xl bg-red-500 
          text-white hover:bg-red-600 transition-all font-medium mt-4"
        >
          <MdLogout size={22} /> Logout
        </button>
      </nav>
    </div>
  );
}
