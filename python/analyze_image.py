# analyze_image.py
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from typing import List

app = FastAPI()

@app.post("/analyze")
def analyze_image(files: List[UploadFile] = File(...)):
    # 仮実装: 画像内容を無視してダミー食材リストを返す
    # 本来は各画像ごとにAI解析して食材リストを生成
    return JSONResponse(content={"ingredients": ["たまご", "牛乳", "トマト"]})
# analyze_image.py
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from typing import List



@app.post("/analyze")
def analyze_image(files: List[UploadFile] = File(...)):
    # 仮実装: 画像内容を無視してダミー食材リストを返す
    # 本来は各画像ごとにAI解析して食材リストを生成
    return JSONResponse(content={"ingredients": ["たまご", "牛乳", "トマト"]})
