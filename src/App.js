const OutputView = require("../../../precourse/javascript-bridge/src/OutputView");

class App {
  play() {
    this.runBaseballGame();
  }

  runBaseballGame() {
    OutputView.printStartMent();
  }
}

const app = new App();
app.play();

module.exports = App;
