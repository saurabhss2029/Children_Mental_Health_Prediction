import React, { useState } from "react";
import { predict } from "./api";
import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import "./index.css";

import { Brain, Menu } from "lucide-react";

// Chart.js fix
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App() {
  const [form, setForm] = useState({
    age: 10,
    gender: 0,
    sleep_hours: 8.0,
    screen_time: 2.0,
    physical_activity: 1.0,
    stress_level: 2,
    academic_score: 75,
    emotional_score: 3,
    family_interaction: 3,
    nutrition_score: 3
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await predict(form);
      setResult(res);
    } catch (err) {
      alert("Prediction failed: " + err);
    }
    setLoading(false);
  };

  const getColor = (prediction) => {
    if (prediction === "healthy") return "#2ecc71";
    if (prediction === "moderate") return "#f1c40f";
    if (prediction === "at_risk") return "#e74c3c";
    return "#3498db";
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <Brain size={32} color="white" />
          <h2 className="nav-title">MindCare AI</h2>
        </div>
        <Menu size={28} className="nav-menu" />
      </nav>

      {/* MAIN CONTAINER */}
      <div className="premium-container">
        <motion.h1 className="premium-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Child Mental Health Predictor
        </motion.h1>

        <p className="premium-subtitle">AI-powered mental wellness assessment</p>

        {/* FORM */}
        <motion.form
          className="premium-form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {Object.keys(form).map((key) => (
            key === "gender" ? (
              <div className="premium-input" key={key}>
                <label>GENDER</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={onChange}
                  className="premium-select"
                >
                  <option value={-1}>-1 (Male)</option>
                  <option value={0}>0 (Female)</option>
                  <option value={1}>1 (Others)</option>
                </select>
              </div>
            ) : (
              <div className="premium-input" key={key}>
                <label>{key.replace(/_/g, " ").toUpperCase()}</label>
                <input
                  type="number"
                  name={key}
                  value={form[key]}
                  step="0.1"
                  onChange={onChange}
                />
              </div>
            )
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="premium-btn"
            type="submit"
          >
            {loading ? "Predicting..." : "Predict"}
          </motion.button>
        </motion.form>

        {/* RESULT */}
        {result && (
          <motion.div
            className="premium-result-card"
            style={{ borderColor: getColor(result.prediction) }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h2 style={{ color: getColor(result.prediction) }}>{result.prediction.toUpperCase()}</h2>

            {result.probabilities && (
              <div className="chart-container">
                <Pie
                  key={result.prediction}
                  data={{
                    labels: ["Healthy", "Moderate", "At Risk"],
                    datasets: [
                      {
                        data: result.probabilities.map((p) => p * 100),
                        backgroundColor: ["#2ecc71", "#f1c40f", "#e74c3c"],
                      }
                    ]
                  }}
                />
              </div>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
}
