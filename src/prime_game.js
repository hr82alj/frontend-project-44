// @ts-check

import { getRandomInt, runGame } from './index.js';

const isNumberPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @returns {{question: string, correctAnswer: string}}
 */
const runPrimeGameRound = () => {
  const maxNumber = 100;
  const number = getRandomInt(1, maxNumber);
  const question = String(number);
  const correctAnswer = isNumberPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runPrimeGame = () => {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', runPrimeGameRound);
};

export default runPrimeGame;
