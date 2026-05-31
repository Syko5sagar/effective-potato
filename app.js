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
    console.log(e);
    alert("Camera Permission Error");
  }
}

document
  .getElementById("startBtn")
  .addEventListener("click", startCamera);
