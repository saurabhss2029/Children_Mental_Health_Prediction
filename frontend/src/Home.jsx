import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Child Mental Health Predictor</h1>
        <p className="text-xl max-w-2xl mb-8">
          An AI-powered platform that predicts a child's wellness score based on lifestyle & emotional factors.
        </p>

        <div className="flex gap-6">
          <a
            href="/login"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200"
          >
            Get Started
          </a>
          <a
            href="/dashboard"
            className="bg-transparent border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600"
          >
            Try Prediction
          </a>
        </div>
      </div>
    </>
  );
}
