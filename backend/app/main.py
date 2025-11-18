from fastapi import FastAPI
from app.model_utils import predict_child_health

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Child Mental Health Prediction Backend Running Successfully!"}

@app.post("/predict")
def predict(data: dict):
    result = predict_child_health(data)
    return {"prediction": result}
