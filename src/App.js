const OutputView = require("../../../precourse/javascript-bridge/src/OutputView");
const BaseballRandomNumGenerate = require("./BaseballRandomNumGenerate");

class App {
  play() {
    this.runBaseballGame();
  }

  runBaseballGame() {
    OutputView.printStartMent();
    BaseballRandomNumGenerate.generate();
  }
}

const app = new App();
app.play();

module.exports = App;
