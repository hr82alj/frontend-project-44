// @ts-check
import readlineSync from 'readline-sync';

/**
 * Do hello and read user name
 * @returns {string}
 */
const doHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default doHello;
