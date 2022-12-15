const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");

class BaseballGame {
  #inputArr;
  #solutionArr;
  #resultValueArr;

  constructor(inputArr, solutionArr) {
    this.#inputArr = inputArr;
    this.#solutionArr = solutionArr;
  }

  compareNums() {
    let ball = 0;
    let strike = 0;

    for (let idx = 0; idx < 3; idx++) {
      if (this.isNothing(idx)) {
        continue;
      }
      this.isBall(idx) ? ball++ : strike++;
    }
    this.#resultValueArr = [ball, strike];
    return this.#resultValueArr;
  }

  isNothing(idx) {
    if (this.#solutionArr.includes(this.#inputArr[idx])) return false;
    return true;
  }

  isBall(idx) {
    // 답안 배열에 존재하고 일치하면
    if (this.#solutionArr[idx] === this.#inputArr[idx]) return false;
    return true;
  }

  isRightAnswer() {
    if (this.#resultValueArr[1] !== 3) return false;
    return true;
  }
}

module.exports = BaseballGame;
