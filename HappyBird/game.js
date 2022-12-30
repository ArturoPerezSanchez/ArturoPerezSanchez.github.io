
// Global game variables
let canvas;
let ctx;
let bird;
let pipes;
let score;
let gameOver;
let frame;
let gameOverMessageDisplayed;
let birdImg0;
let birdImg1;
let birdImg2;
let backgroundPosition;
let jumpSound;
let gameOverSound;
let scoreSound;
let backgroundSound;
let musicStarted;
let pipesTextures;
let background;
let pipeWidth;

// Game constants
const GRAVITY = 0.25;
const JUMP_FORCE = 5; 
const PIPE_SPEED = 0.01; // percentage of the screen moved per tick, around 1% is playable
const PIPE_FREQUENCY = 70;
const PIPE_GAP = 120;

//Page constants
const language = navigator.language.split('-')[0];
const footerTexts = {
  en: "Made by Arturo Pérez Sánchez",
  es: "Realizado por Arturo Pérez Sánchez"
};
const restartTexts = {
  en: "Restart",
  es: "Reiniciar"
};
const footerText = footerTexts[language] || footerTexts['en'];
const restartText = restartTexts[language] || restartTexts['en'];


function init() {
  // Set up initial game state variables
  score = 0;
  gameOver = false;
  frame = 0;	
  pipeWidth = canvas.width > 600 ? 40 : 20;
  // Create the bird object
  bird = {
    x: canvas.width*0.1, // Initial x position
    y: canvas.height/2, // Initial y position
    width: canvas.width > 600 ? 45 : 20, // Width of the bird
    height: canvas.width > 600 ? 25 : 11, // Height of the bird
    velocity: 0 // Initial vertical velocity
  };

  // Create the image elements of the bird
  birdImg0 = new Image();
  birdImg1 = new Image();
  birdImg2 = new Image();
  birdImg0.src = "assets/bird-0.png";
  birdImg1.src = "assets/bird-1.png";
  birdImg2.src = "assets/bird-2.png";

  // Create the image elements of the pipes
  let texture0 = new Image();
  let texture1 = new Image();
  let texture2 = new Image();
  texture0.src = "assets/pipe_texture_0.jpg";
  texture1.src = "assets/pipe_texture_1.jpg";
  texture2.src = "assets/pipe_texture_2.jpg";

  // Create the image element of the background
  background = new Image();
  background.src = "assets/bg.png";

  pipesTextures = [texture0, texture1, texture2]

  // Initialize the background position as 0
  backgroundPosition = 0;

  // Create the pipes array
  pipes = [];

  jumpSound = new Audio("assets/bird_flap.wav");
  gameOverSound = new Audio("assets/game_over_sound.wav");
  scoreSound = new Audio("assets/score_sound.wav");
  backgroundSound = new Audio("assets/background_sound.mp3");
  gameOverMessageDisplayed = false;
}

