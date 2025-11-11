// Load and apply language from lang JSON
async function loadLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const translations = await res.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) el.textContent = translations[key];
  });

  localStorage.setItem("language", lang);
  document.getElementById("language").value = lang;
}

// Set language manually from dropdown
function setLanguage(lang) {
  loadLanguage(lang);
}

// Voice playback for any key
function speakText(key) {
  const lang = localStorage.getItem("language") || "en";
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      const text = data[key] || key;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === "hi" ? "hi-IN" : lang === "te" ? "te-IN" : "en-US";
      speechSynthesis.speak(utterance);
    });
}

// Manual location input
function enableManual() {
  document.getElementById("manualLocation").style.display = "block";
  document.getElementById("locationInfo").textContent = "Manual location selected.";
}

// GPS location + default test values
function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;
      document.getElementById("locationInfo").textContent =
        `📍 Location detected: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

      const res = await fetch("http://127.0.0.1:5000/predict_crop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ N: 90, P: 40, K: 40, pH: 6.5 })
      });
      const data = await res.json();
      document.getElementById("autoCropResult").textContent =
        `📍 Auto-predicted crop for your location: 🌱 ${data.crop || "Not found"}`;
      document.getElementById("autoPrediction").style.display = "block";

      if (data.crop) {
        document.getElementById("crop").value = data.crop;
        showCropDetails(data.crop);
      }
    }, () => {
      document.getElementById("locationInfo").textContent = "❌ Location access denied.";
    });
  } else {
    document.getElementById("locationInfo").textContent = "❌ Geolocation not supported.";
  }
}

// Crop prediction form submit
document.getElementById("cropForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://127.0.0.1:5000/predict_crop", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      N: +document.getElementById("n").value,
      P: +document.getElementById("p").value,
      K: +document.getElementById("k").value,
      pH: +document.getElementById("ph").value
    })
  });
  const data = await res.json();
  document.getElementById("cropResult").textContent =
    `Recommended Crop: 🌱 ${data.crop || "Not found"}`;

  if (data.crop) {
    document.getElementById("crop").value = data.crop;
    showCropDetails(data.crop);
  }
});

// Fertilizer prediction form submit
document.getElementById("fertilizerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch("http://127.0.0.1:5000/predict_fertilizer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      crop: document.getElementById("crop").value,
      N: +document.getElementById("fn").value,
      P: +document.getElementById("fp").value,
      K: +document.getElementById("fk").value,
      pH: +document.getElementById("fph").value
    })
  });
  const data = await res.json();
  document.getElementById("fertilizerResult").textContent =
    `Recommended Fertilizer: 🧪 ${data.fertilizer || "Not found"}`;

  if (data.fertilizer) {
    showFertilizerDetails(data.fertilizer);
  }
});

// Load stored language on page load
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "en";
  loadLanguage(lang);
});

// Register PWA service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("✅ Service Worker registered"))
    .catch(e => console.error("SW Error:", e));
}
