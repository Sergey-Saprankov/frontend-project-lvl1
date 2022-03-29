import readlineSync from 'readline-sync';
import greetings from './cli.js';

const name = greetings();

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  let answer = '';
  let correctAnwer = '';

  for (let i = 0; i < 3; i += 1) {
    const number = randomInteger(1, 100);

    console.log(`Question: ${number}`);

    answer = readlineSync.question('Your answer: ');

    correctAnwer = checkEven(number);

    if (correctAnwer === answer.toLowerCase()) {
      console.log('Correct!');
      count += 1;
    } else {
      break;
    }
  }
  return count === 3 ? console.log(`Congratulations, ${name}!`) : console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnwer}'.\nLet's try again, ${name}!`);
};

export default evenGame;
