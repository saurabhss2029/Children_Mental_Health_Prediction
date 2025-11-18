import { useState } from "react";
import LogoutModal from "./LogoutModal";

export default function ProfileDropdown() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="absolute right-0 mt-3 bg-white dark:bg-gray-700 shadow-xl rounded-xl p-4 w-48 border dark:border-gray-600">
      <button className="w-full py-2 text-left hover:text-pink-500">My Profile</button>
      <button className="w-full py-2 text-left hover:text-pink-500">Settings</button>
      
      <button
        onClick={() => setShowLogout(true)}
        className="w-full py-2 text-left text-red-500 hover:text-red-400"
      >
        Logout
      </button>

      {showLogout && <LogoutModal onClose={() => setShowLogout(false)} />}
    </div>
  );
}
