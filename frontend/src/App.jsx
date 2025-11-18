import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";
import AIChat from "./pages/AIChat";
import ThemeProvider from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/analytics" element={<Analytics />} />
          <Route path="/insights" element={<AIInsights />} />
          <Route path="/advisor" element={<AIChat />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
