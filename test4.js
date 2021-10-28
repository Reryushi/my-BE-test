/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
 const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

 function result(numbers) {
   const sum = numbers.reduce((acc, val) => acc + val);
   const { length: num } = numbers;
   const correctSum = (num * (num + 1)) / 2;
   return numbers = correctSum - sum;
 
 }
 
 console.log(result(numbers));
