function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendLocationToAPI);
  } else {
    alert("Geolocation not supported");
  }
}

function sendLocationToAPI(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(`http://localhost:5000/predict?lat=${lat}&lon=${lon}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("predictions").innerHTML = `
        <p>Crop: ${data.crop}</p>
        <p>Fertilizer: ${data.fertilizer}</p>
        <p>Market Price: ₹${data.price}</p>
      `;
    });
}
