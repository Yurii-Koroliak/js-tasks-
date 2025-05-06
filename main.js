//1) Ask for the user's name and print “Hello, *name*”;

// let username = prompt('what is ur name?');
// console.log('hello ' + username)




//2)Ask the user for his/her year of birth, calculate his/her age and print the result. Use the current year as a constant in the code;

// const year = 2025;
// let userBirthYear = prompt(`what is ur year of birth?`);
// let userAge = year - userBirthYear;
// console.log(userAge);



//3)Ask the user the length of a side of a square and print the perimeter of the square

// let sideLength = prompt('what is the length of a side of a square?');
// let squarePerimeter = sideLength * 4;
// console.log(squarePerimeter);









//1.Ask the user for the radius of a circle and print the area of such a circle.
// let circleRadius = Number(prompt('what is radius of the circle?'));
// let circlePerimetr = Number((Math.PI*(Math.pow(circleRadius, 2))).toFixed(2));
// console.log(circlePerimetr);
// Math.PI = число пи
// toFixed(2) = округляет до 2 знаков после запятой
// Math.pow = возводит в степень


//2.Ask the user for the distance in kilometers between two cities and how many hours they want to get there. Calculate the speed at which you need to move to be on time.
let distance = prompt('what is the distance between the two cities');
let hours = prompt('how many hours do you want to get there?');
let result = distance/hours;
console.log(result + 'km/h');


//3.Implement a currency converter. The user enters dollars, the program converts them into euros. The exchange rate is kept constant.