function update(elapsedTime) {
	if (gameOver) {
	  // Display game over message
	  if (!gameOverMessageDisplayed) {

	  	gameOverMessageDisplayed = true;
      gameOverSound.play();
      drawGameOverMessage()

	    // Create restart button
	    let restartButton = document.createElement("button");
	    restartButton.id = "restart-button";
	    restartButton.innerHTML = restartText;
      restartButton.style.top = window.innerHeight*0.12 + canvas.height/2 + 80;
	    restartButton.addEventListener("click", restartGame);
	    document.body.appendChild(restartButton);   
	 }
   return;
  }
  // Update the bird's position
  bird.y += bird.velocity;
  bird.velocity += GRAVITY;

  // Generate new pipes
  if (frame % PIPE_FREQUENCY == 0) {
    generatePipe();
  }

  // Update the pipes' positions
  for (let pipe of pipes) {
    pipe.x -= Math.min(10, Math.floor(canvas.width*PIPE_SPEED));
  }

  // Check for collisions
  checkCollisions();

  // Remove off-screen pipes
  pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);

  // Increment the score if the bird passes through a pipe
  for (let pipe of pipes) {
    if (pipe.x + pipe.width < bird.x && !pipe.counted) {
      scoreSound.play();
      score++;
      pipe.counted = true;
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function generatePipe() {
  // Calculate the height of the top and bottom pipes
  let topHeight = getRandomInt(PIPE_GAP+80, canvas.height-80) - PIPE_GAP;
  let textureNumber = getRandomInt(0,3);
  

  // Create the top and bottom pipes
  let topPipe = {
    x: canvas.width,
    y: 0,
    width: pipeWidth,
    height: topHeight,
    img: pipesTextures[textureNumber]
  };
  let bottomPipe = {
    x: canvas.width,
    y: topHeight + PIPE_GAP,
    width: pipeWidth,
    height: canvas.height - topHeight + PIPE_GAP,
    img: pipesTextures[textureNumber]
  };

  // Add the pipes to the array
  pipes.push(topPipe, bottomPipe);
}

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let rotationAngle = (bird.velocity/20)*(Math.PI/2)
  let scoreText = "Score: " + score;
  let textWidth = ctx.measureText(scoreText).width;
  let birdImg;
  //Select the bird image depending on the frame to make the animation
  if(frame%30<=10){
    birdImg = birdImg0;
  }
  else if(frame%30>15 && frame%30<=25){
    birdImg = birdImg2;
  }
  else{
    birdImg = birdImg1;
  }

  // Draw the background
  backgroundPosition -= Math.min(8, Math.floor(canvas.width*PIPE_SPEED));
  if(backgroundPosition <= -canvas.height){
    backgroundPosition += canvas.height
  }
  for (let i=0; i<=Math.ceil(canvas.width/canvas.height); i++){
    ctx.drawImage(background, backgroundPosition + i*canvas.height, 0, canvas.height, canvas.height);
  }

  // Draw the pipes
  for (let pipe of pipes) {
    for (let j=0; j<Math.floor(pipe.height/pipeWidth); j++){
      ctx.drawImage(pipe.img,  pipe.x, pipe.y + j*pipeWidth, pipeWidth, pipeWidth);
    }
    ctx.drawImage(pipe.img, pipe.x, pipe.y + pipeWidth*Math.floor(pipe.height/pipeWidth), pipeWidth, pipe.height%pipeWidth);
    flowerImg = new Image();
    flowerImg.src = "assets/pipe_flower.png";
    flowerOversize = canvas.width > 600 ? 30 : 15;
    ctx.drawImage(flowerImg, pipe.x- flowerOversize, pipe.y + pipe.height -  flowerOversize, pipeWidth+flowerOversize*2, pipeWidth);
    ctx.drawImage(flowerImg, pipe.x- flowerOversize, pipe.y - flowerOversize/2, pipeWidth+flowerOversize*2, pipeWidth);
    ctx.drawImage(flowerImg, pipe.x- flowerOversize, canvas.height -  flowerOversize, pipeWidth+flowerOversize*2, pipeWidth);
  }

  // Draw the hitbox
  //ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

  // Draw the bird
  if(canvas.width > 600){
    ctx.font = "24px sans-serif";
    ctx.translate(bird.x +25, bird.y + 5);
    ctx.rotate(rotationAngle);
    ctx.drawImage(birdImg, -32, -30, 64, 61);
    ctx.rotate(-rotationAngle);
    ctx.translate(-(bird.x +25), -(bird.y + 5));
  } else {
    ctx.font = "16px sans-serif";
    ctx.translate(bird.x +12, bird.y + 2);
    ctx.rotate(rotationAngle);
    ctx.drawImage(birdImg, -16, -15, 32, 30);
    ctx.rotate(-rotationAngle);
    ctx.translate(-(bird.x +12), -(bird.y + 2));
  }
  //Draw the score box  
  ctx.beginPath();
  ctx.roundRect(canvas.width/2 - textWidth/2 - 30, 8, textWidth + 60 , 40, 30);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.globalAlpha = .5;
  ctx.fillStyle = "orange";
  ctx.fill();

  // Draw the score
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.globalAlpha = 1;
  ctx.fillText(scoreText, canvas.width/2, 35);

  // Draw the borders
  if(canvas.width > 500){
    ctx.globalCompositeOperation='source-atop';

    // Draw the left border
    ctx.beginPath();
    let gradient = ctx.createLinearGradient(0, 0, 30, 0);
    gradient.addColorStop(0, "darkgreen");
    gradient.addColorStop(1, "transparent"); 
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0, 30, canvas.height);

    // Draw the right border
    ctx.beginPath();
    gradient = ctx.createLinearGradient(canvas.width, 0, canvas.width-30, 0);
    gradient.addColorStop(0, "darkgreen");
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(canvas.width-30,0, canvas.width, canvas.height);

    ctx.globalCompositeOperation='source-over';
  }
}

