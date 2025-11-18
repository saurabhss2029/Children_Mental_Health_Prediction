import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function Analytics() {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("analytics_report.pdf");
    });
  };

  return (
    <>
      <Navbar />

      <div
        className="pt-20 flex min-h-screen w-full transition-all 
        bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <Sidebar />

        <div className="flex-1 px-6 flex flex-col items-center">

          {/* Title + Download PDF */}
          <div className="flex justify-between items-center w-full max-w-6xl mt-5">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-white drop-shadow-lg"
            >
              📊 Analytics Dashboard
            </motion.h1>

            <button
              onClick={downloadPDF}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 
              px-5 py-3 rounded-xl font-semibold shadow-lg transition-all"
            >
              📄 Export PDF
            </button>
          </div>

          {/* CONTENT CONTAINER FOR PDF */}
          <div ref={pdfRef} className="max-w-6xl w-full">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

              {/* BAR CHART */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white/80 dark:bg-gray-800/70 dark:text-white 
                rounded-2xl shadow-xl backdrop-blur-xl"
              >
                <h2 className="text-2xl font-semibold mb-4">Age Distribution</h2>

                <Bar
                  data={{
                    labels: ["5-8", "9-12", "13-15", "16-18"],
                    datasets: [
                      {
                        label: "Children Count",
                        data: [30, 50, 35, 20],
                        backgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56",
                          "#A78BFA",
                        ],
                      },
                    ],
                  }}
                />
              </motion.div>

              {/* PIE CHART */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white/80 dark:bg-gray-800/70 dark:text-white 
                rounded-2xl shadow-xl backdrop-blur-xl"
              >
                <h2 className="text-2xl font-semibold mb-4">Mental State Ratio</h2>

                <Pie
                  data={{
                    labels: ["Good", "Moderate", "Critical"],
                    datasets: [
                      {
                        data: [60, 25, 15],
                        backgroundColor: ["#4ADE80", "#60A5FA", "#F87171"],
                      },
                    ],
                  }}
                />
              </motion.div>

              {/* LINE CHART */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white/80 dark:bg-gray-800/70 dark:text-white 
                rounded-2xl shadow-xl backdrop-blur-xl col-span-1 lg:col-span-2"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  Stress Level Over Time
                </h2>

                <Line
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                      {
                        label: "Stress Level",
                        data: [20, 30, 45, 40, 50, 35],
                        borderColor: "#F472B6",
                        backgroundColor: "rgba(244,114,182,0.3)",
                        tension: 0.4,
                      },
                    ],
                  }}
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
