from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

data = pd.read_excel("visual.xlsx")
index = 0

model = joblib.load("svm_model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    features = np.array(data["features"]).reshape(1, -1)
    features = scaler.transform(features)
    pred = model.predict(features)[0]
    return jsonify({"prediction": int(pred)})


@app.route("/simulate", methods=["GET"])
def simulate():
    global index

    row = data.iloc[index].values.tolist()

    features = np.array(row).reshape(1, -1)
    features = scaler.transform(features)

    pred = model.predict(features)[0]

    index = (index + 1) % len(data)

    return jsonify({
        "features": row,
        "prediction": int(pred)
    })


if __name__ == "__main__":
    app.run(debug=True)