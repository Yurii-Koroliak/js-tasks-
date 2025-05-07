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
// let distance = prompt('what is the distance between the two cities');
// let hours = prompt('how many hours do you want to get there?');
// let result = distance/hours;
// console.log(result + 'km/h');











// it was tasks for the first lesson















// TASKS FOR THE SECOND LESSON


// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
// Add 0.1 and 0.2 to get a mathematically correct answer.

// let a = 0.1;
// let b = 0.2;
// console.log((a+b).toFixed(1));



// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
// Add the string “1” and the digit 2 (both operands must be in variables), get a mathematically correct answer.

// let c = '1';
// let d = 2;
// console.log(Number(c)+d);



// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
// The user specifies the size of the flash drive in GB. The program should calculate how many files of size 820 MB can be placed on the flash drive.


// let sizeFlash = prompt('what is size of ur flash drive?');
// const sizeFile = 820;
// let quantityFiles = (sizeFlash%sizeFile)

// console.log(((sizeFlash/sizeFile).toFixed(0)) + ' files u can place on ur flash drive and ' + quantityFiles + 'MB left on the flash drive');







// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
// The user enters the amount of money in the wallet and the price of one chocolate bar. The program prints how many chocolates the user can buy and how much change he will have left.



let money = Number(prompt('how much money do u have?'));
let priceChocolate = Number(prompt('how much one chocolate bar?'));

let quantityMoney = (money%priceChocolate);
console.log(((money/priceChocolate).toFixed(0)) + ' chokolate bar u can buy and ' + quantityMoney + ' $ u still have ');





// Запитай у користувача тризначне число і виведи його задом наперед.
// Ask the user for a three-digit number and print it backwards.






// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// The user enters the amount of a deposit in a bank for 2 months, with an interest rate of 5% per annum. Print the amount of accrued interest.