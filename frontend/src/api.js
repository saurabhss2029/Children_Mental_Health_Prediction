import axios from "axios";
const API_BASE = "http://localhost:8000";
export async function predict(data) {
  const res = await axios.post(`${API_BASE}/predict`, data);
  return res.data;
}