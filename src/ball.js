export default class Ball {
  constructor(play) {
    this.img = document.getElementById("ball_img");
    this.play = play;
    this.hitter = this.play.hitter;
    this.speed = { x: 2, y: 2 };
    this.pos = { x: 200, y: 200 };
    this.prevPos = { x: 200, y: 200 };
    this.size = 15;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.pos.x, this.pos.y, this.size, this.size);
  }

  update() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    //collision with y-axis
    if (this.pos.x < 0 || this.pos.x + this.size > this.play.screenWidth)
      this.speed.x = -this.speed.x;

    //collision with x-axis
    if (this.pos.y < 0 || this.pos.y + this.size > this.play.screenHeight)
      this.speed.y = -this.speed.y;

    //collision with hitter
    let hitterLeftEdge = this.hitter.pos.x;
    let hitterRightEdge = hitterLeftEdge + this.hitter.width;

    if (
      this.speed.y > 0 &&
      this.pos.y + this.size >= this.hitter.pos.y &&
      this.pos.x >= hitterLeftEdge &&
      this.pos.x <= hitterRightEdge
    ) {
      //increase vertical speed on every collision
      this.speed.y = -(1.04 * this.speed.y);

      let distFromMidOfHitter =
        this.pos.x - this.hitter.pos.x - this.hitter.width / 2;

      //reverse horizontal direction logic
      if (distFromMidOfHitter * this.speed.x < 0) this.speed.x = -this.speed.x;
    }
  }
}
