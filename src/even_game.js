// @ts-check
import { runGame } from './index.js';

/**
 * @returns {{question: string, correctAnswer: string}}
 */
const runEvenGameRound = () => {
  const questionNumber = Math.floor(Math.random() * 100);
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
  const question = `${questionNumber}`;
  return { question, correctAnswer };
};

const runEvenGame = () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no"', runEvenGameRound);
};

export default runEvenGame;
