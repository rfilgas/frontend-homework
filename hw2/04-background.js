// Add your code here
let numSeconds = 3000;
let nIntervId;
const button = document.getElementById('toggle-button');

function getNumInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function flashColor() {
  const pageColor = document.getElementById('body-color');
  const temp = 'background-color:';
  const red = getNumInRange(200, 230);
  const green = getNumInRange(200, 230);
  const blue = getNumInRange(200, 230);
  const alpha = getNumInRange(240, 230);
  pageColor.style = temp.concat('rgba(', red, ',', blue, ',', green, ',', alpha, ');');
}

function start() {
  button.classList.remove('btn-primary');
  button.classList.add('btn-danger');
  if (!nIntervId) {
    nIntervId = setInterval(flashColor, numSeconds);
  }
  return 'Stop';
}

function stop() {
  button.classList.remove('btn-danger');
  button.classList.add('btn-primary');
  clearInterval(nIntervId);
  nIntervId = null;
  return 'Start';
}

function handleInput() {
  if (document.getElementById('num-input').value !== '') {
    numSeconds = document.getElementById('num-input').value * 1000;
  }
  if (nIntervId) {
    clearInterval(nIntervId);
    nIntervId = null;
    nIntervId = setInterval(flashColor, numSeconds);
  }
}

button.addEventListener('click', () => {
  button.textContent = button.textContent === 'Stop' ? stop() : start();
});

window.addEventListener('load', () => {});
window.onload = () => {
  start();
};

const input = document.querySelector('input');
input.addEventListener('input', handleInput);

document.getElementById('color-change-card').style.padding = '15px';
document.getElementById('color-change-card').overflow = 'auto';
document.getElementById('color-change-card').style.position = 'relative';
document.getElementById('color-change-card').style.top = '30px';
