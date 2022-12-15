class BaseballGame {
  #solutionArr;
  #inputArr;

  constructor(solutionArr, inputArr) {
    this.#solutionArr = solutionArr;
    this.#inputArr = inputArr;
  }

  compareNums() {
    let strike = 0;
    let ball = 0;

    for (i = 0; i < 3; i++) {
      if (this.#solutionArr.includes(this.#inputArr[i])) {
        if (this.#solutionArr[i] === this.#inputArr[i]) return (strike += 1);
        return (ball += 1);
      }
    }
    console.log(strike);
    console.log(ball);
  }
}

module.exports = BaseballGame;
