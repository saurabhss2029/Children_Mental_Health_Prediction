import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

export default function WellnessScore({ score = 50 }) {
  // DYNAMIC COLORS BASED ON SCORE
  let color = "#22c55e";        // green (good)
  let emoji = "😊";             // happy

  if (score < 40) {
    color = "#ef4444";          // red (bad)
    emoji = "😟";
  } else if (score < 70) {
    color = "#f59e0b";          // yellow (medium)
    emoji = "😐";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 dark:bg-gray-800/70 dark:text-white
      backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-full max-w-sm flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-3">🌟 Wellness Score</h2>

      <p className="text-6xl mb-4">{emoji}</p>

      {/* CIRCLE METER */}
      <div className="w-52 h-52 mb-4">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textColor: "#ffffff",
            pathColor: color,
            trailColor: "#cbd5e1",
            textSize: "20px",
            pathTransitionDuration: 0.5,
          })}
        />
      </div>

      {/* MESSAGE */}
      <p className="mt-2 text-center text-gray-700 dark:text-gray-300 leading-relaxed">
        This score represents the child’s overall mental and emotional 
        well-being based on recent activity patterns and prediction results.
      </p>
    </motion.div>
  );
}
