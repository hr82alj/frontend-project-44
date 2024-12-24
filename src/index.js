// @ts-check
import readlineSync from 'readline-sync';
import doHello from './hello.js';

/**
   *
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const runGame = (rules, gameCb) => {
  const userName = doHello();
  console.log(rules);
  const maxRound = 3;
  for (let roundCount = 0; roundCount < maxRound; roundCount += 1) {
    const { question, correctAnswer } = gameCb();
    const userAnswer = readlineSync.question(`Question: ${question}:\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
