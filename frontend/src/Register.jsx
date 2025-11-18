import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const register = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/register", {
        username,
        password,
      });
      window.location.href = "/login";
    } catch {
      setMessage("User already exists");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-600">
        <div className="backdrop-blur-lg bg-white/20 rounded-xl p-10 shadow-2xl w-96 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 bg-white/10 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-purple-300"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-white/10 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-purple-300"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={register}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg font-semibold"
          >
            Register
          </button>

          <p className="text-red-200 text-center mt-3">{message}</p>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-300 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
