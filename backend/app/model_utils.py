import pickle
import numpy as np
import pandas as pd
from typing import List, Dict

MODEL_PATH = "data/model.pkl"
SCALER_PATH = "data/scaler.pkl"

def load_model():
    with open(MODEL_PATH, 'rb') as f:
        obj = pickle.load(f)
    model = obj['model']
    features = obj['features']
    label_classes = obj.get('label_classes', None)
    with open(SCALER_PATH, 'rb') as f:
        scaler = pickle.load(f)
    return model, scaler, features, label_classes

model, scaler, FEATURE_NAMES, LABEL_CLASSES = load_model()

def preprocess_input(payload: Dict):
    # Build vector in FEATURE_NAMES order
    row = []
    for feat in FEATURE_NAMES:
        val = payload.get(feat, 0)
        row.append(val)
    X = np.array(row).reshape(1, -1)
    X_scaled = scaler.transform(X)
    return X_scaled

def predict(payload: Dict):
    X = preprocess_input(payload)
    pred_idx = int(model.predict(X)[0])
    proba = model.predict_proba(X).tolist()[0] if hasattr(model, 'predict_proba') else None
    label = LABEL_CLASSES[pred_idx] if LABEL_CLASSES is not None else str(pred_idx)
    return label, proba