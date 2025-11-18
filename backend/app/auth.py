from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import jwt
import datetime

router = APIRouter()

# Secret Key for JWT
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Temporary user storage (use DB later)
users_db = {}

class User(BaseModel):
    username: str
    password: str


def create_token(data: dict):
    expire = datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    data.update({"exp": expire})
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)


@router.post("/register")
def register_user(user: User):
    if user.username in users_db:
        raise HTTPException(status_code=400, detail="User already exists")

    hashed_password = pwd_context.hash(user.password)
    users_db[user.username] = hashed_password

    return {"message": "User registered successfully"}


@router.post("/login")
def login(user: User):
    if user.username not in users_db:
        raise HTTPException(status_code=400, detail="User not found")

    if not pwd_context.verify(user.password, users_db[user.username]):
        raise HTTPException(status_code=400, detail="Incorrect password")

    token = create_token({"username": user.username})
    return {"access_token": token}
