# 🧠 Child Mental Health Prediction System

This project is a full-stack Machine Learning web application designed to predict a child’s mental health condition based on various lifestyle, emotional, and academic inputs. The system uses a trained ML model on real-world data and provides accurate predictions through a simple and interactive user interface.

---

## 🚀 Tech Stack

### 🌐 Frontend
- React.js
- Axios for API calls
- CSS for UI styling

### 🖥 Backend
- FastAPI (Python)
- Uvicorn server
- Pydantic schema validation

### 🤖 Machine Learning
- Scikit-learn  
- Model trained on dataset (`model.pkl`)  
- Data preprocessing using StandardScaler (`scaler.pkl`)

### 🗂 Dataset
- CSV file included: `children_mental_health.csv`

---

## 🔥 Features

✔ Predict child mental health condition  
✔ User-friendly React interface  
✔ Real-time API-based prediction  
✔ ML model trained on structured dataset  
✔ Validation of input values  
✔ Separate backend & frontend folders  
✔ Clean project structure  
✔ Easy-to-deploy  
✔ Fast response using FastAPI  

---
## Project Structure
│── backend/
│ ├── app/
│ │ ├── main.py
│ │ ├── schemas.py
│ │ ├── model_utils.py
│ ├── data/
│ │ ├── children_mental_health.csv
│ │ ├── model.pkl
│ │ └── scaler.pkl
│ ├── train.py
│ └── requirements.txt
│
│── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── index.js
│ │ ├── index.css
│ │ ├── api.js
│ ├── package.json
│
│── .gitignore
└── README.md


---

## 🛠 Installation & Setup

### 📌 1. Clone the repository
git clone https://github.com/saurabhss2029/Children_Mental_Health_Prediction

cd backend
python -m venv venv
venv\Scripts\activate   # For Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

cd frontend
npm install
npm start

## 👨‍💻 Author
Saurabh Kumar Kashinwar
B.Tech (4th Year)





