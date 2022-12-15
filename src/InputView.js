const { Console } = require("@woowacourse/mission-utils");
const { validateReadThreeNums } = require("./Validator");

const InputView = {
  readThreeNums() {
    Console.readLine("숫자를 입력해주세요 : ", (threeNums) => {
      if (!validateReadThreeNums(threeNums)) throw new Error("[Error] 입력값 형식에 맞지 않습니다.");
      return threeNums.split("").map(Number);
    });
  },
};

module.exports = InputView;
