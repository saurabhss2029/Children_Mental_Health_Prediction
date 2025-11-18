import pickle
import numpy as np
import os

MODEL_PATH = os.path.join("data", "model.pkl")
SCALER_PATH = os.path.join("data", "scaler.pkl")

# FEATURES expected by model
FEATURE_NAMES = [
    "age",
    "gender",
    "sleep_hours",
    "screen_time",
    "physical_activity",
    "stress_level",
    "academic_score",
    "emotional_score",
    "family_interaction",
    "nutrition_score",
]

# LABELS predicted
LABEL_CLASSES = ["Low", "Moderate", "High"]

def load_model():
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)
    with open(SCALER_PATH, "rb") as f:
        scaler = pickle.load(f)
    return model, scaler

model, scaler = load_model()


def predict_child_health(data: dict):
    """
    data = {
        "age": 12,
        "gender": 1,
        "sleep_hours": 8,
        "screen_time": 2,
        "physical_activity": 1,
        "stress_level": 2,
        "academic_score": 75,
        "emotional_score": 3,
        "family_interaction": 3,
        "nutrition_score": 3
    }
    """

    values = [data[feature] for feature in FEATURE_NAMES]

    X = np.array(values).reshape(1, -1)
    X_scaled = scaler.transform(X)
    pred = model.predict(X_scaled)[0]

    return int(pred)
