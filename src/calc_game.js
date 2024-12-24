import { getRandomInt, runGame } from './index.js';

const doCalc = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unexpected operator: ${operator}`);
  }
};

/**
 * @returns {{question: string, correctAnswer: string}}
 */
const runCalcGameRound = () => {
  const maxNumber = 10;
  const [num1, num2] = [getRandomInt(1, maxNumber), getRandomInt(1, maxNumber)];
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(doCalc(num1, operator, num2));
  return { question, correctAnswer };
};

const runCalcGame = () => {
  runGame('What is the result of the expression?', runCalcGameRound);
};

export default runCalcGame;
