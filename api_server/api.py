from fastapi import FastAPI
import requests
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://192.168.0.82:5173",
    "https://localhost:5173",
    "https://192.168.0.82:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/member/list/")
async def root():
    url = "https://www.akb48.co.jp/public/api/member/list/"
    headers = {
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    response = requests.post(url,headers=headers)
    return response.json()

if __name__ == "__main__":
    # uvicorn.run("api:app", port=8000, reload=True, host='0.0.0.0', ssl_certfile='./src/assets/localhost.pem', ssl_keyfile='./src/assets/localhost-key.pem')
    uvicorn.run("api:app", port=8000, reload=True, host='0.0.0.0')