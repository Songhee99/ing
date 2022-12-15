const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStartMent() {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  printResultMent(resultValueArr) {
    let ball = resultValueArr[0];
    let strike = resultValueArr[1];

    if (strike === 0 && ball === 0) return Console.print("낫싱");
    if (strike === 0) return Console.print(`${ball}볼`);
    if (ball === 0) return Console.print(`${strike}스트라이크`);
    return Console.print(`${ball}볼 ${strike}스트라이크`);
  },

  printFinishMent() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  },
};

module.exports = OutputView;
