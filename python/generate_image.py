# generate_image.py

from fastapi import FastAPI, Response
import requests

app = FastAPI()

@app.post("/generate")
def generate_image(prompt: str):
    # ダミー画像をダウンロードしてバイナリで返す
    img_url = "https://placehold.jp/400x300.png"
    img_data = requests.get(img_url).content
    return Response(content=img_data, media_type="image/png")
