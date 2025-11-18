import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your *AI Child Advisor*. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom(), [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Fake typing delay
    setTimeout(() => {
      const botResponse = generateAIResponse(input);
      const botMsg = { sender: "bot", text: botResponse };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  // Basic AI logic (You can replace with your backend later)
  function generateAIResponse(question) {
    question = question.toLowerCase();

    if (question.includes("stress"))
      return "Children often experience stress due to academics or social pressure. Encourage relaxing activities like drawing, music, or a walk.";

    if (question.includes("sleep"))
      return "Healthy sleep is essential. Set a consistent bedtime, avoid screens 1 hour before sleep, and keep the room calm and quiet.";

    if (question.includes("anxiety"))
      return "Child anxiety can be reduced through slow breathing, reassurance, and giving them space to express their worries.";

    if (question.includes("study"))
      return "Short study sessions (30-40 minutes) with 5 minute breaks help improve focus. Don't forget appreciation and encouragement.";

    return "I understand. Could you tell me a bit more so I can give better guidance?";
  }

  return (
    <>
      <Navbar />

      <div
        className="pt-20 flex min-h-screen w-full bg-gradient-to-br 
        from-blue-400 via-purple-400 to-pink-400 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all"
      >
        <Sidebar />

        <div className="flex-1 px-6 pb-20 flex flex-col items-center">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-white drop-shadow-lg mt-6 mb-4"
          >
            👨‍⚕️ AI Child Advisor
          </motion.h1>

          <p className="text-white/90 mb-6">
            Ask anything about child mental health & wellness.
          </p>

          {/* CHAT BOX */}
          <div
            className="w-full max-w-3xl bg-white/70 dark:bg-gray-800/70
            backdrop-blur-xl shadow-xl rounded-2xl p-6 overflow-y-auto h-[70vh]"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-xl shadow-md text-sm whitespace-pre-wrap
                    ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-gray-200 dark:bg-gray-700 dark:text-white rounded-bl-none"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div ref={chatEndRef}></div>
          </div>

          {/* INPUT BAR */}
          <div className="mt-5 w-full max-w-3xl flex gap-3">
            <input
              className="flex-1 p-3 rounded-xl bg-white dark:bg-gray-700 
              dark:text-white shadow-lg outline-none"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 
              rounded-xl text-white font-semibold shadow-lg transition-all"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
