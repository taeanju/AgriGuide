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
  const crop = data.crop || "Unknown";
  const info = cropInfo[crop] || cropInfo["Unknown"];

  document.getElementById("predictedCrop").textContent = crop;
  document.getElementById("marketPrice").textContent = info.price;
  document.getElementById("cropDescription").innerHTML = info.desc;
  document.getElementById("cropVideo").src = info.video;

  document.getElementById("cropInfo").style.display = "block";
});
