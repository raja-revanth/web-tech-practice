let nums = [2,4,6,3,7,3,7,32,76,43,2,4];

console.log("to get the total of array using the reducer");

// reduce() adds all the elements
let total = nums.reduce((acc, element) => acc + element);
console.log(total);

console.log("dont use this way of sorting");

// Default sort() sorts as strings (lexicographically)
console.log(nums.sort());

console.log("ascending order");

// Sort numerically in ascending order
nums.sort((a, b) => a - b);
console.log(nums);

console.log("decending order");

// Sort numerically in descending order
nums.sort((a, b) => b - a);
console.log(nums);