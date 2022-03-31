import {
  gameConditions,
  question,
  answerUser,
  displayAnswer,
} from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

gameConditions('What number is missing in the progression?');

const randArray = (progression) => {
  const list = [];
  const iter = randomInteger(5, 10);
  let firstNum = randomInteger(1, 50);
  for (let i = 0; i < iter; i += 1) {
    list.push(firstNum);
    firstNum += progression;
  }
  const index = randomInteger(0, iter - 1);
  const numForIndex = list[index];
  list[index] = '..';
  return [list.join(' '), String(numForIndex)];
};

const arrithmetPrograssionGame = () => {
  let count = 0;
  let answer = '';
  let correctAnwer = '';
  const round = 3;

  for (let i = 0; i < round; i += 1) {
    const progression = randomInteger(1, 10);
    const [questionProgr, numForIndex] = randArray(progression);
    question(questionProgr);
    answer = answerUser();
    correctAnwer = numForIndex;

    if (correctAnwer === answer.toLowerCase()) {
      console.log('Correct!');
      count += 1;
    } else {
      break;
    }
  }
  return displayAnswer(count, answer, correctAnwer);
};

export default arrithmetPrograssionGame;
