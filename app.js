alert("APP JS LOADED");

const localVideo = document.getElementById("localVideo");

let localStream;

async function startCamera() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    localVideo.srcObject = localStream;

    alert("Camera Started");

  } catch (e) {
    console.error(e);
    alert("Camera Permission Error: " + e.message);
  }
}

const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", startCamera);
} else {
  alert("startBtn not found");
}
