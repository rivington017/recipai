# analyze_image.py
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse

app = FastAPI()

@app.post("/analyze")
def analyze_image(file: UploadFile = File(...)):
    # 仮実装: 画像内容を無視してダミー食材リストを返す
    return JSONResponse(content={"ingredients": ["たまご", "牛乳", "トマト"]})
