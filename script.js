const ball = document.getElementById('ball');
const gameArea = document.getElementById('gameArea');

let ballPosX = gameArea.clientWidth / 2 - ball.clientWidth / 2;
let ballPosY = gameArea.clientHeight / 2 - ball.clientHeight / 2;

const speedFactor = 0.5;

function updatePosition(accelX, accelY) {
  ballPosX += accelX * speedFactor;
  ballPosY += accelY * speedFactor;

  // Constrain the ball within the game area
  if (ballPosX < 0) ballPosX = 0;
  if (ballPosX > gameArea.clientWidth - ball.clientWidth) ballPosX = gameArea.clientWidth - ball.clientWidth;
  if (ballPosY < 0) ballPosY = 0;
  if (ballPosY > gameArea.clientHeight - ball.clientHeight) ballPosY = gameArea.clientHeight - ball.clientHeight;

  ball.style.left = `${ballPosX}px`;
  ball.style.top = `${ballPosY}px`;
}

function handleMotion(event) {
  const accelX = event.accelerationIncludingGravity.x;
  const accelY = event.accelerationIncludingGravity.y;

  updatePosition(accelX, accelY);
}

window.addEventListener('devicemotion', handleMotion, true);
