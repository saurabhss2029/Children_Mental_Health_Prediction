import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Child Wellness AI</h1>
        <p className="text-lg mb-6">Predict & improve children's mental health using AI</p>

        <button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}
