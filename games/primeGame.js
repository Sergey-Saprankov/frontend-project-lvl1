import {
  gameConditions,
  question,
  answerUser,
  displayAnswer,
} from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

gameConditions('Answer "yes" if given number is prime. Otherwise answer "no".');

const checkPrime = () => {
  const list = [2, 6, 5, 10, 23, 15, 31, 8, 127, 18, 83, 89, 24, 17];
  const index = randomInteger(2, list.length - 1);
  let count = 0;
  for (let i = 1; i < list[index] + 1; i += 1) {
    if (list[index] % i === 0) {
      count += 1;
    }
    if (count > 2) break;
  }
  return [list[index], count === 2 ? 'yes' : 'no'];
};

const primeGame = () => {
  let count = 0;
  let answer = '';
  let correctAnwer = '';
  const round = 3;

  for (let i = 0; i < round; i += 1) {
    const [number, correct] = checkPrime();
    question(number);
    answer = answerUser();
    correctAnwer = correct;
    if (correctAnwer === answer.toLowerCase()) {
      console.log('Correct!');
      count += 1;
    } else {
      break;
    }
  }
  return displayAnswer(count, answer, correctAnwer);
};

export default primeGame;
