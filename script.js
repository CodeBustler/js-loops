// For Loop

// 1. Counting: Write a for loop that counts from 1 to 10 and prints each number.

for (let i = 0; i < 10; i++) {
  // console.log(i + 1);
}

// -----------------------

// 2. Sum of numbers: Write a for loop that calculates the sum of numbers from 1 to 10 and prints the result.

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

// console.log(sum);

// -----------------------

// 3. Multiplication table: Write a for loop that generates a multiplication table for a given number. For example, if the number is 5, the loop should print: 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, and so on.

// let tableNum = Number.parseInt(prompt('Enter the table number!'));
let tableNum = 10;

// console.log(typeof tableNum);

for (let i = 1; i <= 10; i++) {
  // console.log(`${tableNum} X ${i} = ${tableNum * i} `);
}

//4. Array iteration: Create an array of your favorite fruits. Write a for loop that iterates through the array and prints each fruit.

let fruits = ['banana', 'apple', 'orange', 'watermelom', 'grapes'];

for (let i = 0; i < fruits.length; i++) {
  // console.log('Fruit : ' + fruits[i]);
}

//5. Reverse array: Create an array of numbers. Write a for loop that iterates through the array in reverse order and prints each number.

const numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length - 1; i >= 0; i--) {
  // console.log(numbers[i]);
}

// ---------
// For In Loop

let obj = {
  name: 'CodeBustler',
  place: 'India',
  year: 2023,
};

for (let key in obj) {
  console.log(`${key}  : ${obj[key]}`);
}

//01. Object properties: Create an object with properties representing different aspects of a car (e.g., make, model, year, color). Use a "for-in" loop to iterate over the properties and print both the property name and its value.

let car = {
  make: 'Lamborghini',
  model: 'Urus',
  year: 2023,
  color: 'yellow',
};

for (let details in car) {
  console.log(`${details} : ${car[details]}`);
}

//---------------

// 2. Object key-value pairs: Create an object with key-value pairs representing different fruits and their quantities (e.g., apple: 5, banana: 3, orange: 2). Use a "for-in" loop to iterate over the object and print the fruit name and its corresponding quantity.

let fruitsQuantity = {
  banana: 12,
  apple: 6,
  orange: 10,
};

for (let fruites in fruitsQuantity) {
  console.log(`${fruites} & quantity is ${fruitsQuantity[fruites]}`);
}

//Object methods: Create an object with properties representing different mathematical operations (e.g., add, subtract, multiply). Each property should be a function that performs the respective operation. Use a "for-in" loop to iterate over the properties and invoke each method to perform the operation.

let operation = {
  add: function (a, b) {
    return a + b;
  },

  sub: function (a, b) {
    return a - b;
  },

  mul: function (a, b) {
    return a * b;
  },

  div: function (a, b) {
    return a / b;
  },
};

for (let func in operation) {
  // console.log(`${func} is ${operation[func](5, 6)}`;
}

