from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.auth import router as auth_router  # <-- auth import
from app.model_utils import predict_child_health  # if your prediction function exists
from app.schemas import ChildData  # request body model

app = FastAPI()

# CORS (important for React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ⬇️ ADD THIS LINE
app.include_router(auth_router)

# Your old prediction route
@app.post("/predict")
def predict(data: ChildData):
    prediction = predict_child_health(data)
    return {"prediction": prediction}
