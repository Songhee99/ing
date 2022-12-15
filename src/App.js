const OutputView = require("./OutputView");
const BaseballRandomNumGenerate = require("./BaseballRandomNumGenerate");
const InputView = require("./InputView");

class App {
  play() {
    this.runBaseballGame();
  }

  runBaseballGame() {
    OutputView.printStartMent();
    BaseballRandomNumGenerate.generate();
    InputView.readThreeNums();
  }
}

const app = new App();
app.play();

module.exports = App;
