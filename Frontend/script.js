document.getElementById("locate-btn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "📡 Detecting your location...";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`http://127.0.0.1:5000/predict?lat=${lat}&lon=${lon}`)
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              output.innerHTML = `❌ Error: ${data.error}`;
            } else {
              output.innerHTML = `
                <p><strong>📍 Location:</strong> ${data.location}</p>
                <p><strong>🌾 Crop Recommendation:</strong> ${data.crop}</p>
                <p><strong>💧 Fertilizer:</strong> ${data.fertilizer}</p>
                <p><strong>💰 Price:</strong> ₹${data.price}</p>
              `;
            }
          });
      },
      () => {
        output.innerHTML = "❌ Location access denied.";
      }
    );
  } else {
    output.innerHTML = "❌ Your browser does not support GPS.";
  }
});
