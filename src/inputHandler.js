export default class InputHandler {
  constructor(hitter) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          hitter.moveLeft();
          break;

        case 39:
          hitter.moveRight();
          break;

        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          hitter.stop();
          break;

        case 39:
          hitter.stop();
          break;

        default:
          break;
      }
    });
  }
}
