/* eslint-disable no-param-reassign */
import {
  gameConditions,
  question,
  answerUser,
  displayAnswer,
} from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

gameConditions('Find the greatest common divisor of given numbers.');

const gcd = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return String(num1);
};

const gcdGame = () => {
  let count = 0;
  let answer = '';
  let correctAnwer = '';
  const round = 3;

  for (let i = 0; i < round; i += 1) {
    const num1 = randomInteger(1, 50);
    const num2 = randomInteger(1, 50);
    const temp = `${num1} ${num2}`;
    question(temp);
    answer = answerUser();
    correctAnwer = gcd(num1, num2);

    if (correctAnwer === answer.toLowerCase()) {
      console.log('Correct!');
      count += 1;
    } else {
      break;
    }
  }
  return displayAnswer(count, answer, correctAnwer);
};

export default gcdGame;
