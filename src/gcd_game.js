// @ts-check

import { getRandomInt, runGame } from './index.js';

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const gcd = (a, b) => (b ? gcd(b, a % b) : a);

/**
 * @returns {{question: string, correctAnswer: string}}
 */
const runGcdGameRound = () => {
  const maxNumber = 10;
  const gameGcd = getRandomInt(1, maxNumber);
  const [num1, num2] = [gameGcd * getRandomInt(1, maxNumber), gameGcd * getRandomInt(1, maxNumber)];
  const answerGcd = gcd(num1, num2);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(answerGcd);
  return { question, correctAnswer };
};

const runGcdGame = () => {
  runGame('Find the greatest common divisor of given numbers.', runGcdGameRound);
};

export default runGcdGame;
