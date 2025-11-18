from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .schemas import PredictionRequest
from .model_utils import predict

app = FastAPI(title="Child Mental Health Predictor API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "ok", "message": "API running"}

@app.post("/predict")
def predict_route(req: PredictionRequest):
    payload = req.dict()
    label, proba = predict(payload)
    return {"prediction": label, "probabilities": proba}