<p align="center">
   <img alt="logo" height=256 src="./src/assets/icon-512-maskable.png" />
</p>
<h1 align="center">AKB48 React Typescript App</h1>

<p align="center">使用Vite + React + Typescipt + FastAPI搭建的私有AKB48官方網站克隆
</p>

<p align="center">
<img src="./screenshot/demo.jpeg" width="50%" />
</p>

## Features
- 顯示所有現役成員的資料
- 可以根據隊別或身分篩選成員

## Quick Start
只需要幾行指令就可以輕易搭建AKB48 React Typescript App

- 開啟前端程序
```bash
cd akb48-react-ts-app
npm install
npm run dev
```
- 開啟後端程序
```bash
cd akb48-react-ts-app/api_server
python -m venv venv
venv/Scripts/activate
pip install -r requirements.txt
python api.py
```
這樣就可以到瀏覽器開啟 http://localhost:5173 囉!