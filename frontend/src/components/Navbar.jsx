import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode, MdNotifications } from "react-icons/md";
import ProfileDropdown from "./ProfileDropdown";
import NotificationsDropdown from "./NotificationsDropdown";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-md px-6 py-4 flex justify-between items-center transition-all">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Child Wellness AI
      </h1>

      <div className="flex items-center gap-5">

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-110 transition-all"
        >
          {theme === "dark" ? (
            <MdLightMode className="text-yellow-400 text-2xl" />
          ) : (
            <MdDarkMode className="text-gray-800 text-2xl" />
          )}
        </button>

        {/* NOTIFICATIONS */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-all"
          >
            <MdNotifications className="text-xl text-gray-800 dark:text-white" />
          </button>

          {showNotifications && <NotificationsDropdown />}
        </div>

        {/* PROFILE DROPDOWN */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-pink-400 hover:scale-110 transition-all"
          />
          
          {showProfile && <ProfileDropdown />}
        </div>
      </div>
    </nav>
  );
}
