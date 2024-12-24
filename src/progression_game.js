// @ts-check

import { getRandomInt, runGame } from './index.js';

/**
 * @param {object} param
 * @param {number} param.start
 * @param {number} param.step
 * @returns {string[]}
 */
const makeProgression = ({ start, step }) => {
  const result = [];
  for (let i = start; i < start + step * 10; i += step) {
    result.push(String(i));
  }
  return result;
};

/**
 * @returns {{question: string, correctAnswer: string}}
 */
const runProgressionGameRound = () => {
  const maxNumber = 10;
  const [start, step] = [getRandomInt(1, maxNumber), getRandomInt(1, maxNumber)];
  const progression = makeProgression({ start, step });
  const hiddenIndex = getRandomInt(0, progression.length - 1);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const correctAnswer = hiddenNumber;
  return { question, correctAnswer };
};

const runProgressionGame = () => {
  runGame('What number is missing in the progression?', runProgressionGameRound);
};

export default runProgressionGame;
