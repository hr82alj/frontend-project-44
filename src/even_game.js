// @ts-check
import readlineSync from 'readline-sync';
import doHello from './cli.js';

const runEvenGame = () => {
  const userName = doHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let roundCount = 0; roundCount < 3; roundCount += 1) {
    const questionNumber = Math.floor(Math.random() * 100);
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${questionNumber}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEvenGame;
