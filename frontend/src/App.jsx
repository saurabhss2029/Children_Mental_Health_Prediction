import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import ThemeProvider, { ThemeContext } from "./context/ThemeContext";

/* Pages */
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./Dashboard";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";
import AIChat from "./pages/AIChat";  // NEW 🔥

/* -------- Protected Route -------- */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

/* -------- App Wrapper -------- */
export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

/* -------- APP ROUTING -------- */
function MainApp() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">

        <BrowserRouter>
          <Routes>

            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PRIVATE ROUTES */}

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />

            <Route
              path="/insights"
              element={
                <ProtectedRoute>
                  <AIInsights />
                </ProtectedRoute>
              }
            />

            <Route
              path="/advisor"
              element={
                <ProtectedRoute>
                  <AIChat />
                </ProtectedRoute>
              }
            />

            {/* FALLBACK */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}
