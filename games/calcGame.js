import {
  gameConditions,
  question,
  answerUser,
  displayAnswer,
} from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

gameConditions('What is the result of the expression?');

const getRandomExpression = (num1, num2) => {
  const symbolList = ['+', '-', '*'];
  const index = randomInteger(0, 2);
  const symbol = symbolList[index];
  const expression = `${num1} ${symbol} ${num2}`;
  return expression;
};

const checkQuestionCalc = (str, num1, num2) => {
  let result = '';
  if (str.includes('+')) result = String(num1 + num2);
  if (str.includes('-')) result = String(num1 - num2);
  if (str.includes('*')) result = String(num1 * num2);
  return result;
};

const calcGame = () => {
  let count = 0;
  let answer = '';
  let correctAnwer = '';
  const round = 3;

  for (let i = 0; i < round; i += 1) {
    const num1 = randomInteger(1, 10);
    const num2 = randomInteger(1, 10);
    const questionCalc = getRandomExpression(num1, num2);
    question(questionCalc);
    answer = answerUser();
    correctAnwer = checkQuestionCalc(questionCalc, num1, num2);

    if (correctAnwer === answer.toLowerCase()) {
      console.log('Correct!');
      count += 1;
    } else {
      break;
    }
  }
  return displayAnswer(count, answer, correctAnwer);
};

export default calcGame;
