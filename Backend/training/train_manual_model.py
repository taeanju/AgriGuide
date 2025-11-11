import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib
import os

# Load dataset
data_path = os.path.join("..", "data", "crop_data.csv")
df = pd.read_csv(data_path)

# Features and target
X = df[['N', 'P', 'K', 'pH']]
y = df['crop']

# Encode target labels
le = LabelEncoder()
y_encoded = le.fit_transform(y)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y_encoded)

# Save model and label encoder
os.makedirs("../models", exist_ok=True)
joblib.dump(model, "../models/manual_crop_model.pkl")
joblib.dump(le, "../models/manual_label_encoder.pkl")

print("✅ Manual crop prediction model trained and saved.")
