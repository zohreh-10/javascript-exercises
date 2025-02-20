/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here

module.exports = isPrime;

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false
    }
  }
  return true
}

console.log(`2 isPrime: ${isPrime(2)}`);
console.log(`4 isPrime: ${isPrime(4)}`);
console.log(`11 isPrime: ${isPrime(11)}`);
console.log(`891413 isPrime: ${isPrime(891413)}`);
