import StreamDisplay from 'stream-display';
import jsQR from 'jsqr';

const resultValue = document.querySelector('.result') as HTMLDivElement;

const startButton = document.getElementById('start') as HTMLButtonElement;
const stopButton = document.getElementById('stop') as HTMLButtonElement;
let capture: StreamDisplay;

document.addEventListener('DOMContentLoaded', () => {
  capture = new StreamDisplay(scanVideoStream);

  startButton.addEventListener('click', () => {
    startCapture();
  });

  stopButton.addEventListener('click', () => {
    stopCapture();
  });
})

async function startCapture() {
  try {
    await capture.startCapture();

    startButton.disabled = true;
    stopButton.disabled = false;

    setResult();
  } catch (err) {
    console.error("Error: " + err);
  }
}

function stopCapture() {
  stopButton.disabled = true;
  startButton.disabled = false;

  capture.stopCapture();
}

const scanVideoStream = (imageData: ImageData) =>{
  const code = jsQR(imageData.data, imageData.width, imageData.height);

  if (code) {
    console.log("Found QR code", code);
    setResult(code.data);

    return stopCapture();
  }
}

function setResult(result?: string) {
  if (typeof result !== 'string') {
    resultValue.innerText = '';
    return;
  }

  resultValue.innerText = `Result: ${result}`;
}
