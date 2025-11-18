import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.access_token);
      window.location.href = "/dashboard";
    } catch {
      setMessage("Invalid Username or Password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="backdrop-blur-lg bg-white/20 rounded-xl p-10 shadow-2xl w-96 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 bg-white/10 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-indigo-300"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-white/10 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-indigo-300"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold"
          >
            Login
          </button>

          <p className="text-red-200 text-center mt-3">{message}</p>

          <p className="text-center mt-4">
            New user?{" "}
            <a href="/register" className="text-yellow-300 font-semibold">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
