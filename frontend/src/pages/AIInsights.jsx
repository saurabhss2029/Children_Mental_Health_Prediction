import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { MdTrendingUp, MdTrendingDown, MdWarning, MdPsychology } from "react-icons/md";

export default function AIInsights() {
  const insights = [
    {
      title: "Stress Level Prediction",
      description:
        "Stress levels show a decreasing trend this week due to better sleep and reduced screen time.",
      icon: <MdTrendingDown className="text-green-400 text-4xl" />,
      color: "from-green-300 to-green-500",
    },
    {
      title: "Emotional Stability Insight",
      description:
        "Child's emotional stability is improving, indicated by consistent positive response patterns.",
      icon: <MdPsychology className="text-purple-400 text-4xl" />,
      color: "from-purple-300 to-purple-500",
    },
    {
      title: "Risk Assessment",
      description:
        "Mild risk detected based on recent behavioral indicators. Suggested to monitor daily routines.",
      icon: <MdWarning className="text-yellow-400 text-4xl" />,
      color: "from-yellow-300 to-orange-500",
    },
    {
      title: "Academic Impact Insight",
      description:
        "Academic performance trend correlates with healthier routines. Improvement expected this month.",
      icon: <MdTrendingUp className="text-blue-400 text-4xl" />,
      color: "from-blue-300 to-blue-600",
    },
  ];

  return (
    <>
      <Navbar />

      <div
        className="pt-20 flex min-h-screen w-full transition-all 
        bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-300
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <Sidebar />

        <div className="flex-1 px-6 pb-20 flex flex-col items-center">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-white drop-shadow-lg mt-8"
          >
            🧠 AI Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-white/90 mt-2 mb-10 text-center max-w-2xl"
          >
            Your personal AI assistant has analyzed recent trends and generated
            meaningful insights about the child's mental and emotional well-being.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

            {insights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`p-8 rounded-2xl shadow-2xl bg-white/70 dark:bg-gray-800/80 
                dark:text-white backdrop-blur-xl border-l-8 border-white/40 dark:border-gray-700`}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} 
                  flex items-center justify-center shadow-lg mb-4`}
                >
                  {item.icon}
                </div>

                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
