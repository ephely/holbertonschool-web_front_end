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

setTimeout(() => {
  console.time('Execution time of calculating prime numbers 100 times');

  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  console.timeEnd('Execution time of calculating prime numbers 100 times');
}, 0);
