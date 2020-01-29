export default class Hitter {
  constructor(play) {
    this.play = play;
    this.height = 10;
    this.width = 100;
    this.speed = 0;
    this.moveSpeed = 10;
    this.pos = {
      x: this.play.screenWidth / 2 - this.width / 2,
      y: this.play.screenHeight - this.height
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#ada";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update() {
    this.pos.x += this.speed;
    if (this.pos.x < 0) this.pos.x = 0;
    if (this.pos.x + this.width > this.play.screenWidth)
      this.pos.x = this.play.screenWidth - this.width;
  }

  moveLeft() {
    this.speed = -this.moveSpeed;
  }

  moveRight() {
    this.speed = this.moveSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
