from pydantic import BaseModel
from typing import Optional

class PredictionRequest(BaseModel):
    age: Optional[float] = 10
    gender: Optional[int] = 0
    sleep_hours: Optional[float] = 8.0
    screen_time: Optional[float] = 2.0
    physical_activity: Optional[float] = 1.0
    stress_level: Optional[int] = 2
    academic_score: Optional[int] = 75
    emotional_score: Optional[int] = 3
    family_interaction: Optional[int] = 3
    nutrition_score: Optional[int] = 3