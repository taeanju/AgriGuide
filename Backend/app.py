from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
from utils.fertilizer_recommendation import recommend_fertilizer


app = Flask(__name__)
CORS(app)  # Allow frontend to call backend

# Load trained models and encoders
manual_model = joblib.load("models/manual_crop_model.pkl")
manual_encoder = joblib.load("models/manual_label_encoder.pkl")

gps_model = joblib.load("models/gps_crop_model.pkl")
gps_encoder = joblib.load("models/gps_label_encoder.pkl")

@app.route("/")
def home():
    return "🌱 AgriGuide Backend is Running!"

# 🔍 Manual Crop Prediction (NPK + pH)
@app.route("/predict-crop", methods=["POST"])
def predict_crop():
    try:
        data = request.get_json()
        n = float(data["n"])
        p = float(data["p"])
        k = float(data["k"])
        ph = float(data["ph"])

        features = np.array([[n, p, k, ph]])
        prediction = manual_model.predict(features)
        crop = manual_encoder.inverse_transform(prediction)[0]

        return jsonify({"crop": crop})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# 📍 GPS-Based Crop Prediction (Latitude + Longitude)
@app.route("/predict", methods=["GET"])
def predict_crop_gps():
    try:
        lat = float(request.args.get("lat"))
        lon = float(request.args.get("lon"))

        features = np.array([[lat, lon]])
        prediction = gps_model.predict(features)
        crop = gps_encoder.inverse_transform(prediction)[0]

        return jsonify({
            "crop": crop
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 400
@app.route("/recommend-fertilizer", methods=["POST"])
def recommend_fertilizer_api():
    data = request.get_json()
    crop = data.get("crop")
    N = data.get("N")
    P = data.get("P")
    K = data.get("K")
    pH = data.get("pH")

    if None in [crop, N, P, K, pH]:
        return jsonify({"error": "Missing values"}), 400

    result = recommend_fertilizer(crop, N, P, K, pH)
    return jsonify(result)


# Run the backend server
if __name__ == "__main__":
    app.run(debug=True)
