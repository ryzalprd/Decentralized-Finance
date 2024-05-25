// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Main function to demonstrate the use of the helper function
  function main() {
    const number = 17; // Change the number to check if it's prime
    if (isPrime(number)) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is not a prime number.`);
    }
  }
  
  // Call the main function
  main();
  
