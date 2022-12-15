const { Random } = require("@woowacourse/mission-utils");

const BaseballRandomNumGenerate = {
  generate() {
    let randomNumArr = [];
    for (randomNumArr.length = 0; randomNumArr.length < 3; ) {
      this.checkDuplication(randomNumArr);
    }
  },

  checkDuplication(randomNumArr) {
    let randomNum = Random.pickNumberInRange(1, 9);
    if (randomNumArr.includes(randomNum)) return;
    return randomNumArr.push(randomNum);
  },
};

module.exports = BaseballRandomNumGenerate;
