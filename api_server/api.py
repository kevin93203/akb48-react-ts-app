from fastapi import FastAPI
import requests
from bs4 import BeautifulSoup
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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

@app.get("/api/member/list")
async def getMemberList():
    url = "https://www.akb48.co.jp/public/api/member/list/"
    headers = {
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    response = requests.post(url,headers=headers,verify=False)
    return response.json()

@app.get("/api/members/detail")
async def getMemberDetail(
    mid:int
):
    url = f"https://www.akb48.co.jp/about/members/detail?mid={mid}"
    headers = {
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    response = requests.get(url, headers=headers, verify=False)
    memberDetail = {}

    soup = BeautifulSoup(response.text, 'lxml')
    memberDetail['teamIcon'] = 'https://www.akb48.co.jp' + soup.select_one('.teamIcon').find("img")['src']
    memberDetail['teamMedal'] = 'https://www.akb48.co.jp' + soup.select_one('.teamMedal').find("img")['src']
    memberDetail['memberImg'] = soup.select_one('.memberImg').find("img")['src']
    memberDetail['jpname'] = soup.select_one('.jpname').text
    memberDetail['name'] = soup.select_one('.name').text
    memberDetail['enName'] = soup.select_one('.enName').text

    detailProfTxt = soup.select_one('.detailProfTxt').find_all('dd')
    deatailProfs = ["agency","nickname","birthday","birthPlace"]

    for i,detailProf in enumerate(detailProfTxt):
        if deatailProfs[i] == 'birthday':
            birthday = f'{detailProf.text[0:4]}-{detailProf.text[5:7]}-{detailProf.text[8:10]}'
            memberDetail[deatailProfs[i]] = birthday 
        else:    
            memberDetail[deatailProfs[i]] = detailProf.text
    
    shareBlk = soup.select_one('.shareBlk')
    memberDetail['twitter'] = shareBlk.select_one('.svgTw').find('a')['href']
    memberDetail['instagram'] = shareBlk.select_one('.svgIg').find('a')['href']
    
    return {"result": "ok", "data": memberDetail}

class snsQuerySetting(BaseModel):
    start: int
    limit: int
    members: int

@app.post("/api/snstimelines")
async def getMemberSNSTimeLines(
    snsQuerySetting:snsQuerySetting
):
    url = "https://www.akb48.co.jp/public/api/snstimelines/"

    headers = {
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }

    data = snsQuerySetting.dict()

    response = requests.post(url,headers=headers,data=data,verify=False)
    return response.json()

if __name__ == "__main__":
    # uvicorn.run("api:app", port=8000, reload=True, host='0.0.0.0', ssl_certfile='./src/assets/localhost.pem', ssl_keyfile='./src/assets/localhost-key.pem')
    uvicorn.run("api:app", port=8000, reload=True, host='0.0.0.0')