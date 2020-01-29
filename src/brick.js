export default class Brick {
  constructor(xpos, ypos, size, ball) {
    this.pos = { x: xpos, y: ypos };
    this.size = size;
    this.img = document.getElementById("brick_img");
    this.isVisible = true;
    this.ball = ball;
  }

  draw(ctx) {
    if (this.isVisible)
      ctx.drawImage(this.img, this.pos.x, this.pos.y, this.size, this.size);
  }

  update() {
    //brick - ball collision logic
    if (this.isVisible === true) {
      let ballPos = this.ball.pos;
      //fix this
      if (
        (ballPos.y > this.pos.y && ballPos.y <= this.pos.y + this.size
          && ballPos.x + (this.ball.size/2) >= this.pos.x && 
          ballPos.x + (this.ball.size/2) <= this.pos.x + this.size) 
      ) {
        this.isVisible = false;
        this.ball.speed.y = -this.ball.speed.y;
      }
    }
  }
}
