import Play from "./play";

let canvas = document.getElementById("gameWindow");
let ctx = canvas.getContext("2d");

let play = new Play(800, 600);
play.start();

function gameLoop() {
  ctx.clearRect(0, 0, 800, 600);
  play.update();
  play.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
