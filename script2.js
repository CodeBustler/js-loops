//While Loop

// while(condition){
// code execute
// }

// 01. Countdown: Write a "while" loop that counts down from 10 to 1 and prints each number.

let countdown = 10;
let i = 0;

while (i < countdown) {
  // console.log(countdown);
  countdown--;
}

// 02.Password Validation: Write a program that prompts the user to enter a password. Use a "while" loop to keep asking for a password until a valid password is entered (e.g., minimum length, specific characters).

/*
let password = prompt("Enter password"); 
let specialChars = ["$", "@", "&", "*"];

while(password.length < 5 ){
  console.log("Use more character")
  password = prompt("Enter password");
}

console.log("Success")
*/

// 03. Number Sum: Write a program that prompts the user to enter a series of numbers. Use a "while" loop to continuously ask for numbers until the user enters a negative number. Then, calculate and print the sum of all entered numbers.

/*
let number = 0;
let sum = 0;

while(number >= 0){
  number = Number.parseInt(prompt("Enter Number"))

  if(number >=0){
    sum+=number
  }
}
console.log(sum)
*/

// 04. Guessing Game: Write a program that generates a random number between 1 and 100. Ask the user to guess the number. Use a "while" loop to keep prompting the user for guesses until they guess the correct number.

/*
let randomNumber = Math.floor(Math.random()*100+1);
console.log(randomNumber)
let guessNumber=Number.parseInt(prompt("Enter the number"));

while(randomNumber != guessNumber){
  if(randomNumber > guessNumber){
    guessNumber = Number.parseInt(prompt("Number is greater than given number"))
  }else if(randomNumber < guessNumber){
    guessNumber = Number.parseInt(prompt("Number is less than given number"))
    
  }
}
console.log("You guess right number")
*/

// 05. Fibonacci Series: Write a program that prints the Fibonacci series up to a given number. Use a "while" loop to generate and print the series.

// do-while loop

let counter = 10;

do {
  // console.log(counter);
  counter--;
} while (counter > 5);

// 01. Print numbers from 1 to 10 using a do-while loop.

let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);
