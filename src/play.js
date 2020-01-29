import Hitter from "./hitter";
import Ball from "./ball";
import InputHandler from "./inputHandler";
import Brick from "./brick";

export default class Play {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
  }

  start() {
    this.hitter = new Hitter(this);
    this.ball = new Ball(this);
    this.brickSize = 50;
    //initial brick map
    let brickMap = [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ];
    //add brick positions
    this.bricks = [];
    brickMap.forEach((object, i) => {
      if (object === 1) {
        let ypos =
          (Math.floor((i * this.brickSize) / this.screenWidth) *
            this.brickSize) /
          2;
        let xpos = Math.floor((i * this.brickSize) % this.screenWidth);
        while (xpos + this.brickSize > this.screenWidth) {
          xpos = Math.floor(xpos / this.screenWidth);
        }
        this.bricks.push(new Brick(xpos, ypos, this.brickSize, this.ball));
      }
    });

    this.Objects = [this.hitter, this.ball, ...this.bricks];
    new InputHandler(this.hitter);
  }

  draw(ctx) {
    this.Objects.forEach(object => object.draw(ctx));
  }

  update() {
    this.Objects.forEach(object => object.update());
  }
}
