import readlineSync from 'readline-sync';
import greetings from './cli.js';

export const userName = greetings();

export const gameConditions = (question) => console.log(question);

export const question = (number1) => console.log(`Question: ${number1}`);

export const answerUser = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const displayAnswer = (count, answer, correctAnwer) => {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnwer}'.\nLet's try again, ${userName}!`);
  }
};
