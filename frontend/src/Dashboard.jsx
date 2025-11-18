import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import WellnessScore from "./components/WellnessScore";
import axios from "axios";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [form, setForm] = useState({
    age: "",
    gender: "",
    sleep_hours: "",
    screen_time: "",
    physical_activity: "",
    stress_level: "",
    academic_score: "",
    emotional_score: "",
    family_interaction: "",
    nutrition_score: "",
  });

  const [prediction, setPrediction] = useState(null);

  // AUTO GENERATING WELLNESS SCORE
  function calculateWellnessScore(pred) {
    if (pred === 2) return 90;     // high wellness
    if (pred === 1) return 65;     // moderate wellness
    if (pred === 0) return 30;     // low wellness
    return 50;                     // default
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", form);
      setPrediction(res.data.prediction);
    } catch (err) {
      console.log(err);
      alert("Error connecting to backend");
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="pt-20 flex min-h-screen bg-gradient-to-br 
        from-purple-500 via-pink-400 to-orange-300 
        dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
      >
        <Sidebar />

        <div className="flex-1 px-6 pb-20 flex flex-col items-center">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-white drop-shadow-xl mt-10"
          >
            📊 Dashboard
          </motion.h1>

          {/* AUTO WELLNESS SCORE */}
          <div className="mt-10">
            <WellnessScore score={calculateWellnessScore(prediction)} />
          </div>

          {/* FORM */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 dark:bg-gray-800/70 dark:text-white 
            backdrop-blur-xl p-10 rounded-2xl shadow-2xl mt-12 w-full max-w-3xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              🧠 Child Mental Health Prediction
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {Object.keys(form).map((key, index) => (
                <div key={index}>
                  <label className="block mb-2 font-semibold capitalize">
                    {key.replace("_", " ")}
                  </label>

                  <input
                    name={key}
                    type="number"
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-white dark:bg-gray-700 
                    dark:text-white border border-gray-300 dark:border-gray-600"
                  />
                </div>
              ))}

            </div>

            <button
              onClick={submit}
              className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white 
              p-3 rounded-xl text-xl font-semibold shadow-lg"
            >
              Predict
            </button>

            {prediction !== null && (
              <div className="mt-6 text-center text-xl font-bold dark:text-white">
                🎯 Prediction Result: {prediction}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
