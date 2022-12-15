const OutputView = require("./OutputView");
const BaseballRandomNumGenerate = require("./BaseballRandomNumGenerate");
const InputView = require("./InputView");
const BaseballGame = require("./BaseballGame");
const { validateReadThreeNums } = require("./Validator");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    OutputView.printStartMent();
    this.runBaseballGame();
  }

  runBaseballGame() {
    const solutionArr = BaseballRandomNumGenerate.generate();
    this.inputThreeNums(solutionArr);
  }

  inputThreeNums(solutionArr) {
    const callback = (threeNums) => {
      if (!validateReadThreeNums(threeNums)) throw new Error("[Error] 입력값 형식에 맞지 않습니다.");
      const inputArr = threeNums.split("").map(Number);
      this.baseballGame = new BaseballGame(inputArr, solutionArr);
      this.getComparisonResult(inputArr, solutionArr);
    };
    InputView.readThreeNums(callback);
  }

  getComparisonResult(inputArr, solutionArr) {
    const resultValueArr = this.baseballGame.compareNums(inputArr, solutionArr);
    OutputView.printResultMent(resultValueArr);
    if (!this.baseballGame.isRightAnswer()) return this.inputThreeNums(solutionArr);
    return this.retry();
  }

  retry() {
    OutputView.printFinishMent();
    const callback = (retryKey) => {
      if (retryKey == 1) return this.runBaseballGame();
      if (retryKey == 2) return Console.close();
      throw new Error("[Error] 입력값 형식에 맞지 않습니다.");
    };
    InputView.readRetry(callback);
  }
}

const app = new App();
app.play();

module.exports = App;
