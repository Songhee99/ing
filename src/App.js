const OutputView = require("./OutputView");
const BaseballRandomNumGenerate = require("./BaseballRandomNumGenerate");
const InputView = require("./InputView");
const BaseballGame = require("./BaseballGame");

class App {
  play() {
    this.runBaseballGame();
  }

  runBaseballGame() {
    OutputView.printStartMent();
    this.inputThreeNums();
  }

  inputThreeNums() {
    InputView.readThreeNums((threeNums) => {
      const solutionArr = BaseballRandomNumGenerate.generate();
      this.baseballGame = new BaseballGame(threeNums, solutionArr);
      this.getComparisonResult();
    });
  }

  getComparisonResult() {
    this.baseballGame.compareNums();
  }
}

const app = new App();
app.play();

module.exports = App;
