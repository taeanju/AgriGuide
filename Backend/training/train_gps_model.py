import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib
import os

# Simulate GPS + crop data (you can replace this later with real GPS-linked crop data)
np.random.seed(42)
num_samples = 200

# Random latitudes and longitudes within India (roughly)
latitudes = np.random.uniform(8.0, 37.0, num_samples)
longitudes = np.random.uniform(68.0, 97.0, num_samples)

# Random crop labels based on your crop list
crops = [
    "Rice", "Wheat", "Maize", "Bajra", "Sugarcane", "Soybean",
    "Groundnut", "Cotton", "Barley", "Sorghum", "Mustard", "Sunflower",
    "Lentil", "Chickpea", "Tur", "Moong", "Urad", "Jute", "Tea", "Coffee"
]
crop_labels = np.random.choice(crops, num_samples)

# Create DataFrame
df = pd.DataFrame({
    'lat': latitudes,
    'lon': longitudes,
    'crop': crop_labels
})

# Save simulated data
df.to_csv("../data/gps_crop_data.csv", index=False)

# Encode crop labels
le = LabelEncoder()
y_encoded = le.fit_transform(df['crop'])

# Train model
X = df[['lat', 'lon']]
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y_encoded)

# Save model and label encoder
os.makedirs("../models", exist_ok=True)
joblib.dump(model, "../models/gps_crop_model.pkl")
joblib.dump(le, "../models/gps_label_encoder.pkl")

print("✅ GPS-based crop prediction model trained and saved.")