function jump() {
  // Play the jumping sound
  jumpSound.play();

  if (musicStarted == false) {
    musicStarted = true;
    backgroundSound.loop=true;
    backgroundSound.play();
  }

  // Update the bird's velocity
  bird.velocity = -JUMP_FORCE;
}

function handleInput() {
  // Listen for mouse clicks or space bar press or mobile screen touch
  document.addEventListener("touch", function() {
    jump()
  });
  document.addEventListener('mousedown', function() {
    jump()
  });
  document.addEventListener("keydown", function(event) {
    if (event.code == "Space") {
      jump()
    }
  });
}

function restartGame() {
  //Chech for resize
  canvas.width = window.innerWidth > 600 ? window.innerWidth*0.9 : window.innerWidth;
  canvas.height = Math.min(canvas.width*1.4, window.innerHeight*0.8);

  // Reset game state
  init()

  // Remove restart button
  let restartButton = document.querySelector("#restart-button");
  document.body.removeChild(restartButton);
}

function checkCollisions() {
  // Check for collision with the ground
  if (bird.y < 0 || bird.y + bird.height > canvas.height) {
    gameOver = true;
  }

  // Check for collision with the pipes
  for (let pipe of pipes) {
    if (collides(bird, pipe)) {
      gameOver = true;
    }
  }
}

// Helper function to check for collision between two objects
function collides(a, b) {
  return (
    a.x < b.x + pipeWidth &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function drawGameOverMessage(){
  // Save the score in the cache when the game is over
  let bestScore = localStorage.getItem("bestScore");
  // If the current score is higher than the best score, update the best score
  if (score > bestScore || bestScore == null) {
    bestScore = score
    localStorage.setItem("bestScore", score);
  }
  // Draw the gameOver box
  ctx.beginPath();
  ctx.font = "32px sans-serif";
  ctx.strokeStyle = "black";
  let boxWidth = ctx.measureText("Best Score: " + bestScore).width;
  ctx.roundRect(canvas.width/2 - boxWidth/2 - 30, canvas.height/2 - 80, boxWidth + 60 , 210, 30);
  ctx.stroke();
  ctx.globalAlpha = .7; 
  ctx.fillStyle = "orange";
  ctx.fill();

  // Write the gameOver message
  ctx.fillStyle = "black";
  ctx.globalAlpha = 1;
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 35);
  ctx.font = "24px sans-serif";
  ctx.fillText("Score: " + score, canvas.width / 2, canvas.height / 2 + 10);
  ctx.fillText("Best Score: " + bestScore, canvas.width / 2, canvas.height / 2 + 45);
}

function main() {
  // Set up the canvas and context
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  
  // Set canvas width and height
  canvas.width = window.innerWidth > 600 ? window.innerWidth*0.9 : window.innerWidth;
  canvas.height = Math.min(canvas.width*1.4, window.innerHeight*0.8);

  // Set the footer text depending on the browser language
  document.querySelector("footer").textContent = footerText;
  // Handle user input
  handleInput();
  // Initialize the game
  init();

  musicStarted= false
  // Set up the game loop
  let lastTime = 0;
  function gameLoop(time) {
    // Calculate elapsed time
    let elapsedTime = time - lastTime;
    lastTime = time;

    // Update and draw the game
    update(elapsedTime);
    frame++;
    if (!gameOver) {
    	draw();
  	}

    // Request the next frame
    requestAnimationFrame(gameLoop);
  }

  // Start the game loop
  requestAnimationFrame(gameLoop);
}

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth > 600 ? window.innerWidth*0.9 : window.innerWidth;
  canvas.height = Math.min(canvas.width*1.4, window.innerHeight*0.8);
  draw();
  if(gameOver){
    drawGameOverMessage()
  }
});

// Start the game when the page is loaded
window.addEventListener("load", main);
