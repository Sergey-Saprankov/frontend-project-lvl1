import {
  gameConditions,
  question,
  answerUser,
  displayAnswer,
} from '../src/index.js';
import randomInteger from '../src/randomInteger.js';

gameConditions('Answer "yes" if the number is even, otherwise answer "no".');

const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  let count = 0;
  let answer = '';
  let correctAnwer = '';
  const round = 3;

  for (let i = 0; i < round; i += 1) {
    const number = randomInteger(1, 100);

    question(number);

    answer = answerUser();

    correctAnwer = checkEven(number);

    if (correctAnwer === answer.toLowerCase()) {
      console.log('Correct!');
      count += 1;
    } else {
      break;
    }
  }
  return displayAnswer(count, answer, correctAnwer);
};

export default evenGame;
