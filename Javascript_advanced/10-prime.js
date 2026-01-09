function countPrimeNumbers() {
  let count = 0;

  for (let n = 2; n <= 100; n++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}
const start = performance.now();
for (let i = 1; i <= 100; i++) {
  countPrimeNumbers();
}
const end = performance.now();
console.log(
  'Execution time of calculating prime numbers 100 times was ' +
    (end - start) +
    ' milliseconds',
);
